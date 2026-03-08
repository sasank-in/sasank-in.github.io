"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Calendar,
  GraduationCap,
  Briefcase,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Award,
} from "lucide-react"
import { useState } from "react"

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Tennis Match Analysis System",
    description:
      "High-performance computer vision system for industrial quality control with sub-millisecond inference times.",
    technologies: ["PyTorch", "CUDA", "OpenCV", "YOLO", "TrackNet"],
    imageUrl: "/tennis-analysis.jpg",
  },
  {
    id: "2",
    title: "ML Drift Detection & Monitoring System",
    description: "Built a monitoring system to track model performance and detect distribution changes in production data. The system continuously analyzes incoming data streams and compares them with training data distributions to identify potential drift.",
    technologies: ["Python", "PyTorch", "Deep Learning", "Statiastics"],
    imageUrl: "/gpu-cluster-training.png",
  },
  {
    id: "3",
    title: "Spring Boot Microservices Backend System",
    description: "Advanced segmentation model combining RGB, depth, and thermal data for autonomous navigation.",
    technologies: ["Java", "Spring Boot", "Spring Cloud", "PostgreSQL"],
    imageUrl: "/autonomous-vehicle-segmentation.png",
  },
  {
  id: "4",
  title: "Resume Intelligence Platform",
  description:
    "AI-powered platform that analyzes resumes, extracts key information, and generates intelligent summaries and insights. Utilizes NLP pipelines to process resume documents and provide structured outputs for easier candidate evaluation.",
  technologies: ["Python", "LangChain", "PyTorch", "FastAPI", "NLP"],
  imageUrl: "diffusion-model-synthetic-data.png",
  // githubUrl: "https://github.com/sasank-in",
 },

]

export default function PortfolioSection() {
  const [openCertificates, setOpenCertificates] = useState<{ [key: string]: boolean }>({})

  const toggleCertificate = (id: string) => {
    setOpenCertificates((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header & Tagline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32">
                <img
                  src="/sasank-nukala-headshot.png"
                  alt="Sasank Nukala"
                  className="w-full h-full rounded-full object-cover border-4 border-primary/20"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-foreground mb-2">Sasank Nukala</h1>
              <p className="text-xl text-primary font-medium mb-4">Backend Developer | Machine Learning Engineer</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Systems-focused AI engineer specializing in scalable machine learning infrastructure, computer vision
                pipelines, and distributed training systems. Passionate about building robust, production-ready AI
                solutions that bridge the gap between research and real-world applications.
              </p>

              <div className="flex justify-center md:justify-start gap-4">
                <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                  <a href="https://github.com/sasank-in" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                  <a href="https://linkedin.com/in/sasank-nukala" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                  <a href="https://drive.google.com/file/d/1akj0_eIeE1HJ3uhXNEXWYR90vQ5dqNHv/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                  <a href="mailto:shashanknukala7@gmail.com">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Tools - Simplified */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Skills & Tools</h2>

          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Python
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Java
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              PyTorch
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              FastAPI
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              SQL (MySQL & PostgreSQL)
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Spring Boot
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Spring Cloud
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Django RestFramework
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Git
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              OpenCV
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              YOLO
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Dataset Annotation
            </Badge>
          </div>
        </div>

        {/* Featured Projects - Classic UI with 4 projects */}
        <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-md transition-shadow duration-200">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Experience</h2>

          <div className="space-y-6">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">AI Engineer Intern</h3>
                    <p className="text-sm text-muted-foreground mb-2">SmartX Technologies • Internship</p>
                    <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Jan 2025 - Sep 2025 • 0 yr 9 mos
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Leading the development of scalable ML infrastructure and deployment pipelines. Architected
                      distributed training systems that reduced model training time by 60%. Implemented MLOps best
                      practices including automated testing, monitoring, and continuous deployment for production ML
                      models. Built REST APIs for serving model inference and structured analytics data.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">Python Developer Intern</h3>
                    <p className="text-sm text-muted-foreground mb-2">Infosys Springboard • Internship</p>
                    <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Mar 2024 - Jun 2024 • 0 yr 4 mos
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Developed backend services for a payroll management system using Django REST Framework.
                      Implemented secure authentication using JWT, designed relational database schemas, and 
                      automated scheduled tasks using Celery for payroll processing workflows.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Education */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Education</h2>

          <div className="space-y-6">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Bachelor of Technology in Computer Science
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Lovely Professional University • Specialization in Machine Learning & AI
                    </p>
                    <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      2022 - 2026
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Advanced coursework in deep learning, computer vision, and distributed systems. Thesis on
                      "Scalable Neural Architecture Search for Edge Computing Devices" with focus on automated model
                      optimization.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      ANU Junior College
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Intermediate (MPC) • Mathematics, Physics & Chemistry
                    </p>
                    <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      2020 - 2022
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Completed higher secondary education with focus on Mathematics, Physics, and Chemistry.
                      Built a strong analytical and problem-solving foundation which later supported my transition
                      into Computer Science and Artificial Intelligence studies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certificates & Achievements */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Certificates & Achievements</h2>

          <div className="space-y-4">
            <Collapsible>
              <CollapsibleTrigger className="w-full" onClick={() => toggleCertificate("meta-backend")}>
                <Card className="border-border/50 hover:border-accent/50 transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-lg font-semibold text-foreground">
                            Meta Backend Developer Professional Certificate
                          </h3>
                          <p className="text-sm text-muted-foreground">Coursera • Issued Aug 2025</p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground transition-transform ${openCertificates["meta-backend"] ? "rotate-180" : ""}`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <Card className="border-border/50 mt-2 ml-4">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Comprehensive professional certificate covering backend development fundamentals, API design,
                      database management, and cloud deployment. Includes hands-on projects with Python, Django, and
                      cloud infrastructure.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary" asChild>
                      <a
                        href="https://www.coursera.org/account/accomplishments/specialization/certificate/O5B8I7A6PRZY"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="w-full" onClick={() => toggleCertificate("deep-learning")}>
                <Card className="border-border/50 hover:border-accent/50 transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-lg font-semibold text-foreground">Deep Learning Specialization</h3>
                          <p className="text-sm text-muted-foreground">Coursera • Issued Oct 2024</p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground transition-transform ${openCertificates["deep-learning"] ? "rotate-180" : ""}`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <Card className="border-border/50 mt-2 ml-4">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      5-course specialization covering neural networks, deep learning, convolutional networks, RNNs, and
                      sequence models. Hands-on projects included building and training neural networks from scratch
                      using Python and TensorFlow.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary" asChild>
                      <a
                        href="https://www.coursera.org/account/accomplishments/specialization/certificate/EXTTCNXPGS8D"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="w-full" onClick={() => toggleCertificate("google-analytics")}>
                <Card className="border-border/50 hover:border-accent/50 transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-lg font-semibold text-foreground">
                            Google Data Analytics Professional Certificate
                          </h3>
                          <p className="text-sm text-muted-foreground">Coursera • Issued Feb 2024</p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground transition-transform ${openCertificates["google-analytics"] ? "rotate-180" : ""}`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <Card className="border-border/50 mt-2 ml-4">
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Comprehensive program covering data analysis fundamentals, data cleaning, visualization, and
                      statistical analysis. Practical experience with tools like SQL, R, Tableau, and spreadsheets for
                      data-driven decision making.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary" asChild>
                      <a
                        href="https://www.coursera.org/account/accomplishments/specialization/certificate/7GYYFT92429P"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </div>
  )
}
