
import { Mail, Github, Linkedin, MessageSquare, Send, Phone, MapPin, Clock, Building2, Shield } from 'lucide-react';
import { useState } from 'react';
import sendEmailDirect, { ContactFormData } from '../utils/emailDirectService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      label: "Primary Contact",
      value: "+254 111 748 7554",
      href: "tel:+254111748755",
      description: "Main business line"
    },
    {
      icon: Phone,
      label: "Alternative Contact",
      value: "+254 759 097 157",
      href: "tel:+254759097157",
      description: "Secondary business line"
    },
    {
      icon: Mail,
      label: "Business Inquiries",
      value: "excel6737@gmail.com",
      href: "mailto:excel6737@gmail.com",
      description: "General inquiries and partnerships"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#",
      description: "Our office location"
    }
  ];

  const offices = [
    {
      city: "Nairobi",
      country: "Kenya",
      address: "Nairobi Central Business District",
      phone: "+254 111 748 7554",
      email: "excel6737@gmail.com"
    }
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    setSubmitMessage('');

    // Enhanced validation for production
    const requiredFields = ['name', 'email', 'company', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      console.error('❌ Missing required fields:', missingFields);
      setSubmitStatus('error');
      setSubmitMessage('❌ Please fill in all required fields: ' + missingFields.join(', '));
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('');
        setSubmitMessage('');
      }, 5000);
      return;
    }

    // Email validation for production
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.error('❌ Invalid email format:', formData.email);
      setSubmitStatus('error');
      setSubmitMessage('❌ Please enter a valid email address');
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('');
        setSubmitMessage('');
      }, 5000);
      return;
    }

    console.log('📧 Submitting contact form with validated data:', {
      ...formData,
      message: formData.message.substring(0, 50) + '...'
    });

    try {
      const result = await sendEmailDirect(formData as ContactFormData);
      
      if (result.success) {
        console.log('✅ Contact form submitted successfully!');
        setSubmitStatus('success');
        setSubmitMessage(result.message);
        
        // Clear form data on success
        setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
        
        // Show success message longer
        setTimeout(() => {
          setSubmitStatus('');
          setSubmitMessage('');
        }, 20000);
      } else {
        console.error('❌ Contact form submission failed:', result.message);
        setSubmitStatus('error');
        setSubmitMessage(result.message);
        setTimeout(() => {
          setSubmitStatus('');
          setSubmitMessage('');
        }, 15000);
      }
    } catch (error) {
      console.error('❌ Contact form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('❌ Unable to send email. Please contact us directly at excel6737@gmail.com or call +254 111 748 7554.');
      setTimeout(() => {
        setSubmitStatus('');
        setSubmitMessage('');
      }, 15000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800/20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Contact <span className="text-green-400">Our Team</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge technology solutions? Our expert team is standing by to discuss 
              your project needs and provide tailored solutions across all our services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-green-400" />
                  <span>Technology Excellence</span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  As a leading technology solutions provider in Kenya, we understand the importance of delivering 
                  high-quality, scalable solutions. Our expert team provides comprehensive services from web development 
                  to cybersecurity, ensuring your business stays ahead in the digital landscape.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? "_blank" : undefined}
                    rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="flex items-start space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-lg hover:border-green-500/40 transition-all duration-300 group"
                  >
                    <contact.icon className="h-6 w-6 text-green-400 group-hover:scale-110 transition-transform duration-300 mt-1" />
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{contact.label}</div>
                      <div className="text-white font-semibold mb-1">{contact.value}</div>
                      <div className="text-xs text-gray-500">{contact.description}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="h-5 w-5 text-green-400" />
                  <h4 className="text-lg font-semibold text-white">Business Hours</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Emergency Support:</span>
                    <span className="text-green-400">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Business Inquiries:</span>
                    <span className="text-white">Mon-Fri 8AM-6PM EAT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Technical Support:</span>
                    <span className="text-white">Mon-Sat 8AM-8PM EAT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Request Consultation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden fields for EmailJS */}
                <input type="hidden" name="to_email" value="excel6737@gmail.com" />
                <input type="hidden" name="from_name" value="Cipher Organization Contact Form" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company/Organization *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors duration-300"
                      placeholder="Your organization"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app-development">Mobile App Development</option>
                    <option value="data-science-ml">Data Science & Machine Learning</option>
                    <option value="cybersecurity">Cybersecurity Services</option>
                    <option value="graphics-design">Graphics Design & Branding</option>
                    <option value="cloud-solutions">Cloud Solutions & DevOps</option>
                    <option value="database-solutions">Database Solutions</option>
                    <option value="digital-marketing">Digital Marketing & SEO</option>
                    <option value="consultation">General Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your security challenges and requirements..."
                  />
                </div>

                {submitStatus && (
                  <div className={`p-4 rounded-lg mb-4 ${
                    submitStatus === 'success' 
                      ? 'bg-green-500/20 border border-green-500/40 text-green-400' 
                      : 'bg-red-500/20 border border-red-500/40 text-red-400'
                  }`}>
                    {submitMessage || (submitStatus === 'success' 
                      ? '🎉 Success! Your business inquiry has been sent directly to excel6737@gmail.com. Our team will respond within 24 hours. Thank you!'
                      : '⚠️ Unable to send your message. Please contact us directly at excel6737@gmail.com or call +254 111 748 7554.'
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700'
                  } text-white`}
                >
                  <Send className="h-5 w-5" />
                  <span>{isSubmitting ? 'Processing...' : 'Send Consultation Request'}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Global Offices */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Global Offices</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <Building2 className="h-6 w-6 text-green-400" />
                    <h4 className="text-xl font-bold text-white">{office.city}</h4>
                    <span className="text-gray-400 text-sm">{office.country}</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-300">{office.address}</p>
                    <p className="text-gray-400">Phone: <span className="text-green-400">{office.phone}</span></p>
                    <p className="text-gray-400">Email: <span className="text-cyan-400">{office.email}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-green-500/20">
            <p className="text-gray-400 mb-4">
              © 2024 Cipher Organization. All rights reserved. Leading cybersecurity innovation worldwide.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://linkedin.com/company/cipher-organization" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/cipher-org" className="text-gray-400 hover:text-green-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
