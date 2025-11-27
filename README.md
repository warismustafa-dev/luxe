# Luxe Excursions Tenerife - Frontend Application

A modern Next.js frontend application for **Luxe Excursions Tenerife** - a premium travel experience booking platform with Stripe payment integration and PDF ticket generation.

## 🚀 Features

- **Experience Packages**: Diamond, Gold, Silver, Party, and Custom Experience packages
- **Booking Flow**: Complete booking system with date/time selection and airport transfers
- **Stripe Integration**: Secure payment processing with test mode support
- **PDF Tickets**: Automatic ticket generation with QR codes
- **Responsive Design**: Modern, mobile-first UI built with Tailwind CSS
- **No Backend Required**: Frontend-only application using URL parameters for data flow

## 📋 Prerequisites

- **Node.js** version 20 or higher
- **npm** (comes with Node.js)
- **Stripe Account** (for payment processing - test mode available)

## 🛠️ Installation & Setup

### 1. Clone the Repository

   ```bash
git clone <repository-url>
cd luxe-excursions
   ```

### 2. Install Dependencies

   ```bash
   npm install
   ```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

   ```bash
cp .env.example .env.local
```

### 4. Configure Stripe (Test Mode for Local Development)

1. **Create a Stripe Account** (if you don't have one):
   - Go to [https://stripe.com](https://stripe.com)
   - Sign up for a free account

2. **Get Your Test API Keys**:
   - Log in to [Stripe Dashboard](https://dashboard.stripe.com)
   - Make sure you're in **Test Mode** (toggle in the top right)
   - Go to **Developers** → **API keys**
   - Copy your **Publishable key** (starts with `pk_test_`)
   - Click **Reveal test key** to get your **Secret key** (starts with `sk_test_`)

3. **Update `.env.local`**:

```env
# Stripe Configuration (Test Mode)
STRIPE_SECRET_KEY=sk_test_your_actual_test_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_test_publishable_key_here

# Application Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Google Maps API (Optional - for contact page map)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

### 5. Start Development Server

```bash
npm run dev
```

The application will be available at:
```
http://localhost:3000
```

## 🧪 Testing the Booking Flow Locally

### Complete Booking Flow Test

1. **Navigate to Experiences**:
   - Go to `http://localhost:3000/experiences`
   - Select an experience package (Diamond, Gold, Silver, Party, or Custom)

2. **Select Experience Details**:
   - Choose number of people
   - Select optional excursions/activities
   - Pick a start date (automatically selects 3 consecutive days)
   - Enter arrival and departure times
   - Optionally add airport transfer (free for Diamond, £150 for others)

3. **Proceed to Booking**:
   - Click "Book Now"
   - Review booking details on `/booking-details`

4. **Test Stripe Payment**:
   - Click "Proceed to Payment"
   - Use Stripe test card: `4242 4242 4242 4242`
   - Use any future expiry date (e.g., `12/34`)
   - Use any 3-digit CVC (e.g., `123`)
   - Use any ZIP code (e.g., `12345`)

5. **Verify PDF Ticket**:
   - After successful payment, download the PDF ticket
   - Verify QR code is generated
   - Test QR code scanning (should link to ticket details page)

### Stripe Test Cards

For testing different scenarios, use these Stripe test cards:

| Card Number | Scenario |
|------------|----------|
| `4242 4242 4242 4242` | Successful payment |
| `4000 0000 0000 0002` | Card declined |
| `4000 0000 0000 9995` | Insufficient funds |
| `4000 0025 0000 3155` | Requires authentication |

More test cards: [Stripe Testing Documentation](https://stripe.com/docs/testing)

## 📁 Project Structure

```
luxe-excursions/
├── app/
│   ├── (main)/              # Main site pages (route group)
│   │   ├── layout.tsx       # Main layout with Navbar/Footer
│   │   ├── page.tsx        # Home page
│   │   ├── experiences/    # Experience pages
│   │   ├── booking-details/ # Payment & ticket generation
│   │   └── ...
│   ├── api/                # API routes
│   │   ├── create-checkout-session/  # Stripe checkout
│   │   └── get-session/              # Stripe session retrieval
│   └── layout.tsx          # Root layout
├── components/
│   ├── booking/            # Booking-related components
│   ├── experiences/        # Experience components
│   ├── ui/                 # Shadcn UI components
│   └── ...
├── lib/
│   ├── routes.ts           # Route definitions
│   ├── axios.ts            # HTTP client
│   └── utils.ts            # Utility functions
├── types/                  # TypeScript type definitions
└── public/                 # Static assets
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `STRIPE_SECRET_KEY` | Stripe secret key (test mode: `sk_test_...`) | ✅ Yes |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key (test mode: `pk_test_...`) | ✅ Yes |
| `NEXT_PUBLIC_BASE_URL` | Application base URL | ✅ Yes |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps API key | ❌ Optional |

## 🚢 Deployment Preparation

### Before Deploying to Production

1. **Switch to Stripe Live Mode**:
   - Get your **live** API keys from Stripe Dashboard
   - Update `.env.local` with live keys (starts with `sk_live_` and `pk_live_`)
   - **Never commit live keys to version control**

2. **Update Base URL**:
   - Change `NEXT_PUBLIC_BASE_URL` to your production domain
   - Example: `https://luxeexcursionstenerife.com`

3. **Build and Test**:
   ```bash
   npm run build
   npm run start
   ```

4. **Environment Variables on Hosting Platform**:
   - Add all environment variables to your hosting platform (Vercel, Netlify, etc.)
   - Ensure `STRIPE_SECRET_KEY` is marked as **secret/private**

## 📝 Booking Flow Architecture

```
User Journey:
1. Browse Experiences (/experiences)
2. Select Package → Experience Detail Page (/experiences/[id])
3. Configure Booking (dates, times, options, transfer)
4. Booking Planner (/experiences/planner) - Select excursions
5. Booking Details (/booking-details) - Review & Payment
6. Stripe Checkout (external)
7. Success → PDF Ticket Download
8. QR Code → Ticket Details (/ticket/[ticketId])
```

## 🐛 Troubleshooting

### Build Errors

- **Type errors**: Run `npm run build` to see TypeScript errors
- **Missing dependencies**: Run `npm install` again
- **Environment variables**: Ensure `.env.local` exists and has all required variables

### Stripe Issues

- **"Stripe secret key not configured"**: Check `STRIPE_SECRET_KEY` in `.env.local`
- **Payment not working**: Ensure you're using test mode keys (`sk_test_` and `pk_test_`)
- **CORS errors**: Verify `NEXT_PUBLIC_BASE_URL` matches your current URL

### Development Server Issues

- **Port already in use**: Change port with `PORT=3001 npm run dev`
- **Module not found**: Delete `node_modules` and `.next`, then run `npm install`

## 📞 Support

For issues or questions:
- **Email**: luxeexcursionstenerife@gmail.com
- **Phone**: +34 722 645 670

## 📄 License

This project is proprietary. All rights reserved.

---

**Built with**: Next.js 13.5.1, React 18, TypeScript, Tailwind CSS, Stripe, jsPDF, QRCode
