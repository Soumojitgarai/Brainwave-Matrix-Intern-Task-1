import { useEffect } from 'react';
import Header from '@/components/ui/header';
import HeroSection from '@/components/ui/hero-section';
import FeatureSection from '@/components/ui/feature-section';
import GamesShowcase from '@/components/ui/games-showcase';
import AppPreview from '@/components/ui/app-preview';
import Testimonials from '@/components/ui/testimonials';
import PricingSection from '@/components/ui/pricing-section';
import FaqSection from '@/components/ui/faq-section';
import NewsletterSection from '@/components/ui/newsletter-section';
import ContactSection from '@/components/ui/contact-section';
import Footer from '@/components/ui/footer';
import BackToTop from '@/components/ui/back-to-top';

const Home = () => {
  useEffect(() => {
    document.title = 'CultureQuest - Learn About Cultures Through Fun Games';
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 font-inter">
      <Header />
      <HeroSection />
      <FeatureSection />
      <GamesShowcase />
      <AppPreview />
      <Testimonials />
      <PricingSection />
      <FaqSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
