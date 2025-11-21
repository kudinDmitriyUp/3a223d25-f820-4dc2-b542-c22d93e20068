"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import SplitAbout from '@/components/sections/about/SplitAbout';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Code, Copy, Crown, DollarSign, Lock, Palette, Rocket, Smartphone, Sparkles, Target, TrendingUp, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="medium"
      background="fluid"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Arbuz"
          navItems={[
            { name: "Features", id: "features" },
            { name: "How It Works", id: "how-it-works" },
            { name: "Pricing", id: "pricing" },
            { name: "Referral", id: "referral" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          tag="AI-Powered Traffic Arbitrage"
          title="Generate PWA Apps & Ad Banners in Seconds"
          description="Arbuz harnesses AI to let you create offer-based PWA applications and high-converting ad banners instantly using credits. Scale your arbitrage business without technical complexity."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763729812143-o1e9mrzy.jpg"
          imageAlt="Arbuz AI Dashboard Interface"
          buttons={[
            {
              text: "Start Free Trial",
              href: "contact"
            },
            {
              text: "View Demo",
              onClick: () => {}
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTen
          title="Powerful AI-Driven Features"
          description="Everything you need to succeed in traffic arbitrage with intelligent automation"
          tag="Capabilities"
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: "1",
              title: "Instant PWA App Generation",
              description: "Create fully functional Progressive Web Apps powered by AI in seconds. No coding required.",
              reverse: false,
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763729812811-giosw6rf.jpg",
                imageAlt: "PWA App Generation Interface"
              },
              items: [
                { icon: Zap, text: "One-click PWA creation" },
                { icon: Code, text: "Zero-code solution" },
                { icon: Smartphone, text: "Mobile-optimized apps" }
              ]
            },
            {
              id: "2",
              title: "AI-Powered Ad Banner Creator",
              description: "Generate high-converting ad banners optimized for any traffic source with machine learning algorithms.",
              reverse: true,
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763729813438-fqha9lvu.jpg",
                imageAlt: "Ad Banner Creation Tool"
              },
              items: [
                { icon: Palette, text: "AI-optimized designs" },
                { icon: Target, text: "Conversion-focused layouts" },
                { icon: Copy, text: "Customizable templates" }
              ]
            },
            {
              id: "3",
              title: "Credit-Based System",
              description: "Pay only for what you use. Credits scale with your business growth, no hidden fees.",
              reverse: false,
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763729814225-ph1ugm6n.jpg",
                imageAlt: "Credit System Dashboard"
              },
              items: [
                { icon: DollarSign, text: "Flexible credit packages" },
                { icon: TrendingUp, text: "Scale as you grow" },
                { icon: Lock, text: "Transparent pricing" }
              ]
            }
          ]}
        />
      </div>

      <div id="how-it-works" data-section="how-it-works">
        <SplitAbout
          title="How Arbuz Works"
          description="A simple, three-step process to launch your arbitrage campaigns"
          tag="Quick Setup"
          textboxLayout="default"
          imagePosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763729814871-5fggmr2d.jpg"
          imageAlt="How Arbuz Works Process"
          bulletPoints={[
            {
              icon: Sparkles,
              title: "Describe Your Offer",
              description: "Tell Arbuz about your offer, target audience, and desired outcomes"
            },
            {
              icon: Zap,
              title: "AI Generates Assets",
              description: "Our AI instantly creates PWA apps, ad banners, and landing pages optimized for conversion"
            },
            {
              icon: Rocket,
              title: "Launch & Scale",
              description: "Deploy immediately and track performance with real-time analytics"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Simple, Transparent Pricing"
          description="Choose the plan that scales with your arbitrage business"
          tag="Pricing Tiers"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              badge: "Getting Started",
              badgeIcon: Rocket,
              price: "$49/mo",
              subtitle: "Perfect for testing campaigns",
              features: [
                "500 monthly credits",
                "Unlimited PWA apps",
                "Basic analytics",
                "Email support",
                "Community access"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$199/mo",
              subtitle: "For serious arbitrageurs",
              features: [
                "2,500 monthly credits",
                "Unlimited PWA apps",
                "Advanced analytics",
                "Priority support",
                "API access",
                "Custom domains"
              ]
            },
            {
              id: "enterprise",
              badge: "Best Value",
              badgeIcon: Crown,
              price: "$499/mo",
              subtitle: "For high-volume operations",
              features: [
                "10,000 monthly credits",
                "Unlimited PWA apps",
                "Real-time analytics",
                "24/7 dedicated support",
                "Full API access",
                "White-label solution"
              ]
            }
          ]}
        />
      </div>

      <div id="referral" data-section="referral">
        <MetricCardTwo
          title="Earn While You Grow"
          description="Our referral rewards program lets you monetize your network"
          tag="Referral Program"
          textboxLayout="default"
          animationType="scale-rotate"
          gridVariant="three-columns-all-equal-width"
          metrics={[
            {
              id: "1",
              value: "30%",
              description: "Recurring Commission"
            },
            {
              id: "2",
              value: "$100",
              description: "Sign-Up Bonus per Referral"
            },
            {
              id: "3",
              value: "Unlimited",
              description: "Earning Potential"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Users Say"
          description="Join thousands of successful arbitrageurs using Arbuz"
          tag="Social Proof"
          textboxLayout="default"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Marcus Thompson",
              role: "Traffic Arbitrage Specialist",
              testimonial: "Arbuz has cut my asset creation time from hours to minutes. The AI-generated PWA apps convert 40% better than my manual ones. Best investment in my business.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763729815443-gjh78ooy.jpg",
              imageAlt: "Marcus Thompson"
            },
            {
              id: "2",
              name: "Sophia Chen",
              role: "Offer Manager",
              testimonial: "The credit system is brilliant. I only pay for what I use, and scaling up is seamless. Customer support responds in minutes, not hours.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763729816108-8iagufh6.jpg",
              imageAlt: "Sophia Chen"
            },
            {
              id: "3",
              name: "David Rodriguez",
              role: "Arbitrage Entrepreneur",
              testimonial: "Went from 2 campaigns to 15 campaigns monthly using Arbuz. The ROI is insane. Finally a tool built by arbitrageurs, for arbitrageurs.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763729816680-jdh7e0as.jpg",
              imageAlt: "David Rodriguez"
            },
            {
              id: "4",
              name: "Elena Vasquez",
              role: "Performance Marketer",
              testimonial: "The AI understands offer dynamics better than generic design tools. My CTR increased by 35% immediately after switching to Arbuz-generated banners.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763729817323-byty6mup.jpg",
              imageAlt: "Elena Vasquez"
            },
            {
              id: "5",
              name: "James Wilson",
              role: "Media Buyer",
              testimonial: "Honest review: this tool removes friction from the entire arbitrage workflow. It's not perfect, but it's 10x better than the alternative of building everything from scratch.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763729818016-cslpo010.jpg",
              imageAlt: "James Wilson"
            },
            {
              id: "6",
              name: "Rachel Kim",
              role: "Campaign Director",
              testimonial: "The referral program alone has generated passive income. Combine that with the core platform, and you've got a complete business tool.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1763729818728-vvlmex7o.jpg",
              imageAlt: "Rachel Kim"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about Arbuz"
          tag="Help Center"
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What exactly are credits and how many do I need?",
              content: "Credits are the currency of Arbuz. Each action (generating a PWA app, creating ad banners, etc.) costs a specific number of credits. Starter plan includes 500 credits/month, Professional 2,500, and Enterprise 10,000. Most users generate 3-5 campaigns per month with adequate credits for their tier."
            },
            {
              id: "2",
              title: "Can I use Arbuz for all niches?",
              content: "Yes! Arbuz works across all arbitrage niches - e-commerce, mobile apps, financial offers, gaming, dating, and more. The AI adapts to different offer types and target audiences. We do prohibit illegal niches and adult content."
            },
            {
              id: "3",
              title: "How long does it take to generate a PWA app?",
              content: "Average generation time is 30-60 seconds from when you provide offer details. The AI handles all backend optimization, so you get a production-ready app instantly without technical knowledge."
            },
            {
              id: "4",
              title: "Do you offer refunds if I'm not satisfied?",
              content: "We offer a 14-day money-back guarantee on all plans. If you're not happy, contact support and we'll process a full refund within 2 business days. No questions asked."
            },
            {
              id: "5",
              title: "How does the referral program work?",
              content: "Share your unique referral link with other arbitrageurs. You earn 30% recurring commission on all referrals who maintain an active subscription, plus $100 per sign-up bonus. Payouts happen monthly via Stripe, PayPal, or crypto."
            },
            {
              id: "6",
              title: "Is my data safe and private?",
              content: "Absolutely. We use enterprise-grade encryption, regular security audits, and comply with GDPR and CCPA. Your offer data is never shared with third parties or used to train our models without explicit permission."
            },
            {
              id: "7",
              title: "Can I cancel anytime?",
              content: "Yes, cancel anytime with no penalty. Your subscription ends at the current billing cycle, and unused credits expire 30 days after cancellation. You can reactivate your account anytime."
            },
            {
              id: "8",
              title: "Do you have an API?",
              content: "Professional and Enterprise plans include full API access. This lets you automate campaign generation, integrate with your own tools, and build custom workflows. Basic REST API with detailed documentation included."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Join Thousands of Successful Arbitrageurs"
          description="Start your free trial today. No credit card required. Access all Arbuz features for 14 days."
          inputPlaceholder="your@email.com"
          buttonText="Claim Free Trial"
          termsText="By signing up, you agree to our Terms of Service and Privacy Policy. We'll send you setup guides and offers via email."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Arbuz"
          columns={[
            {
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "How It Works", href: "how-it-works" }
              ]
            },
            {
              items: [
                { label: "Referral Program", href: "referral" },
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Blog", href: "https://blog.arbuz.ai" },
                { label: "Community", href: "https://community.arbuz.ai" },
                { label: "API Docs", href: "https://docs.arbuz.ai" }
              ]
            },
            {
              items: [
                { label: "Terms of Service", href: "https://arbuz.ai/terms" },
                { label: "Privacy Policy", href: "https://arbuz.ai/privacy" },
                { label: "Status Page", href: "https://status.arbuz.ai" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}