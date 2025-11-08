# SriTek Business Website

A modern, production-ready business website for SriTek — a product engineering agency specializing in MVPs, dashboards, and automations.

## 🚀 Features

- **Modern Design**: Clean, minimal aesthetic with bento-box grid layouts
- **Smooth Animations**: Framer Motion for page transitions and micro-interactions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Lighthouse scores target: Performance ≥ 85, Accessibility ≥ 90
- **SEO Ready**: Meta tags, Open Graph, JSON-LD schema, sitemap
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Contact Forms**: React Hook Form with validation and API integration
- **TypeScript**: Full type safety throughout the codebase

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run development server**:

   ```bash
   npm run dev
   ```

3. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build & Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 📁 Project Structure

```
sritek-business-site/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── work/              # Portfolio pages
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── about/             # About page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── BentoGrid.tsx
│   ├── ServiceCard.tsx
│   ├── CaseCard.tsx
│   ├── ProcessSteps.tsx
│   ├── TestimonialCarousel.tsx
│   ├── ContactForm.tsx
│   └── Modal.tsx
├── public/                # Static assets
└── package.json
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Resend Email Service (Required for contact form)
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=hello@sritek.com
FROM_EMAIL=onboarding@resend.dev  # Update with your verified domain

# Optional: Other integrations
# AIRTABLE_API_KEY=your_key_here
# SLACK_WEBHOOK_URL=your_webhook_url
```

#### Setting up Resend:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. For production, verify your domain in Resend dashboard
4. Update `FROM_EMAIL` with your verified domain (e.g., `noreply@yourdomain.com`)

### Contact Form Integration

The contact form is configured to send emails via **Resend**. 

**Setup Steps:**
1. Install dependencies: `npm install`
2. Sign up at [resend.com](https://resend.com) and get your API key
3. Add `RESEND_API_KEY` to your `.env.local` file
4. Set `CONTACT_EMAIL` to the email where you want to receive submissions
5. For production, verify your domain in Resend and update `FROM_EMAIL`

**Email Features:**
- HTML email template with styled formatting
- Plain text fallback
- Reply-to set to the submitter's email
- XSS protection with HTML escaping
- All form fields included in the email

**Optional Integrations:**
- **Airtable**: Add your Airtable API key and base ID to save submissions
- **Slack**: Add a Slack webhook URL for notifications

### Calendly Integration

Update the Calendly URL in `app/contact/page.tsx`:

```tsx
<iframe
  src="https://calendly.com/YOUR_USERNAME/15min"
  // ...
/>
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```ts
colors: {
  primary: {
    // Your primary color scale
  },
}
```

### Content

- **Case Studies**: Update `app/work/page.tsx` and `app/work/[slug]/page.tsx`
- **Services**: Update `app/services/page.tsx`
- **Team**: Update `app/about/page.tsx`
- **Testimonials**: Update `components/TestimonialCarousel.tsx`

### SEO

Update metadata in:

- `app/layout.tsx` (global metadata)
- Individual page files (page-specific metadata)

## 📊 Performance

### Lighthouse Targets

- Performance: ≥ 85
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- SEO: ≥ 90

### Optimization Tips

1. Use `next/image` for all images
2. Lazy load components below the fold
3. Minimize JavaScript bundle size
4. Use CSS variables for theming
5. Enable compression and caching

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus management in modals
- Color contrast compliance
- Screen reader compatibility
- `prefers-reduced-motion` support

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking (via TypeScript)
npm run build
```

## 📝 Content Updates

### Adding a New Case Study

1. Add project data to `app/work/page.tsx`
2. Create a new entry in `app/work/[slug]/page.tsx` caseStudies array
3. Add images to `public/` or use external URLs

### Adding a New Service

1. Update the services array in `app/services/page.tsx`
2. Add corresponding card in `app/page.tsx` if needed

## 🚨 Troubleshooting

### Build Errors

- Ensure all TypeScript types are correct
- Check that all imports are valid
- Verify environment variables are set

### Image Issues

- Ensure image URLs are valid
- Check `next.config.js` for allowed image domains
- Use `next/image` component for optimization

### Animation Issues

- Check browser console for errors
- Verify Framer Motion is installed
- Ensure `prefers-reduced-motion` is respected

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For questions or issues, contact: hello@sritek.com

---

Built with ❤️ by SriTek
