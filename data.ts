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
    phone: "+91 9175930155",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Hiramoti+tower,+Old+Vidi+gharkul,+Solapur"
  },
  {
    name: "BARSHI Branch",
    address: "Near Jagdale Mama Hospital, Kurudwadi road, Barshi - 413401",
    phone: "+91 9175930155",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Jagdale+Mama+Hospital,+Kurudwadi+road,+Barshi"
  }
];

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Vatsal Rathod",
    title: "MD (Homoeopathy) | Consultant Homoeopathic Physician",
    bio: "Dr. Vatsal Rathod is an experienced homoeopathic physician with over 8 years of clinical practice. Known for his structured case evaluation and ethical approach, he practices classical homoeopathy with a strong emphasis on constitutional treatment.",
    experience: "8+ Years",
    specialization: "Classical & Constitutional Homoeopathy",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&h=1000"
  },
  {
    name: "Dr. Harshada Rathod",
    title: "MD (Homoeopathy) | Consultant Homoeopathic Physician",
    bio: "Dr. Harshada Rathod is a distinguished homoeopathic physician specializing in predictive homoeopathy for complex chronic and congenital conditions. She emphasizes long-term restoration of health rather than temporary symptom relief.",
    experience: "7+ Years",
    specialization: "Predictive Homoeopathy & Chronic Diseases",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800&h=1000"
  }
];

