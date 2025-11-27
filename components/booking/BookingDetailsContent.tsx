import { Button } from "@/components/ui/button";
import BookingTourCard from "./BookingTourCard";
import { useEffect, useMemo, useRef, useState } from "react";
import { staticExperiences } from "@/components/experiences/static-experiences";

import { useSearchParams } from "next/navigation";

const BookingDetailsContent = () => {
  const search = useSearchParams();
  const selected = (search.get('selected') || '').split(',').filter(Boolean);
  const people = Number(search.get('people') || '0');
  const experienceId = search.get('experienceId') || '';
  const priceId = search.get('priceId') || '';
  const startDateStr = search.get('startDate') || '';
  const arrivalTime = search.get('arrivalTime') || '';
  const departureTime = search.get('departureTime') || '';
  const includeTransfer = search.get('transfer') === 'true';

  // Calculate 3 days from start date
  const calculatedDays = useMemo(() => {
    if (!startDateStr) return [];
    const startDate = new Date(startDateStr);
    const days = [];
    for (let i = 0; i < 3; i++) {
      const day = new Date(startDate);
      day.setDate(day.getDate() + i);
      days.push(day);
    }
    return days;
  }, [startDateStr]);

  const { title, baseUnitAmount, currency, transferFee, planId } = useMemo(() => {
    const exp = staticExperiences.find(e => e.id === experienceId);
    const p = exp?.prices?.find(pr => String(pr.id) === String(priceId));
    const baseUnit = p ? Math.round(parseFloat(p.value) * 100) : 0; // convert to minor units
    const curr = (p?.currency || '£').replace('£','GBP');
    // Transfer fee: £150 for Gold/Silver/Party, free for Diamond
    const fee = includeTransfer && experienceId !== 'diamond-experience' ? 15000 : 0; // 150 in minor units
    return { title: exp?.title || 'Booking', baseUnitAmount: baseUnit, currency: curr, transferFee: fee, planId: exp?.id || experienceId };
  }, [experienceId, priceId, includeTransfer]);

  const totalUnitAmount = baseUnitAmount + transferFee;

  const [loadingPay, setLoadingPay] = useState(false);
  const [customerEmail, setCustomerEmail] = useState<string | null>(null);
  const [invoiceId, setInvoiceId] = useState<string | null>(null);
  const [invoiceNumber, setInvoiceNumber] = useState<string | null>(null);
  const [ticketUrl, setTicketUrl] = useState<string | null>(null);
  const [pdfGenerated, setPdfGenerated] = useState(false);

  // On success, generate PDF ticket and redirect to index
  useEffect(() => {
    const status = (search.get('status') || '').toLowerCase();
    if (status === 'success' && typeof window !== 'undefined') {
      const sid = search.get('session_id') || 'no-session';
      const doneKey = `ticket_done_${sid}`;
      if (sessionStorage.getItem(doneKey) === '1') {
        return;
      }
      sessionStorage.setItem(doneKey, '1');
      (async () => {
        try {
          // Optionally fetch Stripe session for customer info
          let stripeEmail: string | null = null;
          let stripeName: string | null = null;
          if (sid && sid !== 'no-session') {
            try {
              const r = await fetch(`/api/get-session?session_id=${encodeURIComponent(sid)}`);
              const j = await r.json();
              const s = j?.session;
              stripeEmail = s?.customer_details?.email || s?.customer?.email || null;
              stripeName = s?.customer_details?.name || null;
              setCustomerEmail(stripeEmail);
              const inv = s?.invoice;
              const paymentIntent = s?.payment_intent;
              const invId = typeof inv === 'string' ? inv : inv?.id;
              const invNumber = typeof inv === 'object' ? (inv?.number ?? null) : null;
              setInvoiceId(invId || null);
              setInvoiceNumber(invNumber);
            } catch {}
          }

          const { jsPDF } = await import('jspdf');
          const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: [160, 90], // 16:9 ticket format
          });
          const pageWidth = doc.internal.pageSize.getWidth();
          const pageHeight = doc.internal.pageSize.getHeight();
          try { doc.setProperties({ title: `Luxe Ticket - ${title}` }); } catch {}

          // Main background - light gray/white
          doc.setFillColor(255, 255, 255);
          doc.rect(0, 0, pageWidth, pageHeight, 'F');

          // Top header bar - dark (#2C2F2F or similar dark)
          doc.setFillColor(44, 47, 47);
          doc.rect(0, 0, pageWidth, 25, 'F');

          // Logo in header (left side)
          try {
            const pngRes = await fetch('/assets/images/Header-2-Logo.png');
            if (pngRes.ok) {
              const blob = await pngRes.blob();
              const url = URL.createObjectURL(blob);
              await new Promise<void>((resolve, reject) => {
                const img = new Image();
                img.onload = () => {
                  try { doc.addImage(img, 'PNG', 8, 5, 45, 15); resolve(); }
                  catch (e) { reject(e as any); }
                  finally { URL.revokeObjectURL(url); }
                };
                img.onerror = () => { URL.revokeObjectURL(url); resolve(); };
                img.src = url;
              });
            }
          } catch {}

          // "TICKET" text in header (right side, gold)
          doc.setTextColor(224, 196, 105); // Luxe gold
          doc.setFontSize(18);
          doc.setFont('helvetica', 'bold');
          doc.text('TICKET', pageWidth - 10, 17, { align: 'right' });

          // Main content area - centered experience name (large, bold)
          doc.setTextColor(0, 0, 0);
          doc.setFontSize(20);
          doc.setFont('helvetica', 'bold');
          let y = 35;
          doc.text(title.toUpperCase(), pageWidth / 2, y, { align: 'center' });
          y += 8;

          // Details section - two columns
          doc.setFontSize(10);
          doc.setFont('helvetica', 'normal');
          const leftX = 12;
          const rightX = pageWidth / 2 + 8;
          let leftY = y;
          let rightY = y;

          // Left column
          doc.text(`People: ${people || '-'}`, leftX, leftY); leftY += 6;
          if (calculatedDays.length > 0) {
            doc.text(`Days: ${calculatedDays.length}`, leftX, leftY); leftY += 6;
            calculatedDays.forEach((d, idx) => {
              doc.text(`  ${d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}`, leftX + 5, leftY);
              leftY += 5;
            });
          }
          if (arrivalTime || departureTime) {
            doc.text(`Times: ${arrivalTime || '-'} / ${departureTime || '-'}`, leftX, leftY); leftY += 6;
          }

          // Right column
          if (selected.length > 0) {
            doc.text('Activities:', rightX, rightY); rightY += 6;
            const activitiesText = selected.map(s => s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ')).join(', ');
            const split = doc.splitTextToSize(activitiesText, pageWidth * 0.4) as string[];
            split.forEach((line: string) => {
              doc.text(`  ${line}`, rightX, rightY);
              rightY += 5;
            });
          }
          if (includeTransfer) {
            doc.text(`Transfer: ${experienceId === 'diamond-experience' ? 'Included' : '+ £150'}`, rightX, rightY); rightY += 6;
          }

          // Amount section - prominent at bottom
          const amountY = pageHeight - 25;
          doc.setFontSize(12);
          doc.setFont('helvetica', 'bold');
          doc.setTextColor(224, 196, 105); // Gold
          doc.text(`Amount Paid: ${currency} ${(totalUnitAmount/100).toFixed(2)}`, pageWidth / 2, amountY, { align: 'center' });

          // Invoice and reference (smaller, below amount)
          doc.setFontSize(8);
          doc.setTextColor(100, 100, 100);
          const invoiceText = invoiceNumber || invoiceId || '';
          if (invoiceText) {
            doc.text(`Invoice: ${invoiceText}`, pageWidth / 2, amountY + 5, { align: 'center' });
          }
          const bookingRef = `${experienceId}-${priceId}`;
          doc.text(`Ref: ${bookingRef}`, pageWidth / 2, amountY + 10, { align: 'center' });

          // Generate QR code (bottom right)
          try {
            const QRCode = (await import('qrcode')).default;
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');
            const ticketData = {
              experienceId,
              priceId,
              startDate: startDateStr,
              arrivalTime,
              departureTime,
              people: String(people || ''),
              selected: selected.join(','),
              transfer: includeTransfer ? 'true' : 'false',
              email: stripeEmail || '',
              ref: bookingRef,
              invoiceId: invoiceId || null,
              invoiceNumber: invoiceNumber || null,
            };
            const encodedData = btoa(JSON.stringify(ticketData));
            const generatedTicketUrl = `${baseUrl}/ticket/${encodeURIComponent(encodedData)}`;
            setTicketUrl(generatedTicketUrl);

            const qrDataUrl = await QRCode.toDataURL(generatedTicketUrl, {
              width: 150,
              margin: 1,
              color: { dark: '#000000', light: '#FFFFFF' },
            });

            const qrSize = 25;
            const qrX = pageWidth - qrSize - 8;
            const qrY = pageHeight - qrSize - 8;
            doc.addImage(qrDataUrl, 'PNG', qrX, qrY, qrSize, qrSize);
          } catch (qrError) {
            console.error('Failed to generate QR code:', qrError);
          }

          // Footer
          doc.setFontSize(8);
          doc.setTextColor(120, 120, 120);
          const footerY = pageHeight - 5;
          doc.text('Thank you for booking with Luxe Excursions Tenerife', pageWidth / 2, footerY - 2, { align: 'center' });
          doc.text('luxeexcursionstenerife@gmail.com', pageWidth / 2, footerY + 2, { align: 'center' });

          const fileName = `luxe-ticket-${Date.now()}.pdf`;
          try {
            doc.save(fileName);
          } catch (e) {
            const blob = doc.output('blob');
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            URL.revokeObjectURL(url);
            document.body.removeChild(a);
          }
          setPdfGenerated(true);
        } catch (e) {
          console.error('Failed to generate PDF', e);
        }
        // Removed auto-redirect - user can stay on page to see ticket
      })();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const payWithStripe = async () => {
    try {
      setLoadingPay(true);
      const qs = search.toString();
      const origin = typeof window !== 'undefined' ? window.location.origin : '';
      const success_url = `${origin}/booking-details?${qs}${qs ? '&' : ''}status=success`;
      const cancel_url = `${origin}/booking-details?${qs}${qs ? '&' : ''}status=cancelled`;
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currency,
          amount: totalUnitAmount,
          success_url,
          cancel_url,
          metadata: {
            title,
            description: `${title} - ${people} ${people === 1 ? 'Person' : 'People'}${selected.length > 0 ? ` - ${selected.map(s => s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ')).join(', ')}` : ''}${includeTransfer ? (experienceId === 'diamond-experience' ? ' - Airport Transfer Included' : ' - Airport Transfer +£150') : ''}`,
            plan: planId || experienceId,
            people: String(people || ''),
            peopleCount: String(people || ''),
            activities: selected.join(','),
            selected: selected.join(','),
            experienceId,
            priceId,
            startDate: startDateStr,
            arrivalTime,
            departureTime,
            transfer: includeTransfer ? 'true' : 'false',
            transferIncluded: includeTransfer ? 'true' : 'false',
          },
        }),
      });
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url as string;
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingPay(false);
    }
  };
  return (
    <div className="min-h-screen bg-luxe-black text-white">
      <div className="max-w-7xl mx-auto container-padding py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column - Experience Details */}
          <div className="w-full lg:w-2/3 space-y-6">
            {/* Experience Header Card */}
            <div className="bg-white/5 border border-white/10 rounded-luxe-xl p-6 md:p-8 backdrop-blur-md">
              <h2 className="luxe-heading-1 text-white uppercase mb-4">{title}</h2>
              <div className="flex flex-wrap gap-4 text-white/90 luxe-text-body">
                {people > 0 && (
                  <span className="flex items-center gap-2">
                    <span className="text-luxe-gold">People:</span> {people}
                  </span>
                )}
                {calculatedDays.length > 0 && (
                  <span className="flex items-center gap-2">
                    <span className="text-luxe-gold">Days:</span> {calculatedDays.length}
                  </span>
                )}
                {(arrivalTime || departureTime) && (
                  <span className="flex items-center gap-2">
                    <span className="text-luxe-gold">Times:</span> {arrivalTime || '-'} / {departureTime || '-'}
                  </span>
                )}
              </div>
            </div>

            {/* Selected Activities */}
            {selected.length > 0 && (
              <div className="bg-white/5 border border-white/10 rounded-luxe-xl p-6 md:p-8 backdrop-blur-md">
                <h3 className="luxe-heading-3 text-white uppercase mb-4">Selected Activities</h3>
                <div className="flex flex-wrap gap-3">
                  {selected.map((s) => (
                    <span
                      key={s}
                      className="bg-luxe-gold/20 text-luxe-gold border border-luxe-gold/30 rounded-luxe-md px-4 py-2 luxe-text-body-small uppercase"
                    >
                      {s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Selected Days */}
            {calculatedDays.length > 0 && (
              <div className="bg-white/5 border border-white/10 rounded-luxe-xl p-6 md:p-8 backdrop-blur-md">
                <h3 className="luxe-heading-3 text-white uppercase mb-4">Selected Days</h3>
                <ul className="space-y-2">
                  {calculatedDays.map((day, idx) => (
                    <li key={idx} className="luxe-text-body text-white/90">
                      Day {idx + 1}: {day.toDateString()}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Airport Transfer */}
            {includeTransfer && (
              <div className="bg-white/5 border border-white/10 rounded-luxe-xl p-6 md:p-8 backdrop-blur-md">
                <h3 className="luxe-heading-3 text-white uppercase mb-2">Airport Transfer</h3>
                <p className="luxe-text-body text-white/90">
                  {experienceId === 'diamond-experience' ? 'Included (Free)' : 'Selected (+ £150)'}
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Payment & Confirmation */}
          <div className="w-full lg:w-1/3 space-y-6">
            {/* Booking Summary Card */}
            <div className="bg-white/5 border border-white/10 rounded-luxe-xl p-6 md:p-8 backdrop-blur-md">
              {search.get('status') === 'success' ? (
                <>
                  <h2 className="luxe-heading-2 text-luxe-gold uppercase mb-4">Booking Confirmed</h2>
                  <p className="luxe-text-body text-white/90 mb-6">Your payment was verified successfully!</p>
                  {customerEmail && (
                    <p className="luxe-text-body-small text-white/70 mb-4">
                      Confirmation sent to <span className="text-luxe-gold">{customerEmail}</span>
                    </p>
                  )}
                  {pdfGenerated && ticketUrl && (
                    <div className="mb-6 p-4 bg-luxe-gold/10 border border-luxe-gold/30 rounded-luxe-md">
                      <p className="luxe-text-body-small text-luxe-gold mb-2 font-semibold">✓ Ticket Generated</p>
                      <a
                        href={ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="luxe-text-body-small text-luxe-gold hover:underline"
                      >
                        View Digital Ticket →
                      </a>
                    </div>
                  )}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="luxe-text-body text-white/90">Amount Paid</span>
                      <span className="luxe-heading-3 text-luxe-gold">{currency} {(totalUnitAmount/100).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                    </div>
                    {invoiceId && (
                      <div className="flex justify-between items-center">
                        <span className="luxe-text-body-small text-white/70">Invoice ID</span>
                        <span className="luxe-text-body-small text-white/90">{invoiceId}</span>
                      </div>
                    )}
                  </div>
                  <Button
                    variant="luxe"
                    onClick={() => window.location.href = '/'}
                    className="w-full"
                  >
                    Return to Home
                  </Button>
                </>
              ) : (
                <>
                  <h2 className="luxe-heading-2 text-white uppercase mb-4">Booking Summary</h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="luxe-text-body text-white/90">Experience</span>
                      <span className="luxe-text-body font-semibold text-white">{title}</span>
                    </div>
                    {people > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="luxe-text-body text-white/90">People</span>
                        <span className="luxe-text-body font-semibold text-white">{people}</span>
                      </div>
                    )}
                    {calculatedDays.length > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="luxe-text-body text-white/90">Days</span>
                        <span className="luxe-text-body font-semibold text-white">{calculatedDays.length}</span>
                      </div>
                    )}
                    {includeTransfer && (
                      <div className="flex justify-between items-center">
                        <span className="luxe-text-body text-white/90">Airport Transfer</span>
                        <span className="luxe-text-body font-semibold text-white">
                          {experienceId === 'diamond-experience' ? 'Included' : '+ £150'}
                        </span>
                      </div>
                    )}
                    <div className="border-t border-white/10 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="luxe-heading-3 text-white">Total</span>
                        <span className="luxe-heading-2 text-luxe-gold">{currency} {(totalUnitAmount/100).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={payWithStripe}
                    disabled={loadingPay || !totalUnitAmount}
                    variant="luxe"
                    className="w-full"
                  >
                    {loadingPay ? 'Processing…' : 'Pay with Stripe'}
                  </Button>
                </>
              )}
            </div>

            {/* Contact Section */}
            <div className="bg-white/5 border border-white/10 rounded-luxe-xl p-6 md:p-8 backdrop-blur-md">
              <h3 className="luxe-heading-3 text-white uppercase mb-3">Need Help?</h3>
              <p className="luxe-text-body text-white/90 mb-4">
                Have a question or special request? Contact us directly.
              </p>
              <a
                href="mailto:luxeexcursionstenerife@gmail.com"
                className="luxe-text-body text-luxe-gold hover:underline"
              >
                luxeexcursionstenerife@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsContent;
