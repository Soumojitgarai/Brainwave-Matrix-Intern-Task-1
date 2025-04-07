import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Music2, Gamepad2, Users, Award, UserSquare } from 'lucide-react';

interface StatCounterProps {
  target: number;
  suffix?: string;
  label: string;
}

const StatCounter = ({ target, suffix = '', label }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // ms
      const step = target / (duration / 16); // 60fps
      let current = 0;
      
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div className="text-center" ref={ref}>
      <p className="text-4xl font-bold font-nunito text-primary mb-2">{isInView ? count : 0}{suffix}</p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const FeatureSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-4 bg-primary-100 text-primary hover:bg-primary-200 px-3 py-1">KEY FEATURES</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-nunito mb-4">Why Families Love CultureQuest</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Designed by educators and cultural experts to ensure fun, accuracy, and meaningful learning experiences for the whole family.</p>
        </motion.div>
        
        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="text-2xl text-primary" />
                </div>
                <h3 className="text-xl font-bold font-nunito mb-3">Interactive World Map</h3>
                <p className="text-gray-600">Explore different countries and regions through an engaging, interactive map designed for curious young minds.</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="bg-pink-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <Music2 className="text-2xl text-pink-600" />
                </div>
                <h3 className="text-xl font-bold font-nunito mb-3">Relaxing Soundtracks</h3>
                <p className="text-gray-600">Authentic music from around the world provides a calming atmosphere while enhancing cultural immersion.</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <Gamepad2 className="text-2xl text-amber-600" />
                </div>
                <h3 className="text-xl font-bold font-nunito mb-3">Cultural Challenges</h3>
                <p className="text-gray-600">Fun mini-games and quizzes that teach children about traditions, foods, languages, and more from diverse cultures.</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <Users className="text-2xl text-green-600" />
                </div>
                <h3 className="text-xl font-bold font-nunito mb-3">Family Multiplayer</h3>
                <p className="text-gray-600">Play together with up to 4 family members, fostering shared learning experiences and quality time.</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <Award className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold font-nunito mb-3">Achievement System</h3>
                <p className="text-gray-600">Earn badges and rewards as you discover new cultures, motivating continuous exploration and learning.</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-50 hover:shadow-md transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <UserSquare className="text-2xl text-red-600" />
                </div>
                <h3 className="text-xl font-bold font-nunito mb-3">Parent Dashboard</h3>
                <p className="text-gray-600">Monitor your child's progress, customize learning paths, and access additional educational resources.</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <StatCounter target={50} suffix="+" label="Cultures Featured" />
          <StatCounter target={100} suffix="+" label="Fun Challenges" />
          <StatCounter target={1000} suffix="K+" label="Families Playing" />
          <StatCounter target={30} suffix="+" label="Languages" />
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
