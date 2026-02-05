import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-item glass">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:shashanknukala7@gmail.com">
                  shashanknukala7@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item glass">
              <div className="contact-icon">
                <FaLinkedin />
              </div>
              <div>
                <h4>LinkedIn</h4>
                <a
                  href="https://linkedin.com/in/sasank-nukala"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/sasank-nukala
                </a>
              </div>
            </div>

            <div className="contact-item glass">
              <div className="contact-icon">
                <FaGithub />
              </div>
              <div>
                <h4>GitHub</h4>
                <a
                  href="https://github.com/sasank-in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/sasank-in
                </a>
              </div>
            </div>

            <div className="contact-item glass">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Location</h4>
                <p>Phagwara, IN</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form glass"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
