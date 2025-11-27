'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TicketData {
  experienceId: string;
  priceId: string;
  startDate: string;
  arrivalTime: string;
  departureTime: string;
  people: string;
  selected: string;
  transfer: string;
  email?: string;
  ref?: string;
}

const TicketPage = () => {
  const params = useParams();
  const ticketId = params.ticketId as string;
  const [ticketData, setTicketData] = useState<TicketData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Decode base64 ticket data
      const decoded = atob(decodeURIComponent(ticketId));
      const data: TicketData = JSON.parse(decoded);
      setTicketData(data);
    } catch (e) {
      setError('Invalid ticket ID');
      console.error('Failed to decode ticket:', e);
    } finally {
      setLoading(false);
    }
  }, [ticketId]);

  // Calculate 3 days from start date
  const calculatedDays = ticketData?.startDate ? (() => {
    const startDate = new Date(ticketData.startDate);
    const days = [];
    for (let i = 0; i < 3; i++) {
      const day = new Date(startDate);
      day.setDate(day.getDate() + i);
      days.push(day);
    }
    return days;
  })() : [];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent"></div>
          <p className="mt-4 text-gray-600">Loading ticket...</p>
        </div>
      </div>
    );
  }

  if (error || !ticketData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-6">
            <p className="text-red-600 text-center">{error || 'Ticket not found'}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Card>
          <CardHeader className="bg-luxe-black text-luxe-gold">
            <CardTitle className="luxe-heading-2 uppercase">Luxe Excursions Tenerife - Ticket</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Experience</h3>
                <p className="text-gray-900">{ticketData.experienceId}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">People</h3>
                <p className="text-gray-900">{ticketData.people}</p>
              </div>
              {calculatedDays.length > 0 && (
                <div className="md:col-span-2">
                  <h3 className="font-semibold text-gray-700 mb-2">Selected Days</h3>
                  <ul className="list-disc pl-5 text-gray-900">
                    {calculatedDays.map((day, idx) => (
                      <li key={idx}>Day {idx + 1}: {day.toDateString()}</li>
                    ))}
                  </ul>
                </div>
              )}
              {ticketData.arrivalTime && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Arrival Time</h3>
                  <p className="text-gray-900">{ticketData.arrivalTime}</p>
                </div>
              )}
              {ticketData.departureTime && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Departure Time</h3>
                  <p className="text-gray-900">{ticketData.departureTime}</p>
                </div>
              )}
              {ticketData.selected && (
                <div className="md:col-span-2">
                  <h3 className="font-semibold text-gray-700 mb-2">Selected Options</h3>
                  <p className="text-gray-900">{ticketData.selected.split(',').join(', ')}</p>
                </div>
              )}
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Airport Transfer</h3>
                <p className="text-gray-900">{ticketData.transfer === 'true' ? 'Included' : 'Not included'}</p>
              </div>
              {ticketData.email && (
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Email</h3>
                  <p className="text-gray-900">{ticketData.email}</p>
                </div>
              )}
              {ticketData.ref && (
                <div className="md:col-span-2">
                  <h3 className="font-semibold text-gray-700 mb-2">Reference</h3>
                  <p className="text-gray-900 font-mono text-sm">{ticketData.ref}</p>
                </div>
              )}
            </div>
            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-gray-600 text-center">
                For any questions, contact us at{' '}
                <a href="mailto:luxeexcursionstenerife@gmail.com" className="text-luxe-gold hover:underline">
                  luxeexcursionstenerife@gmail.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TicketPage;

