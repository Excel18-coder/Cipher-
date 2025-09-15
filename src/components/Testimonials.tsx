import { Star, Quote, Building2, TrendingUp, Shield, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CISO",
      company: "TechCorp Industries",
      logo: "/logos/techcorp.svg",
      rating: 5,
      testimonial: "Cipher Organization transformed our security posture completely. Their AI-powered threat detection caught sophisticated attacks that our previous solutions missed. The team's expertise and 24/7 support have been invaluable.",
      industry: "Technology",
      companySize: "10,000+ employees"
    },
    {
      name: "Michael Thompson",
      role: "CTO", 
      company: "FinanceSecure Bank",
      logo: "/logos/financesecure.svg",
      rating: 5,
      testimonial: "Outstanding penetration testing services revealed critical vulnerabilities we didn't know existed. Cipher's detailed reports and remediation guidance helped us achieve SOC 2 compliance ahead of schedule.",
      industry: "Financial Services",
      companySize: "5,000+ employees"
    },
    {
      name: "David Kim",
      role: "VP of Security",
      company: "HealthTech Solutions",
      logo: "/logos/healthtech.svg",
      rating: 5,
      testimonial: "Their incident response team was exceptional during our security breach. They contained the threat within hours and helped us recover with minimal data loss. True cybersecurity partners.",
      industry: "Healthcare",
      companySize: "2,500+ employees"
    },
    {
      name: "Sarah Wilson",
      role: "IT Director",
      company: "Global Manufacturing Co.",
      logo: "/logos/globalmanufacturing.svg",
      rating: 5,
      testimonial: "Cipher's managed security services have given us enterprise-level protection. Their proactive monitoring is outstanding.",
      industry: "Manufacturing",
      companySize: "15,000+ employees"
    }
  ];

  const industries = [
    "Financial Services", "Healthcare", "Technology", "Manufacturing", 
    "Government", "Education", "Retail", "Energy"
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-800/20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Client <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Success Stories</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Hear from our clients about how Cipher Organization has transformed their cybersecurity 
              posture and protected their critical assets.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <Quote className="h-8 w-8 text-green-400 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center p-2">
                        <img 
                          src={testimonial.logo} 
                          alt={`${testimonial.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-green-400 text-sm">{testimonial.role}</p>
                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-cyan-400 text-sm">{testimonial.industry}</p>
                      <p className="text-gray-400 text-xs">{testimonial.companySize}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Industries Served */}
          <div className="text-center bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-blue-500/10 rounded-xl border border-green-500/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Industries We Serve</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800/50 text-green-400 text-sm rounded-lg border border-green-500/30 hover:bg-gray-800/70 transition-colors duration-200"
                >
                  {industry}
                </span>
              ))}
            </div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our cybersecurity solutions are trusted by organizations across diverse industries, 
              from startups to Fortune 500 companies, government agencies, and non-profit organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
