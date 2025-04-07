import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Earth } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'shadow-sm py-3 md:py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-primary text-white p-2 rounded-full">
            <Earth className="h-5 w-5" />
          </div>
          <span className="text-xl md:text-2xl font-bold font-nunito text-primary">CultureQuest</span>
        </Link>
        
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="font-medium text-gray-700 hover:text-primary transition-colors">Features</a>
          <a href="#games" className="font-medium text-gray-700 hover:text-primary transition-colors">Games</a>
          <a href="#testimonials" className="font-medium text-gray-700 hover:text-primary transition-colors">Testimonials</a>
          <a href="#pricing" className="font-medium text-gray-700 hover:text-primary transition-colors">Pricing</a>
          <a href="#contact" className="font-medium text-gray-700 hover:text-primary transition-colors">Contact</a>
          <Button>Try For Free</Button>
        </nav>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <a href="#features" className="font-medium text-gray-700 hover:text-primary transition-colors py-2">Features</a>
            <a href="#games" className="font-medium text-gray-700 hover:text-primary transition-colors py-2">Games</a>
            <a href="#testimonials" className="font-medium text-gray-700 hover:text-primary transition-colors py-2">Testimonials</a>
            <a href="#pricing" className="font-medium text-gray-700 hover:text-primary transition-colors py-2">Pricing</a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-primary transition-colors py-2">Contact</a>
            <Button className="w-full justify-center">Try For Free</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
