import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="hero-label"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              AI Engineer & ML Specialist
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Sasank Nukala
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Building intelligent systems that solve real-world problems.
              Specializing in machine learning, deep learning, and scalable AI solutions.
            </motion.p>

            <motion.div
              className="hero-social"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a href="https://github.com/sasank-in" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/sasank-nukala" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:shashanknukala7@gmail.com">
                <FaEnvelope />
              </a>
            </motion.div>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#contact" className="btn btn-primary">
                Start a Project
              </a>
              <a href="/assets/resume.pdf" className="btn btn-secondary" download>
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="image-wrapper">
              <img src="/assets/images/image.jpg" alt="Shashank Nukala" />
              <div className="image-glow"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
