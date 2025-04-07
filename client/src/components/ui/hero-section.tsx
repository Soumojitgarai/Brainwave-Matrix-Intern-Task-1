import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Volume2, Heart, ArrowDown, Music2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary-50 to-white pt-16 md:pt-20 pb-24 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0 z-10 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-nunito text-gray-900 leading-tight mb-6">
              Explore the World <span className="text-primary">Through Play</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Help your children discover different cultures, traditions, and languages with fun, educational games designed for the whole family.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <a href="#games">Start Playing</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#features">Learn More</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start text-gray-500 text-sm">
              <div className="mr-6 flex items-center">
                <Volume2 className="mr-2 h-4 w-4" />
                <span>Sound Enabled</span>
              </div>
              <div className="flex items-center">
                <Heart className="mr-2 h-4 w-4" />
                <span>Kid Friendly</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div 
              className="relative mx-auto max-w-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 6,
                ease: "easeInOut" 
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Children playing with a cultural game map" 
                className="rounded-2xl shadow-2xl"
              />
              
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="bg-amber-500 rounded-full p-2">
                    <Music2 className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Relaxing Music</p>
                    <div className="mt-1 bg-gray-200 h-1 rounded-full w-28">
                      <div className="bg-amber-500 h-1 rounded-full w-16"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg">
                <Badge variant="secondary" className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                    <path d="M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                    <path d="M20 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"></path>
                    <path d="M4 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                    <path d="m14 16-2-2-2 2"></path>
                    <path d="m14 8-2 2-2-2"></path>
                    <path d="m16 14-2-2 2-2"></path>
                    <path d="m8 14 2-2-2-2"></path>
                  </svg>
                  <span className="text-sm font-medium">10 Cultures Explored</span>
                </Badge>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/4 left-1/4 w-64 h-64 bg-amber-300 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -z-10 bottom-1/4 right-1/4 w-48 h-48 bg-primary-300 rounded-full opacity-20 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut" 
        }}
      >
        <a href="#features" className="text-gray-400 hover:text-primary transition-colors">
          <ArrowDown className="h-6 w-6" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
