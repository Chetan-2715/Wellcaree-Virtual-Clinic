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
      "Dr. Vatsal Rathod, M.D. (Hom), is a highly dedicated homeopathic physician with over 8 years of clinical experience in managing a wide range of acute and chronic conditions. He completed his homeopathic education from reputed and leading institutions in Maharashtra, where he built a strong foundation in classical homeopathy.",
      "Deeply committed to the principles of homeopathy, Dr. Rathod has practiced with keen interest and dedication under the guidance of senior stalwarts in the field of homeopathy. This mentorship has significantly shaped his clinical approach, allowing him to combine classical wisdom with practical clinical insights.",
      "He has extensive experience in treating skin disorders, lifestyle-related diseases, and complex chronic conditions through individualized and holistic treatment plans. With a compassionate, patient-centric approach, Dr. Rathod focuses on identifying the root cause of illness and supporting long-term healing and overall well-being."
    ],
    experience: "8+ Years",
    specialization: "Classical & Constitutional Homoeopathy",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800&h=1000"
  },
  {
    name: "Dr. Harshada Rathod",
    title: "MD (Homoeopathy) | Consultant Homoeopathic Physician",
    bio: [
      "Dr. Harshada Rathod, M.D. (Hom), is a dedicated and compassionate homeopathic physician with over 7 years of clinical experience. An academically bright and committed scholar throughout her education in Maharashtra, she developed a deep interest in homeopathy from the very beginning of her medical journey.",
      "Driven by empathy toward the suffering of patients, Dr. Harshada Rathod chose homeopathy as a holistic healing science that focuses on treating diseases at their root cause. She has been actively learning and practicing classical homeopathy since her first year of study, which has helped her develop strong clinical insight and confidence in patient care.",
      "She has extensive experience in managing a wide range of acute and chronic conditions, with a special focus on women’s health concerns such as infertility, PCOD, menstrual disorders, and lifestyle-related diseases. Known for her patient-centric and empathetic approach, she emphasizes individualized treatment and long-term wellness.",
      "Dr. Harshada Rathod currently and successfully runs two homeopathic clinics in Maharashtra, providing trusted and personalized care to her patients."
    ],
    experience: "7+ Years",
    specialization: "Predictive Homoeopathy & Chronic Diseases",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800&h=1000"
  }
];

