import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import './Expertise.css'

const Expertise = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedExpertise, setSelectedExpertise] = useState(0)

  const expertiseAreas = [
    {
      icon: 'ML',
      title: 'Machine Learning',
      shortTitle: 'ML',
      description: 'Building predictive models and intelligent algorithms that learn from data patterns to make accurate decisions and forecasts.',
      gradient: 'linear-gradient(135deg, #0b3d91 0%, #0f6fa8 100%)',
      color: '#0b3d91',
      skills: [
        { name: 'Supervised Learning', level: 95 },
        { name: 'Unsupervised Learning', level: 90 },
        { name: 'Feature Engineering', level: 92 },
        { name: 'Model Optimization', level: 88 },
      ],
      tools: ['Scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost'],
    },
    {
      icon: 'DL',
      title: 'Deep Learning',
      shortTitle: 'DL',
      description: 'Designing and training neural networks for complex pattern recognition, from CNNs to transformers and GANs.',
      gradient: 'linear-gradient(135deg, #0f6fa8 0%, #22c1c3 100%)',
      color: '#0f6fa8',
      skills: [
        { name: 'Neural Networks', level: 93 },
        { name: 'CNN Architecture', level: 91 },
        { name: 'Transfer Learning', level: 89 },
        { name: 'Model Training', level: 94 },
      ],
      tools: ['TensorFlow', 'PyTorch', 'Keras', 'JAX'],
    },
    {
      icon: 'NLP',
      title: 'Natural Language Processing',
      shortTitle: 'NLP',
      description: 'Processing and understanding human language with state-of-the-art transformer models and language understanding techniques.',
      gradient: 'linear-gradient(135deg, #163a5f 0%, #0b3d91 100%)',
      color: '#163a5f',
      skills: [
        { name: 'Text Classification', level: 90 },
        { name: 'Named Entity Recognition', level: 87 },
        { name: 'Sentiment Analysis', level: 92 },
        { name: 'Language Models', level: 88 },
      ],
      tools: ['Transformers', 'BERT', 'GPT', 'spaCy'],
    },
    {
      icon: 'CV',
      title: 'Computer Vision',
      shortTitle: 'CV',
      description: 'Enabling machines to see and interpret visual information through advanced image processing and object detection systems.',
      gradient: 'linear-gradient(135deg, #0f6fa8 0%, #6cc3d5 100%)',
      color: '#0f6fa8',
      skills: [
        { name: 'Object Detection', level: 91 },
        { name: 'Image Segmentation', level: 88 },
        { name: 'Face Recognition', level: 89 },
        { name: 'Image Classification', level: 93 },
      ],
      tools: ['OpenCV', 'YOLO', 'Detectron2', 'MediaPipe'],
    },
    {
      icon: 'DE',
      title: 'Data Engineering',
      shortTitle: 'DE',
      description: 'Building robust data pipelines and infrastructure for efficient data processing, storage, and analysis at scale.',
      gradient: 'linear-gradient(135deg, #1f3b59 0%, #2f6b8f 100%)',
      color: '#1f3b59',
      skills: [
        { name: 'ETL Pipelines', level: 90 },
        { name: 'Data Warehousing', level: 86 },
        { name: 'Big Data Processing', level: 88 },
        { name: 'Database Design', level: 91 },
      ],
      tools: ['Pandas', 'Apache Spark', 'Airflow', 'SQL'],
    },
    {
      icon: 'MLOps',
      title: 'MLOps & Deployment',
      shortTitle: 'MLOps',
      description: 'Deploying and maintaining ML models in production with CI/CD pipelines, monitoring, and scalable infrastructure.',
      gradient: 'linear-gradient(135deg, #0b3d91 0%, #22c1c3 100%)',
      color: '#0b3d91',
      skills: [
        { name: 'Model Deployment', level: 92 },
        { name: 'CI/CD Pipelines', level: 89 },
        { name: 'Cloud Infrastructure', level: 87 },
        { name: 'Monitoring & Logging', level: 90 },
      ],
      tools: ['Docker', 'Kubernetes', 'AWS', 'MLflow'],
    },
    {
      icon: 'SE',
      title: 'Software Engineering',
      shortTitle: 'SE',
      description: 'Designing and delivering reliable software systems with clean architecture, scalable services, and strong engineering practices.',
      gradient: 'linear-gradient(135deg, #1f3b59 0%, #2f6b8f 100%)',
      color: '#1f3b59',
      skills: [
        { name: 'System Design', level: 90 },
        { name: 'API Development', level: 92 },
        { name: 'Backend Services', level: 88 },
        { name: 'Testing & QA', level: 85 },
      ],
      tools: ['Java', 'Django', 'PostgreSQL', 'Python', "C++"],
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
          <p className="section-subtitle">Click on any area to explore my skills and tools</p>
        </motion.div>

        <div className="expertise-layout">
          {/* Left Side - Navigation Cards */}
          <div className="expertise-nav">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className={`nav-card ${selectedExpertise === index ? 'active' : ''}`}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedExpertise(index)}
                whileHover={{ x: 10 }}
              >
                <div className="nav-card-icon">{area.icon}</div>
                <div className="nav-card-content">
                  <h4>{area.title}</h4>
                  <div 
                    className="nav-card-indicator" 
                    style={{ background: area.gradient }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Details Panel */}
          <motion.div
            className="expertise-details"
            key={selectedExpertise}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div 
              className="details-header"
              style={{ background: expertiseAreas[selectedExpertise].gradient }}
            >
              <div className="details-icon">
                {expertiseAreas[selectedExpertise].icon}
              </div>
              <div>
                <h3>{expertiseAreas[selectedExpertise].title}</h3>
                <p>{expertiseAreas[selectedExpertise].description}</p>
              </div>
            </div>

            <div className="details-body">
              <div className="skills-section">
                <h4>Key Skills</h4>
                <div className="skills-list">
                  {expertiseAreas[selectedExpertise].skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item-detailed"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-detailed">
                        <motion.div
                          className="skill-progress-detailed"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          style={{ 
                            background: expertiseAreas[selectedExpertise].gradient 
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="tools-section">
                <h4>Tools & Technologies</h4>
                <div className="tools-grid">
                  {expertiseAreas[selectedExpertise].tools.map((tool, index) => (
                    <motion.div
                      key={tool}
                      className="tool-badge"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      style={{ 
                        borderColor: expertiseAreas[selectedExpertise].color 
                      }}
                    >
                      {tool}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Expertise
