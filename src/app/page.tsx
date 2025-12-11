"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardNine from '@/components/sections/testimonial/TestimonialCardNine';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { ChefHat, Clock, Star, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="small"
      sizing="large"
      background="circleGradient"
      cardStyle="outline"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765462569848-4yxr3qzd.jpg"
          logoAlt="Nyam-Nyam Logo"
          brandName="Nyam-Nyam"
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Specials", id: "specials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Reserve Table", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Discover Culinary Excellence"
          description="Experience authentic flavors and modern cuisine in an unforgettable dining atmosphere"
          tag="Fine Dining"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765462571449-6zof0fbd.jpg",
              imageAlt: "Signature appetizer plating"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765462572330-xriu5493.jpg",
              imageAlt: "Main course presentation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765462573230-6xe9jd01.jpg",
              imageAlt: "Gourmet starter dish"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765462574162-ipd2brwj.jpg",
              imageAlt: "Elegant dessert creation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765462575169-2xk684y4.jpg",
              imageAlt: "Craft beverage selection"
            }
          ]}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Reserve Now", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="At Nyam-Nyam we celebrate the art of cooking with passion, creativity, and the finest ingredients sourced from trusted local and international suppliers"
          metrics={[
            { icon: ChefHat, label: "Expert Chefs", value: "15+" },
            { icon: Clock, label: "Years of Excellence", value: "12" },
            { icon: Users, label: "Happy Diners", value: "10k+" },
            { icon: Star, label: "Guest Rating", value: "4.8" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="specials" data-section="specials">
        <FeatureCardThree
          title="Our Signature Creations"
          description="Crafted with passion and precision, each dish tells a story of flavor and tradition"
          tag="Featured Dishes"
          features={[
            {
              id: "01",
              title: "Pan-Seared Salmon",
              description: "Atlantic salmon with lemon butter sauce, seasonal vegetables, and herb oil drizzle",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765462576095-9d7dgt4s.jpg"
            },
            {
              id: "02",
              title: "Handmade Pasta",
              description: "Fresh tagliatelle with truffle cream sauce, porcini mushrooms, and aged Parmigiano-Reggiano",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765462576719-ygb8q5z4.jpg"
            },
            {
              id: "03",
              title: "Lobster Bisque",
              description: "Silky smooth bisque with fresh lobster meat, garnished with chives and crispy seafood crackers",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765462577410-108mb6pe.jpg"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardNine
          title="Loved by Our Guests"
          description="Hear what our valued diners have to say about their experience at Nyam-Nyam"
          testimonials={[
            {
              id: "1",
              quote: "The most exceptional dining experience I have had in years. Every dish was perfectly executed and the service was impeccable. Nyam-Nyam is a true gem.",
              name: "Sarah Mitchell",
              role: "Food Critic",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765462579857-30uf6o09.jpg"
            },
            {
              id: "2",
              quote: "We celebrated our anniversary here and it was absolutely magical. The ambiance, the food, the attention to detail - everything was perfect. We will definitely be back.",
              name: "Jessica Chen",
              role: "Restaurant Enthusiast",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765462580696-nph2wgtg.jpg"
            },
            {
              id: "3",
              quote: "The chef's tasting menu was a culinary journey I will never forget. Every course surprised and delighted my palate. Highly recommended for special occasions.",
              name: "David Rodriguez",
              role: "Culinary Expert",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765462581762-r0ksxxcu.jpg"
            },
            {
              id: "4",
              quote: "Simply outstanding. From the moment we walked in, we felt welcomed. The food was innovative yet comforting, and the wine pairings were spot on. This is fine dining done right.",
              name: "Emma Thompson",
              role: "Frequent Diner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765462582774-2e1bnmtr.jpg"
            }
          ]}
          variant="card"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Ready for an unforgettable meal?"
          inputPlaceholder="Enter your email for updates"
          buttonText="Get In Touch"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765462569848-4yxr3qzd.jpg"
          copyrightText="© 2025 Nyam-Nyam Restaurant. All rights reserved."
          columns={[
            {
              title: "Restaurant",
              items: [
                { label: "Menu", href: "menu" },
                { label: "Reservations", href: "contact" },
                { label: "Events", href: "#" },
                { label: "Catering", href: "#" }
              ]
            },
            {
              title: "Hours",
              items: [
                { label: "Monday - Thursday: 5pm - 11pm", href: "#" },
                { label: "Friday - Saturday: 5pm - 12am", href: "#" },
                { label: "Sunday: 12pm - 10pm", href: "#" },
                { label: "Closed on holidays", href: "#" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "123 Culinary Lane", href: "#" },
                { label: "+1 (555) 123-4567", href: "#" },
                { label: "info@nyam-nyam.com", href: "#" },
                { label: "Follow Us Online", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}