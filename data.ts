import { ConditionCategory, Doctor, Branch } from './types';

export const CLINIC_NAME = "Wellcaree Virtual Clinic";

export const TAGLINES = [
  "Healing with Care, Anytime, Anywhere",
  "Trusted Homoeopathy at your Fingertips",
  "WELLNESS begins with WELLCAREE"
];

export const BRANCHES: Branch[] = [
  {
    name: "SOLAPUR Branch",
    address: "Hiramoti tower, Old Vidi gharkul, Solapur - 413006",
    phone: "+91 9175930155"
  },
  {
    name: "BARSHI Branch",
    address: "Near Jagdale Mama Hospital, Kurudwadi road, Barshi - 413401",
    phone: "+91 9175930155"
  }
];

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Vatsal Rathod",
    title: "MD (Homoeopathy) | Consultant Homoeopathic Physician",
    bio: "Dr. Vatsal Rathod is an experienced homoeopathic physician with over 8 years of clinical practice, offering personalised and classical homoeopathic care focused on accuracy, ethics, and long-term healing. He completed his MD from a reputed institution in Maharashtra and strengthened his skills under senior physicians in Mumbai and Pune.",
    experience: "8+ Years",
    specialization: "Classical & Constitutional Homoeopathy",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&h=1000"
  },
  {
    name: "Dr. Harshada Rathod",
    title: "MD (Homoeopathy) | Consultant Homoeopathic Physician",
    bio: "Dr. Harshada Rathod is a distinguished homoeopathic physician with over 7 years of clinical practice. She specializes in predictive homoeopathy for complex chronic and congenital conditions, emphasizing long-term restoration of health rather than temporary symptom relief.",
    experience: "7+ Years",
    specialization: "Predictive Homoeopathy & Chronic Diseases",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800&h=1000"
  }
];

export const CATEGORIES: ConditionCategory[] = [
  {
    id: "joint-bone",
    title: "Joint & Bone Problems",
    subtitle: "Best Homoeopathic Treatment for Joint Pain & Arthritis",
    icon: "Bone",
    conditions: [
      {
        id: "ra",
        name: "Rheumatoid Arthritis",
        description: "Morning stiffness, joint pain, and swelling commonly affecting small joints.",
        symptoms: ["Morning stiffness (small joints)", "Joint pain and swelling", "Redness and warmth", "Progressive joint deformity"]
      },
      {
        id: "oa",
        name: "Osteoarthritis",
        description: "Degenerative joint disease affecting knees, hips, or spine.",
        symptoms: ["Knee, hip or spine pain", "Pain aggravated by movement", "Joint stiffness after rest", "Difficulty walking or climbing stairs"]
      }
    ]
  },
  {
    id: "digestive",
    title: "Digestive Disorders",
    subtitle: "Natural Homoeopathic Care for Gut & Digestion",
    icon: "Activity",
    conditions: [
      {
        id: "gerd",
        name: "Acidity & GERD",
        description: "Burning sensation in the chest or throat due to acid reflux.",
        symptoms: ["Burning in chest/throat", "Sour belching", "Indigestion", "Nausea and heaviness"]
      }
    ]
  },
  {
    id: "skin",
    title: "Skin Diseases",
    subtitle: "Safe & Long-Term Relief for Chronic Skin Problems",
    icon: "Sparkles",
    conditions: [
      {
        id: "eczema",
        name: "Eczema",
        description: "Inflammatory skin condition causing itching and dryness.",
        symptoms: ["Intense itching", "Dry, cracked skin", "Red inflamed patches", "Oozing in severe cases"]
      }
    ]
  },
  {
    id: "women",
    title: "Women's Health",
    subtitle: "Gentle & Effective Care for Hormonal Balance",
    icon: "Flower2",
    conditions: [
      {
        id: "pcod",
        name: "PCOS / PCOD",
        description: "Hormonal disorder common among women of reproductive age.",
        symptoms: ["Irregular or delayed periods", "Weight gain", "Acne and hair fall", "Excess facial hair"]
      }
    ]
  }
];

export const WORKFLOW = [
  { step: 1, title: "Book Appointment", description: "Schedule a time that works for you via our portal." },
  { step: 2, title: "Fill Case History", description: "Provide detailed information about your health history." },
  { step: 3, title: "Consultation", description: "Video or phone consultation with our expert doctors." },
  { step: 4, title: "Medicine Delivery", description: "Personalised homoeopathic medicines couriered to your doorstep." },
  { step: 5, title: "Regular Follow-ups", description: "Continuous monitoring of your healing progress." }
];