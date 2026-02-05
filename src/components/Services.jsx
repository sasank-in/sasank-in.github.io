import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Services.css'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      number: '01',
      title: 'AI Consulting',
      description: '',
      features: [''],
    },
    {
      number: '02',
      title: 'Backend Operations',
      description: '',
      features: [''],
    },
    {
      number: '03',
      title: 'System Integration',
      description: '',
      features: [''],
    },
  ]

  return (
    <section id="services" className="services" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">How I Can Help</span>
          <h2 className="section-title">Services Offered</h2>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              className="service-card glass"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-number gradient-text">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-list">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
