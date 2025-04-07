import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Sarah Johnson",
    role: "Mother of two",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    quote: "My kids look forward to our CultureQuest sessions every weekend. They're learning so much about different countries and traditions while having fun. The sound design is perfect - engaging but not overstimulating.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Elementary teacher",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    quote: "As a teacher, I'm impressed by the educational depth of CultureQuest. The games are well-researched and present cultural information in a respectful and engaging way. I recommend it to all my students' parents.",
    rating: 5
  },
  {
    name: "Maria Rodriguez",
    role: "Parent & educator",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    quote: "This app has been wonderful for my multilingual family. It helps my children connect with their heritage and learn about other cultures too. The audio pronunciations of words in different languages are especially helpful.",
    rating: 4.5
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => {
  return (
    <Card className="flex-shrink-0 w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] bg-gray-50 rounded-xl shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-12 h-12 rounded-full object-cover mr-4" 
          />
          <div>
            <h4 className="font-bold">{testimonial.name}</h4>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
          </div>
          <div className="ml-auto text-pink-500">
            <Quote className="h-7 w-7 opacity-50" />
          </div>
        </div>
        <p className="text-gray-600 mb-4">{testimonial.quote}</p>
        <div className="flex text-amber-400">
          {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
            <Star key={i} className="fill-current h-4 w-4" />
          ))}
          {testimonial.rating % 1 !== 0 && (
            <div className="relative">
              <Star className="fill-current h-4 w-4" />
              <div className="absolute top-0 right-0 w-1/2 h-full bg-white"></div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (index < 0) index = 0;
    if (index > testimonials.length - 1) index = testimonials.length - 1;
    
    setActiveIndex(index);
    
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: index * (slideWidth / 3),
        behavior: 'smooth'
      });
    }
  };

  const next = () => scrollToIndex(activeIndex + 1);
  const prev = () => scrollToIndex(activeIndex - 1);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-pink-100 text-pink-700 hover:bg-pink-200 px-3 py-1">TESTIMONIALS</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-nunito mb-4">What Families Are Saying</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Hear from parents and educators about how CultureQuest has transformed learning about different cultures into a fun family activity.</p>
        </motion.div>
        
        <div className="relative">
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-5 scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ scrollSnapAlign: 'start' }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
          
          <button 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center text-gray-600 hover:text-primary focus:outline-none hidden md:flex"
            onClick={prev}
            disabled={activeIndex === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center text-gray-600 hover:text-primary focus:outline-none hidden md:flex"
            onClick={next}
            disabled={activeIndex >= testimonials.length - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-primary-400'}`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
