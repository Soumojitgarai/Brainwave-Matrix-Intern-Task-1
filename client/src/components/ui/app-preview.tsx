import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Music2, Volume, SmilePlus, Play, SkipBack, SkipForward, Pause } from 'lucide-react';

const AppPreview = () => {
  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-primary-100 text-primary hover:bg-primary-200 px-3 py-1">SOUND DESIGN</Badge>
            <h2 className="text-3xl md:text-4xl font-bold font-nunito mb-6">Immersive Audio Experience</h2>
            <p className="text-gray-600 mb-8">Our carefully crafted soundtracks and audio effects create a calm yet engaging atmosphere that enhances learning and keeps children focused.</p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
                  <Music2 className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Cultural Soundtracks</h3>
                  <p className="text-gray-600">Authentic music from each region creates an immersive experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
                  <Volume className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Ambient Sounds</h3>
                  <p className="text-gray-600">Background audio that brings each location to life with subtle environmental cues.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
                  <SmilePlus className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Positive Feedback</h3>
                  <p className="text-gray-600">Encouraging sounds and voice prompts that celebrate learning achievements.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="outline" className="mt-3 bg-white shadow-sm hover:shadow rounded-full flex items-center">
                <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-2">
                  <Play className="h-4 w-4 text-white" />
                </span>
                <span className="font-medium">Asian Lullaby</span>
              </Button>
              <Button variant="outline" className="mt-3 bg-white shadow-sm hover:shadow rounded-full flex items-center">
                <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-2">
                  <Play className="h-4 w-4 text-white" />
                </span>
                <span className="font-medium">African Drums</span>
              </Button>
              <Button variant="outline" className="mt-3 bg-white shadow-sm hover:shadow rounded-full flex items-center">
                <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-2">
                  <Play className="h-4 w-4 text-white" />
                </span>
                <span className="font-medium">European Folk</span>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-5/12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Card className="bg-white p-4 md:p-6 rounded-2xl shadow-xl relative z-10">
                <CardContent className="p-0">
                  <img 
                    src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="World map in the app" 
                    className="rounded-xl w-full" 
                  />
                  
                  <motion.div 
                    className="absolute bottom-12 left-0 right-0 flex justify-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="bg-white shadow-lg rounded-full px-4 py-2 flex items-center space-x-4">
                      <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <SkipBack className="h-5 w-5 text-gray-600" />
                      </button>
                      <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Pause className="h-5 w-5 text-white" />
                      </button>
                      <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <SkipForward className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
              
              {/* Decorative elements */}
              <div className="absolute top-8 -right-4 w-20 h-20 bg-amber-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary rounded-full opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
