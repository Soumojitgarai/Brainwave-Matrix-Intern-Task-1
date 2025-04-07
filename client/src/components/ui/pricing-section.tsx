import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, XCircle, ChevronRight } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
  index: number;
}

const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  const isPopular = plan.popular;
  
  return (
    <motion.div
      className="flex-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * plan.index }}
      viewport={{ once: true }}
    >
      <Card className={`overflow-hidden h-full ${
        isPopular ? 
        'bg-primary text-white shadow-lg transform lg:scale-105' : 
        'bg-white shadow-sm hover:shadow-md transition-shadow'
      }`}>
        <CardContent className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className={`text-xl font-bold font-nunito ${isPopular ? 'text-white' : ''}`}>{plan.name}</h3>
            {isPopular && (
              <span className="bg-white text-primary text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>
            )}
          </div>
          
          <div className={`flex items-baseline mb-6 ${isPopular ? 'text-white' : ''}`}>
            <span className="text-4xl font-bold">{plan.price}</span>
            {plan.period && <span className={`ml-2 ${isPopular ? 'text-primary-200' : 'text-gray-500'}`}>{plan.period}</span>}
          </div>
          
          <p className={`mb-6 ${isPopular ? 'text-primary-100' : 'text-gray-600'}`}>{plan.description}</p>
          
          <ul className={`space-y-3 mb-8 flex-grow ${isPopular ? 'text-white' : ''}`}>
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                {feature.included ? (
                  <CheckCircle2 className={`mr-2 h-5 w-5 ${isPopular ? 'text-amber-300' : 'text-green-500'}`} />
                ) : (
                  <XCircle className="mr-2 h-5 w-5 text-gray-400" />
                )}
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            className={`w-full justify-center ${
              isPopular ? 
              'bg-white text-primary hover:bg-primary-50' : 
              'bg-white border-2 border-primary text-primary hover:bg-primary-50'
            }`}
            variant={isPopular ? 'default' : 'outline'}
          >
            {plan.buttonText}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const PricingSection = () => {
  const plans: PricingPlan[] = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for families wanting to try CultureQuest.',
      features: [
        { text: '5 cultural games', included: true },
        { text: 'Basic sound effects', included: true },
        { text: 'Single player mode', included: true },
        { text: 'Limited content updates', included: false },
      ],
      buttonText: 'Get Started',
      index: 0
    },
    {
      name: 'Family',
      price: '$6.99',
      period: '/month',
      description: 'The complete experience for the whole family.',
      features: [
        { text: 'All 100+ cultural games', included: true },
        { text: 'Full soundtrack library', included: true },
        { text: 'Family multiplayer (up to 4)', included: true },
        { text: 'Monthly content updates', included: true },
        { text: 'Offline play', included: true },
      ],
      buttonText: 'Start 7-Day Free Trial',
      popular: true,
      index: 1
    },
    {
      name: 'Annual',
      price: '$59.99',
      period: '/year',
      description: 'Save 30% with our annual family plan.',
      features: [
        { text: 'All Family plan features', included: true },
        { text: '30% savings', included: true },
        { text: 'Exclusive annual content', included: true },
        { text: 'Priority support', included: true },
      ],
      buttonText: 'Subscribe Annually',
      index: 2
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-primary-100 text-primary hover:bg-primary-200 px-3 py-1">PRICING</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-nunito mb-4">Family-Friendly Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose the plan that's right for your family. All plans include access to our core educational games.</p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row justify-center gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">All plans come with a 30-day money-back guarantee</p>
          <Button variant="link" className="text-primary hover:text-primary-700 font-medium">
            View full comparison
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
