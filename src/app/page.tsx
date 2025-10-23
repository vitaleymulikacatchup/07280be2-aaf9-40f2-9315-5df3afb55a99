"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, BarChart3, Coffee, Heart, Leaf, Mail, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Bean & Brew"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Exceptional Coffee, Every Cup"
          description="Discover the perfect blend of quality, comfort, and community at Bean & Brew - your neighborhood coffee destination"
          tag="Fresh Roasted Daily"
          tagIcon={Coffee}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Visit Us", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/26492562/pexels-photo-26492562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>
      
      <div id="about" data-section="about">
        <SplitAbout
          title="Our Story"
          description="Founded in 2018, Bean & Brew is more than just a coffee shop - we're a community hub where great coffee meets genuine connections"
          tag="About Us"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Artisan Crafted",
              description: "Every cup is carefully prepared by our skilled baristas using premium, ethically sourced beans",
              icon: Award
            },
            {
              title: "Community Focused",
              description: "We believe coffee brings people together and strive to create a welcoming space for all",
              icon: Users
            },
            {
              title: "Sustainable Choice",
              description: "Committed to environmental responsibility with eco-friendly practices and local partnerships",
              icon: Leaf
            }
          ]}
          imageSrc="https://images.pexels.com/photos/17516410/pexels-photo-17516410.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imagePosition="right"
        />
      </div>
      
      <div id="menu" data-section="menu">
        <ProductCardTwo
          title="Our Coffee Menu"
          description="Carefully curated selection of premium coffee drinks made with love and expertise"
          tag="Fresh Made"
          tagIcon={Coffee}
          products={[
            {
              id: "1",
              brand: "Bean & Brew",
              name: "Classic Espresso",
              price: "$3.50",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://images.pexels.com/photos/2347380/pexels-photo-2347380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              brand: "Bean & Brew",
              name: "Cappuccino",
              price: "$4.25",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://images.pexels.com/photos/2559312/pexels-photo-2559312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              brand: "Bean & Brew",
              name: "House Americano",
              price: "$3.75",
              rating: 4,
              reviewCount: "156",
              imageSrc: "https://images.pexels.com/photos/4195602/pexels-photo-4195602.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>
      
      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Our Impact"
          description="Numbers that reflect our commitment to quality and community"
          tag="Statistics"
          tagIcon={BarChart3}
          metrics={[
            {
              id: "1",
              value: "10,000+",
              description: "Happy Customers Served"
            },
            {
              id: "2",
              value: "50+",
              description: "Premium Coffee Varieties"
            },
            {
              id: "3",
              value: "98%",
              description: "Customer Satisfaction Rate"
            },
            {
              id: "4",
              value: "6",
              description: "Years of Excellence"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Customers Say"
          description="Real reviews from coffee lovers who make Bean & Brew their daily destination"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@sarahmitchell",
              testimonial: "Best coffee in town! The baristas really know their craft and the atmosphere is perfect for both work and relaxation.",
              imageSrc: "https://images.pexels.com/photos/33409064/pexels-photo-33409064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "David Chen",
              handle: "@davidchen",
              testimonial: "I've been coming here for 3 years and the quality never disappoints. Great place to start the morning!",
              imageSrc: "https://images.pexels.com/photos/6826026/pexels-photo-6826026.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              handle: "@emilyrod",
              testimonial: "Love the community feel here. It's become my second office and the WiFi is excellent too!",
              imageSrc: "https://images.pexels.com/photos/4350038/pexels-photo-4350038.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "Marcus Johnson",
              handle: "@marcusj",
              testimonial: "The attention to detail in every cup is amazing. You can taste the difference when coffee is made with passion.",
              imageSrc: "https://images.pexels.com/photos/6864505/pexels-photo-6864505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          title="Join Our Coffee Community"
          description="Get the latest updates on new blends, events, and exclusive offers delivered straight to your inbox"
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our newsletter and can unsubscribe at any time."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Coffee", href: "menu" },
                { label: "Pastries", href: "menu" },
                { label: "Specialty Drinks", href: "menu" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Sustainability", href: "about" },
                { label: "Community", href: "about" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Visit Us", href: "contact" },
                { label: "Catering", href: "contact" },
                { label: "Events", href: "contact" }
              ]
            }
          ]}
          copyrightText="© 2025 | Bean & Brew"
        />
      </div>
    </ThemeProvider>
  );
}