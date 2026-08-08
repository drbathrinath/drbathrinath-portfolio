export const profile = {
  name: "Dr. BATHRINATH M S",
  shortName: "BMS",
  location: "Chennai, India",
  email: "bathrinathshanmugam7@gmail.com",
  phone: "+91 90425 11773",
  linkedin: "https://www.linkedin.com/in/drbathrinath",
  eyebrow:
    "Drug Safety · Pharmacovigilance · Clinical Data Management · Clinical Research",
  positioning:
    "Pharm.D graduate with hands-on clinical exposure to ADR identification, documentation, WHO-UMC and Naranjo causality assessment, medication review",
  profile:
    "Driven by one question: How can medicines be made safer for every patient? As a Pharm.D graduate with exposure in Pharmacovigilance and Clinical Research, I combine clinical experience, drug safety knowledge, and research excellence to contribute to evidence-based healthcare.",
};

export const navigation = [
  { id: "profile", number: "01", label: "Profile" },
  { id: "capability", number: "02", label: "Capability" },
  { id: "experience", number: "03", label: "Experience" },
  { id: "research", number: "04", label: "Research" },
  { id: "credentials", number: "05", label: "Credentials" },
  { id: "connect", number: "06", label: "Connect" },
] as const;

export const resumeLinks = [
  {
    href: "/drug-safety-resume.pdf",
    role: "Drug Safety Associate",
    action: "Open PDF resume",
  },
  {
    href: "/pharmacovigilance-resume.pdf",
    role: "Pharmacovigilance Associate",
    action: "Open PDF resume",
  },
] as const;

export const evidenceStats = [
  {
    value: "2",
    label: "Years Clinical Experience",
    meta: "Academic clinical exposure",
  },
  {
    value: "15+",
    label: "ADRs Documented",
    meta: "Safety documentation practice",
  },
  {
    value: "8",
    label: "Clinical Departments",
    meta: "Rotational clinical exposure",
  },
] as const;

export const skillCategories = [
  {
    title: "Pharmacovigilance",
    summary: "Case handling and ADR assessment fundamentals developed through clinical exposure.",
    skills: [
      "ADR Monitoring",
      "ICSR Processing",
      "Case Intake & Case Triage",
      "Seriousness Assessment",
      "Expectedness Assessment",
      "Causality Assessment (WHO-UMC & NARANJO SCALE)",
    ],
  },
  {
    title: "Drug Safety",
    summary: "Safety terminology, coding concepts, literature awareness, and signal thinking.",
    skills: [
      "MedDRA Coding Concepts",
      "WHO Drug Dictionary Concepts",
      "Safety Literature Screening",
      "Signal Detection Concepts",
    ],
  },
  {
    title: "Clinical Research",
    summary: "Research conduct, clinical documentation, and patient-safety oriented practice.",
    skills: [
      "Clinical Research",
      "Regulatory Compliance",
      "Patient Safety",
      "Medical Terminology",
    ],
  },
  {
    title: "Technical and Research Tools",
    summary: "Practical tools for documentation, literature review, and structured reporting.",
    skills: [
      "Microsoft Excel",
      "Microsoft Word",
      "Microsoft PowerPoint",
      "PubMed",
      "Google Scholar",
    ],
  },
] as const;

export const education = [
  {
    title: "Doctor of Pharmacy (Pharm.D)",
    period: "2020 - 2026",
    institution: "Annamalai University, FEAT - Chidambaram",
    score: undefined,
  },
  {
    title: "Advanced Diploma in Clinical Research",
    period: "Mar 2026 - Aug 2026",
    institution: "CliniLaunch Research Institute - Bangalore",
    score: undefined,
  },
  {
    title: "12th Board (HSE)",
    period: "2019 - 2020",
    institution: "Sri Vivekananda Hr. Sec. School - Kallakurichi, Tamil Nadu",
    score: "88%",
  },
  {
    title: "10th Board (SSLC)",
    period: "2017 - 2018",
    institution: "Sri Vivekananda Hr. Sec. School - Kallakurichi, Tamil Nadu",
    score: "95%",
  },
] as const;

