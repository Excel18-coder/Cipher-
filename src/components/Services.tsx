import { Shield, Search, Zap, Brain, Monitor, Users, Lock, AlertTriangle, Settings, Cloud, Database, Globe, ArrowRight, CheckCircle, Timer, DollarSign, Code, Smartphone, Palette, BarChart3, X, Clock } from 'lucide-react';
import { useState } from 'react';
import downloadServiceGuide from '../utils/generateServiceGuide';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const serviceDetails = {
    "Web Development": {
      fullDescription: "We create modern, responsive websites and web applications using the latest technologies. Our development process includes requirement analysis, UI/UX design, frontend and backend development, testing, and deployment.",
      technologies: ["React", "Vue.js", "Angular", "Node.js", "Django", "Laravel", "PostgreSQL", "MongoDB"],
      process: [
        "Requirements gathering and analysis",
        "UI/UX design and wireframing", 
        "Frontend development with responsive design",
        "Backend API development and database design",
        "Testing and quality assurance",
        "Deployment and maintenance"
      ],
      deliverables: ["Source code", "Documentation", "Deployment guide", "Training", "3 months support"]
    },
    "Mobile App Development": {
      fullDescription: "Cross-platform and native mobile app development for iOS and Android. We use modern frameworks like React Native and Flutter to create efficient, user-friendly mobile applications.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "API Integration"],
      process: [
        "Market research and competitor analysis",
        "App design and user experience planning",
        "Development using cross-platform frameworks",
        "Native feature integration and optimization",
        "App store submission and approval",
        "Post-launch monitoring and updates"
      ],
      deliverables: ["App binaries", "Source code", "App store listing", "User manual", "6 months support"]
    },
    "Data Science & ML": {
      fullDescription: "Transform your business data into actionable insights using machine learning, predictive analytics, and business intelligence solutions. We help you make data-driven decisions.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Jupyter", "Power BI", "Tableau"],
      process: [
        "Data collection and cleaning",
        "Exploratory data analysis",
        "Model development and training",
        "Model validation and testing",
        "Deployment and monitoring",
        "Continuous improvement and maintenance"
      ],
      deliverables: ["ML models", "Data pipelines", "Analytics dashboard", "Documentation", "Training"]
    },
    "Cybersecurity": {
      fullDescription: "Comprehensive cybersecurity services including security audits, penetration testing, and ongoing protection to safeguard your digital assets from evolving threats.",
      technologies: ["Nmap", "Metasploit", "Burp Suite", "OWASP", "Wireshark", "Security frameworks"],
      process: [
        "Security assessment and vulnerability scanning",
        "Penetration testing and threat simulation", 
        "Security policy development",
        "Implementation of security measures",
        "Employee training and awareness",
        "Ongoing monitoring and incident response"
      ],
      deliverables: ["Security audit report", "Penetration test results", "Security policies", "Training materials", "Incident response plan"]
    },
    "Graphics Design": {
      fullDescription: "Professional graphics design services including brand identity, logo design, marketing materials, and digital artwork to enhance your business presence.",
      technologies: ["Adobe Creative Suite", "Figma", "Sketch", "Canva", "Illustrator", "Photoshop"],
      process: [
        "Brand research and strategy development",
        "Concept creation and initial designs",
        "Client feedback and revisions",
        "Final design refinement",
        "File preparation for various media",
        "Brand guidelines documentation"
      ],
      deliverables: ["Logo files", "Brand guidelines", "Marketing materials", "Source files", "Usage rights"]
    },
    "Cloud Solutions": {
      fullDescription: "Scalable cloud infrastructure setup, migration, and management using leading cloud platforms to ensure your applications are reliable, secure, and performant.",
      technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      process: [
        "Cloud strategy and architecture planning",
        "Infrastructure setup and configuration",
        "Application migration and deployment",
        "Security and compliance implementation",
        "Monitoring and optimization setup",
        "Training and knowledge transfer"
      ],
      deliverables: ["Cloud infrastructure", "Migration plan", "Monitoring setup", "Documentation", "Team training"]
    },
    "Database Solutions": {
      fullDescription: "Database design, optimization, and management services for both SQL and NoSQL databases to ensure efficient data storage, retrieval, and management.",
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Database optimization tools"],
      process: [
        "Database requirements analysis",
        "Schema design and optimization",
        "Data migration and integration",
        "Performance tuning and indexing",
        "Backup and recovery setup",
        "Ongoing maintenance and monitoring"
      ],
      deliverables: ["Database schema", "Migration scripts", "Backup strategy", "Performance reports", "Maintenance plan"]
    },
    "Digital Marketing": {
      fullDescription: "Comprehensive digital marketing strategies including SEO, social media management, content marketing, and PPC campaigns to boost your online presence.",
      technologies: ["Google Analytics", "SEMrush", "Hootsuite", "Mailchimp", "WordPress", "Social media platforms"],
      process: [
        "Market research and audience analysis",
        "Strategy development and planning",
        "Content creation and optimization",
        "Campaign implementation and management",
        "Performance monitoring and analytics",
        "Continuous optimization and reporting"
      ],
      deliverables: ["Marketing strategy", "Content calendar", "Campaign reports", "SEO optimization", "Social media presence"]
    }
  };
  const services = [
    {
      icon: Code,
      title: "Web Development",
      subtitle: "Full-Stack Solutions",
      description: "Custom web applications built with modern frameworks like React, Vue.js, Node.js, and Django. From simple websites to complex enterprise applications.",
      features: ["Frontend Development", "Backend APIs", "Database Design", "E-commerce Solutions", "Progressive Web Apps", "Performance Optimization"],
      color: "from-blue-500 to-cyan-500",
      duration: "4-12 weeks",
      popular: true
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      subtitle: "iOS & Android Solutions",
      description: "Native and cross-platform mobile applications using React Native, Flutter, and native technologies for iOS and Android platforms.",
      features: ["Native iOS/Android Apps", "Cross-platform Development", "UI/UX Design", "App Store Deployment", "Push Notifications", "Offline Functionality"],
      color: "from-green-500 to-teal-500",
      duration: "8-16 weeks",
      popular: true
    },
    {
      icon: Brain,
      title: "Data Science & ML",
      subtitle: "AI-Powered Insights",
      description: "Machine learning models, data analytics, and AI solutions to transform your business data into actionable insights and automated processes.",
      features: ["Predictive Analytics", "Machine Learning Models", "Data Visualization", "Business Intelligence", "Natural Language Processing", "Computer Vision"],
      color: "from-purple-500 to-pink-500",
      duration: "6-20 weeks",
      popular: false
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      subtitle: "Digital Protection",
      description: "Comprehensive cybersecurity solutions including penetration testing, security audits, and ongoing protection for your digital assets.",
      features: ["Security Audits", "Penetration Testing", "Network Security", "Data Protection", "Incident Response", "Security Training"],
      color: "from-red-500 to-orange-500",
      duration: "2-8 weeks",
      popular: false
    },
    {
      icon: Palette,
      title: "Graphics Design",
      subtitle: "Creative Branding",
      description: "Professional graphics design services including branding, logo design, marketing materials, and digital artwork for your business needs.",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Web Graphics", "Print Design", "Digital Artwork"],
      color: "from-pink-500 to-rose-500",
      duration: "1-4 weeks",
      popular: false
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      subtitle: "Scalable Infrastructure",
      description: "Cloud migration, deployment, and management services using AWS, Google Cloud, and Azure for scalable and reliable applications.",
      features: ["Cloud Migration", "Infrastructure Setup", "DevOps Implementation", "Auto-scaling", "Monitoring & Alerts", "Backup Solutions"],
      color: "from-cyan-500 to-blue-500",
      duration: "3-10 weeks",
      popular: false
    },
    {
      icon: Database,
      title: "Database Solutions",
      subtitle: "Data Management",
      description: "Database design, optimization, and management services for SQL and NoSQL databases to ensure efficient data storage and retrieval.",
      features: ["Database Design", "Performance Optimization", "Data Migration", "Backup & Recovery", "Security Implementation", "Maintenance Support"],
      color: "from-indigo-500 to-purple-500",
      duration: "2-6 weeks",
      popular: false
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      subtitle: "Online Presence",
      description: "SEO optimization, social media management, and digital marketing strategies to boost your online presence and reach your target audience.",
      features: ["SEO Optimization", "Social Media Management", "Content Marketing", "PPC Campaigns", "Analytics & Reporting", "Brand Strategy"],
      color: "from-yellow-500 to-orange-500",
      duration: "Ongoing",
      popular: false
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your requirements, goals, and technical specifications for the project."
    },
    {
      step: "02", 
      title: "Planning",
      description: "Creating detailed project roadmap, timeline, and technical architecture design."
    },
    {
      step: "03",
      title: "Development",
      description: "Building your solution using best practices and modern technologies."
    },
    {
      step: "04",
      title: "Deployment",
      description: "Testing, deployment, and ongoing support to ensure optimal performance."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800/20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Our <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 mx-auto mb-8"></div>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Complete technology solutions from web development and mobile apps to data science, cybersecurity,
              and creative design - empowering your business with comprehensive digital services.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/10 cursor-pointer ${
                  service.popular 
                    ? 'border-green-500/50 ring-2 ring-green-500/20' 
                    : 'border-green-500/20'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-400 to-cyan-400 text-gray-900 px-4 py-1 rounded-full text-xs font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300">{service.title}</h3>
                    <p className="text-cyan-400 text-sm">{service.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-green-400 font-semibold text-sm mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                        <span className="text-gray-400 text-xs">{feature}</span>
                      </div>
                    ))}
                    <div className="text-xs text-gray-500">+{service.features.length - 3} more features</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400 flex items-center space-x-1">
                      <Timer className="h-3 w-3" />
                      <span>Timeline:</span>
                    </span>
                    <span className="text-cyan-400">{service.duration}</span>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedService(service.title)}
                  className="w-full py-3 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/40 text-green-400 rounded-lg font-semibold hover:from-green-500/30 hover:to-cyan-500/30 transition-all duration-300 group/btn flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-gray-800/30 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Our Process</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-blue-500/10 rounded-xl border border-green-500/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Secure Your Organization?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get a free security assessment and discover how our expert team can protect your organization 
              from cyber threats while enabling your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:via-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get Free Assessment</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={downloadServiceGuide}
                className="px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300"
              >
                Download Service Guide
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && serviceDetails[selectedService] && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-green-500/30 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedService}</h2>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-4">Full Description</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {serviceDetails[selectedService].fullDescription}
                  </p>

                  <h3 className="text-xl font-bold text-green-400 mb-4">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {serviceDetails[selectedService].technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Our Process</h3>
                  <div className="space-y-3 mb-6">
                    {serviceDetails[selectedService].process.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-gray-300 text-sm">{step}</p>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-blue-400 mb-4">What You Get</h3>
                  <div className="space-y-2">
                    {serviceDetails[selectedService].deliverables.map((deliverable, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700 flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    setSelectedService(null);
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group px-8 py-3 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:via-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
