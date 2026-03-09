"use client"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  certificates,
  education,
  experiences,
  profile,
  projects,
  skills,
} from "@/lib/portfolio"
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

const MAX_TECH_BADGES = 4
const MAX_DESCRIPTION_CHARS = 80

export default function PortfolioSection() {
  const [openCertificates, setOpenCertificates] = useState<{ [key: string]: boolean }>({})
  const [expandedProjects, setExpandedProjects] = useState<{ [key: string]: boolean }>({})

  const toggleCertificate = (id: string) => {
    setOpenCertificates((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const toggleProjectDescription = (id: string) => {
    setExpandedProjects((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const getProjectDescription = (id: string, description: string) => {
    const isExpanded = expandedProjects[id]
    if (isExpanded || description.length <= MAX_DESCRIPTION_CHARS) {
      return description
    }
    return `${description.slice(0, MAX_DESCRIPTION_CHARS).trim()}...`
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header & Tagline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32">
                <Image
                  src={profile.avatarSrc}
                  alt={profile.name}
                  fill
                  sizes="128px"
                  className="rounded-full object-cover border-4 border-primary/20"
                  priority
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-foreground mb-2">{profile.name}</h1>
              <p className="text-xl text-primary font-medium mb-4">{profile.title}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {profile.summary}
              </p>

              <div className="flex justify-center md:justify-start gap-4">
                <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View resume"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                  <a href={profile.social.email} aria-label="Send email">
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
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Projects - Classic UI with 4 projects */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="pt-0 overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {getProjectDescription(project.id, project.description)}
                  </CardDescription>
                  {project.description.length > MAX_DESCRIPTION_CHARS && (
                    <Button
                      variant="link"
                      className="px-0 h-auto text-primary"
                      onClick={() => toggleProjectDescription(project.id)}
                    >
                      {expandedProjects[project.id] ? "Read less" : "Read more"}
                    </Button>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, MAX_TECH_BADGES).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > MAX_TECH_BADGES && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - MAX_TECH_BADGES}
                      </Badge>
                    )}
                  </div>
                  {project.links &&
                  (project.links.github || project.links.demo || project.links.caseStudy) ? (
                    <div className="grid grid-cols-3 gap-2">
                      {project.links.github ? (
                        <Button variant="outline" className="bg-transparent" asChild>
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                          </a>
                        </Button>
                      ) : (
                        <Button variant="outline" className="bg-transparent" disabled>
                          GitHub
                        </Button>
                      )}
                      {project.links.demo ? (
                        <Button variant="outline" className="bg-transparent" asChild>
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            Live
                          </a>
                        </Button>
                      ) : (
                        <Button variant="outline" className="bg-transparent" disabled>
                          Live
                        </Button>
                      )}
                      {project.links.caseStudy ? (
                        <Button variant="outline" className="bg-transparent" asChild>
                          <a href={project.links.caseStudy} target="_blank" rel="noopener noreferrer">
                            Case Study
                          </a>
                        </Button>
                      ) : (
                        <Button variant="outline" className="bg-transparent" disabled>
                          Case Study
                        </Button>
                      )}
                    </div>
                  ) : (
                    <Button variant="outline" className="w-full bg-transparent" disabled>
                      Details Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Experience</h2>

          <div className="space-y-6">
            {experiences.map((experience) => (
              <Card key={`${experience.company}-${experience.role}`} className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{experience.role}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {experience.company} - {experience.type}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {experience.start} - {experience.end} | {experience.duration}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{experience.summary}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Education</h2>

          <div className="space-y-6">
            {education.map((item) => (
              <Card key={item.school} className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{item.school}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.program}</p>
                      <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {item.period}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.summary}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certificates & Achievements */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Certificates & Achievements</h2>

          <div className="space-y-4">
            {certificates.map((certificate) => (
              <Collapsible
                key={certificate.id}
                open={openCertificates[certificate.id]}
                onOpenChange={() => toggleCertificate(certificate.id)}
              >
                <CollapsibleTrigger className="w-full">
                  <Card className="border-border/50 hover:border-accent/50 transition-colors cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Award className="h-6 w-6 text-primary" />
                          </div>
                          <div className="text-left">
                            <h3 className="text-lg font-semibold text-foreground">{certificate.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {certificate.issuer} - {certificate.issued}
                            </p>
                          </div>
                        </div>
                        <ChevronDown
                          className={`h-5 w-5 text-muted-foreground transition-transform ${openCertificates[certificate.id] ? "rotate-180" : ""}`}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <Card className="border-border/50 mt-2 ml-4">
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {certificate.description}
                      </p>
                      <Button variant="link" className="p-0 h-auto text-primary" asChild>
                        <a href={certificate.url} target="_blank" rel="noopener noreferrer">
                          View Certificate
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  )
}
