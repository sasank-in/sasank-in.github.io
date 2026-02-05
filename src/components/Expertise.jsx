import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Expertise.css'

const Expertise = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const expertiseAreas = [
    {
      icon: '🤖',
      title: 'Machine Learning',
      description: '',
    },
    {
      icon: '🧠',
      title: 'Deep Learning',
      description: '',
    },
    {
      icon: '💬',
      title: 'Natural Language Processing',
      description: '',
    },
    {
      icon: '👁️',
      title: 'Computer Vision',
      description: '',
    },
    {
      icon: '📊',
      title: 'Data Engineering',
      description: '',
    },
    {
      icon: '☁️',
      title: 'MLOps & Deployment',
      description: '',
    },
  ]

  return (
    <section id="expertise" className="expertise" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">What I Do</span>
          <h2 className="section-title">Areas of Expertise</h2>
        </motion.div>

        <div className="expertise-grid">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className="expertise-card glass"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="expertise-icon">{area.icon}</div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
