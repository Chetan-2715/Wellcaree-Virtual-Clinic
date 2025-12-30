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
    bio: [
      "8+ years of clinical experience in Classical Homoeopathy.",
      "MD in Homoeopathy with extensive hands-on training.",
      "Specialises in structured case evaluation for chronic ailments.",
      "Expertise in Constitutional Treatment & Long-term Healing.",
      "Consultant at two established clinics in Maharashtra."
    ],
    experience: "8+ Years",
    specialization: "Classical & Constitutional Homoeopathy",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&h=1000"
  },
  {
    name: "Dr. Harshada Rathod",
    title: "MD (Homoeopathy) | Consultant Homoeopathic Physician",
    bio: [
      "7+ years of expertise in Predictive Homoeopathy.",
      "University Rank Holder with a strong academic foundation.",
      "Specialises in complex chronic and congenital conditions.",
      "Focused on root-cause treatment & vitality restoration.",
      "Consultant at two exclusive clinics in Maharashtra."
    ],
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
      { id: "ra", name: "Rheumatoid Arthritis", description: "Autoimmune disorder affecting small joints.", symptoms: ["Morning stiffness", "Joint pain and swelling", "Redness and warmth", "Progressive deformity"] },
      { id: "oa", name: "Osteoarthritis", description: "Degenerative joint disease.", symptoms: ["Knee/hip pain", "Aggravated by movement", "Stiffness after rest", "Difficulty walking"] },
      { id: "gout", name: "Gout", description: "High uric acid causing sudden pain.", symptoms: ["Sudden severe joint pain", "Big toe redness/swelling", "Burning sensation"] },
      { id: "as", name: "Ankylosing Spondylitis", description: "Inflammatory arthritis affecting the spine.", symptoms: ["Chronic lower back pain", "Reduced spinal flexibility", "Early morning stiffness"] },
      { id: "spine", name: "Spondylosis & Sciatica", description: "Degenerative spinal changes.", symptoms: ["Cervical/Lumbar pain", "Nerve compression", "Radiating pain"] },
      { id: "frozen-shoulder", name: "Frozen Shoulder", description: "Adhesive Capsulitis.", symptoms: ["Stiffness", "Pain", "Limited range of motion"] }
    ]
  },
  {
    id: "digestive",
    title: "Digestive Disorders",
    subtitle: "Natural Homoeopathic Care for Gut & Digestion",
    icon: "Activity",
    conditions: [
      { id: "gerd", name: "Acidity & GERD", description: "Acid reflux and digestive distress.", symptoms: ["Burning sensation", "Sour belching", "Nausea", "Indigestion"] },
      { id: "ibs", name: "IBS", description: "Irritable Bowel Syndrome.", symptoms: ["Abdominal pain", "Bloating", "Alternating constipation/loose motion"] },
      { id: "piles", name: "Piles (Hemorrhoids)", description: "Anorectal disorders.", symptoms: ["Bleeding with stool", "Pain/Lump near anus", "Itching/Burning"] },
      { id: "fissure", name: "Anal Fissure", description: "Tear in anal lining.", symptoms: ["Severe cutting pain", "Burning after stool", "Fresh blood"] },
      { id: "fistula", name: "Anal Fistula", description: "Infected tunnel near anus.", symptoms: ["Recurrent pus discharge", "Pain/Swelling", "Non-healing wound"] },
      { id: "liver", name: "Fatty Liver", description: "Liver fat accumulation.", symptoms: ["Indigestion", "Abdominal discomfort", "Heaviness"] }
    ]
  },
  {
    id: "skin",
    title: "Skin Diseases",
    subtitle: "Safe & Long-Term Relief for Chronic Skin Problems",
    icon: "Sparkles",
    conditions: [
      { id: "eczema", name: "Eczema", description: "Inflammatory skin conditions.", symptoms: ["Intense itching", "Dry cracked skin", "Oozing", "Red patches"] },
      { id: "psoriasis", name: "Psoriasis", description: "Autoimmune skin scaling.", symptoms: ["Thick scaly lesions", "Dryness/Bleeding", "Silver scales"] },
      { id: "acne", name: "Acne & Pimples", description: "Hormonal and bacterial skin issues.", symptoms: ["Recurrent pimples", "Blackheads", "Marks and scars"] },
      { id: "urticaria", name: "Urticaria (Hives)", description: "Allergic skin reaction.", symptoms: ["Sudden itchy rashes", "Red raised patches", "Burning sensation"] },
      { id: "fungal", name: "Fungal Infections", description: "Ringworm and Tinea.", symptoms: ["Circular rashes", "Severe itching", "Redness"] },
      { id: "vitiligo", name: "Vitiligo", description: "Loss of skin pigment.", symptoms: ["White patches", "Sun sensitivity"] }
    ]
  },
  {
    id: "hair",
    title: "Hair & Scalp Problems",
    subtitle: "Root-Level Hair & Scalp Treatment",
    icon: "Scissors",
    conditions: [
      { id: "hairfall", name: "Hair Fall", description: "Excessive hair loss.", symptoms: ["Thinning of hair", "Receding hairline", "Clumps of hair falling"] },
      { id: "dandruff", name: "Dandruff", description: "Scalp flaking.", symptoms: ["Flaky scalp", "Itching", "White flakes"] },
      { id: "alopecia", name: "Alopecia", description: "Patchy hair loss.", symptoms: ["Round bald patches", "Sudden hair loss"] },
      { id: "grey", name: "Premature Greying", description: "Early greying of hair.", symptoms: ["Loss of hair pigment", "Dryness"] }
    ]
  },
  {
    id: "women",
    title: "Women's Health",
    subtitle: "Gentle & Effective Care for Hormonal Balance",
    icon: "Flower2",
    conditions: [
      { id: "pcos", name: "PCOS / PCOD", description: "Hormonal imbalance.", symptoms: ["Irregular periods", "Weight gain", "Facial hair", "Acne"] },
      { id: "menstrual", name: "Menstrual Disorders", description: "Dysmenorrhea and menorrhagia.", symptoms: ["Painful periods", "Heavy flow", "Mood swings"] },
      { id: "infertility", name: "Infertility", description: "Reproductive health issues.", symptoms: ["Difficulty conceiving", "Hormonal imbalance"] },
      { id: "fibroids", name: "Uterine Fibroids", description: "Noncancerous growths.", symptoms: ["Pelvic pain", "Heavy bleeding", "Frequent urination"] }
    ]
  },
  {
    id: "respiratory",
    title: "Respiratory Disorders",
    subtitle: "Immunity Boosting Treatment",
    icon: "Wind",
    conditions: [
      { id: "asthma", name: "Asthma", description: "Chronic breathing difficulties.", symptoms: ["Breathlessness", "Wheezing", "Chest tightness", "Night aggravation"] },
      { id: "allergy", name: "Allergic Rhinitis", description: "Nasal allergies.", symptoms: ["Frequent sneezing", "Runny nose", "Itchy eyes/throat"] },
      { id: "sinus", name: "Sinusitis", description: "Sinus infection.", symptoms: ["Headache", "Facial pain", "Nasal blockage"] },
      { id: "tonsils", name: "Tonsillitis", description: "Throat infection.", symptoms: ["Sore throat", "Difficulty swallowing", "Fever"] }
    ]
  },
  {
    id: "mental",
    title: "Mental Wellness",
    subtitle: "Mind–Body Healing",
    icon: "Brain",
    conditions: [
      { id: "anxiety", name: "Anxiety", description: "Excessive worry and fear.", symptoms: ["Restlessness", "Palpitations", "Disturbed sleep"] },
      { id: "depression", name: "Depression", description: "Persistent low mood.", symptoms: ["Loss of interest", "Fatigue", "Poor concentration"] },
      { id: "stress", name: "Stress Disorders", description: "Lifestyle induced stress.", symptoms: ["Tension headaches", "Irritability", "Digestive disturbances"] }
    ]
  },
  {
    id: "lifestyle",
    title: "Lifestyle Diseases",
    subtitle: "Long-Term Management",
    icon: "Dna",
    conditions: [
      { id: "diabetes", name: "Diabetes (Type 2)", description: "Metabolic disorder.", symptoms: ["Excessive thirst", "Frequent urination", "Fatigue"] },
      { id: "hypertension", name: "Hypertension", description: "High blood pressure.", symptoms: ["Headache", "Dizziness", "Palpitations"] },
      { id: "thyroid", name: "Thyroid Disorders", description: "Hypo/Hyperthyroidism.", symptoms: ["Weight changes", "Hair fall", "Mood changes"] },
      { id: "obesity", name: "Obesity", description: "Unhealthy weight gain.", symptoms: ["Breathlessness", "Joint pain", "Low energy"] }
    ]
  },
  {
    id: "child",
    title: "Child Health",
    subtitle: "Safe & Gentle Pediatric Care",
    icon: "Baby",
    conditions: [
      { id: "immunity", name: "Low Immunity", description: "Recurrent infections.", symptoms: ["Frequent colds", "Sore throat", "Poor appetite"] },
      { id: "development", name: "Developmental Issues", description: "Growth delays.", symptoms: ["ADHD", "Speech delay", "Bed wetting"] },
      { id: "colic", name: "Colic", description: "Severe abdominal pain.", symptoms: ["Crying", "Fussiness", "Gas"] }
    ]
  },
  {
    id: "renal",
    title: "Renal & Urinary",
    subtitle: "Kidney Health Care",
    icon: "Droplets",
    conditions: [
      { id: "stones", name: "Kidney Stones", description: "Renal calculi.", symptoms: ["Severe flank pain", "Burning urination", "Nausea"] },
      { id: "uti", name: "UTI", description: "Urinary Tract Infection.", symptoms: ["Frequent urination", "Pain/Incontinence", "Urgency"] }
    ]
  },
  {
    id: "cancer",
    title: "Types of Cancer",
    subtitle: "Supportive Homoeopathic Care",
    icon: "Activity",
    conditions: [
      { id: "breast", name: "Breast Cancer", description: "Cancer in breast tissue.", symptoms: ["Lump in breast", "Shape change", "Skin changes"] },
      { id: "lung", name: "Lung Cancer", description: "Cancer in lungs.", symptoms: ["Persistent cough", "Breathlessness", "Chest pain"] },
      { id: "prostate", name: "Prostate Cancer", description: "Cancer in prostate gland.", symptoms: ["Difficulty urinating", "Blood in urine"] },
      { id: "colon", name: "Colorectal Cancer", description: "Cancer in colon/rectum.", symptoms: ["Blood in stools", "Constipation/Diarrhea"] }
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