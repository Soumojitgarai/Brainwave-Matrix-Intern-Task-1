// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
}

export interface SubscriptionFormData {
  email: string;
}

// Game-related Types
export interface Game {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  ageRange: string;
  tag?: {
    text: string;
    type: 'popular' | 'new';
  };
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SoundTrack {
  id: number;
  title: string;
  source: string;
  culture: string;
}