export const experience = [
  {
    title: "Pharm.D Final Year Internship",
    organization: "Government Cuddalore Medical College & Hospital",
    period: "Aug 2025 - Aug 2026",
    points: [
      "Documented and managed 15 Adverse Drug Reactions (ADRs)",
      "Performed WHO-UMC causality assessments",
      "Applied Naranjo Scale for ADR evaluation",
      "Escalated 1 Grade III Anaphylaxis SAE per ICH E2A guidelines",
      "Maintained GCP-compliant documentation",
      "Participated in ward rounds and medication reviews",
    ],
  },
  {
    title: "Academic Clinical Clerkship",
    organization: "Government Cuddalore Medical College & Hospital",
    period: "Jul 2024 - Jul 2025",
    departments: [
      "General Medicine",
      "Surgery",
      "Pediatrics",
      "Obstetrics & Gynaecology",
      "Psychiatry",
      "Pulmonology",
      "Orthopaedics",
      "DVL",
    ],
  },
] as const;

export const publications = [
  {
    title:
      "Comparative Analysis of Oral Labetalol vs Oral Nifedipine in Gestational Hypertension",
    venue: "VVI Journal",
    details: "Vol 13 · Issue 5 · 2025",
    href: "https://vvijournal.com/volume-13-issue-5-2025/",
  },
  {
    title:
      "Evaluation of Postoperative Pain Management Strategies in Haemorrhoidectomy",
    venue: "IJISRT",
    details: "Vol 10 · Issue 8 · Aug 2025",
    href: "https://doi.org/10.38124/ijisrt/25aug1277",
  },
] as const;

export const presentations = [
  {
    title:
      'Oral Paper Presentation - "Evaluation of Post-Operative Pain Management Strategies in a Hemorrhoidectomy Patient in a Tertiary Care Teaching Hospital"',
    venue:
      "Trends in Pharmaceutical Sciences (TIPS'25), National Conference, Department of Pharmacy, Annamalai University (APTI-TN Sponsored)",
    date: "April 2025",
  },
] as const;

export const certifications = [
  {
    name: "Good Clinical Practice (ICH E6(R3))",
    issuer: "NIHR Research Delivery Network",
    year: "February 2026",
  },
  {
    name: "Good Clinical Practice",
    issuer: "NIDA Clinical Trials Network (NIH) | 11 Modules",
    year: "May 2026",
  },
  {
    name: "Collecting and Reporting Adverse Events in Clinical Research",
    issuer: "The Global Health Network",
    year: "2026",
  },
  {
    name: "Introduction to the Principles and Practice of Clinical Research",
    issuer: "National Institutes of Health (NIH)",
    year: "2025-2026",
  },
  {
    name: "Ethical and Regulatory Aspects of Clinical Research",
    issuer: "National Institutes of Health (NIH)",
    year: "2026",
  },
  {
    name: "Introduction to Pharmacovigilance",
    issuer: "Zamann Pharma Support GmbH (TUV SUD ISO 9001:2015 Certified)",
    year: "February 2026",
  },
  {
    name: "Good Clinical Practice - Investigational Medicinal Product (IMP) Management",
    issuer: "NIHR Research Delivery Network",
    year: "February 2026",
  },
  {
    name: "NIHR Informed Consent Series (Adults Lacking Capacity, Children & Remote Consent)",
    issuer: "NIHR Research Delivery Network",
    year: "February 2026",
  },
] as const;

export const achievements = [
  {
    value: "Merit - Clinical Research",
    result: "90th percentile",
    label: "Medclinigen National Mock Talent Test, June 2026",
  },
  {
    value: "Merit - Clinical Data Management",
    result: "87.5th percentile",
    label: "Medclinigen National Mock Talent Test, April 2026",
  },
] as const;
