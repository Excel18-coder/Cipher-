
import { Shield, Zap, Wifi, Database, Terminal, Search, Brain, Code, Server, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: "Penetration Testing",
      color: "from-red-500 to-orange-500",
      tools: ["Metasploit", "Burp Suite", "Nmap", "Nessus", "Cobalt Strike", "Empire"]
    },
    {
      icon: Search,
      title: "Malware Analysis",
      color: "from-purple-500 to-pink-500",
      tools: ["IDA Pro", "Ghidra", "x64dbg", "OllyDbg", "Wireshark", "Volatility"]
    },
    {
      icon: Wifi,
      title: "Wireless Security",
      color: "from-blue-500 to-cyan-500",
      tools: ["Bettercap", "Aircrack-ng", "Kismet", "Wifite", "Reaver", "Hashcat"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      color: "from-green-500 to-teal-500",
      tools: ["TensorFlow", "PyTorch", "scikit-learn", "LangChain", "Hugging Face", "OpenAI APIs"]
    },
    {
      icon: Code,
      title: "Programming Languages",
      color: "from-yellow-500 to-orange-500",
      tools: ["Python", "Rust", "C++", "JavaScript", "TypeScript", "Go"]
    },
    {
      icon: Server,
      title: "Full-Stack Development",
      color: "from-indigo-500 to-purple-500",
      tools: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "Docker"]
    },
    {
      icon: Zap,
      title: "Privilege Escalation",
      color: "from-red-500 to-pink-500",
      tools: ["BloodHound", "PowerSploit", "LinEnum", "WinPEAS", "GTFOBins", "PEASS"]
    },
    {
      icon: Cpu,
      title: "AI Model Deployment",
      color: "from-cyan-500 to-blue-500",
      tools: ["Flask", "FastAPI", "Docker", "AWS", "Azure", "Kubernetes"]
    }
  ];

  const keySkills = [
    { skill: "Malware Development", icon: Terminal },
    { skill: "AI/ML Engineering", icon: Brain },
    { skill: "Full-Stack Development", icon: Code },
    { skill: "Penetration Testing", icon: Shield }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800/20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Technical <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Arsenal</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Comprehensive expertise spanning cybersecurity, artificial intelligence, and full-stack development.
            </p>
          </div>

          {/* Key Skills Highlight */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-white mb-12">Core Specializations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {keySkills.map((item, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 text-center hover:border-green-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
                >
                  <item.icon className="h-12 w-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white font-semibold text-lg">{item.skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/10"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-200 group/tool"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full group-hover/tool:animate-pulse"></div>
                      <span className="text-gray-300 font-mono text-sm group-hover/tool:text-white transition-colors duration-200">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Note */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-blue-500/10 rounded-xl border border-green-500/20">
            <p className="text-gray-300 text-lg">
              Constantly evolving skillset with focus on emerging technologies and security research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