export const FAQS = [
  {
    question: "What is Wellcaree Virtual Clinic?",
    answer: "Wellcaree Virtual Clinic is an online homeopathic healthcare platform offering personalized consultations, treatment, and follow-up care through virtual appointments, allowing patients to receive expert homeopathic care from the comfort of their home."
  },
  {
    question: "How does online homeopathic consultation work?",
    answer: "After booking an appointment, you will consult with a qualified homeopathic doctor via video call or phone. A detailed case history is taken, following which a personalized treatment plan is prescribed. Medicines and follow-ups are guided accordingly."
  },
  {
    question: "Is online homeopathic consultation effective?",
    answer: "Yes. Homeopathy focuses on understanding the patient’s complete physical, mental, and emotional health. This detailed evaluation can be effectively done through online consultations, making virtual homeopathic care both safe and effective for many acute and chronic conditions."
  },
  {
    question: "Do I need to visit the clinic in person?",
    answer: "No. Wellcaree Virtual Clinic is a fully online clinic. Consultations, follow-ups, and guidance are provided virtually. In rare cases where physical examination is required, the doctor will guide you accordingly."
  },
  {
    question: "Are homeopathic medicines safe?",
    answer: "Homeopathic medicines are safe, gentle, and non-habit forming when prescribed by a qualified homeopathic physician. They are suitable for people of all age groups, including children and elderly patients."
  },
  {
    question: "How long does homeopathic treatment take to show results?",
    answer: "The response to treatment varies from person to person and depends on the nature, duration, and severity of the condition. Acute conditions may improve faster, while chronic conditions require regular follow-ups and long-term care."
  },
  {
    question: "Can homeopathy be taken along with other treatments?",
    answer: "In many cases, homeopathy can be taken alongside other treatments. However, it is important to inform your homeopathic doctor about any ongoing medications or therapies for proper guidance."
  },
  {
    question: "How are follow-ups managed?",
    answer: "Follow-ups are scheduled online at regular intervals. During follow-ups, treatment response is assessed, and medicines are continued or adjusted as needed to ensure steady progress."
  },
  {
    question: "How can I book an online consultation?",
    answer: "You can book an online consultation through our website by selecting a convenient time slot. Our team will assist you with appointment confirmation and consultation details."
  },
  {
    question: "Do you provide treatment for patients outside Maharashtra or India?",
    answer: "Yes. As an online clinic, Wellcaree Virtual Clinic provides consultation services to patients across different cities, states, and countries, subject to applicable regulations."
  },
  {
    question: "Is my personal and medical information kept confidential?",
    answer: "Absolutely. Patient privacy and data confidentiality are strictly maintained. All consultations and records are handled with complete professional discretion."
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
      {
        id: "ra",
        name: "Rheumatoid Arthritis",
        description: "Autoimmune disorder affecting small joints.",
        symptoms: ["Morning stiffness", "Joint pain and swelling", "Redness and warmth", "Progressive deformity"],
        price: "1999",
        tagline: "Get Your Rheumatoid Arthritis cured without Operation at just Rs 1999/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1999/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "oa",
        name: "Osteoarthritis",
        description: "Degenerative joint disease.",
        symptoms: ["Knee/hip pain", "Aggravated by movement", "Stiffness after rest", "Difficulty walking"],
        price: "1799",
        tagline: "Get Your Osteoarthritis cured without Operation at just Rs 1799/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1799/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "gout",
        name: "Gout",
        description: "High uric acid causing sudden pain.",
        symptoms: ["Sudden severe joint pain", "Big toe redness/swelling", "Burning sensation"],
        price: "1699",
        tagline: "Get Your Gout cured without Operation at just Rs 1699/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1699/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "as",
        name: "Ankylosing Spondylitis",
        description: "Inflammatory arthritis affecting the spine.",
        symptoms: ["Chronic lower back pain", "Reduced spinal flexibility", "Early morning stiffness"],
        price: "1999",
        tagline: "Get Your Ankylosing Spondylitis cured without Operation at just Rs 1999/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1999/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "spine",
        name: "Spondylosis & Sciatica",
        description: "Degenerative spinal changes.",
        symptoms: ["Cervical/Lumbar pain", "Nerve compression", "Radiating pain"],
        price: "1899",
        tagline: "Get Your Spondylosis & Sciatica cured without Operation at just Rs 1899/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1899/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "frozen-shoulder",
        name: "Frozen Shoulder",
        description: "Adhesive Capsulitis.",
        symptoms: ["Stiffness", "Pain", "Limited range of motion"],
        price: "1599",
        tagline: "Get Your Frozen Shoulder cured without Operation at just Rs 1599/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1599/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
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
        description: "Acid reflux and digestive distress.",
        symptoms: ["Burning sensation", "Sour belching", "Nausea", "Indigestion"],
        price: "1299",
        tagline: "Get Your Acidity & GERD cured without Operation at just Rs 1299/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1299/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "ibs",
        name: "IBS",
        description: "Irritable Bowel Syndrome.",
        symptoms: ["Abdominal pain", "Bloating", "Alternating constipation/loose motion"],
        price: "1699",
        tagline: "Get Your IBS cured without Operation at just Rs 1699/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1699/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "piles",
        name: "Piles (Hemorrhoids)",
        description: "Anorectal disorders.",
        symptoms: ["Bleeding with stool", "Pain/Lump near anus", "Itching/Burning"],
        price: "1899",
        tagline: "Get Your Piles cured without Operation at just Rs 1899/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1899/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "fissure",
        name: "Anal Fissure",
        description: "Tear in anal lining.",
        symptoms: ["Severe cutting pain", "Burning after stool", "Fresh blood"],
        price: "1799",
        tagline: "Get Your Anal Fissure cured without Operation at just Rs 1799/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1799/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "fistula",
        name: "Anal Fistula",
        description: "Infected tunnel near anus.",
        symptoms: ["Recurrent pus discharge", "Pain/Swelling", "Non-healing wound"],
        price: "1999",
        tagline: "Get Your Anal Fistula cured without Operation at just Rs 1999/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1999/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "liver",
        name: "Fatty Liver",
        description: "Liver fat accumulation.",
        symptoms: ["Indigestion", "Abdominal discomfort", "Heaviness"],
        price: "1499",
        tagline: "Get Your Fatty Liver cured without Operation at just Rs 1499/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1499/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
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
        description: "Inflammatory skin conditions.",
        symptoms: ["Intense itching", "Dry cracked skin", "Oozing", "Red patches"],
        price: "1699",
        tagline: "Get Your Eczema cured without Operation at just Rs 1699/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1699/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "psoriasis",
        name: "Psoriasis",
        description: "Autoimmune skin scaling.",
        symptoms: ["Thick scaly lesions", "Dryness/Bleeding", "Silver scales"],
        price: "2199",
        tagline: "Get Your Psoriasis cured without Operation at just Rs 2199/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 2199/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "acne",
        name: "Acne & Pimples",
        description: "Hormonal and bacterial skin issues.",
        symptoms: ["Recurrent pimples", "Blackheads", "Marks and scars"],
        price: "1399",
        tagline: "Get Your Acne & Pimples cured without Operation at just Rs 1399/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1399/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "urticaria",
        name: "Urticaria (Hives)",
        description: "Allergic skin reaction.",
        symptoms: ["Sudden itchy rashes", "Red raised patches", "Burning sensation"],
        price: "1599",
        tagline: "Get Your Urticaria (Hives) cured without Operation at just Rs 1599/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1599/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "fungal",
        name: "Fungal Infections",
        description: "Ringworm and Tinea.",
        symptoms: ["Circular rashes", "Severe itching", "Redness"],
        price: "1499",
        tagline: "Get Your Fungal Infections cured without Operation at just Rs 1499/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1499/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "vitiligo",
        name: "Vitiligo",
        description: "Loss of skin pigment.",
        symptoms: ["White patches", "Sun sensitivity"],
        price: "1999",
        tagline: "Get Your Vitiligo cured without Operation at just Rs 1999/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1999/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      }
    ]
  },
  {
    id: "hair",
    title: "Hair & Scalp Problems",
    subtitle: "Root-Level Hair & Scalp Treatment",
    icon: "Scissors",
    conditions: [
      {
        id: "hairfall",
        name: "Hair Fall",
        description: "Excessive hair loss.",
        symptoms: ["Thinning of hair", "Receding hairline", "Clumps of hair falling"],
        price: "1599",
        tagline: "Get Your Hair Fall cured without Operation at just Rs 1599/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1599/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "dandruff",
        name: "Dandruff",
        description: "Scalp flaking.",
        symptoms: ["Flaky scalp", "Itching", "White flakes"],
        price: "1299",
        tagline: "Get Your Dandruff cured without Operation at just Rs 1299/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1299/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "alopecia",
        name: "Alopecia",
        description: "Patchy hair loss.",
        symptoms: ["Round bald patches", "Sudden hair loss"],
        price: "1799",
        tagline: "Get Your Alopecia cured without Operation at just Rs 1799/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1799/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "grey",
        name: "Premature Greying",
        description: "Early greying of hair.",
        symptoms: ["Loss of hair pigment", "Dryness"],
        price: "1499",
        tagline: "Get Your Premature Greying cured without Operation at just Rs 1499/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1499/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
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
        id: "pcos",
        name: "PCOS / PCOD",
        description: "Hormonal imbalance.",
        symptoms: ["Irregular periods", "Weight gain", "Facial hair", "Acne"],
        price: "2299",
        tagline: "Get Your PCOS / PCOD cured without Operation at just Rs 2299/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 2299/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "menstrual",
        name: "Menstrual Disorders",
        description: "Dysmenorrhea and menorrhagia.",
        symptoms: ["Painful periods", "Heavy flow", "Mood swings"],
        price: "1499",
        tagline: "Get Your Menstrual Disorders cured without Operation at just Rs 1499/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1499/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "infertility",
        name: "Infertility",
        description: "Reproductive health issues.",
        symptoms: ["Difficulty conceiving", "Hormonal imbalance"],
        price: "2499",
        tagline: "Get Your Infertility cured without Operation at just Rs 2499/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 2499/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "fibroids",
        name: "Uterine Fibroids",
        description: "Noncancerous growths.",
        symptoms: ["Pelvic pain", "Heavy bleeding", "Frequent urination"],
        price: "1999",
        tagline: "Get Your Uterine Fibroids cured without Operation at just Rs 1999/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1999/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      }
    ]
  },
  {
    id: "respiratory",
    title: "Respiratory Disorders",
    subtitle: "Immunity Boosting Treatment",
    icon: "Wind",
    conditions: [
      {
        id: "asthma",
        name: "Asthma",
        description: "Chronic breathing difficulties.",
        symptoms: ["Breathlessness", "Wheezing", "Chest tightness", "Night aggravation"],
        price: "1699",
        tagline: "Get Your Asthma cured without Operation at just Rs 1699/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1699/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "allergy",
        name: "Allergic Rhinitis",
        description: "Nasal allergies.",
        symptoms: ["Frequent sneezing", "Runny nose", "Itchy eyes/throat"],
        price: "1599",
        tagline: "Get Your Allergic Rhinitis cured without Operation at just Rs 1599/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1599/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "sinus",
        name: "Sinusitis",
        description: "Sinus infection.",
        symptoms: ["Headache", "Facial pain", "Nasal blockage"],
        price: "1499",
        tagline: "Get Your Sinusitis cured without Operation at just Rs 1499/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1499/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "tonsils",
        name: "Tonsillitis",
        description: "Throat infection.",
        symptoms: ["Sore throat", "Difficulty swallowing", "Fever"],
        price: "1399",
        tagline: "Get Your Tonsillitis cured without Operation at just Rs 1399/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1399/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      }
    ]
  },
  {
    id: "mental",
    title: "Mental Wellness",
    subtitle: "Mind–Body Healing",
    icon: "Brain",
    conditions: [
      {
        id: "anxiety",
        name: "Anxiety",
        description: "Excessive worry and fear.",
        symptoms: ["Restlessness", "Palpitations", "Disturbed sleep"],
        price: "1999",
        tagline: "Get Your Anxiety cured without Operation at just Rs 1999/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1999/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "depression",
        name: "Depression",
        description: "Persistent low mood.",
        symptoms: ["Loss of interest", "Fatigue", "Poor concentration"],
        price: "2199",
        tagline: "Get Your Depression cured without Operation at just Rs 2199/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 2199/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "stress",
        name: "Stress Disorders",
        description: "Lifestyle induced stress.",
        symptoms: ["Tension headaches", "Irritability", "Digestive disturbances"],
        price: "1799",
        tagline: "Get Your Stress Disorders cured without Operation at just Rs 1799/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1799/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      }
    ]
  },
  {
    id: "lifestyle",
    title: "Lifestyle Diseases",
    subtitle: "Long-Term Management",
    icon: "Dna",
    conditions: [
      {
        id: "diabetes",
        name: "Diabetes (Type 2)",
        description: "Metabolic disorder.",
        symptoms: ["Excessive thirst", "Frequent urination", "Fatigue"],
        price: "1599",
        tagline: "Get Your Diabetes (Type 2) cured without Operation at just Rs 1599/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1599/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "hypertension",
        name: "Hypertension",
        description: "High blood pressure.",
        symptoms: ["Headache", "Dizziness", "Palpitations"],
        price: "1499",
        tagline: "Get Your Hypertension cured without Operation at just Rs 1499/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1499/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "thyroid",
        name: "Thyroid Disorders",
        description: "Hypo/Hyperthyroidism.",
        symptoms: ["Weight changes", "Hair fall", "Mood changes"],
        price: "1699",
        tagline: "Get Your Thyroid Disorders cured without Operation at just Rs 1699/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1699/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "obesity",
        name: "Obesity",
        description: "Unhealthy weight gain.",
        symptoms: ["Breathlessness", "Joint pain", "Low energy"],
        price: "1899",
        tagline: "Get Your Obesity cured without Operation at just Rs 1899/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1899/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      }
    ]
  },
  {
    id: "child",
    title: "Child Health",
    subtitle: "Safe & Gentle Pediatric Care",
    icon: "Baby",
    conditions: [
      {
        id: "immunity",
        name: "Low Immunity",
        description: "Recurrent infections.",
        symptoms: ["Frequent colds", "Sore throat", "Poor appetite"],
        price: "1299",
        tagline: "Get Your Low Immunity cured without Operation at just Rs 1299/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1299/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "development",
        name: "Developmental Issues",
        description: "Growth delays.",
        symptoms: ["ADHD", "Speech delay", "Bed wetting"],
        price: "1999",
        tagline: "Get Your Developmental Issues cured without Operation at just Rs 1999/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1999/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "colic",
        name: "Colic",
        description: "Severe abdominal pain.",
        symptoms: ["Crying", "Fussiness", "Gas"],
        price: "1199",
        tagline: "Get Your Colic cured without Operation at just Rs 1199/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1199/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      }
    ]
  },
  {
    id: "renal",
    title: "Renal & Urinary",
    subtitle: "Kidney Health Care",
    icon: "Droplets",
    conditions: [
      {
        id: "stones",
        name: "Kidney Stones",
        description: "Renal calculi.",
        symptoms: ["Severe flank pain", "Burning urination", "Nausea"],
        price: "1899",
        tagline: "Get Your Kidney Stones cured without Operation at just Rs 1899/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1899/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "uti",
        name: "UTI",
        description: "Urinary Tract Infection.",
        symptoms: ["Frequent urination", "Pain/Incontinence", "Urgency"],
        price: "1399",
        tagline: "Get Your UTI cured without Operation at just Rs 1399/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 1399/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      }
    ]
  },
  {
    id: "cancer",
    title: "Types of Cancer",
    subtitle: "Supportive Homoeopathic Care",
    icon: "Activity",
    conditions: [
      {
        id: "breast",
        name: "Breast Cancer",
        description: "Cancer in breast tissue.",
        symptoms: ["Lump in breast", "Shape change", "Skin changes"],
        price: "3999",
        tagline: "Get Supportive Care for Breast Cancer at just Rs 3999/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 3999/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "lung",
        name: "Lung Cancer",
        description: "Cancer in lungs.",
        symptoms: ["Persistent cough", "Breathlessness", "Chest pain"],
        price: "3999",
        tagline: "Get Supportive Care for Lung Cancer at just Rs 3999/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 3999/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "prostate",
        name: "Prostate Cancer",
        description: "Cancer in prostate gland.",
        symptoms: ["Difficulty urinating", "Blood in urine"],
        price: "3999",
        tagline: "Get Supportive Care for Prostate Cancer at just Rs 3999/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 3999/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      },
      {
        id: "colon",
        name: "Colorectal Cancer",
        description: "Cancer in colon/rectum.",
        symptoms: ["Blood in stools", "Constipation/Diarrhea"],
        price: "3999",
        tagline: "Get Supportive Care for Colorectal Cancer at just Rs 3999/-",
        features: ["Online Consultation at comfort of your home", "30 days medicine at just Rs 3999/-", "Free Home Delivery Throughout India.", "Free Diet Chart"]
      }
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