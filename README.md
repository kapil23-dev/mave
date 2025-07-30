# BuildFast - Website Builder

A modern, full-featured website builder with authentication, payments, and multi-language support.

## 🚀 Quick Start

1. **Clone and install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Set up environment variables:**
   \`\`\`bash
   cp .env.local.example .env.local
   \`\`\`

3. **Configure Clerk Authentication (Optional for development):**
   - Visit [Clerk Dashboard](https://dashboard.clerk.com)
   - Create a new application
   - Copy your keys to `.env.local`:
     \`\`\`env
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
     CLERK_SECRET_KEY=sk_test_your_key_here
     \`\`\`

4. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

## 🔧 Development Mode

The app works without Clerk keys in development mode:
- **Mock authentication** is used when Clerk keys are not configured
- **Demo user** functionality for testing
- **Development banner** shows when running without real auth

## 🌟 Features

- ✅ **Authentication** - Clerk integration with fallback mock auth
- ✅ **Multi-language** - German, English (US), English (UK)
- ✅ **Dark/Light Mode** - System preference detection
- ✅ **European Payments** - Stripe with SEPA, Sofort, Giropay
- ✅ **GDPR Compliance** - Cookie consent and privacy policies
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Website Builder** - Drag & drop editor
- ✅ **Multi-tenant** - Multiple websites per user

## 🔐 Authentication Setup

### Production Setup (Clerk)
1. Create account at [clerk.com](https://clerk.com)
2. Add your keys to `.env.local`
3. Configure redirect URLs in Clerk dashboard

### Development Mode
- No setup required
- Uses mock authentication
- Click "Sign In (Demo)" to test features

## 💳 Payment Integration

Supports European payment methods:
- Credit/Debit Cards (Visa, Mastercard, Amex)
- SEPA Direct Debit
- Sofort (Germany)
- Giropay (Germany)
- VAT calculation included

## 🌍 Internationalization

Supported languages:
- **Deutsch** (German)
- **English (US)**
- **English (UK)**

Language persists across sessions and includes:
- UI translations
- Currency formatting
- Date/time formatting
- Regional payment methods

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js app directory
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── auth-wrapper.tsx  # Authentication wrapper
│   ├── auth-buttons.tsx  # Auth UI components
│   └── payment-modal.tsx # Payment interface
├── hooks/                # Custom hooks
│   └── use-language.ts   # Internationalization
├── middleware.ts         # Route protection
└── .env.local.example   # Environment template
\`\`\`

## 🚀 Deployment

1. **Set up environment variables** in your hosting platform
2. **Configure Clerk** for production domain
3. **Set up Stripe** for payments
4. **Deploy** to Vercel, Netlify, or your preferred platform

## 📝 Environment Variables

Required for production:
\`\`\`env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details
