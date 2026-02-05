import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="logo gradient-text">SN</div>
            <p>AI Engineer specializing in machine learning and intelligent systems.</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/sasank-in" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://linkedin.com/in/sasank-nukala" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="mailto:shashanknukala7@gmail.com">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Sasank Nukala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
