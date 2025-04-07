import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Earth, Facebook, Twitter, Instagram, Youtube, Apple, PlaySquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-white p-2 rounded-full">
                <Earth className="text-primary h-5 w-5" />
              </div>
              <span className="text-xl font-bold font-nunito">CultureQuest</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">Bringing world cultures to life through fun, educational games for the whole family. Explore, learn, and grow together.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Parent Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Teacher Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Download</h3>
            <ul className="space-y-4">
              <li>
                <Button variant="outline" className="w-full justify-start bg-gray-800 hover:bg-gray-700 text-white border-0 rounded-lg">
                  <Apple className="h-6 w-6 mr-3" />
                  <div className="text-left">
                    <span className="block text-xs">Download on the</span>
                    <span className="block font-bold">App Store</span>
                  </div>
                </Button>
              </li>
              <li>
                <Button variant="outline" className="w-full justify-start bg-gray-800 hover:bg-gray-700 text-white border-0 rounded-lg">
                  <PlaySquare className="h-6 w-6 mr-3" />
                  <div className="text-left">
                    <span className="block text-xs">Get it on</span>
                    <span className="block font-bold">Google Play</span>
                  </div>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} CultureQuest. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
