
import { ExternalLink, Github, Code, Shield, Wifi, TrendingUp, Brain, Database, Monitor, Bot, Activity } from 'lucide-react';

const Projects = () => {
  const cybersecurityProjects = [
    {
      icon: Code,
      title: "Stealth C2 Malware",
      description: "Advanced command and control malware framework with stealth capabilities, anti-analysis techniques, and modular payload architecture.",
      tech: ["C++", "Assembly", "Python", "Cryptography"],
      github: "https://github.com/cipher-org/stealth-c2-malware",
      features: ["Anti-VM Detection", "Encrypted Communications", "Persistence Mechanisms", "Modular Architecture"],
      category: "cybersecurity"
    },
    {
      icon: Wifi,
      title: "WiFi Warfare Toolkit",
      description: "Comprehensive wireless security testing framework for penetration testers and security researchers.",
      tech: ["Python", "Scapy", "Linux", "802.11"],
      github: "https://github.com/cipher-org/wifi-warfare-toolkit",
      features: ["WPA/WPA2 Attacks", "Evil Twin Detection", "Deauth Attacks", "Network Monitoring"],
      category: "cybersecurity"
    },
    {
      icon: TrendingUp,
      title: "PE Escalator",
      description: "Privilege escalation toolkit for Windows environments with automated exploitation and enumeration capabilities.",
      tech: ["PowerShell", "C#", ".NET", "Windows API"],
      github: "https://github.com/cipher-org/pe-escalator",
      features: ["Automated Enumeration", "Exploit Automation", "UAC Bypass", "Token Manipulation"],
      category: "cybersecurity"
    },
    {
      icon: Shield,
      title: "Security Writeups",
      description: "Collection of detailed security research, CTF solutions, and vulnerability analysis documentation.",
      tech: ["Research", "Documentation", "Analysis", "PoC"],
      github: "https://github.com/cipher-org/writeups",
      features: ["CTF Solutions", "Vulnerability Research", "Exploit Development", "Security Analysis"],
      category: "cybersecurity"
    }
  ];

  const aiProjects = [
    {
      icon: Brain,
      title: "HealthAI Diagnostics",
      description: "An AI model that analyzes medical symptoms and offers diagnostic suggestions via a chatbot interface.",
      tech: ["Python", "TensorFlow", "Flask", "NLP", "Medical APIs"],
      github: "#",
      features: ["Symptom Analysis", "Diagnostic Suggestions", "Medical Database", "Chat Interface"],
      category: "ai",
      isPrivate: true
    },
    {
      icon: Bot,
      title: "CyberSecGPT",
      description: "A fine-tuned GPT assistant for ethical hacking support and command generation.",
      tech: ["OpenAI API", "Python", "LangChain", "Vector DB"],
      github: "#",
      features: ["Command Generation", "Security Guidance", "Tool Recommendations", "Knowledge Base"],
      category: "ai",
      isPrivate: true
    },
    {
      icon: Activity,
      title: "Stock Prediction Bot",
      description: "Time-series AI model for predicting short-term stock and forex movement with 90% backtest accuracy.",
      tech: ["PyTorch", "LSTM", "Pandas", "Alpha Vantage API"],
      github: "#",
      features: ["Technical Analysis", "Pattern Recognition", "Risk Assessment", "Real-time Predictions"],
      category: "ai",
      isPrivate: true
    }
  ];

  const fullStackProjects = [
    {
      icon: Database,
      title: "BugBounty Tracker App",
      description: "A MERN-stack web app to log, classify, and report vulnerability findings.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      features: ["Vulnerability Tracking", "Report Generation", "Classification System", "Dashboard Analytics"],
      category: "fullstack",
      isPrivate: true
    },
    {
      icon: Brain,
      title: "AI Resume Screener",
      description: "React + Flask app that screens CVs using NLP models and ranks applicants automatically.",
      tech: ["React", "Flask", "NLP", "spaCy", "scikit-learn"],
      github: "#",
      features: ["CV Analysis", "Automatic Ranking", "Skill Extraction", "Bias Detection"],
      category: "fullstack",
      isPrivate: true
    },
    {
      icon: Monitor,
      title: "SmartFarm Dashboard",
      description: "Full-stack IoT monitoring app showing live farm sensor data with alerts powered by ML anomaly detection.",
      tech: ["React", "Node.js", "PostgreSQL", "IoT", "ML"],
      github: "#",
      features: ["Real-time Monitoring", "Anomaly Detection", "Alert System", "Data Visualization"],
      category: "fullstack",
      isPrivate: true
    }
  ];

  const projectSections = [
    { title: "Cybersecurity Projects", projects: cybersecurityProjects, gradient: "from-red-500 to-orange-500" },
    { title: "AI Projects", projects: aiProjects, gradient: "from-green-500 to-cyan-500" },
    { title: "Full-Stack Apps", projects: fullStackProjects, gradient: "from-blue-500 to-purple-500" }
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Featured <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              A showcase of cutting-edge security tools, AI innovations, and full-stack applications.
            </p>
          </div>

          {projectSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-20">
              <div className="flex items-center space-x-4 mb-12">
                <div className={`w-2 h-12 bg-gradient-to-b ${section.gradient} rounded-full`}></div>
                <h3 className="text-3xl font-bold text-white">{section.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {section.projects.map((project, index) => (
                  <div
                    key={index}
                    className="group bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/10"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${section.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <project.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">{project.title}</h4>
                          {project.isPrivate && (
                            <span className="text-xs text-yellow-400 font-mono">[Private Repo]</span>
                          )}
                        </div>
                      </div>
                      
                      {!project.isPrivate && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                        >
                          <Github className="h-6 w-6" />
                        </a>
                      )}
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-green-400 mb-3">Key Features:</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                            <span className="text-gray-400 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-700/50 text-green-400 text-sm rounded-full border border-green-500/30 hover:bg-gray-700/70 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {!project.isPrivate && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors duration-300"
                      >
                        <span>View on GitHub</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-16">
            <a
              href="https://github.com/cipher-org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-10 py-4 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-green-600 hover:via-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              <Github className="h-6 w-6" />
              <span>Explore All Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
