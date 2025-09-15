import { Shield, Brain, Cloud, Database, Lock, Monitor, Code, Award, CheckCircle, Zap } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      category: "Security Platforms",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      tools: [
        { name: "Splunk", description: "SIEM & Analytics", level: 95 },
        { name: "CrowdStrike", description: "Endpoint Protection", level: 90 },
        { name: "Palo Alto Networks", description: "Next-Gen Firewall", level: 92 },
        { name: "Rapid7", description: "Vulnerability Management", level: 88 },
        { name: "Qualys", description: "Security Assessment", level: 87 },
        { name: "Tenable", description: "Vulnerability Management", level: 85 }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: Brain,
      color: "from-green-500 to-teal-500",
      tools: [
        { name: "TensorFlow", description: "ML Framework", level: 93 },
        { name: "PyTorch", description: "Deep Learning", level: 91 },
        { name: "Scikit-learn", description: "ML Library", level: 89 },
        { name: "Keras", description: "Neural Networks", level: 86 },
        { name: "Apache Spark", description: "Big Data Analytics", level: 84 },
        { name: "Jupyter", description: "Data Science", level: 88 }
      ]
    },
    {
      category: "Cloud Platforms",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      tools: [
        { name: "AWS", description: "Amazon Web Services", level: 94 },
        { name: "Azure", description: "Microsoft Cloud", level: 91 },
        { name: "Google Cloud", description: "GCP Platform", level: 87 },
        { name: "Kubernetes", description: "Container Orchestration", level: 89 },
        { name: "Docker", description: "Containerization", level: 92 },
        { name: "Terraform", description: "Infrastructure as Code", level: 85 }
      ]
    },
    {
      category: "Development & DevOps",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      tools: [
        { name: "Python", description: "Programming Language", level: 96 },
        { name: "Go", description: "Systems Programming", level: 88 },
        { name: "Rust", description: "Memory-Safe Systems", level: 82 },
        { name: "Jenkins", description: "CI/CD Pipeline", level: 90 },
        { name: "GitLab", description: "DevOps Platform", level: 87 },
        { name: "Ansible", description: "Automation", level: 85 }
      ]
    }
  ];

  const certifications = [
    {
      category: "Security Certifications",
      certs: [
        { name: "CISSP", full: "Certified Information Systems Security Professional", count: 2 },
        { name: "CISM", full: "Certified Information Security Manager", count: 1 },
        { name: "CEH", full: "Certified Ethical Hacker", count: 3 },
        { name: "OSCP", full: "Offensive Security Certified Professional", count: 1 },
        { name: "GCIH", full: "GIAC Certified Incident Handler", count: 2 },
        { name: "GSEC", full: "GIAC Security Essentials", count: 2 }
      ]
    },
    {
      category: "Cloud Certifications",
      certs: [
        { name: "AWS Solutions Architect", full: "AWS Certified Solutions Architect", count: 3 },
        { name: "Azure Fundamentals", full: "Azure Fundamentals Certified", count: 2 },
        { name: "GCP Associate", full: "Google Cloud Associate Engineer", count: 2 },
        { name: "Docker Certified", full: "Docker Certified Associate", count: 2 },
        { name: "Kubernetes", full: "Certified Kubernetes Administrator", count: 1 },
        { name: "Terraform Associate", full: "HashiCorp Terraform Associate", count: 1 }
      ]
    },
    {
      category: "Development Certifications",
      certs: [
        { name: "React Developer", full: "Meta React Developer Certificate", count: 4 },
        { name: "Node.js", full: "Node.js Application Developer", count: 3 },
        { name: "Python", full: "Python Institute PCAP", count: 2 },
        { name: "JavaScript", full: "JavaScript Algorithms and Data Structures", count: 4 },
        { name: "Google Analytics", full: "Google Analytics Individual Qualification", count: 2 },
        { name: "Adobe Certified", full: "Adobe Certified Expert", count: 1 }
      ]
    }
  ];

  const partnerships = [
    { name: "Microsoft", level: "Gold Partner", logo: "/logos/microsoft.svg" },
    { name: "AWS", level: "Advanced Consulting Partner", logo: "/logos/aws.svg" },
    { name: "Google Cloud", level: "Premier Partner", logo: "/logos/google-cloud.svg" },
    { name: "CrowdStrike", level: "Elite Partner", logo: "/logos/crowdstrike.svg" },
    { name: "Palo Alto", level: "Platinum Partner", logo: "/logos/palo-alto.svg" },
    { name: "Splunk", level: "Elite Partner", logo: "/logos/splunk.svg" }
  ];

  const stats = [
    { number: "25+", label: "Active Certifications", icon: Award },
    { number: "15+", label: "Technology Integrations", icon: Zap },
    { number: "8+", label: "Security Platforms", icon: Shield },
    { number: "5+", label: "AI/ML Models Deployed", icon: Brain }
  ];

  return (
    <section id="technology" className="py-20 bg-gray-800/20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Technology <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Stack</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our expertise spans across modern web development, cybersecurity platforms, AI technologies, and cloud infrastructures 
              to deliver comprehensive technology solutions for businesses in Kenya and beyond.
            </p>
          </div>

          {/* Technology Categories */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center`}>
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{tech.category}</h3>
                </div>

                <div className="space-y-4">
                  {tech.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-white font-semibold">{tool.name}</span>
                          <span className="text-gray-400 text-sm ml-2">{tool.description}</span>
                        </div>
                        <span className="text-green-400 font-semibold">{tool.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${tech.color} h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${tool.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Team Certifications</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-green-400 mb-6">{category.category}</h4>
                  <div className="space-y-4">
                    {category.certs.map((cert, certIndex) => (
                      <div
                        key={certIndex}
                        className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                      >
                        <div>
                          <div className="text-white font-semibold">{cert.name}</div>
                          <div className="text-gray-400 text-xs">{cert.full}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-cyan-400 font-bold">{cert.count}</div>
                          <div className="text-gray-400 text-xs">certified</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-gray-800/30 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300"
              >
                <stat.icon className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Strategic Partnerships */}
          <div className="bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-blue-500/10 rounded-xl border border-green-500/20 p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Strategic Partnerships</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {partnerships.map((partner, index) => (
                <div
                  key={index}
                  className="text-center bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition-colors duration-300 hover:scale-105 transform group"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-lg mx-auto mb-3 flex items-center justify-center p-2 group-hover:bg-white/20 transition-colors duration-300">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-contain transition-all duration-300"
                    />
                  </div>
                  <div className="text-white font-semibold text-sm">{partner.name}</div>
                  <div className="text-green-400 text-xs">{partner.level}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-300">
                Our strategic partnerships enable us to deliver best-in-class security solutions 
                and maintain cutting-edge expertise across all technology platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
