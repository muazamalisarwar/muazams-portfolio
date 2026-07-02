import { Mail, MessageCircle, Briefcase, Code2 } from 'lucide-react';

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: 'Muazam Ali',
    role: 'Full Stack Developer & AI/ML Enthusiast',
    email: 'muazamalisarwarofficial@gmail.com',
    phone: '+92 326 8848703',
  },
  about: {
    text: "Results-driven Computer Science student at University of Education Lahore with hands-on experience in full stack development, Android applications, and AI/ML-based computer vision systems. Proficient in Python, Java, C++, and JavaScript with practical knowledge of RESTful APIs, OOP design patterns, Firebase, and SQL/NoSQL databases. Seeking a Software Development or AI/ML internship to contribute to real-world engineering teams.",
    skills: [
      {
        label: 'Programming Languages',
        items: ['Python', 'Java', 'C++', 'JavaScript', 'HTML', 'CSS'],
      },
      {
        label: 'Mobile Development',
        items: ['Android Studio', 'Firebase', 'XML Layouts'],
      },
      {
        label: 'AI / ML & Computer Vision',
        items: ['OpenCV', 'MediaPipe', 'TensorFlow', 'scikit-learn', 'Pandas', 'NumPy'],
      },
      {
        label: 'Frameworks & Tools',
        items: ['React.js', 'Node.js', 'Spring Boot', 'Git/GitHub', 'MySQL', 'Oracle 21c', 'RESTful APIs', 'Postman'],
      },
    ],
  },
  experience: [
    {
      company: 'Askari Colony Management (ACM)',
      role: 'Software Development Intern — ERP',
      duration: '09/2024 – 11/2024',
      location: 'Lahore (Askari 10)',
      points: [
        'Assisted in deploying an ERP complaint management system across 10+ residential offices, reducing manual request routing.',
        'Improved UI components and form workflows, contributing to an estimated 20% reduction in complaint handling response time.',
        'Collaborated with stakeholders to gather business requirements and validate ERP module integration.',
        'Executed debugging, system testing, and issue resolution cycles; resolved 15+ functional defects prior to go-live.',
        'Supported process automation initiatives to digitalize maintenance request handling, reducing paper-based coordination.'
      ]
    },
    {
      company: 'Minhaj University Lahore',
      role: 'CMS Development Intern — Backend',
      duration: '03/2025 – 05/2025',
      location: 'Lahore',
      points: [
        'Developed and automated 3+ backend modules for the university CMS, reducing manual workload by ~30%.',
        'Designed and implemented SQL-based database operations, improving data retrieval speed.',
        'Applied OOP principles and REST API design patterns to improve maintainability.',
        'Collaborated in a cross-functional Agile team to test, debug, and deploy new features.',
        'Performed system performance analysis and code optimization, resolving bottlenecks.'
      ]
    }
  ],
  education: [
    {
      degree: 'ICS With Physics',
      school: 'Lahore College Boys',
      duration: '01/2021 – 12/2022',
      location: 'Lahore',
      cgpa: '',
      description: ''
    },
    {
      degree: 'COMPUTER SCIENCE (ADP)',
      school: 'Minhaj University Lahore',
      duration: '04/2023 – 07/2025',
      location: 'Lahore',
      cgpa: '3.74',
      description: ''
    },
    {
      degree: 'BS Computer Science (7th Semester)',
      school: 'University Of Education',
      duration: '08/2025 – Current',
      location: 'Lahore',
      cgpa: '3.65',
      description: 'Studying Bachelor of Science in Computer Science with a strong foundation in programming, software development, and problem-solving. Gained practical experience through academic projects and hands-on laboratory work.'
    }
  ],
  projects: [
    {
      number: '01',
      category: 'Java · OOP · MySQL',
      name: 'Bank Management System',
      liveUrl: '#',
      col1Image1: '/projects/bank_management.png',
      col1Image2: '/projects/bank_management.png',
      col2Image: '/projects/bank_management.png',
    },
    {
      number: '02',
      category: 'Python · MySQL',
      name: 'CRM System',
      liveUrl: '#',
      col1Image1: '/projects/crm_system.png',
      col1Image2: '/projects/crm_system.png',
      col2Image: '/projects/crm_system.png',
    },
    {
      number: '03',
      category: 'Java · OpenCV · AI',
      name: 'Gender and Age Detection',
      liveUrl: '#',
      col1Image1: '/projects/gender_age_ai.png',
      col1Image2: '/projects/gender_age_ai.png',
      col2Image: '/projects/gender_age_ai.png',
    },
    {
      number: '04',
      category: 'Python · NLP · Automation',
      name: 'Virtual Assistant',
      liveUrl: '#',
      col1Image1: '/projects/virtual_assistant.png',
      col1Image2: '/projects/virtual_assistant.png',
      col2Image: '/projects/virtual_assistant.png',
    },
    {
      number: '05',
      category: 'Node.js · Security',
      name: 'Node.js Security Project',
      liveUrl: '#',
      col1Image1: '/projects/nodejs_security.png',
      col1Image2: '/projects/nodejs_security.png',
      col2Image: '/projects/nodejs_security.png',
    },
  ],
  services: [
    {
      number: '01',
      title: 'Front End Development',
      description:
        'Building responsive, performant web apps with modern frameworks like React and Next.js, focusing on pixel-perfect, accessible, and engaging user interfaces.',
    },
    {
      number: '02',
      title: 'Database Development',
      description:
        'Designing, optimizing, and managing scalable database architectures using SQL and NoSQL solutions for secure and efficient data storage and retrieval.',
    },
    {
      number: '03',
      title: 'AI/ML Development',
      description:
        'Integrating intelligent systems and machine learning models to build data-driven applications, utilizing modern AI tools and large language model APIs.',
    },
    {
      number: '04',
      title: 'Full Stack Development',
      description:
        'Bridging the gap between intuitive user interfaces and robust server-side logic to deliver complete, end-to-end applications seamlessly.',
    },
    {
      number: '05',
      title: 'Software Development',
      description:
        'Engineering custom software solutions tailored to business needs with clean, maintainable code, robust architecture, and modern best practices.',
    },
    {
      number: '06',
      title: 'Back End Development',
      description:
        'Developing secure and scalable server-side applications, APIs, and microservices to power dynamic digital platforms efficiently.',
    },
  ],
  certifications: [
    { name: 'AI Fluency Framework & Foundations', issuer: 'Anthropic', image: '/certificates/AI Fluency Framework & Foundations_By Anthropic.png' },
    { name: 'Fundamentals of Machine Learning', issuer: 'Saylor Academy', image: '/certificates/Fundamentals of Machine Learning.png' },
    { name: 'Claude Platform 101', issuer: 'Anthropic', image: '/certificates/Claude Platform 101_By Anthropic.png' },
    { name: 'Generative AI Introduction', issuer: 'Microsoft', image: '/certificates/Generative Ai Introduction.png' },
    { name: 'Building with Artificial Intelligence', issuer: 'Saylor Academy', image: '/certificates/Building with Artificial Intelligence.png' },
    { name: 'Python Essentials 1 & 2', issuer: 'FreeCodeCamp' },
    { name: 'Summarize and simplify information with 365 Copilot', issuer: 'Microsoft', image: '/certificates/Summarize and simplify information with 365 Copilot.png' },
    { name: 'Elementary Data Structures', issuer: 'Saylor Academy', image: '/certificates/Elementary Data Structures By Saylor Academy.png' },
    { name: 'Prompt Engineering for ChatGPT', issuer: 'Coursera' },
    { name: 'Web Development - Advanced CSS3 Selectors', issuer: 'Online Course', image: '/certificates/Web Development - Advanced CSS3 Selectors and.png' },
    { name: 'Advance SQL Hard Certification', issuer: 'Skill Certify', image: '/certificates/Advance Sql Devloper Certification.png' },
    { name: 'Agents and Workflows', issuer: 'OpenAI', image: '/certificates/Agents And WorkFlows-Open ai.png' },
    { name: 'C++ Essentials 1 & 2', issuer: 'FreeCodeCamp' },
    { name: 'Software Development Lifecycle (SDLC)', issuer: 'Coursera' },
    { name: 'Web Development Fundamentals', issuer: 'IBM SkillsBuild' },
    { name: 'Introduction to Networks (CCNA 1)', issuer: 'Cisco Networking Academy' },
    { name: 'Pitman International & Global Training Centres-English', issuer: 'Year: 2024' },
  ],
  contact: [
    {
      icon: Mail,
      label: 'Email',
      value: 'muazamalisarwarofficial@gmail.com',
      href: 'mailto:muazamalisarwarofficial@gmail.com',
    },
    {
      icon: MessageCircle,
      label: 'Phone / WhatsApp',
      value: '+92 326 8848703',
      href: 'tel:+923268848703',
    },
    {
      icon: Briefcase,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: 'https://linkedin.com',
    },
    {
      icon: Code2,
      label: 'GitHub',
      value: 'GitHub Profile',
      href: 'https://github.com',
    },
  ]
};
