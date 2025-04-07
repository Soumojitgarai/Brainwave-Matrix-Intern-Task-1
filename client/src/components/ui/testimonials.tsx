import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '@/lib/data';

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => {
  return (
    <Card className="h-full bg-gray-50 rounded-xl shadow-sm">
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
            <Star className="fill-current h-4 w-4 text-amber-200" />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10 space-x-2">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              className={`w-3 h-3 rounded-full ${index === activeTestimonial ? 'bg-primary' : 'bg-gray-300 hover:bg-primary-300'}`}
              onClick={() => setActiveTestimonial(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
