import { Shield, Brain, Code, Search, Monitor, Users, Award, Linkedin, Mail, Smartphone, Palette, Database, Globe, BarChart3 } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Excel Baraka",
      role: "CEO & Cybersecurity Expert",
      bio: "Chief Executive Officer and cybersecurity specialist leading Cipher Organization's strategic vision and security initiatives.",
      specialties: ["Cybersecurity", "Strategic Leadership", "Risk Management"],
      image: "/placeholder.svg",
      linkedin: "#",
      email: "excel6737@gmail.com"
    },
    {
      name: "Iann Abungana",
      role: "CTO & Web Development Expert", 
      bio: "Chief Technology Officer with expertise in web development technologies, leading our technical architecture and development teams.",
      specialties: ["Web Development", "Technical Leadership", "System Architecture"],
      image: "/placeholder.svg",
      linkedin: "#",
      email: "excel6737@gmail.com"
    },
    {
      name: "Andrew Otieno",
      role: "COO & Backend Developer",
      bio: "Chief Operating Officer and backend development specialist, ensuring smooth operations and robust server-side solutions.",
      specialties: ["Backend Development", "Operations Management", "Database Design"],
      image: "/placeholder.svg", 
      linkedin: "#",
      email: "excel6737@gmail.com"
    },
    {
      name: "Ian Ndiritu",
      role: "Project Manager & Data Scientist",
      bio: "Project and event manager with expertise in data science, coordinating projects and extracting insights from complex datasets.",
      specialties: ["Project Management", "Data Science", "Event Management"],
      image: "/placeholder.svg",
      linkedin: "#",
      email: "excel6737@gmail.com"
    },
    {
      name: "Israel Word",
      role: "Social Media Manager & Web Developer",
      bio: "Social media strategist and web development expert, managing our online presence and creating engaging web experiences.",
      specialties: ["Social Media Marketing", "Web Development", "Digital Strategy"],
      image: "/placeholder.svg",
      linkedin: "#",
      email: "excel6737@gmail.com"
    },
    {
      name: "Alvin Maina",
      role: "Finance Manager & Full-Stack Developer",
      bio: "Finance manager and full-stack developer, handling financial operations while contributing to software development projects.",
      specialties: ["Financial Management", "Full-Stack Development", "Business Analysis"],
      image: "/placeholder.svg",
      linkedin: "https://www.linkedin.com/in/alvin-maina-280837368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "excel6737@gmail.com"
    },
    {
      name: "Lawrence",
      role: "Full-Stack Developer",
      bio: "Experienced full-stack developer creating end-to-end solutions using modern web technologies and frameworks.",
      specialties: ["Full-Stack Development", "Frontend Design", "Backend APIs"],
      image: "/placeholder.svg",
      linkedin: "#",
      email: "excel6737@gmail.com"
    },
    {
      name: "Kimeu",
      role: "Full-Stack Developer",
      bio: "Full-stack developer specializing in modern web applications, contributing to both frontend and backend development.",
      specialties: ["Full-Stack Development", "JavaScript", "Database Management"],
      image: "/placeholder.svg",
      linkedin: "#",
      email: "excel6737@gmail.com"
    }
  ];

  const departments = [
    {
      icon: Code,
      title: "Development Team",
      description: "Full-stack and mobile developers",
      members: 4,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Data Science",
      description: "Data scientists and analysts",
      members: 1,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Security specialists and experts",
      members: 1,
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Marketing & Finance",
      description: "Social media and finance managers",
      members: 2,
      color: "from-pink-500 to-rose-500"
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional",
    "Certified Ethical Hacker (CEH)",
    "React Developer Certification",
    "Google Analytics Certified",
    "Adobe Certified Expert"
  ];

  return (
    <section id="team" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Our <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Dedicated technology professionals with expertise across cybersecurity, web development, 
              mobile apps, data science, and creative design - delivering comprehensive solutions from Nairobi, Kenya.
            </p>
          </div>

          {/* Leadership Team */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Leadership Team</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                    <p className="text-green-400 font-semibold">{member.role}</p>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                            {member.bio}
                  </p>

                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-cyan-400 mb-3">Specialties:</h5>
                    <div className="flex flex-wrap gap-2">
                                                {member.specialties.map((specialty, specIndex) => (
                        <span
                          key={specIndex}
                          className="px-3 py-1 bg-gray-700/50 text-green-400 text-xs rounded-full border border-green-500/30"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 justify-center">
                    <a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Departments */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Our Departments</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((team, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${team.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <team.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{team.title}</h4>
                      <p className="text-green-400 text-sm">{team.members} Members</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{team.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Stats */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center bg-gray-800/30 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text mb-2">
                  8
                </div>
                <div className="text-gray-300 text-sm">Team Members</div>
              </div>
              <div className="text-center bg-gray-800/30 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text mb-2">
                  15+
                </div>
                <div className="text-gray-300 text-sm">Combined Years Experience</div>
              </div>
              <div className="text-center bg-gray-800/30 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text mb-2">
                  25+
                </div>
                <div className="text-gray-300 text-sm">Industry Certifications</div>
              </div>
              <div className="text-center bg-gray-800/30 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text mb-2">
                  24/7
                </div>
                <div className="text-gray-300 text-sm">Customer Support</div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="text-center bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-blue-500/10 rounded-xl border border-green-500/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Team Certifications</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800/50 text-green-400 text-sm rounded-lg border border-green-500/30 hover:bg-gray-800/70 transition-colors duration-200"
                >
                  {cert}
                </span>
              ))}
            </div>
            <p className="text-gray-300 mt-6">
              Our team maintains the industry's most respected certifications and continuously updates skills 
              to stay ahead of emerging threats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