// FULL CATEGORY LIST FROM PROMPT
export const CATEGORIES: ConditionCategory[] = [
  {
    id: "joint-bone",
    title: "Joint & Bone Problems",
    subtitle: "Best Homoeopathic Treatment for Joint Pain & Arthritis",
    icon: "Bone",
    conditions: [
      { id: "ra", name: "Rheumatoid Arthritis", description: "Autoimmune disorder affecting small joints.", symptoms: ["Morning stiffness", "Joint pain and swelling", "Progressive deformity"] },
      { id: "oa", name: "Osteoarthritis", description: "Degenerative joint disease.", symptoms: ["Knee/hip pain", "Aggravated by movement", "Stiffness after rest"] },
      { id: "gout", name: "Gout", description: "High uric acid causing sudden pain.", symptoms: ["Big toe redness", "Severe burning pain", "Recurrent attacks"] },
      { id: "as", name: "Ankylosing Spondylitis", description: "Inflammatory arthritis affecting the spine.", symptoms: ["Chronic lower back pain", "Reduced spinal flexibility", "Early morning stiffness"] },
      { id: "spine", name: "Spondylosis & Sciatica", description: "Degenerative spinal changes.", symptoms: ["Cervical/Lumbar pain", "Nerve compression", "Radiating pain"] }
    ]
  },
  {
    id: "digestive",
    title: "Digestive Disorders",
    subtitle: "Natural Homoeopathic Care for Gut & Digestion",
    icon: "Activity",
    conditions: [
      { id: "gerd", name: "Acidity & GERD", description: "Acid reflux and digestive distress.", symptoms: ["Burning chest/throat", "Sour belching", "Nausea"] },
      { id: "ibs", name: "IBS", description: "Irritable Bowel Syndrome.", symptoms: ["Alternating constipation/loose motion", "Bloating", "Stress aggravation"] },
      { id: "piles", name: "Piles & Fissures", description: "Anorectal disorders treated non-surgically.", symptoms: ["Bleeding with stool", "Severe cutting pain", "Itching/Burning"] },
      { id: "liver", name: "Liver & Gallbladder", description: "Fatty liver and gallstone issues.", symptoms: ["Indigestion", "Abdominal discomfort", "Heaviness"] }
    ]
  },
  {
    id: "skin",
    title: "Skin Diseases",
    subtitle: "Safe & Long-Term Relief for Chronic Skin Problems",
    icon: "Sparkles",
    conditions: [
      { id: "eczema", name: "Eczema & Dermatitis", description: "Inflammatory skin conditions.", symptoms: ["Intense itching", "Dry cracked skin", "Oozing"] },
      { id: "psoriasis", name: "Psoriasis", description: "Autoimmune skin scaling.", symptoms: ["Thick scaly lesions", "Bleeding cracks", "Silver scales"] },
      { id: "acne", name: "Acne & Pimples", description: "Hormonal and bacterial skin issues.", symptoms: ["Recurrent pimples", "Blackheads", "Scars"] },
      { id: "fungal", name: "Fungal Infections", description: "Ringworm and Tinea.", symptoms: ["Circular rashes", "Severe itching", "Redness"] },
      { id: "vitiligo", name: "Vitiligo", description: "Loss of skin pigment.", symptoms: ["White patches", "Sun sensitivity"] }
    ]
  },
  {
    id: "women",
    title: "Women's Health",
    subtitle: "Gentle & Effective Care for Hormonal Balance",
    icon: "Flower2",
    conditions: [
      { id: "pcos", name: "PCOS / PCOD", description: "Hormonal imbalance.", symptoms: ["Irregular periods", "Weight gain", "Facial hair"] },
      { id: "menstrual", name: "Menstrual Disorders", description: "Dysmenorrhea and menorrhagia.", symptoms: ["Painful periods", "Heavy flow", "Mood swings"] },
      { id: "infertility", name: "Infertility & Fibroids", description: "Reproductive health issues.", symptoms: ["Difficulty conceiving", "Uterine growths", "Pelvic pain"] }
    ]
  },
  {
    id: "respiratory",
    title: "Respiratory Disorders",
    subtitle: "Immunity Boosting Treatment",
    icon: "Wind",
    conditions: [
      { id: "asthma", name: "Asthma & Bronchitis", description: "Chronic breathing difficulties.", symptoms: ["Wheezing", "Breathlessness", "Night aggravation"] },
      { id: "allergy", name: "Allergic Rhinitis", description: "Nasal allergies.", symptoms: ["Sneezing", "Runny nose", "Itchy eyes"] },
      { id: "sinus", name: "Sinusitis & Tonsillitis", description: "Infections of upper respiratory tract.", symptoms: ["Headache", "Throat pain", "Blockage"] }
    ]
  },
  {
    id: "mental",
    title: "Mental Wellness",
    subtitle: "Mind–Body Healing",
    icon: "Brain",
    conditions: [
      { id: "anxiety", name: "Anxiety & Depression", description: "Emotional health management.", symptoms: ["Excessive worry", "Low mood", "Sleep disturbance"] },
      { id: "stress", name: "Stress Disorders", description: "Lifestyle induced stress.", symptoms: ["Tension headaches", "Irritability", "Fatigue"] }
    ]
  },
  {
    id: "lifestyle",
    title: "Lifestyle Diseases",
    subtitle: "Long-Term Management",
    icon: "Dna",
    conditions: [
      { id: "diabetes", name: "Diabetes & Hypertension", description: "Metabolic and cardiovascular support.", symptoms: ["High blood sugar", "High BP", "Fatigue"] },
      { id: "thyroid", name: "Thyroid Disorders", description: "Hypo/Hyperthyroidism.", symptoms: ["Weight changes", "Hair fall", "Mood changes"] }
    ]
  },
  {
    id: "child",
    title: "Child Health",
    subtitle: "Safe & Gentle Pediatric Care",
    icon: "Baby",
    conditions: [
      { id: "immunity", name: "Low Immunity", description: "Recurrent infections in kids.", symptoms: ["Frequent colds", "Tonsillitis", "Adenoids"] },
      { id: "development", name: "Developmental Issues", description: "Growth and behavioral issues.", symptoms: ["ADHD", "Speech delay", "Bed wetting"] }
    ]
  },
  {
    id: "renal",
    title: "Renal & Urinary",
    subtitle: "Kidney Health Care",
    icon: "Droplets",
    conditions: [
      { id: "stones", name: "Kidney Stones", description: "Renal calculi.", symptoms: ["Severe flank pain", "Burning urination", "Nausea"] },
      { id: "uti", name: "UTI & Prostate", description: "Urinary infections and prostate enlargement.", symptoms: ["Frequent urination", "Pain", "Urgency"] }
    ]
  }
];

export const WORKFLOW = [
  { step: 1, title: "Book Appointment", description: "Schedule a time via our portal." },
  { step: 2, title: "Fill Case History", description: "Provide detailed health history." },
  { step: 3, title: "Consultation", description: "Video/Phone call with our experts." },
  { step: 4, title: "Medicine Delivery", description: "Medicines couriered to your doorstep." },
  { step: 5, title: "Follow-ups", description: "Continuous monitoring of progress." }
];