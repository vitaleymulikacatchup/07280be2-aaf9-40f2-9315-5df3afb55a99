"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Coffee, Heart, Leaf, Flame, Home, Star, TrendingUp, Users, MessageCircle, MapPin } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://images.pexels.com/photos/29200640/pexels-photo-29200640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="Brew & Bean Coffee Shop"
          brandName="Brew & Bean"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Perfect Coffee, Every Time"
          description="Experience the finest coffee beans sourced from around the world, expertly roasted and brewed to perfection in our cozy neighborhood shop."
          tag="Freshly Roasted"
          tagIcon={Coffee}
          buttons={[
            {
              text: "Order Now",
              href: "contact"
            },
            {
              text: "Our Menu",
              href: "product"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/26492562/pexels-photo-26492562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Cozy coffee shop interior with warm lighting"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Story"
          description="Founded in 2018, Brew & Bean is more than just a coffee shop. We're passionate about creating the perfect coffee experience through quality beans, expert brewing, and a welcoming atmosphere."
          tag="Since 2018"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Premium Beans",
              description: "Sourced directly from sustainable farms worldwide",
              icon: Leaf
            },
            {
              title: "Expert Roasting",
              description: "Small batch roasting for maximum freshness and flavor",
              icon: Flame
            },
            {
              title: "Cozy Atmosphere",
              description: "A perfect place to relax, work, or catch up with friends",
              icon: Home
            }
          ]}
          imageSrc="https://images.pexels.com/photos/4109748/pexels-photo-4109748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Fresh coffee beans being roasted"
          imagePosition="left"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Why Choose Brew & Bean"
          description="Discover what makes our coffee experience truly special"
          tag="Quality First"
          tagIcon={Star}
          features={[
            {
              title: "Artisan Roasting",
              description: "Our master roasters craft each blend with precision and passion for exceptional taste",
              imageSrc: "https://images.pexels.com/photos/7125616/pexels-photo-7125616.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Coffee roasting process"
            },
            {
              title: "Premium Equipment",
              description: "State-of-the-art espresso machines ensure every cup meets our highest standards",
              imageSrc: "https://images.pexels.com/photos/1835900/pexels-photo-1835900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Professional espresso machine"
            },
            {
              title: "Perfect Brew",
              description: "Every cup is carefully crafted to bring out the unique flavors of our specialty blends",
              imageSrc: "https://images.pexels.com/photos/460257/pexels-photo-460257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Perfect coffee cup with steam"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Our Signature Drinks"
          description="Handcrafted beverages made with love and premium ingredients"
          tag="Popular Menu"
          tagIcon={Coffee}
          products={[
            {
              id: "americano",
              name: "Classic Americano",
              price: "$4.50",
              imageSrc: "https://images.pexels.com/photos/4195602/pexels-photo-4195602.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Classic Americano coffee",
              initialQuantity: 1
            },
            {
              id: "cappuccino",
              name: "Creamy Cappuccino",
              price: "$5.25",
              imageSrc: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cappuccino with foam art",
              initialQuantity: 1
            },
            {
              id: "cold-brew",
              name: "Cold Brew Special",
              price: "$4.75",
              imageSrc: "https://images.pexels.com/photos/7282737/pexels-photo-7282737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cold brew coffee with ice",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardThree
          title="Our Growing Community"
          description="Numbers that reflect our commitment to quality and service"
          tag="Since 2018"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "customers",
              icon: Users,
              title: "Happy Customers",
              value: "2,500+"
            },
            {
              id: "cups",
              icon: Coffee,
              title: "Cups Served",
              value: "15,000+"
            },
            {
              id: "reviews",
              icon: Star,
              title: "Five Star Reviews",
              value: "98%"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="The passionate people behind your perfect cup"
          tag="Our Family"
          tagIcon={Heart}
          members={[
            {
              id: "sarah",
              name: "Sarah Martinez",
              role: "Head Barista",
              description: "With 8 years of experience, Sarah ensures every cup meets our exacting standards. She's passionate about latte art and specialty brewing techniques.",
              imageSrc: "https://images.pexels.com/photos/4349965/pexels-photo-4349965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Martinez, Head Barista",
              socialLinks: [
                {
                  icon: "Instagram",
                  url: "https://instagram.com/sarah_coffee"
                },
                {
                  icon: "Mail",
                  url: "mailto:sarah@brewandbean.com"
                }
              ]
            },
            {
              id: "michael",
              name: "Michael Chen",
              role: "Assistant Manager",
              description: "Michael brings enthusiasm and expertise to our team, specializing in cold brew and seasonal drink creations.",
              imageSrc: "https://images.pexels.com/photos/4790061/pexels-photo-4790061.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen, Assistant Manager",
              socialLinks: [
                {
                  icon: "Instagram",
                  url: "https://instagram.com/michael_coffee"
                },
                {
                  icon: "Mail",
                  url: "mailto:michael@brewandbean.com"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real reviews from coffee lovers who visit us daily"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Michael Chen",
              role: "Software Developer",
              company: "Tech Solutions Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/33409064/pexels-photo-33409064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Happy customer Michael Chen"
            },
            {
              id: "2",
              name: "Emma Rodriguez",
              role: "Marketing Manager",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Business professional Emma Rodriguez"
            },
            {
              id: "3",
              name: "Lisa Thompson",
              role: "Freelance Writer",
              company: "Independent",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4827509/pexels-photo-4827509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Young woman Lisa Thompson enjoying coffee"
            },
            {
              id: "4",
              name: "David Park",
              role: "Coffee Enthusiast",
              company: "Local Resident",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4790061/pexels-photo-4790061.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Coffee enthusiast David Park"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          tagIcon={MapPin}
          title="Ready for Great Coffee?"
          description="Join our community of coffee lovers. Sign up for exclusive offers, new blend announcements, and brewing tips from our expert baristas."
          inputPlaceholder="Enter your email"
          buttonText="Get Updates"
          termsText="By signing up, you'll receive our weekly newsletter with coffee tips and exclusive offers. Unsubscribe anytime."
          imageSrc="https://images.pexels.com/photos/3352765/pexels-photo-3352765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Brew & Bean coffee shop exterior"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Brew & Bean"
          columns={[
            {
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Menu",
                  href: "product"
                },
                {
                  label: "Location",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Order Online",
                  href: "contact"
                },
                {
                  label: "Catering",
                  href: "mailto:catering@brewandbean.com"
                },
                {
                  label: "Gift Cards",
                  href: "mailto:info@brewandbean.com"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}