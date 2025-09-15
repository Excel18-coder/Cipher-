
import { useState, useEffect } from 'react';
import { Terminal, Code, Shield, Brain, Cpu, Database, ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const phrases = [
    'Cybersecurity',
     'Artificial Intelligence', 
    'Web Development',
    'Data Science',
    'Graphic Design',
    'Cloud Security',
    'Mobile App Development',
    'System Development',
    'Machine Learning',
    'DevOps Solutions',
  ];

  const achievements = [
    { number: "50+", label: "Projects Achieved", icon: Shield },
    { number: "99.9%", label: "Accuracy", icon: Brain },
    { number: "24/7", label: "Customer Service", icon: Cpu },
    { number: "2+", label: "Years Experience", icon: CheckCircle }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const fullText = phrases[currentPhrase];
    
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentPhrase, phrases]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Trust Indicators */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-full px-6 py-3 mb-6">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-green-400 font-semibold text-sm">Trusted Technology Partner</span>
            </div>
            <div className="inline-flex items-center space-x-4 text-green-400 mb-4">
              <Shield className="h-8 w-8 animate-pulse" />
              <Brain className="h-8 w-8 animate-pulse delay-100" />
              <Code className="h-8 w-8 animate-pulse delay-200" />
              <Database className="h-8 w-8 animate-pulse delay-300" />
              <Cpu className="h-8 w-8 animate-pulse delay-400" />
              <Terminal className="h-8 w-8 animate-pulse delay-500" />
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Complete Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 block">
                Solutions Provider
              </span>
            </h1>
          </div>
          
          <div className={`text-2xl md:text-4xl text-gray-300 mb-12 font-mono h-16 flex items-center justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-green-400">&gt;</span>
            <span className="mx-2">{displayText}</span>
            <span className="animate-pulse text-cyan-400">|</span>
          </div>
          
          <div className={`mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-center leading-relaxed">
              From cybersecurity to cutting-edge web development, mobile apps, data science, and creative design - 
              we're your comprehensive technology partner in Nairobi, Kenya, delivering innovation across all digital frontiers.
            </p>
            
            {/* Key Value Propositions */}
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
              <div className="flex items-center space-x-3 text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Cutting-edge Solutions</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>24/7 Incident Response</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>AI-Powered Applications</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Futuristic Responsive Web Apps</span>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:via-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center justify-center space-x-2"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>View Portfolio</span>
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gray-800/50 border border-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Schedule Consultation
            </button>
          </div>

          {/* Achievement Metrics */}
          <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/30 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <achievement.icon className="h-8 w-8 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-300 text-sm">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
