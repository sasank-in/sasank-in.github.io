import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'AI-Powered Tennis Match Analysis System',
      description: 'An end-to-end computer vision application that automatically tracks the tennis ball, detects bounces, analyzes player movements, and generates match-level analytics from raw match videos using deep learning and geometric transformations.',
      tags: [
        'Computer Vision',
        'YOLOv8',
        'TrackNet',
        'OpenCV',
        'Deep Learning',
        'Sports Analytics',
        'Python',
        'REST API'
      ],
      link: 'https://www.moments-athletics.com',
      gradient: 'linear-gradient(135deg, #0b3d91 0%, #0f6fa8 100%)',
    }
    ,
    {
      title: 'AI Resume Analyzer & Skill Matching System',
      description: 'An NLP-driven application that parses resumes, extracts key skills and experience, analyzes job relevance, and provides intelligent feedback using machine learning and language models.',
      tags: [
        'NLP',
        'Machine Learning',
        'Python',
        'Resume Parsing',
        'Text Analytics',
        'Scikit-learn',
        'LangChain',
        'AI Automation'
      ],
      link: 'https://github.com/sasank-in/Resume-Intelligence-Platform',
      gradient: 'linear-gradient(135deg, #163a5f 0%, #2f6b8f 100%)',
    }
    ,
    {
    title: 'Machine Learning Drift Detection & Monitoring System',
    description: 'A production-oriented ML monitoring application that detects data drift and concept drift in deployed models using statistical tests and distribution analysis, ensuring model reliability and performance over time.',
    tags: [
      'Machine Learning',
      'Data Drift',
      'Concept Drift',
      'Model Monitoring',
      'Python',
      'Statistics',
      'ML Ops'
    ],
    link: 'https://github.com/sasank-in/ML-Pipeline-with-Drift-Detection-Auto-Retraining',
    gradient: 'linear-gradient(135deg, #0f6fa8 0%, #22c1c3 100%)',
  },
  ]

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card glass"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div
                className="project-image"
                style={{ background: project.gradient }}
              >
                <div className="project-overlay">
                  <a href={project.link} className="project-link">
                    View Project →
                  </a>
                </div>
              </div>
              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
