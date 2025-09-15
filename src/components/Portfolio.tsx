import { ExternalLink, Award, Shield, Wifi, TrendingUp, Brain, Database, Monitor, Bot, Activity, Building2, Users, X, Calendar, Clock, CheckCircle, Target, Zap } from 'lucide-react';
import { useState } from 'react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioItems = [
    {
      icon: Shield,
      title: "Enterprise Security Platform",
      description: "Custom-built security operations platform for a Fortune 500 financial institution with real-time threat monitoring and automated incident response.",
      tech: ["AI/ML", "Cloud Security", "Real-time Analytics", "Threat Intelligence"],
      category: "Enterprise Solutions",
      highlights: ["99.9% Uptime", "Sub-second Response", "500K+ Events/Day", "Zero False Positives"],
      color: "from-red-500 to-orange-500",
      client: "Major Financial Institution",
      timeline: "12 months",
      teamSize: "15 specialists",
      fullDescription: "We developed a comprehensive enterprise security platform for a Fortune 500 financial institution, integrating advanced AI/ML algorithms for real-time threat detection and automated incident response. The platform processes over 500,000 security events daily while maintaining 99.9% uptime.",
      challenges: [
        "Processing massive volumes of real-time security data",
        "Achieving zero false positives in threat detection",
        "Integrating with legacy banking systems",
        "Meeting strict financial industry compliance requirements"
      ],
      solutions: [
        "Implemented distributed AI/ML pipeline for real-time processing",
        "Developed advanced behavioral analytics to eliminate false positives",
        "Created secure API gateways for legacy system integration",
        "Built comprehensive audit trails and compliance reporting"
      ],
      results: [
        "99.9% system uptime achieved",
        "100% reduction in false positive alerts",
        "60% faster incident response times",
        "Full compliance with financial regulations achieved"
      ],
      technologies: ["Python", "TensorFlow", "Apache Kafka", "Elasticsearch", "AWS", "Docker", "Kubernetes"],
      projectPhases: [
        { phase: "Discovery & Planning", duration: "2 months", status: "completed" },
        { phase: "System Architecture", duration: "2 months", status: "completed" },
        { phase: "Development & Testing", duration: "6 months", status: "completed" },
        { phase: "Deployment & Training", duration: "2 months", status: "completed" }
      ]
    },
    {
      icon: Brain,
      title: "AI Threat Detection System",
      description: "Machine learning-powered threat detection system that identifies zero-day attacks and advanced persistent threats through behavioral analysis.",
      tech: ["TensorFlow", "Behavioral Analytics", "Deep Learning", "Cloud Computing"],
      category: "AI Solutions",
      highlights: ["99.8% Detection Rate", "90% False Positive Reduction", "Real-time Analysis", "Adaptive Learning"],
      color: "from-green-500 to-teal-500",
      client: "Healthcare Network",
      timeline: "8 months",
      teamSize: "12 specialists",
      fullDescription: "We created an advanced AI-powered threat detection system for a major healthcare network, using deep learning and behavioral analytics to identify sophisticated attacks including zero-day exploits and advanced persistent threats.",
      challenges: [
        "Detecting unknown and zero-day threats",
        "Reducing false positives in healthcare environments",
        "Processing diverse healthcare data types",
        "Ensuring HIPAA compliance throughout the system"
      ],
      solutions: [
        "Developed custom neural networks for anomaly detection",
        "Implemented behavioral baseline learning for each user",
        "Created specialized healthcare data processing pipelines",
        "Built privacy-preserving analytics with encryption"
      ],
      results: [
        "99.8% accuracy in threat detection",
        "90% reduction in false positive alerts",
        "Zero data breaches since implementation",
        "Full HIPAA compliance maintained"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Apache Spark", "Azure", "MongoDB", "Redis"],
      projectPhases: [
        { phase: "Data Analysis & Modeling", duration: "2 months", status: "completed" },
        { phase: "AI Model Development", duration: "3 months", status: "completed" },
        { phase: "Integration & Testing", duration: "2 months", status: "completed" },
        { phase: "Deployment & Optimization", duration: "1 month", status: "completed" }
      ]
    },
    {
      icon: Monitor,
      title: "Managed SOC Services",
      description: "24/7 Security Operations Center providing continuous monitoring, threat hunting, and incident response for multiple enterprise clients.",
      tech: ["SIEM", "Threat Hunting", "Incident Response", "Forensics"],
      category: "Managed Services",
      highlights: ["24/7 Monitoring", "4-hour Response SLA", "150+ Clients", "Global Coverage"],
      color: "from-blue-500 to-cyan-500",
      client: "Multiple Enterprises",
      timeline: "Ongoing",
      teamSize: "25 specialists",
      fullDescription: "Our managed Security Operations Center provides round-the-clock security monitoring, threat hunting, and incident response services for over 150 enterprise clients worldwide, maintaining a 4-hour response SLA.",
      challenges: [
        "Scaling operations to support 150+ diverse clients",
        "Maintaining 4-hour response SLA globally",
        "Managing complex multi-tenant security environments",
        "Providing consistent service quality across time zones"
      ],
      solutions: [
        "Developed automated threat detection and triage systems",
        "Implemented follow-the-sun support model",
        "Created standardized playbooks and response procedures",
        "Built comprehensive client portal and reporting systems"
      ],
      results: [
        "150+ clients successfully protected",
        "99.5% SLA compliance achieved",
        "75% reduction in mean time to detection",
        "95% client retention rate maintained"
      ],
      technologies: ["Splunk", "QRadar", "CrowdStrike", "Carbon Black", "Phantom", "ServiceNow", "Grafana"],
      projectPhases: [
        { phase: "SOC Infrastructure Setup", duration: "3 months", status: "completed" },
        { phase: "Process Development", duration: "2 months", status: "completed" },
        { phase: "Team Training & Certification", duration: "1 month", status: "completed" },
        { phase: "Ongoing Operations", duration: "Continuous", status: "active" }
      ]
    },
    {
      icon: Wifi,
      title: "Critical Infrastructure Protection",
      description: "Comprehensive cybersecurity framework for protecting critical infrastructure including power grids, water systems, and transportation networks.",
      tech: ["ICS/SCADA Security", "Network Segmentation", "Anomaly Detection", "Compliance"],
      category: "Critical Infrastructure",
      highlights: ["Zero Downtime", "100% Compliance", "Real-time Monitoring", "Rapid Recovery"],
      color: "from-purple-500 to-pink-500",
      client: "Government Agency",
      timeline: "18 months",
      teamSize: "20 specialists",
      fullDescription: "We designed and implemented a comprehensive cybersecurity framework for protecting critical national infrastructure including power grids, water treatment facilities, and transportation systems for a government agency.",
      challenges: [
        "Securing legacy industrial control systems",
        "Maintaining operational continuity during upgrades",
        "Meeting strict government security standards",
        "Coordinating across multiple critical facilities"
      ],
      solutions: [
        "Implemented air-gapped security monitoring systems",
        "Developed phased deployment strategy with zero downtime",
        "Created custom ICS/SCADA security protocols",
        "Built centralized command and control center"
      ],
      results: [
        "Zero operational downtime during implementation",
        "100% compliance with government security standards",
        "50% improvement in threat detection speed",
        "Complete protection of critical infrastructure"
      ],
      technologies: ["Claroty", "Dragos", "Nozomi Networks", "Fortinet", "Cisco", "Schneider Electric", "GE"],
      projectPhases: [
        { phase: "Infrastructure Assessment", duration: "3 months", status: "completed" },
        { phase: "Security Architecture Design", duration: "4 months", status: "completed" },
        { phase: "Phased Implementation", duration: "8 months", status: "completed" },
        { phase: "Testing & Certification", duration: "3 months", status: "completed" }
      ]
    },
    {
      icon: Database,
      title: "Cloud Security Migration",
      description: "Secure cloud migration strategy and implementation for a multinational corporation moving 1000+ applications to multi-cloud environment.",
      tech: ["Cloud Security", "DevSecOps", "Container Security", "Identity Management"],
      category: "Cloud Solutions",
      highlights: ["1000+ Apps Migrated", "Zero Security Incidents", "Automated Security"],
      color: "from-cyan-500 to-blue-500",
      client: "Multinational Corporation",
      timeline: "15 months",
      teamSize: "18 specialists",
      fullDescription: "We led a comprehensive cloud security migration project for a multinational corporation, securely migrating over 1000 applications to a multi-cloud environment while implementing DevSecOps practices and automated security controls.",
      challenges: [
        "Migrating 1000+ diverse applications securely",
        "Implementing security across multiple cloud platforms",
        "Maintaining compliance during migration",
        "Training teams on new cloud security practices"
      ],
      solutions: [
        "Developed automated security assessment and migration tools",
        "Implemented cloud-native security services",
        "Created comprehensive DevSecOps pipelines",
        "Built extensive training and documentation programs"
      ],
      results: [
        "1000+ applications successfully migrated",
        "Zero security incidents during migration",
        "99.9% application availability maintained"
      ],
      technologies: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker", "Jenkins", "Vault"],
      projectPhases: [
        { phase: "Cloud Strategy & Planning", duration: "2 months", status: "completed" },
        { phase: "Security Framework Development", duration: "3 months", status: "completed" },
        { phase: "Application Migration", duration: "8 months", status: "completed" },
        { phase: "Optimization & Training", duration: "2 months", status: "completed" }
      ]
    },
    {
      icon: Building2,
      title: "Regulatory Compliance Suite",
      description: "Comprehensive compliance management platform helping organizations achieve and maintain SOC 2, PCI DSS, HIPAA, and ISO 27001 certifications.",
      tech: ["Compliance Automation", "Risk Assessment", "Audit Management", "Reporting"],
      category: "Compliance Solutions",
      highlights: ["100% Compliance Rate", "80% Time Savings", "Automated Audits", "Real-time Dashboards"],
      color: "from-indigo-500 to-purple-500",
      client: "Multiple Industries",
      timeline: "Ongoing",
      teamSize: "10 specialists",
      fullDescription: "We developed a comprehensive compliance management platform that automates compliance processes for SOC 2, PCI DSS, HIPAA, and ISO 27001 certifications, helping organizations achieve and maintain regulatory compliance efficiently.",
      challenges: [
        "Managing multiple complex compliance frameworks",
        "Automating evidence collection and reporting",
        "Maintaining continuous compliance monitoring",
        "Scaling across different industry requirements"
      ],
      solutions: [
        "Built unified compliance management platform",
        "Implemented automated evidence collection systems",
        "Created real-time compliance monitoring dashboards",
        "Developed industry-specific compliance templates"
      ],
      results: [
        "100% compliance achievement rate for clients",
        "80% reduction in compliance preparation time",
        "95% automation of audit evidence collection",
        "Real-time compliance status visibility"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Lambda", "API Gateway", "CloudWatch"],
      projectPhases: [
        { phase: "Platform Development", duration: "6 months", status: "completed" },
        { phase: "Compliance Framework Integration", duration: "4 months", status: "completed" },
        { phase: "Client Onboarding", duration: "2 months", status: "completed" },
        { phase: "Continuous Enhancement", duration: "Ongoing", status: "active" }
      ]
    }
  ];

  const achievements = [
    { number: "500+", label: "Successful Projects" },
    { number: "99.9%", label: "Client Satisfaction" },
    { number: "15+", label: "Industry Awards" },
    { number: "24/7", label: "Support Coverage" }
  ];

  const awards = [
    "Cybersecurity Excellence Award 2024",
    "Best Managed Security Provider 2023",
    "Innovation in AI Security 2023",
    "Top Incident Response Team 2022"
  ];

  return (
    <section id="portfolio" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Our <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Showcase of our most impactful cybersecurity projects and solutions that have protected 
              organizations worldwide from sophisticated cyber threats.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/10"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">{item.title}</h4>
                      <span className="text-xs text-cyan-400 font-mono">{item.category}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Project Details */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div className="bg-gray-700/30 rounded-lg p-3">
                    <Users className="h-4 w-4 text-green-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-400">{item.teamSize}</p>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-3">
                    <Activity className="h-4 w-4 text-cyan-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-400">{item.timeline}</p>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-3">
                    <Building2 className="h-4 w-4 text-blue-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-400">{item.client}</p>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-green-400 mb-3">Key Achievements:</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {item.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-green-400 text-sm rounded-full border border-green-500/30 hover:bg-gray-700/70 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedProject(item)}
                  className="w-full py-3 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/40 text-green-400 rounded-lg font-semibold hover:from-green-500/30 hover:to-cyan-500/30 transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>View Case Study</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            ))}
          </div>

          {/* Case Study Modal */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-gray-900 border border-green-500/30 rounded-xl max-w-6xl max-h-[90vh] overflow-y-auto relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start space-x-6 mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${selectedProject.color} rounded-xl flex items-center justify-center`}>
                      <selectedProject.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                      <p className="text-cyan-400 font-mono text-sm mb-4">{selectedProject.category}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Building2 className="h-4 w-4" />
                          <span>{selectedProject.client}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{selectedProject.timeline}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4" />
                          <span>{selectedProject.teamSize}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-green-400 mb-4">Project Overview</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.fullDescription}</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* Challenges */}
                    <div>
                      <h4 className="text-xl font-semibold text-red-400 mb-4 flex items-center space-x-2">
                        <Target className="h-5 w-5" />
                        <span>Challenges</span>
                      </h4>
                      <ul className="space-y-3">
                        {selectedProject.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                      <h4 className="text-xl font-semibold text-blue-400 mb-4 flex items-center space-x-2">
                        <Zap className="h-5 w-5" />
                        <span>Solutions</span>
                      </h4>
                      <ul className="space-y-3">
                        {selectedProject.solutions.map((solution, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-green-400 mb-4 flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5" />
                      <span>Results & Impact</span>
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedProject.results.map((result, index) => (
                        <div key={index} className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{result}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-cyan-400 mb-4">Technology Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gray-800 border border-cyan-500/30 text-cyan-400 rounded-lg text-sm hover:bg-gray-700 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Timeline */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-purple-400 mb-4 flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span>Project Phases</span>
                    </h4>
                    <div className="space-y-4">
                      {selectedProject.projectPhases.map((phase, index) => (
                        <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg">
                          <div className={`w-3 h-3 rounded-full ${
                            phase.status === 'completed' ? 'bg-green-400' : 
                            phase.status === 'active' ? 'bg-blue-400 animate-pulse' : 
                            'bg-gray-500'
                          }`}></div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-white">{phase.phase}</h5>
                            <p className="text-gray-400 text-sm">{phase.duration}</p>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            phase.status === 'completed' ? 'bg-green-500/20 text-green-400' : 
                            phase.status === 'active' ? 'bg-blue-500/20 text-blue-400' : 
                            'bg-gray-500/20 text-gray-400'
                          }`}>
                            {phase.status === 'completed' ? 'Completed' : 
                             phase.status === 'active' ? 'In Progress' : 
                             'Planned'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-yellow-400 mb-4">Key Highlights</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedProject.highlights.map((highlight, index) => (
                        <div key={index} className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <span className="text-gray-300 font-medium">{highlight}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact CTA */}
                  <div className="text-center p-6 bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-blue-500/10 rounded-xl border border-green-500/20">
                    <h4 className="text-xl font-semibold text-white mb-2">Interested in Similar Solutions?</h4>
                    <p className="text-gray-400 mb-4">Let's discuss how we can help your organization achieve similar results.</p>
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:via-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Start Your Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Achievements Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Our Achievements</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center bg-gray-800/30 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">{achievement.label}</div>
                </div>
              ))}
            </div>

            {/* Awards */}
            <div className="text-center bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-blue-500/10 rounded-xl border border-green-500/20 p-8">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Award className="h-6 w-6 text-yellow-400" />
                <h4 className="text-2xl font-bold text-white">Industry Recognition</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg"
                  >
                    <Award className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Next Project?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our expert team help you build a robust cybersecurity solution tailored to your organization's needs.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:via-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
