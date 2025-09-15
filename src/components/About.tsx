
import { User, Target, Search, Zap, Brain, Code, Shield, Building2, Award, Globe, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Web development, mobile applications, and custom software solutions using cutting-edge technologies"
    },
    {
      icon: Brain,
      title: "Data Science & AI",
      description: "Machine learning models, data analytics, and artificial intelligence solutions for business insights"
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services protecting businesses from evolving digital threats"
    }
  ];

  const stats = [
    { number: "10", label: "Team Members" },
    { number: "50+", label: "Projects Delivered" },
    { number: "24/7", label: "Support Available" },
    { number: "5+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              About <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Our Organization</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center p-1">
                  <img src="/logo.jpeg" alt="Cipher Organization Logo" className="w-full h-full rounded-full object-cover" />
                </div>
                <h3 className="text-3xl font-bold text-white">Cipher Organization</h3>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Based in <span className="text-green-400 font-semibold">Nairobi, Kenya</span>, Cipher Organization is a 
                comprehensive technology solutions provider specializing in multiple domains. Our team of 10 dedicated professionals 
                brings expertise across cybersecurity, software development, data science, and creative design to deliver 
                innovative solutions for businesses across Africa and beyond.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                We combine <span className="text-cyan-400 font-semibold">cutting-edge web technologies</span>, 
                <span className="text-blue-400 font-semibold"> mobile app development expertise</span>, and 
                <span className="text-green-400 font-semibold"> advanced data science capabilities</span> with robust 
                cybersecurity practices. Our diverse skill set allows us to tackle complex projects from conception to deployment, 
                ensuring both functionality and security.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                From custom software development and machine learning solutions to graphics design and cybersecurity consulting, 
                we're committed to empowering businesses through technology. Our collaborative approach and commitment to 
                excellence have made us a trusted partner for organizations seeking comprehensive digital transformation.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 hover:border-green-500/40 transition-all duration-300">
              <h4 className="text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text mb-8">
                Our Services
              </h4>
              <div className="space-y-4">
                {[
                  "Web Development & Custom Software",
                  "Mobile Application Development", 
                  "Data Science & Machine Learning",
                  "Cybersecurity & Digital Protection",
                  "Graphics Design & Branding",
                  "Cloud Solutions & DevOps",
                  "Database Design & Management",
                  "Digital Marketing & SEO"
                ].map((capability, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-gray-800/30 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 text-center hover:border-green-500/40 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50 group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-green-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <highlight.icon className="h-10 w-10 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{highlight.title}</h4>
                <p className="text-gray-400 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
