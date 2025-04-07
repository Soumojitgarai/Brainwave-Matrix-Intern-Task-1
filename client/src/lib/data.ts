import { Game, Feature, Testimonial, PricingPlan, FAQ, SoundTrack } from './types';

export const games: Game[] = [
  {
    id: 1,
    title: "Tasty Traditions",
    description: "Explore the delicious world of international cuisine! Match foods to countries and learn about special dishes.",
    imageUrl: "https://picsum.photos/seed/food123/800/600",
    ageRange: "Ages 4-8",
    tag: {
      text: "Popular",
      type: "popular"
    }
  },
  {
    id: 2,
    title: "Amazing Monuments",
    description: "Build and learn about famous landmarks from every continent. Discover the stories behind these amazing structures!",
    imageUrl: "https://picsum.photos/seed/monuments456/800/600",
    ageRange: "Ages 6-10"
  },
  {
    id: 3,
    title: "Festival Fun",
    description: "Join celebrations around the world! Learn about special holidays and festivals from different cultures.",
    imageUrl: "https://picsum.photos/seed/festival789/800/600",
    ageRange: "Ages 5-9",
    tag: {
      text: "New",
      type: "new"
    }
  },
  {
    id: 4,
    title: "Global Games",
    description: "Play sports and games from different countries! Learn the rules and history of activities kids enjoy worldwide.",
    imageUrl: "https://picsum.photos/seed/games101/800/600",
    ageRange: "Ages 7-12"
  },
  {
    id: 5,
    title: "Musical Journey",
    description: "Listen, play, and create music from around the world! Discover instruments and songs from different cultures.",
    imageUrl: "https://picsum.photos/seed/music202/800/600",
    ageRange: "Ages 3-8"
  },
  {
    id: 6,
    title: "Dress Up World",
    description: "Explore traditional clothing from different countries! Learn about special outfits and costumes from around the globe.",
    imageUrl: "https://picsum.photos/seed/clothing303/800/600",
    ageRange: "Ages 4-9"
  }
];

export const features: Feature[] = [
  {
    icon: "MapPin",
    title: "Interactive World Map",
    description: "Explore different countries and regions through an engaging, interactive map designed for curious young minds.",
    color: "primary"
  },
  {
    icon: "Music2",
    title: "Relaxing Soundtracks",
    description: "Authentic music from around the world provides a calming atmosphere while enhancing cultural immersion.",
    color: "secondary"
  },
  {
    icon: "Gamepad2",
    title: "Cultural Challenges",
    description: "Fun mini-games and quizzes that teach children about traditions, foods, languages, and more from diverse cultures.",
    color: "accent"
  },
  {
    icon: "Users",
    title: "Family Multiplayer",
    description: "Play together with up to 4 family members, fostering shared learning experiences and quality time.",
    color: "green"
  },
  {
    icon: "Award",
    title: "Achievement System",
    description: "Earn badges and rewards as you discover new cultures, motivating continuous exploration and learning.",
    color: "purple"
  },
  {
    icon: "UserSquare",
    title: "Parent Dashboard",
    description: "Monitor your child's progress, customize learning paths, and access additional educational resources.",
    color: "red"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Mother of two",
    image: "https://picsum.photos/seed/sarah123/150/150",
    quote: "My kids look forward to our CultureQuest sessions every weekend. They're learning so much about different countries and traditions while having fun. The sound design is perfect - engaging but not overstimulating.",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    role: "Elementary teacher",
    image: "https://picsum.photos/seed/david456/150/150",
    quote: "As a teacher, I'm impressed by the educational depth of CultureQuest. The games are well-researched and present cultural information in a respectful and engaging way. I recommend it to all my students' parents.",
    rating: 5
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Parent & educator",
    image: "https://picsum.photos/seed/maria789/150/150",
    quote: "This app has been wonderful for my multilingual family. It helps my children connect with their heritage and learn about other cultures too. The audio pronunciations of words in different languages are especially helpful.",
    rating: 4.5
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Starter",
    price: "Free",
    description: "Perfect for families wanting to try CultureQuest.",
    features: [
      { text: "5 cultural games", included: true },
      { text: "Basic sound effects", included: true },
      { text: "Single player mode", included: true },
      { text: "Limited content updates", included: false }
    ],
    buttonText: "Get Started"
  },
  {
    id: 2,
    name: "Family",
    price: "$6.99",
    period: "/month",
    description: "The complete experience for the whole family.",
    features: [
      { text: "All 100+ cultural games", included: true },
      { text: "Full soundtrack library", included: true },
      { text: "Family multiplayer (up to 4)", included: true },
      { text: "Monthly content updates", included: true },
      { text: "Offline play", included: true }
    ],
    buttonText: "Start 7-Day Free Trial",
    popular: true
  },
  {
    id: 3,
    name: "Annual",
    price: "$59.99",
    period: "/year",
    description: "Save 30% with our annual family plan.",
    features: [
      { text: "All Family plan features", included: true },
      { text: "30% savings", included: true },
      { text: "Exclusive annual content", included: true },
      { text: "Priority support", included: true }
    ],
    buttonText: "Subscribe Annually"
  }
];

export const faqs: FAQ[] = [
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

export const soundTracks: SoundTrack[] = [
  {
    id: 1,
    title: "Asian Lullaby",
    source: "/api/audio/asian-lullaby",
    culture: "Japanese"
  },
  {
    id: 2,
    title: "African Drums",
    source: "/api/audio/african-drums",
    culture: "West African"
  },
  {
    id: 3,
    title: "European Folk",
    source: "/api/audio/european-folk",
    culture: "Celtic"
  }
];
