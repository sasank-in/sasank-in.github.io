export interface ProjectLinkSet {
  label?: string
  url: string
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  metrics?: string[]
  link?: ProjectLinkSet
}

export interface Experience {
  role: string
  company: string
  type: string
  start: string
  end: string
  duration: string
  summary: string
}

export interface Education {
  school: string
  program: string
  period: string
  summary: string
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  issued: string
  credentialId?: string
  description: string
  url: string
}

export const profile = {
  name: "Sasank Nukala",
  title: "Backend Developer | Machine Learning Engineer",
  location: "Vijayawada, India",
  availability: "Graduating May 2026 · Open to full-time roles",
  summary:
    "I build backend systems for computer vision and ML workloads — training pipelines, inference APIs, and the infrastructure that keeps models running reliably in production.",
  avatarSrc: "/sasank-nukala-headshot.jpg",
  resumeUrl:
    "https://drive.google.com/file/d/1IiLbFjKzvSq6PFoAXRzizTK6K3KKn2Si/view?usp=drive_link",
  social: {
    github: "https://github.com/sasank-in",
    linkedin: "https://linkedin.com/in/sasank-nukala",
    email: "mailto:shashanknukala7@gmail.com",
  },
  contact: {
    emailAddress: "shashanknukala7@gmail.com",
  },
}

export const skills = [
  "Python",
  "Java",
  "SQL",
  "FastAPI",
  "Spring Boot",
  "Spring Cloud",
  "Django REST Framework",
  "Microservices",
  "PyTorch",
  "LLM's",
  "Model Fine-tuning",
  "Deep Learning",
  "YOLO",
  "LangChain",
  "Dataset Annotation",
  "Git",
]

export const projects: Project[] = [
  {
    id: "1",
    title: "Tennis Match Analysis System",
    description:
      "High-performance computer vision system for industrial quality control with sub-millisecond inference times. Utilized PyTorch and CUDA for optimized model training and inference, and YOLO for accurate object detection. Implemented TrackNet architecture for robust ball detection.",
    technologies: ["PyTorch", "CUDA", "OpenCV", "YOLO", "TrackNet"],
    imageUrl: "/tennis-analysis.jpg",
    link: {
      label: "Website",
      url: "https://www.moments-athletics.com",
    },
  },
  {
    id: "2",
    title: "ML Drift Detection & Monitoring System",
    description:
      "Built a monitoring system to track model performance and detect distribution changes in production data. The system continuously analyzes incoming data streams and compares them with training data distributions to identify potential drift.",
    technologies: ["Python", "PyTorch", "Deep Learning", "Statistics"],
    imageUrl: "/gpu-cluster-training.png",
    link: {
      label: "GitHub",
      url: "https://github.com/sasank-in/ML-Pipeline-with-Drift-Detection-Auto-Retraining",
    },
  },
  {
    id: "3",
    title: "Agriculture Trading Platform For Farmers And Retailers",
    description:
      "Advanced application for facilitating trade between farmers and retailers, providing a seamless platform for buying and selling agricultural products.",
    technologies: ["Spring Boot", "Spring Cloud", "PostgreSQL","Microservices"],
    imageUrl: "/autonomous-vehicle-segmentation.png",
    link: {
      label: "GitHub",
      url: "https://github.com/sasank-in/Agriculture-Platform",
    },
  },
  {
    id: "4",
    title: "Resume Intelligence & Job Recommendation Platform",
    description:
      "AI-powered platform that analyzes resumes, extracts key information, and generates intelligent summaries and insights. Utilizes NLP pipelines to process resume documents and provide structured outputs for easier candidate evaluation.",
    technologies: ["Python", "LangChain", "PyTorch", "FastAPI", "NLP"],
    imageUrl: "/diffusion-model-synthetic-data.png",
    link: {
      label: "GitHub",
      url: "https://github.com/sasank-in/Resume-Intelligence-Platform",
    },
  },
]

export const experiences: Experience[] = [
  {
    role: "AI Engineer Intern",
    company: "SmartX Technologies",
    type: "Internship",
    start: "Jan 2025",
    end: "Sep 2025",
    duration: "9 mos",
    summary:
      "Leading the development of scalable ML infrastructure and deployment pipelines. Architected distributed training systems that reduced model training time by 60%. Implemented MLOps best practices including automated testing, monitoring, and continuous deployment for production ML models. Built REST APIs for serving model inference and structured analytics data.",
  },
  {
    role: "Python Developer Intern",
    company: "Infosys Springboard",
    type: "Internship",
    start: "Mar 2024",
    end: "Jun 2024",
    duration: "4 mos",
    summary:
      "Developed backend services for a payroll management system using Django REST Framework. Implemented secure authentication using JWT, designed relational database schemas, and automated scheduled tasks using Celery for payroll processing workflows.",
  },
]

export const education: Education[] = [
  {
    school: "Lovely Professional University",
    program: "Bachelor of Technology in Computer Science - Specialization in Machine Learning & AI",
    period: "2022 - 2026",
    summary:
      'Coursework in deep learning, computer vision, operating systems, and database systems. Capstone thesis on "Scalable Neural Architecture Search for Edge Computing Devices", exploring automated model optimization for resource-constrained inference.',
  },
  {
    school: "ANU Junior College",
    program: "Intermediate (MPC) - Mathematics, Physics & Chemistry",
    period: "2020 - 2022",
    summary:
      "Higher secondary education with the MPC stream — the math and physics grounding that made the jump into ML and systems work feel natural rather than abrupt.",
  },
]

export const certificates: Certificate[] = [
  {
    id: "meta-backend",
    title: "Meta Backend Developer Professional Certificate",
    issuer: "Coursera",
    issued: "Issued Aug 2025",
    credentialId: "O5B8I7A6PRZY",
    description:
      "Nine-course specialization on backend engineering with Python and Django — REST API design, authentication, relational data modelling, version control workflows, and deployment fundamentals. Capstone project: a restaurant booking and ordering API built with Django REST Framework.",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/O5B8I7A6PRZY",
  },
  {
    id: "deep-learning",
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    issued: "Issued Oct 2024",
    credentialId: "EXTTCNXPGS8D",
    description:
      "Five-course specialization by Andrew Ng — built neural networks from scratch in NumPy before moving to TensorFlow, covering backpropagation, CNNs for image tasks, sequence models (RNNs, LSTMs, attention), and practical aspects of hyperparameter tuning, regularization, and structuring ML projects.",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/EXTTCNXPGS8D",
  },
  {
    id: "google-analytics",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    issued: "Issued Feb 2024",
    credentialId: "7GYYFT92429P",
    description:
      "Eight-course program on the end-to-end data analytics workflow — asking the right questions, cleaning and preparing data in spreadsheets and SQL, exploratory analysis in R, and communicating findings through Tableau dashboards. Case study on a bike-share company informed the capstone.",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/7GYYFT92429P",
  },
]
