export interface Condition {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  price?: string;
  tagline?: string;
  features?: string[];
  image?: string;
}

export interface ConditionCategory {
  id: string;
  title: string;
  subtitle: string;
  conditions: Condition[];
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Doctor {
  name: string;
  title: string;
  bio: string[];
  experience: string;
  specialization: string;
  image: string;
}

export interface Branch {
  name: string;
  address: string;
  phone: string;
  mapLink: string;
}
