import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2, Info, ChevronRight } from 'lucide-react';
import { games } from '@/lib/data';
import { Game } from '@/lib/types';

interface GameCardProps {
  game: Game;
  delay: number;
}

const GameCard = ({ game, delay }: GameCardProps) => {
  const { title, description, imageUrl, ageRange, tag } = game;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="game-card"
    >
      <Card className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-all h-full">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://placehold.co/800x600/9CA3AF/FFFFFF?text=${encodeURIComponent(title)}`;
            }}
          />
          {tag && (
            <div className={`absolute top-3 left-3 text-white text-xs font-bold uppercase py-1 px-2 rounded-full ${
              tag.type === 'popular' ? 'bg-amber-500' : 'bg-pink-500'
            }`}>
              {tag.text}
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-bold font-nunito">{title}</h3>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{ageRange}</span>
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <div className="flex">
              <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full mr-2 transition-all hover:scale-110">
                <Volume2 className="h-4 w-4 text-gray-600" />
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-all hover:scale-110">
                <Info className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <Button>Play Now</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const GamesShowcase = () => {
  return (
    <section id="games" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-amber-100 text-amber-700 hover:bg-amber-200 px-3 py-1">OUR GAMES</Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-nunito mb-4">Cultural Adventures Await</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our collection of engaging games that make learning about world cultures an exciting adventure for children of all ages.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard
              key={game.id}
              game={game}
              delay={0.1 * index}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button variant="link" className="text-primary font-medium text-lg">
            See all games
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GamesShowcase;
