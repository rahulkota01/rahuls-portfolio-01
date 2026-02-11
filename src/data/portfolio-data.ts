// ═══════════════════════════════════════════════════════════════
// PORTFOLIO DATA — Edit this file to customize all content
// ═══════════════════════════════════════════════════════════════

export const portfolioData = {
  // ─── Personal Info ───
  personal: {
    name: "Rahul Kota",
    tagline: "Pharm.D Student | AI/ML for Healthcare & Biomedical Research",
    mission:
      "PharmD student with an interdisciplinary research interest spanning healthcare, biomedical signalling, cancer biology, & computational approaches. Actively building research and technical skills through academic projects, review writing, and foundational programming.",
    email: "rahulkota0101@gmail.com",
    phone: "+91 9502313528",
    location: "Vijayawada, Andhra Pradesh, India",
    linkedin: "https://www.linkedin.com/in/rahul-kota-799b0a332",
    github: "https://github.com/rahulkota01",
    website: "",
    resumeUrl: "/resume.pdf",
  },

  // ─── About ───
  about: {
    background:
      "I am a Doctor of Pharmacy (Pharm D) student with academic interests spanning cancer biology, biotechnology, CRISPR-based genome editing, and computational approaches to biological research. My focus is on understanding disease at the molecular and data-driven level, rather than clinical practice.",
    interests: [
      "Computational Genomics & Bioinformatics",
      "AI/ML for Biological & Clinical Data",
      "CRISPR Data Analysis & Functional Genomics",
      "Cancer Biology, Genomics & Systems Biology",
      "Computational Modelling of Biological Systems",
    ],
    focusAreas:
      "Preparing for GATE (XL & BT) with long-term goals of pursuing research training at IITs, IISc or International Universities in interdisciplinary domains.",
    statement:
      "I am particularly interested in cancer mechanisms, gene regulation, and how tools like CRISPR, genomics, and AI can be applied to study complex biological systems. Alongside strengthening my foundation in molecular biology and biotechnology, I am actively developing skills in Python, data analysis, and computational thinking.",
  },

  // ─── Research Focus Areas ───
  researchAreas: [
    {
      title: "Computational Genomics & Bioinformatics",
      icon: "🧬",
      description: "Analysis of genomic data for disease research and therapeutic targets.",
      details:
        "Exploring computational approaches to analyze genomic data, with applications in understanding disease mechanisms and identifying therapeutic targets in cancer and precision medicine.",
    },
    {
      title: "AI/ML for Biological & Clinical Data",
      icon: "🤖",
      description: "Machine learning applications in healthcare and clinical decision support.",
      details:
        "Developing AI-assisted healthcare applications and learning foundational ML techniques for biological data analysis.",
    },
    {
      title: "CRISPR Data Analysis & Functional Genomics",
      icon: "🔬",
      description: "CRISPR data analysis and functional genomics studies.",
      details:
        "Learning about CRISPR-Cas9 genome editing and its applications in cancer biology research.",
    },
    {
      title: "Cancer Biology, Genomics & Systems Biology",
      icon: "🎗️",
      description: "Understanding cancer mechanisms at molecular and system levels.",
      details:
        "Focused on cancer biology research, particularly triple-negative breast cancer (TNBC) and novel therapeutic approaches.",
    },
    {
      title: "Computational Modelling of Biological Systems",
      icon: "📊",
      description: "Mathematical and computational modeling of biological systems.",
      details:
        "Applying computational modeling techniques to understand complex biological pathways and disease mechanisms.",
    },
  ],

  // ─── Publications & Academic Contributions ───
  publications: [
    {
      title: "Smart Rx AI App",
      authors: "Rahul Kota",
      journal: "Personal Project",
      year: 2025,
      type: "project" as const,
      link: "https://rx-ai-rjslk.vercel.app/",
      description: "AI-powered prescription analysis tool that extracts key details from handwritten or digital prescriptions using OCR and LLMs.",
    },
    {
      title: "AI-Assisted Healthcare Utility Website",
      authors: "Rahul Kota",
      journal: "Personal Project",
      year: 2025,
      type: "project" as const,
      link: "https://rahulkota-healthcare-app-2026.streamlit.app/",
      description: "Educational healthcare application integrating BMI assessment, dose calculations, and drug information.",
    },
    {
      title: "Health Care Summit 2025 - IISc Bengaluru",
      authors: "Rahul Kota",
      journal: "Conference Participation",
      year: 2025,
      type: "conference" as const,
      description: "Attended a two-day national summit at IISc that convened clinicians, researchers, industry leaders and innovators to discuss technology-driven, sustainable solutions for healthcare with a strong focus on AI, genomics, translational research and scalable healthtech models.",
    },
    {
      title: "miRNA-Incorporated Nanocarrier Delivery in Triple-Negative Breast Cancer Treatment",
      authors: "Rahul Kota",
      journal: "IIT BHU Guided Mentorship Program",
      year: 2025,
      type: "research" as const,
      description: "Ongoing literature-based exploratory research under guidance of PhD scholar at IIT BHU",
    },
    {
      title: "Nootropic Chocolate Delivery System Formulation",
      authors: "Rahul Kota",
      journal: "Academic Research Proposal",
      year: 2026,
      type: "research" as const,
      description: "Proposed chocolate-based nutraceutical formulation applying formulation science principles",
    },
  ],

  // ─── Projects ───
  projects: [
    {
      title: "Smart Rx AI App",
      abstract:
        "Smart Rx AI demonstrates the feasibility of integrating AI-assisted reasoning, structured clinical documentation, and medication safety intelligence into a single secure software system. While currently a prototype using publicly available datasets, the architecture is designed to support future enhancements such as EHR integration, real-time clinical data access, and advanced predictive analytics. This work highlights the potential of ethical, clinician-centered AI systems in modern healthcare software research.",
      tools: ["Python", "Streamlit", "AI/ML", "Healthcare Software"],
      methods: "AI integration, Clinical documentation, Medication safety, Software architecture design",
      results: "Built a functional prototype demonstrating AI-assisted healthcare software with secure architecture design.",
      link: "https://rx-ai-rjslk.vercel.app/",
      github: "#",
      paper: "#",
    },
    {
      title: "AI-Assisted Healthcare Utility Website",
      abstract:
        "Designed and deployed an educational healthcare utility integrating BMI assessment, adult and pediatric dose calculations, and structured drug information within a clean, workflow-oriented interface.",
      tools: ["Streamlit", "Python", "Healthcare Data"],
      methods: "Web application development, clinical calculation algorithms, user interface design",
      results: "Live deployment with clean, workflow-oriented interface for healthcare professionals and students.",
      link: "https://rahulkota-healthcare-app-2026.streamlit.app/",
      github: "#",
      paper: "#",
    },
    {
      title: "miRNA-Nanocarrier System for TNBC Treatment (Literature Research)",
      abstract:
        "Exploratory research investigating miRNA-incorporated nanocarrier delivery systems for triple-negative breast cancer treatment through systematic literature review and analysis.",
      tools: ["Literature Review", "Research Analysis", "Scientific Writing"],
      methods: "Systematic literature review, data extraction, comparative analysis",
      results: "Ongoing research with focus on identifying novel therapeutic delivery approaches.",
      github: "#",
      paper: "#",
    },
    {
      title: "Nootropic Chocolate Delivery System",
      abstract:
        "Proposed a chocolate-based nutraceutical formulation by applying formulation science principles to ingredient selection and delivery-system design.",
      tools: ["Formulation Science", "Nutraceutical Design", "Pharmaceutical Chemistry"],
      methods: "Ingredient selection, delivery system design, formulation science principles",
      results: "Comprehensive formulation proposal with scientific rationale.",
      github: "#",
      paper: "#",
    },
  ],

  // ─── Skills (without percentages) ───
  skills: {
    programming: [
      { name: "Python", level: 0 },
      { name: "Java", level: 0 },
      { name: "SQL", level: 0 },
    ],
    dataScience: [
      { name: "Machine Learning (Foundational)", level: 0 },
      { name: "Data Analysis", level: 0 },
      { name: "Streamlit", level: 0 },
    ],
    computationalBiology: [
      { name: "Cancer Biology", level: 0 },
      { name: "Biological Systems", level: 0 },
      { name: "Signalling Models", level: 0 },
      { name: "Genomics", level: 0 },
      { name: "Bioinformatics", level: 0 },
    ],
    languages: [
      { name: "English", level: 0 },
      { name: "Hindi", level: 0 },
      { name: "Telugu", level: 0 },
      { name: "German - A1", level: 0 },
    ],
  },

  // ─── Certifications ───
  certifications: [
    {
      title: "5th Healthcare Summit 2025 – IISc Bangalore",
      platform: "IISc Bangalore",
      year: 2025,
      description: "Participated in an international-level healthcare innovation summit focused on sustainable healthcare systems, interdisciplinary research, and emerging medical technologies.",
      image: "/certificates/certificate-new-1.jpeg"
    },
    {
      title: "GIAN Program – Global Academic Collaboration",
      platform: "IIT Indore (Purdue University Collaboration)",
      year: 2025,
      duration: "December 16-27, 2024",
      description: "Completed an internationally facilitated academic program under the Government's GIAN initiative at IIT Indore in collaboration with Purdue University, engaging with global experts in advanced research methodologies and interdisciplinary learning.",
      image: "/certificates/certificate-new-2.png"
    },
    {
      title: "1st Prize – National E-Poster Competition",
      platform: "SCRMP (Gujarat Chapter)",
      year: 2025,
      description: "Secured first position in a national-level scientific poster competition organised during National Pharmacy Week, demonstrating research communication and evidence-based presentation skills.",
      image: "/certificates/certificate-new-3.jpeg"
    },
    {
      title: "Python for AI Development – Infosys Springboard",
      platform: "Infosys",
      year: 2025,
      description: "Successfully completed industry-oriented training in Python programming and AI development practices, strengthening foundations in computational problem-solving and healthcare tech integration.",
      image: "/certificates/certificate-new-4.jpeg"
    },
    {
      title: "Project Expo Presentation – Smart RX AI",
      platform: "QISFEST 2026",
      year: 2025,
      description: "Presented Smart RX AI, an intelligent healthcare assistance application designed to support clinical reasoning and structured prescription analysis, at a National Level Students Meet (QISFEST 2026).",
      image: "/certificates/certificate-new-5.jpeg"
    },
    {
      title: "NPTEL – Mathematical Foundations for Machine Learning",
      platform: "NPTEL (IISc-NITK)",
      year: 2025,
      score: "9.0/10 (90.2%)",
      description: "Completed an academic certification focused on linear algebra, probability, calculus & optimization, and mathematical principles essential for machine learning and AI-driven research systems.",
      image: "/certificates/certificate-1.jpg"
    },
  ],

  // ─── Timeline ───
  timeline: [
    { year: "2021-2023", title: "Completed Intermediate (Class 12th)", description: "VKR College - PCB Stream with 90.2% / 9.2 CGPA", type: "education" as const },
    { year: "2024", title: "Doctor of Pharmacy (Pharm.D) - Expected Graduation 2030", description: "QIS Institution, Andhra Pradesh (Affiliated with JNTUK & RIMS)", type: "education" as const },
    { year: "2025", title: "NPTEL Machine Learning Certification", description: "Mathematical Foundations for Machine Learning", type: "education" as const },
    { year: "2025", title: "Attended Health Care Summit 2025", description: "5th Edition Health Care Summit at IISc Bangalore (June 13-14, 2025)", type: "conference" as const },
    { year: "2025", title: "GIAN Course at IIT Indore", description: "Completed 10-day course on Precision Medicines & Next-Generation Deep Medicines (Purdue University Collaboration)", type: "education" as const },
    { year: "2025", title: "AI-Assisted Healthcare Website Launch", description: "Deployed educational healthcare utility application with BMI assessment and dose calculations", type: "project" as const },
    { year: "2025", title: "Smart Rx AI App Launch", description: "Deployed AI-powered prescription analysis tool that extracts key details from handwritten or digital prescriptions", type: "project" as const },
  ],

  // ─── Research & Exposure Images ───
  // Place your images in: public/exposures/ folder
  // Image naming: 1.jpg, 2.jpeg, 3.jpeg, 4.jpg
  researchExposures: [
    {
      id: 1,
      title: "Healthcare Summit 2025 - IISc Bengaluru",
      image: "/exposures/1.jpg",
      shortDescription: "Indian Institute of Science",
      fullDescription: "5th Edition | June 13-14, 2025 | Bengaluru, India.\n\nAttended a two-day national summit at IISc that convened clinicians, researchers, industry leaders and innovators to discuss technology-driven, sustainable solutions for healthcare with a strong focus on AI, genomics, translational research and scalable healthtech models.\n\nOverview\n\nParticipated in the 5th edition of the Healthcare Summit 2025 held at the Indian Institute of Science (IISc), Bengaluru. The summit focused on bridging gaps between biomedical research, clinical practice, healthcare technology, and real-world implementation, emphasizing interdisciplinary collaboration over isolated disciplinary approaches.\n\nStructure & Format\n- Keynote and vision talks by senior experts\n- Theme-driven panel discussions\n- Innovation and startup-oriented sessions\n- Interactive networking sessions\n\nMajor Themes\n- Artificial Intelligence in Healthcare\n- Precision Medicine & Translational Research\n- Innovation-to-Implementation Pathways\n- Sustainable Healthcare Systems\n\nAcademic & Professional Relevance\n\nThis summit provided a systems-level understanding of how biomedical science, computational approaches, and healthcare innovation intersect in practice.",
      date: "June 13-14, 2025",
      location: "IISc Bengaluru, India"
    },
    {
      id: 2,
      title: "Visit to IIT Indore",
      image: "/exposures/2.jpeg",
      shortDescription: "Standing Before the Indian Institute of Technology Indore",
      fullDescription: "This institution stands as a monument of educational research, a definitive sanctuary for global-standard academics and engineering mastery. To step onto this campus is to begin the IIT life - a transformation into an elite sphere of intellectual pursuit.\n\nIITs are not just institutions; they are systems that demand clarity of thought, consistency, and depth. Being on campus makes it evident why these places shape researchers, engineers, and scientists who think long-term rather than chase shortcuts...\n\nOne day I will make sure to earn the right to be called an IITian...",
      date: "December 2025",
      location: "IIT Indore, India"
    },
    {
      id: 3,
      title: "Attended GIAN at IIT Indore",
      image: "/exposures/3.jpeg",
      shortDescription: "Global Initiative of Academic Networks (GIAN)",
      fullDescription: "Indian Institute of Technology Indore\n\nGlobal Initiative of Academic Networks (GIAN)\nDecember 16-27, 2025\n\nCourse: The Exciting Landscape of Precision Medicines and Next Generation Deep Medicines\n\nOrganized by IIT Indore in collaboration with Purdue University\nSponsored by the Global Initiative of Academic Networks (Government of India)\n\nOverview\n\nCompleted an intensive GIAN academic program at IIT Indore focused on modern precision medicine and next-generation therapeutic strategies. The course provided structured exposure to interdisciplinary biomedical research, integrating cancer biology, gene editing technologies, and artificial intelligence in healthcare.\n\nAcademic Focus Areas\n- Cancer Biology & Disease Mechanisms\n- Genomics & Epigenomics in Precision Medicine\n- Gene Editing Technologies (CRISPR-Cas9, TALENs)\n- Advanced Therapeutic Strategies (Immunotherapy, CAR-T, CAR-NK)\n- Artificial Intelligence in Healthcare\n\nAcademic Relevance\n\nThis program strengthened my foundation in cancer biology, CRISPR-Cas9 based genome engineering, and AI-enabled precision medicine.",
      date: "December 16-27, 2025",
      location: "IIT Indore, India"
    },
    {
      id: 4,
      title: "Academic Poster Presentation",
      image: "/exposures/4.jpg",
      shortDescription: "Theme: Pharmacists as Frontline Drivers of India's Vaccination Movement",
      fullDescription: "Theme: Pharmacists as Frontline Drivers of Indias Vaccination Movement\n\nContext\n\nThis poster presents an evidence-based analysis of the expanding role of pharmacists in Indias vaccination ecosystem, focusing on public health outreach, vaccine awareness, and community-level immunization advocacy.\n\nPoster Overview\n\nThe poster examines vaccination as a critical public health intervention and analyzes systemic gaps that limit vaccine acceptance and coverage. It emphasizes the strategic position of pharmacists in bridging these gaps through patient counseling, misinformation correction, and community engagement.\n\nKey aspects addressed include:\n- The role of pharmacists in improving vaccine literacy and trust\n- Impact of pharmacist-led counseling on vaccine acceptance rates\n- Addressing vaccine hesitancy through evidence-based communication\n- Community outreach, awareness campaigns, and public health advocacy\n\nAcademic Relevance\n\nThis poster reflects an interest in public health, preventive medicine, and healthcare systems.",
      date: "2025",
      location: "SCRMP Gujarat Chapter"
    },
  ],

  // ─── Awards & Recognition ───
  awards: [
    "NPTEL Certification - Completed Course of Mathematical Foundations for Machine Learning",
    "Selected Participant - 5th Edition Health Care Summit 2025 at IISc Bangalore",
    "GIAN Course Completion - IIT Indore (Purdue University Collaboration)",
  ],

  // ─── Vision / Statement of Purpose ───
  vision:
    "I am building at the intersection of biology and computation — where molecules become models and experiments become algorithms. My vision is to engineer AI-driven systems that translate wet-lab complexity into predictive, designable frameworks capable of accelerating drug discovery and precision therapeutics. Rather than viewing biology as purely experimental, I approach it as a system that can be modeled, simulated, optimized, and eventually engineered. Through machine learning, structural modeling, and intelligent automation, I aim to reduce biological uncertainty and compress the time between hypothesis and therapeutic insight. My long-term mission is to develop scalable computational ecosystems — such as Research Orchestration (RO) — that unify data, modeling, reasoning, and experimentation into a seamless pipeline. I believe the future of biomedical research belongs to those who can integrate code with cells, structure with simulation, and AI with experimental science. I intend to be part of that generation.",
};
