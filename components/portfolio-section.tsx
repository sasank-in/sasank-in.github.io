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
  ChevronDown,
  Award,
  MapPin,
  FileText,
} from "lucide-react"
import { useState } from "react"

const MAX_TECH_BADGES = 5
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
      <div className="container mx-auto px-4 pt-20 pb-16">
        {/* Header & Tagline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="rounded-2xl border border-border/50 bg-transparent px-6 py-8 shadow-[0_0_0_1px_rgba(148,163,184,0.15),0_18px_40px_-24px_rgba(15,23,42,0.8)]">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="rounded-full bg-[conic-gradient(from_-150deg,#FF9933_0deg,#FF9933_120deg,#138808_120deg,#138808_240deg,#1E4DB7_240deg,#1E4DB7_360deg)] p-[3px] shadow-sm">
                  <div className="relative h-28 w-28 rounded-full bg-background">
                    <Image
                      src={profile.avatarSrc}
                      alt={profile.name}
                      fill
                      sizes="112px"
                      className="rounded-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold text-foreground mb-2">{profile.name}</h1>
                <p className="text-xl text-primary font-medium mb-3">{profile.title}</p>
                <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-2 md:gap-3 mb-4">
                  <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {profile.location}
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    {profile.availability}
                  </span>
                </div>
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
                      <FileText className="h-4 w-4" />
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
        </div>

        {/* Skills & Tools */}
        <div id="skills" className="max-w-4xl mx-auto mb-16 scroll-mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Skills & Tools</h2>

          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div id="projects" className="max-w-4xl mx-auto mb-16 scroll-mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="pt-0 overflow-hidden flex flex-col border-border/50 hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative aspect-video overflow-hidden rounded-t-xl">
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
                    <button
                      type="button"
                      onClick={() => toggleProjectDescription(project.id)}
                      className="mt-1 self-start rounded-sm text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {expandedProjects[project.id] ? "Read less" : "Read more"}
                    </button>
                  )}
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  {project.metrics && project.metrics.length > 0 && (
                    <ul className="mb-4 space-y-1">
                      {project.metrics.map((metric) => (
                        <li key={metric} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                          {metric}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-2 mb-4">
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
                  {project.link ? (
                    <Button variant="outline" className="mt-auto w-full bg-transparent" asChild>
                      <a href={project.link.url} target="_blank" rel="noopener noreferrer">
                        {project.link.label ?? "View Project"}
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" className="mt-auto w-full bg-transparent" disabled>
                      Details Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div id="experience" className="max-w-4xl mx-auto mb-16 scroll-mt-16">
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
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-foreground">{experience.role}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {experience.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{experience.company}</p>
                      <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {experience.start} – {experience.end} · {experience.duration}
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
        <div id="education" className="max-w-4xl mx-auto mb-16 scroll-mt-16">
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
        <div id="certificates" className="max-w-4xl mx-auto mb-16 scroll-mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Certificates & Achievements</h2>

          <div className="space-y-4">
            {certificates.map((certificate) => (
              <Collapsible
                key={certificate.id}
                open={openCertificates[certificate.id]}
                onOpenChange={() => toggleCertificate(certificate.id)}
              >
                <CollapsibleTrigger asChild>
                  <Card
                    role="button"
                    tabIndex={0}
                    aria-expanded={!!openCertificates[certificate.id]}
                    className="border-border/50 hover:border-accent/50 hover:shadow-md transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Award className="h-6 w-6 text-primary" />
                          </div>
                          <div className="text-left">
                            <span className="block text-lg font-semibold text-foreground">
                              {certificate.title}
                            </span>
                            <span className="block text-sm text-muted-foreground">
                              {certificate.issuer} · {certificate.issued}
                            </span>
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
                  <Card className="border-border/50 mt-2">
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {certificate.description}
                      </p>
                      {certificate.credentialId && (
                        <p className="mt-2 text-xs text-muted-foreground">
                          Credential ID:{" "}
                          <span className="font-mono text-foreground">{certificate.credentialId}</span>
                        </p>
                      )}
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

        {/* Contact / Get in touch */}
        <div id="contact" className="max-w-4xl mx-auto mb-16 scroll-mt-16">
          <Card className="border-border/50">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">Get in touch</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Open to backend and ML engineering roles. Drop a note or book a quick chat — I usually reply within a day.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild>
                  <a href={profile.social.email}>
                    <Mail className="h-4 w-4 mr-2" />
                    {profile.contact.emailAddress}
                  </a>
                </Button>
                <Button variant="outline" className="bg-transparent" asChild>
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    Message on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <footer className="max-w-4xl mx-auto border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · Built with Next.js &amp; shadcn/ui
        </footer>
      </div>
    </div>
  )
}
