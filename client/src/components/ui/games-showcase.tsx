import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Volume2, Info, ChevronRight } from 'lucide-react';

interface GameCardProps {
  title: string;
  description: string;
  imageUrl: string;
  ageRange: string;
  tag?: {
    text: string;
    type: 'popular' | 'new';
  };
  delay: number;
}

const GameCard = ({ title, description, imageUrl, ageRange, tag, delay }: GameCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="game-card"
    >
      <Card className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-all">
        <div className="relative h-48 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
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
  const games = [
    {
      title: "Tasty Traditions",
      description: "Explore the delicious world of international cuisine! Match foods to countries and learn about special dishes.",
      imageUrl: "https://images.unsplash.com/photo-1544036741-f3654143724f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ageRange: "Ages 4-8",
      tag: {
        text: "Popular",
        type: "popular" as const
      }
    },
    {
      title: "Amazing Monuments",
      description: "Build and learn about famous landmarks from every continent. Discover the stories behind these amazing structures!",
      imageUrl: "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ageRange: "Ages 6-10"
    },
    {
      title: "Festival Fun",
      description: "Join celebrations around the world! Learn about special holidays and festivals from different cultures.",
      imageUrl: "https://images.unsplash.com/photo-1535572290543-960a8046f5af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ageRange: "Ages 5-9",
      tag: {
        text: "New",
        type: "new" as const
      }
    },
    {
      title: "Global Games",
      description: "Play sports and games from different countries! Learn the rules and history of activities kids enjoy worldwide.",
      imageUrl: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ageRange: "Ages 7-12"
    },
    {
      title: "Musical Journey",
      description: "Listen, play, and create music from around the world! Discover instruments and songs from different cultures.",
      imageUrl: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ageRange: "Ages 3-8"
    },
    {
      title: "Dress Up World",
      description: "Explore traditional clothing from different countries! Learn about special outfits and costumes from around the globe.",
      imageUrl: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ageRange: "Ages 4-9"
    }
  ];

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
              key={index}
              title={game.title}
              description={game.description}
              imageUrl={game.imageUrl}
              ageRange={game.ageRange}
              tag={game.tag}
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
