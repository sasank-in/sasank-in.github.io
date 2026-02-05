import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
  { name: 'Python', level: 88 },
  { name: 'TensorFlow / PyTorch', level: 82 },
  { name: 'Machine Learning', level: 78 },
  { name: 'Deep Learning', level: 80 },
  { name: 'NLP', level: 72 },
  { name: 'Computer Vision', level: 85 },
]


  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text glass"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="lead"></p>
            <p>I am an AI-focused Software Engineer with a strong foundation in computer vision, machine learning, and backend system development. I focus on building end-to-end intelligent applications that go beyond model development, emphasizing scalability, clean architecture, and real-world deployment.
              My core expertise lies in computer vision and deep learning, where I have worked with frameworks such as PyTorch, OpenCV, YOLO, and TrackNet. I have built vision-based sports analytics systems, including tennis ball tracking, bounce detection, player movement analysis, and match-level insights, involving video processing pipelines, multi-object tracking, and geometric transformations.
              In addition to computer vision, I have experience in NLP-driven applications such as resume analysis and document summarization, where I extract structured insights from unstructured data using semantic similarity and machine learning techniques. These projects aim to automate manual processes while maintaining accuracy and usability.
              I also have strong backend and system engineering experience, building RESTful APIs using Django REST Framework and FastAPI, integrating relational databases, and designing services that support ML workflows. Alongside this, I actively work on ML Ops–oriented systems, including ML drift detection and monitoring, to ensure deployed models remain reliable over time.
              Overall, I enjoy working at the intersection of AI engineering and software development, transforming complex AI ideas into robust, production-ready systems with measurable impact.</p>
          </motion.div>

          <motion.div
            className="about-skills glass"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Core Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
