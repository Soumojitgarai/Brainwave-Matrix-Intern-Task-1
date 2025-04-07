import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection = () => {
  const faqItems: FaqItem[] = [
    {
      question: "What age range is CultureQuest suitable for?",
      answer: "CultureQuest is designed for children ages 3-12, with different games tailored to specific age ranges. The app allows parents to set age filters to ensure children only see content appropriate for their development level. Adults often enjoy playing along too!"
    },
    {
      question: "How educational is CultureQuest?",
      answer: "All content in CultureQuest is developed with input from cultural experts and educators. Games teach authentic information about foods, holidays, languages, geography, and traditions. We balance fun gameplay with educational accuracy to ensure children learn while they play."
    },
    {
      question: "Can multiple children use one account?",
      answer: "Yes! The Family plan supports up to 4 player profiles, so each child can have their own personalized experience, tracking their progress and achievements separately. Parents can manage all profiles from a single dashboard."
    },
    {
      question: "How often is new content added?",
      answer: "Paid plans receive monthly content updates, including new games, cultural information, and soundtracks. We also regularly add special content for global celebrations and holidays throughout the year."
    },
    {
      question: "Is CultureQuest available offline?",
      answer: "Yes, paid plans support offline play after initial download. This makes CultureQuest perfect for travel, road trips, or areas with limited internet connectivity. Some features like leaderboards require occasional online connection."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-primary-100 text-primary hover:bg-primary-200 px-3 py-1">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-nunito mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about CultureQuest and how it helps families learn about world cultures.</p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                  <AccordionTrigger className="px-6 py-4 font-bold font-nunito text-lg hover:text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
          
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600">Still have questions?</p>
            <Button variant="link" className="mt-3 text-primary hover:text-primary-700 font-medium" asChild>
              <a href="#contact">
                Contact our support team <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
