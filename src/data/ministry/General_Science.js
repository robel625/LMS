import gs_exp_7 from './G8_General_Science_images/gs_exp_7.png';
import gs_exp_59 from './G8_General_Science_images/gs_exp_59.png';
import gs_que_59 from './G8_General_Science_images/gs_que_59.png'

export default General_ScienceG6_Ministry_2015 = [
  {
    id: "h1",
    Number_of_Questions: "60 Questions",
    Time_Allowed: "1 hour",
  },
  {
    id: 1,
    question: "Which one of the following is a derived unit of measurement?",
    options: ["Cubic meter", "Kilogram", "Second", "Meter"],
    correct_option: "Cubic meter",
    explanation:"Physical quantities which depend on one or more fundamental quantities for their measurements are called derived quantities."+
    "Speed, area,volume, density and force are examples of derived quantities."
  },

  // explanation:

  // Cubic meter (m³) is a derived unit of measurement for volume. It is obtained by multiplying the base unit of length, meter (m), by itself three times.
  // Kilogram (kg) is the base unit of mass in the International System of Units (SI).
  // Second (s) is the base unit of time in SI.
  // Meter (m) is the base unit of length in SI.
  // Therefore, the only derived unit among the options is cubic meter.
  {
    id: 2,
    question:
      "The distance from Arat kilo to Kotebe is measured to be 10 km. This distance is equal to:",
    options: ["10 m", "100 m", "1,000 m", "10,000 m"],
    correct_option: "10,000 m",
    explanation:"1 kilometer (km) is equal to 1000 meters (m)."+ 
    "So, if the distance from Arat Kilo to Kotebe is 10 kilometers, it is equal to:10 km = 10,000 meters"
  },
  {
    id: 3,
    question:
      "The actual mass of the block is 5 kg. If you measure the mass of this block twice to get 2.5 kg and 2.6 kg values, this measurement is:",
    options: [
      "neither precise nor accurate",
      "precise but not accurate",
      "accurate but not precise",
      "Both accurate and precise",
    ],
    correct_option: "precise but not accurate",
    explanation:"Precision refers to how close measurements are to each other, while accuracy refers to how close measurements are to the true or accepted value."+
    "In this case:The measured values are 2.5 kg and 2.6 kg, which are close to each other."+
    "However, they are both far from the actual mass of 5 kg."
  },
  {
    id: 4,
    question:
      "While looking for a solution to a problem, a person using the scientific method begins the investigation process with:",
    options: [
      "developing a hypothesis",
      "testing the hypothesis",
      "observing the problem",
      "analyzing the results",
    ],
    correct_option: "observing the problem",
    explanation:"The scientific method is a systematic approach used to investigate natural phenomena, solve problems, and answer questions. It typically consists of several steps, which are often described as follows: \n"+
    "1. Observation: The process begins with observing a phenomenon or identifying a problem. This observation could come from everyday experiences, previous research, or curiosity about the natural world. For example, observing that plants grow towards sunlight or noticing a relationship between smoking and lung cancer. \n"+
    `2. Formulating a Hypothesis: After observing the problem, a scientist formulates a hypothesis. A hypothesis is a proposed explanation for the observed phenomenon or problem. It's an educated guess based on available evidence and prior knowledge. For instance, if someone observes that plants seem to grow taller with more sunlight, they might hypothesize that "plants grow taller when exposed to more sunlight." \n`+
    "3. Testing the Hypothesis: Once a hypothesis is formulated, it's tested through experimentation or further observation. This step involves designing and conducting experiments or studies to gather data and evidence that either supports or refutes the hypothesis. Continuing with the plant growth example, an experiment might involve growing two groups of plants under different amounts of sunlight and measuring their height after a certain period. \n"+
    "4. Analyzing the Results: After conducting experiments or making observations, scientists analyze the data they've collected. This analysis helps determine whether the results support or contradict the hypothesis. It involves statistical analysis, comparing data, and drawing conclusions based on evidence. \n"+
    "5. Drawing Conclusions: Based on the analysis of results, scientists draw conclusions about the hypothesis. If the results support the hypothesis, it may become a theory or a law in science, depending on the level of evidence and repeatability. If the results do not support the hypothesis, the scientist may revise the hypothesis and repeat the process.\n" +
    "6. So, in summary, the scientific method begins with observing the problem. This observation leads to the formulation of a hypothesis, which is then tested, and the results are analyzed to draw conclusions."
  },

  {
    id: 5,
    question:
      "Which one of the following components comes before others in implementing a scientific method?",
    options: [
      "developing a hypothesis",
      "testing the hypothesis",
      "Background research",
      "analyzing the results",
    ],
    correct_option: "Background research",
    explanation:"Please Refer Question No 4"
  },

  {
    id: 6,
    question: "The last step in the scientific investigation process is:",
    options: [
      "analyzing the result",
      "close observation",
      "testing of the hypothesis",
      "communicating the results",
    ],
    correct_option: "communicating the results",
    explanation:"After conducting experiments, analyzing the results, and drawing conclusions, scientists communicate their findings to the scientific community and the public. This communication is crucial for sharing knowledge, validating results, and advancing scientific understanding."+ 
    "It often involves publishing research papers, presenting findings at conferences, and discussing results with peers."
  },

  {
    id: 7,
    question:
      "Which one of the following is CORRECT about discreteness theory about nature of matter?",
    options: [
      "Matter is infinitely divisible.",
      "It was proposed by Democritus.",
      "Rejects the existence of atoms.",
      "It was proposed by Aristotle.",
    ],
    correct_option: "It was proposed by Democritus.",
    explanation_Image: gs_exp_7
  },

  {
    id: 8,
    question:
      "Relative masses of proton, neutron and electron respectively are:",
    options: ["1, 1, 0", "1, 0, 1", "0, 1, 1", "1, 1, 1"],
    correct_option: "1, 1, 0",
    explanation:"The mass of a proton is approximately 1 atomic mass unit (amu). \n"+
    "The mass of a neutron is also approximately 1 atomic mass unit (amu). \n"+
    "The mass of an electron is significantly smaller compared to protons and neutrons, and it is often considered negligible compared to them in most contexts, so it is typically represented as 0 relative to the mass of protons and neutrons."
  },
  {
    id: 9,
    question:
      "The mass number of Sodium atom is 23 and its atomic number is 11. The number of electrons, neutrons and protons respectively are:",
    options: [
      "11, 11, 12",
      "11, 12, 11",
      "12, 11, 11", 
      "11, 23, 34",
    ],
    correct_option: "11, 12, 11",
    explanation:"The atomic number (Z) of an element indicates the number of protons in its nucleus. For sodium, with an atomic number of 11, it has 11 protons. \n"+
    "The mass number (A) of an atom is the total number of protons and neutrons in its nucleus. Since sodium has a mass number of 23 and 11 protons, the number of neutrons is calculated by subtracting the number of protons from the mass number: \n"+
      "23−11=12. \n"+
    "The number of electrons in a neutral atom equals the number of protons. Therefore, sodium with 11 protons also has 11 electrons."
  },
  {
    id: 10,
    question: "Which one of the following molecules is polyatomic?",
    options: ["N2", "CO2", "O3", "He"],
    correct_option: "CO2",
    explanation:"A polyatomic molecule consists of two or more different atoms.",
  },
  {
    id: 11,
    question: "Inorganic compounds are compounds that do not contain:",
    options: [
      "Nitrogen",
      "Phosphorus",
      "Oxygen",
      "Carbon", // Inorganic compounds can contain all of the other choices
    ],
    correct_option: "Carbon",
    explanation:"Inorganic compounds can contain all of the other choices"
  },
  {
    id: 12,
    question:
      "General formula for class of hydrocarbons called Alkenes is given by:",
    options: ["CnH2n-1", "CnH2n+2", "CnH2n-2, CnH2n"],
    correct_option: "CnH2n",
    explanation:"Alkenes are hydrocarbons that have the general formula CnH2n,where, n is the number of carbon atoms present, n = 2, 3…"
  },
  {
    id: 13,
    question: "A compound with chemical formula of C4H10 belongs to:",
    options: ["Alkanes", "Carbonates", "Alkenes", "Alkynes"],
    correct_option: "Alkanes",
    explanation:"Alkanes are hydrocarbons that have the general formula CnH2n+2,where, n is the number of carbon atoms present, n = 1, 2, 3…"
  },
  {
    id: 14,
    question:
      "Which one of the following series of hydrocarbon compounds can be called a homologous series?",
    options: [
      "CH2, C2H6, C3H8",
      "CH2, C2H4, C3H6",
      "CH2, C3H6, C4H8",
      "CH2, C2H6, C3H6", // Missing info in option D
    ],
    correct_option: "CH2, C2H6, C3H8", // Homologous series have consecutive carbon numbers differing by CH2
    explanation:"Homologous series have consecutive carbon numbers differing by CH2"
},
  {
    id: 15,
    question:
      "If you burn Magnesium in your school's chemistry laboratory, the resulting compound is:",
    options: [
      "Non-metallic oxide",
      "Acidic oxide",
      "Hydro-Oxide",
      "Metallic Oxide",
    ],
    correct_option: "Metallic Oxide", // Magnesium is a metal, and burning it with oxygen results in a metallic oxide
    explanation:"Magnesium is a metal, and burning it with oxygen results in a metallic oxide"
},
  {
    id: 16,
    question:
      "Which one of the following Oxides forms acid or acidic solution when it reacts with water?",
    options: ["CO2", "CaO", "MgO", "Na2O"],
    correct_option: "CO2", // Carbon dioxide (CO2) reacts with water to form carbonic acid (H2CO3)
    explanation:"Carbon dioxide (CO2) reacts with water to form carbonic acid (H2CO3) because it is non metalic oxide"
},
  {
    id: 17,
    question:
      "Identify a property that correctly describes bases. Base reacts with:",
    options: [
      "water to form salt",
      "salt to form acid",
      "base to form salt",
      "acid to form salt",
    ],
    correct_option: "acid to form salt", // Bases react with acids to form salts
    explanation:"a base is a substance which release hydroxide(OH-) ion. \n"+
    "When a base reacts with an acid, they undergo a neutralization reaction, resulting in the formation of a salt and water."
},
  {
    id: 18,
    question: "Bases are characterized by releasing ions when in a solution.",
    options: ["H+", "H-", "OH-", "OH+"],
    correct_option: "OH-",
    explanation:"Bases release hydroxide (OH-) ions in solution"
  },
  {
    id: 19,
    question:
      "A chemical formula for Magnesium Chloride salt with cation Mg2+ and anion Cl- is given by:",
    options: ["MgCl", "MgCl2", "Mg2Cl", "MgCl3"],
    correct_option: "MgCl2", // MgCl2 is the correct formula for Magnesium Chloride
    explanation:"Magnesium has a 2+ charge (Mg²⁺), and chlorine has a 1- charge (Cl⁻). \n"+
    "To balance the charges, one Mg²⁺ ion combines with two Cl⁻ ions. \n"+
    "Therefore, the chemical formula becomes MgCl2, indicating one magnesium ion (Mg²⁺) and two chloride ions (Cl⁻)"
},
  {
    id: 20,
    question:
      "Which one of the following is NOT among the components of human integumentary system?",
    options: ["Heart", "Skin", "Hair", "Nail"],
    correct_option: "Heart", 
    explanation:"Heart is part of the circulatory system, not the integumentary system (skin, hair, nails)"
},
  {
    id: 21,
    question:
      "A human skin disorder with symptoms of itchy welts that are raised up from the normal layer of the skin is:",
    options: ["Acne", "Hives", "Warts", "Eczema"],
    correct_option: "Hives", // Hives is characterized by itchy welts, while the others have different symptoms
    explanation:"Hives are itchy welts that are raised up from the normal layer of the skin. \n"+
    "It is frequently caused by allergic reactions in the body but it also caused by outside factors such as stress, illnesses, or tight clothes. "
},
  {
    id: 22,
    question:
      "The ability of muscle to forcefully shorten, for performing its function is:",
    options: ["Elasticity", "Extensibility", "Excitability", "Contractility"],
    correct_option: "Contractility",
    explanation:"Contractility is the ability of muscle cells to forcefully shorten. "
  },
  {
    id: 23,
    question:
      "A muscular disorder manifested by an injury to a muscle or a tendon is:",
    options: [
      "muscular strength",
      "muscular dystrophy",
      "muscular strain",
      "muscular weakness",
    ],
    correct_option: "muscular strain",
    explanation:"Muscular strain is an injury to muscle or tendon, while the others describe different conditions"
   
},
  {
    id: 24,
    question: "A human body's blood forming tissue cancer is called:",
    options: ["leukemia", "osteoarthritis", "osteopenia", "fracture"],
    correct_option: "osteopenia", // Leukemia is cancer of blood-forming tissues, while the others are bone-related conditions
  },
  {
    id: 25,
    question:
      "In which one of the following structural components does digestion begins?",
    options: ["Mouth", "Stomach", "Small intestine", "Esophagus"],
    correct_option: "Mouth", 
     explanation:"Digestion begins in the mouth with mechanical and chemical breakdown of food"
      },
  {
    id: 26,
    question:
      "A disorder in digestive system that is commonly caused by lack of fiber food and enough water is:",
    options: ["gastritis", "constipation", "diarrhea", "peptic ulcer"],
    correct_option: "constipation",   
    explanation: "Constipation is caused by lack of fiber and water, while the others have different causes"
       },
  {
    id: 27,
    question:
      "A disease that is NOT grouped under disorders of respiratory system is:",
    options: ["Asthma", "Influenza", "Bronchitis", "Leukemia"],
    correct_option: "Leukemia", 
    explanation:"Leukemia is a blood cancer, not a respiratory disorder"
  },
  {
    id: 28,
    question: "You can verify the presence of CO2 in exhaled air by its:",
    options: [
      "reaction with pure water",
      "visibility in the laboratory",
      "reaction with lime water (limewater)",
      "reaction with hydrogen",
    ],
    correct_option: "reaction with lime water (limewater)", // Limewater turns cloudy when CO2 is present
    explanation:"When carbon dioxide (CO2) reacts with lime water (calcium hydroxide solution), it forms a white precipitate of calcium carbonate. \n"+
    "This reaction is used as a test for the presence of CO2 gas. The appearance of the white precipitate confirms the presence of CO2. \n"+
    "The chemical equation for this reaction is: CO2 + Ca(OH)2 → CaCO3 + H2O"
  },
  {
    id: 29,
    question:
      "The major function of the left side of the heart in blood circulation is that it:",
    options: [
      "gets oxygenated blood but the right side pumps deoxygenated blood.",
      "gets deoxygenated blood but the right side pumps oxygenated blood.",
      "pumps deoxygenated blood but the right side gets oxygenated blood.",
      "pumps oxygenated blood but the right side gets deoxygenated blood.",
    ],
    correct_option:"pumps oxygenated blood but the right side gets deoxygenated blood.",
      explanation:"In circulation systems the left side of the heart is always pump oxygenated blood"+ 
      "while the right side of the heart receives the deoxygenated blood."
  },
  {
    id: 30,
    question:
      "Which one of the following diseases or disorders occurs when the brain tissues suddenly stop getting oxygen?",
    options: ["Heart failure", "Stroke", "Heart attack", "Hypertension"],
    correct_option: "Stroke",
    explanation:"A stroke occurs when the blood supply to part of your brain is interrupted or reduced, preventing brain tissue from getting oxygen."
  },
  {
    id: 31,
    question:
      "In a female reproductive system, implantation of the fertilized egg and development of an embryo takes place in:",
    options: ["uterus", "ovary", "clitoris", "vulva"],
    correct_option: "uterus", // Uterus is the organ where implantation and embryo development occur
    explanation:"Uterus (womb): is wide muscular tube for implantation of the fertilized egg and development of an embryo. It is a site for pregnancy."
  },
  {
    id: 32,
    question:
      "About 10 days after ovulation, blood vessels closed down and discharge through vagina in the form of blood called:",
    options: ["menopause", "maturation", "menstruation", "puberty"],
    correct_option: "menstruation", // Menstruation is the shedding of the uterine lining if pregnancy doesn't occur
    explanation:"Menstruation is the shedding of the uterine lining (endometrium) along with blood, occurring approximately every 28 days in females who are not pregnant."+
    "About 10-14 days after ovulation, if fertilization has not occurred, the corpus luteum in the ovary regresses, leading to a drop in progesterone levels. This drop triggers the shedding of the uterine lining, resulting in menstruation."
  },
  {
    id: 33,
    question: "In the human reproductive process fertilization occurs in:",
    options: ["oviduct", "cervix", "ovaries", "uterus"],
    correct_option: "oviduct", // Fertilization typically occurs in the oviduct (fallopian tube)
    explanation:"Uterus (womb): is wide muscular tube for implantation of the fertilized egg and development of an embryo. It is a site for pregnancy."
  },
  {
    id: 34,
    question:
      "Which one of the following is biotic component of a given ecosystem?",
    options: [
      "a house building",
      "flowering plant",
      "drinking water",
      "sun light",
    ],
    correct_option: "flowering plant", 
      explanation: "Biotic components are living organisms like plants, while the others are abiotic (non-living)"
  },
  {
    id: 35,
    question:
      "is a type of biological interaction between two organisms in which one gets benefited while the other is harmed.",
    options: ["Mutualism", "Commensalism", "Parasitism", "Competition"],
    correct_option: "Parasitism", 
     explanation:"Parasitism is where one organism benefits (parasite) while harming the other (host)."+ 
     "E.g. relationbetween human and tape worms."
     },
  {
    id: 36,
    question:
      "A simple food chain exists that grass is eaten by cow and cow is in turn eaten by hyena, then the correct order of energy flow would be:",
    options: [
      "Hyena -> Grass -> Cow",
      "Cow -> Grass -> Hyena", // This is the correct answer
      "Hyena -> Cow -> Grass",
      "Grass -> Cow -> Hyena",
    ],
    correct_option: "Grass -> Cow ->Hyena",
    explanation:"The correct order of energy flow in a simple food chain is from the primary producer (grass) to the primary consumer (cow) and then to the secondary consumer (hyena)."+ 
    "Therefore, the correct order should be: D. Grass Cow Hyena."
     },
  
  {
    id: 37,
    question: "A first trophic level in food chain refers to:",
    options: [
      "primary consumers",
      "food producers", 
      "tertiary consumers",
      "secondary consumers",
    ],
    correct_option: "food producers",
    explanation:"Producer (first trophic level):- all organisms directly or indirectly depend on first trophic level."+ 
    "Sun is the main source of energy for all food chain."
  },
  {
    id: 38,
    question:
      "Loam soil is the most fertile and suitable soil for growth of plants.",
    options: ["Top soil", "Clay soil", "Loam soil", "Sandy soil"],
    correct_option: "Loam soil",
    explanation:"A loam soil contains more nutrients, moisture, humus and has better drainage of water air, and is easier to till. It is suitable for growing plants. So it is the most fertile soil"
  },
  {
    id: 39,
    question: "Water as an important resource has to be ______.",
    options: ["polluted", "wasted", "contaminated", "conserved"],
    correct_option: "conserved",
    explanation:"Water conservation refers to the efficient use and preservation of water resources. \n"+
    "Conserving water involves reducing waste, preventing pollution, and using water sustainably to meet current and future needs. \n"+
    "It is crucial for ensuring a reliable water supply for human activities, ecosystems, and the environment in general. \n"
  },
  {
    id: 40,
    question:
      "The most abundant pure chemical element in the earth's atmosphere is:",
    options: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    correct_option: "Nitrogen",
    explanation:"Nitrogen makes up approximately 78% of Earth's atmosphere by volume. \n"+
    "Oxygen is the second most abundant element in the atmosphere, making up about 21%. \n"+
    "Helium and hydrogen are present in trace amounts in the atmosphere."
  },
  {
    id: 41,
    question:
      "Which one of the following energy usages contributes for air pollution?",
    options: [
      "Solar energy",
      "Energy from fuels",  
      "Hydropower energy",
      "Wind energy",
    ],
    correct_option: "Energy from fuels",
    explanation:"Energy from fuels, especially fossil fuels like coal, oil, and natural gas, is a major source of air pollution. \n"+
    "Burning fossil fuels releases pollutants such as carbon dioxide (CO2), sulfur dioxide (SO2), nitrogen oxides (NOx), particulate matter (PM), and various volatile organic compounds (VOCs) into the atmosphere, contributing to air pollution and its associated environmental and health impacts.\n"+
    "Solar energy, hydropower energy, and wind energy are all renewable energy sources that do not directly emit pollutants into the air when generating electricity. \n"
  },
  {
    id: 42,
    question: "Which one of the following can be done for forest conservation?",
    options: [
      "Deforestation",
      "Cutting trees",
      "Burning trees as fuel",
      "Reforestation",
    ],
    correct_option: "Reforestation",
    explanation:"Reforestation is the process of planting trees in a forest where the number of trees has been decreasing."
  },
  {
    id: 43,
    question:
      "Which one of the following is among an ex-situ biodiversity conservation mechanism?",
    options: [
      "Establishing parks",
      "Establishing sanctuaries",
      "Establishing a zoo",
      "National parks",
    ],
    correct_option: "Establishing a zoo",
    explanation:"ex-situ biodiversity means the conservation of biological diversity outside their natural areas. \n"+
    "Example:- Zoo, aquarium, seed banks, botanical gardens"
  },
  {
    id: 44,
    question:
      "Which one of the following CANNOT be an indigenous knowledge based soil conservation mechanism?",
    options: [
      "Use of Chemicals",
      "Crop rotation",
      "Contour ploughing",
      "Mixed cropping",
    ],
    correct_option: "Use of Chemicals",
    explanation:"Indigenous knowledge-based soil conservation methods are typically traditional or local practices developed by communities over time to sustainably manage soil and prevent erosion."+
    "Using chemicals, such as synthetic fertilizers or pesticides, is not an indigenous practice. It's a modern agricultural practice that often has negative environmental impacts."
  },
  {
    id: 45,
    question: "Our Solar System does not contain:",
    options: [
      "Any star", 
      "Any comet",
      "Any galaxy", 
      "Any moon",
    ],
    correct_option: "Any galaxy",
    explanation:"The solar system includes the Sun, planets, satellites, dwarf planets, Asteroids, comets and Meteors"
  },
  {
    id: 46,
    question: "The farthest planet from the Sun in our Solar System is:",
    options: [
      "Jupiter",
      "Neptune", // This is the correct answer
      "Saturn",
      "Uranus",
    ],
    correct_option: "Neptune",
    explanation:"Neptune is the eighth and farthest planet of the solar system. It is found at a distance of 4498 million km from the Sun"
  },
  {
    id: 47,
    question:
      "Out of the eight planets in the Solar System, the two planets at 2nd and 4th places respectively revolving around the sun are:",
    options: [
      "Mercury and Mars", 
      "Venus and Mars",
      "Mercury and Earth",
      "Venus and Jupiter",
    ],
    correct_option: "Venus and Mars",
    explanation:"In order of distance from the sun they are; Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune."
  },
  {
    id: 48,
    question:
      "How many artificial satellites owned by our country are launched and revolving the earth there in space?",
    options: ["One", "Four", "Three", "Two"],
    correct_option: "Two",
    explanation:"Our country, Ethiopia, has launched two artificial satellites."+ 
    "The 1st Earth Observation satellite of Ethiopia (ETRSS-1) was launched on the 20th of December 2019 in collaboration with the government of China. "
  },
  {
    id: 49,
    question:
      "Which one of the following is CORRECT about the motion of satellites and planets?",
    options: [
      "Satellites move on planets while planets revolve around the sun",
      "Planets revolve around the sun while Satellites revolve about planets",
      "Satellites and planets both move together side by side",
      "Satellites revolve around the sun while planets revolve about satellites",
    ],
    correct_option:
      "Satellites move on planets while planets revolve around the sun",
      explanation:"Satellites are objects that orbit around planets. Planets, on the other hand, revolve around the Sun."+
      "So, while satellites orbit around planets, planets themselves revolve around the Sun."
  },
  {
    id: 50,
    question:
      "Comparing planets with each other based on their average diameter, identify the CORRECT statement!",
    options: [
      "Saturn is the largest planet",
      "Earth is the largest planet",
      "Jupiter is the largest planet", // This is the correct answer
      "Mercury is the largest planet",
    ],
    correct_option: "Jupiter is the largest planet",
    explanation:""
  },
  {
    id: 51,
    question:
      "Which one of the following condition makes the Earth unique in its nature as compared to other planets?",
    options: [
      "Having a solid rocky surface",
      "Having a gravitational field",
      "Having its own large mass",
      "Having enough liquid water", 
    ],
    correct_option: "Having enough liquid water",
    explanation:"Earth is the only planet in our Solar System known to have abundant liquid water on its surface."+
    "Liquid water is essential for life as we know it and plays a crucial role in shaping Earth's climate, geology, and environment."+
    "While other planets in our Solar System may have water in various forms (ice or vapor), Earth's surface water exists primarily in liquid form, making it unique among the planets."
  },
  {
    id: 52,
    question:
      "Our Earth is the only known suitable place for life to exist because of many factors. One of the factors can be its:",
    options: [
      "favorable atmosphere", // This is the correct answer
      "wide surface area",
      "large vegetation cover",
      "low temperature",
    ],
    correct_option: "favorable atmosphere",
    explanation:"Overall, Earth's favorable atmosphere provides the necessary conditions for life to thrive, making it the only known planet capable of supporting a wide variety of life forms."
  },
  {
    id: 53,
    question:
      "During regular reflection of light from a surface, the reflected rays:",
    options: [
      "may scatter outwards", // This is correct for diffuse reflection
      "bounce back to the source of light", // This is correct for specular reflection
      "are all parallel to each other",
      "may cross each other",
    ],
    correct_option: "may scatter outwards", // Reflection can be diffuse or specular, so both A and B could be correct depending on the type of reflection
    explanation:"Regular reflection, also known as specular reflection, occurs when light is reflected from a smooth surface."+
    "In specular reflection, the reflected rays bounce back from the surface at the same angle as the incident rays, creating a well-defined reflection."+
    "falls on the surface of another medium and returns back to the first medium"
},
  {
    id: 54,
    question:
      "Dispersion of light into different colors occurs when white light passes through a prism. Which one of the following colors appears before others?",
    options: ["Orange light", "Green light", "Yellow light", "Violet light"],
    correct_option: "Violet light",
    explanation:"When white light passes through a prism, it gets dispersed into its component colors due to the different wavelengths of light being refracted by different amounts."+
    "Violet light has the shortest wavelength among the visible colors, so it bends the most when passing through the prism."+
    "As a result, violet light appears first as it is deviated the most, followed by blue, green, yellow, orange, and red, in that order."
  },
  {
    id: 55,
    question: "Which one of the following objects is transparent?",
    options: ["Waxed paper", "Clean water", "Metal sheet", "Frosted glass"],
    correct_option: "Clean water",
    explanation:"Transparent Material: Materials that allow light to pass through them completely are known as transparent material."+ 
    "We can see through these materials very clearly. Example: Glass, clean water,clear plastic and air are transparent materials."
  },
  {
    id: 56,
    question: "Sound is produced in humans by:",
    options: [
      "vibration of head",
      "vibration of tongue",
      "vibration of skin",
      "vibration of air",
    ],
    correct_option: "vibration of tongue",
    explanation:"Formation of Sound in human is by: "+ 
    "The vibration of the vocal cords creates sound waves in the air."+
    "The shape and movement of the tongue, lips, and other structures in the mouth modify these sound waves to produce different sounds (such as vowels and consonants)."
  },
  {
    id: 57,
    question:
      "In which one of the following medium does sound travels fastest?",
    options: ["Solid medium", "Liquid medium", "Gaseous medium", "Clean water"],
    correct_option: "Solid medium",
    explanation:"Sound travels more quickly through solids than through liquids and gases because the molecules of a solid are closer together and,"+
    "therefore, can transmit the vibrations (energy) faster. Sound travels most slowly through gases because the molecules of a gas are farthest apart."+
    "Sound cannot travel through vacuum. "
  },
  {
    id: 58,
    question:
      "The heat transfer mechanism that takes place by actual movement of a liquid or gas is:",
    options: ["conduction", "convection", "diffusion", "radiation"],
    correct_option: "convection",
    explanation:"Convection is the mode of heat transfer from the hotter part of a fluid (liquid or gas) to its colder parts by the movement of the liquid (or gas) itself"
  },
  {
    id: 59,
    question:
"Consider a simple circuit given below with some of its components labelled with letters. What do the letters A and B respectively represent?",
question_image: gs_que_59,
    options: [
      "Resistor and Switch",
      "Switch and Cell",
      "Resistor and Cell",
      "Battery and Resistor",
    ],
    correct_option: "Resistor and Cell",
    explanation_Image: gs_exp_59
  },
  {
    id: 60,
    question:
          "Magnets have many applications in our daily life, but they are not used in:",
    options: ["compasses", "computers", "scanning machines", "electric heaters"],
    correct_option: "electric heaters",
    explanation:"Electric heaters typically work by converting electrical energy into heat energy through the resistance of a heating element (such as a coil or wire)."+
    "While magnets are used in various applications like compasses, computers, and scanning machines, they are not commonly used in electric heaters. "+
    "Electric heaters rely on heating elements and do not require the use of magnets for their operation."
  },
];
