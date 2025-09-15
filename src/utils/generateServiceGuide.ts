import { jsPDF } from 'jspdf';

// Service Guide PDF Generation Utility
export const downloadServiceGuide = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  const margin = 20;
  const lineHeight = 7;
  let currentY = margin;

  // Helper function to check if we need a new page
  const checkPageBreak = (requiredSpace: number = 15) => {
    if (currentY + requiredSpace > pageHeight - margin) {
      doc.addPage();
      currentY = margin;
      return true;
    }
    return false;
  };

  // Helper function to add text with word wrapping
  const addText = (text: string, fontSize: number = 10, isBold: boolean = false, color: string = '#000000') => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    doc.setTextColor(color);
    
    const textLines = doc.splitTextToSize(text, pageWidth - 2 * margin);
    
    // Check if we need space for all lines
    checkPageBreak(textLines.length * lineHeight + 5);
    
    textLines.forEach((line: string) => {
      doc.text(line, margin, currentY);
      currentY += lineHeight;
    });
    currentY += 3; // Add extra space after text block
  };

  // Helper function to add a section header
  const addSectionHeader = (title: string) => {
    checkPageBreak(20);
    currentY += 5;
    
    // Add colored background for header
    doc.setFillColor(34, 197, 94); // Green color
    doc.rect(margin, currentY - 5, pageWidth - 2 * margin, 12, 'F');
    
    // Add white text on colored background
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(title, margin + 5, currentY + 3);
    
    currentY += 15;
    doc.setTextColor(0, 0, 0); // Reset to black
  };

  // Title Page
  doc.setFillColor(31, 41, 55); // Dark gray
  doc.rect(0, 0, pageWidth, 80, 'F');
  
  // Company name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('CIPHER ORGANIZATION', pageWidth / 2, 30, { align: 'center' });
  
  // Subtitle
  doc.setFontSize(16);
  doc.setFont('helvetica', 'normal');
  doc.text('Complete Technology Solutions', pageWidth / 2, 45, { align: 'center' });
  
  // Service guide label
  doc.setFontSize(12);
  doc.text('Service Guide 2025', pageWidth / 2, 60, { align: 'center' });

  currentY = 100;
  doc.setTextColor(0, 0, 0);

  // Company Information
  addSectionHeader('ABOUT CIPHER ORGANIZATION');
  addText('Location: Nairobi, Kenya', 12, true);
  addText('Team Size: 8 Professional Members', 12, true);
  addText('Email: excel6737@gmail.com', 12, true);
  addText('Phone: +254 111 748 7554 | +254 759 097 157', 12, true);
  
  addText('Cipher Organization is a comprehensive technology solutions provider based in Nairobi, Kenya. We specialize in delivering cutting-edge technology services across multiple domains including cybersecurity, web development, mobile applications, data science, and creative design.', 11);

  // Services Overview
  addSectionHeader('OUR SERVICES OVERVIEW');
  
  const services = [
    'Web Development (4-12 weeks)',
    'Mobile App Development (8-16 weeks)',
    'Data Science & ML (6-20 weeks)',
    'Cybersecurity Services (2-8 weeks)',
    'Graphics Design (1-4 weeks)',
    'Cloud Solutions (3-10 weeks)',
    'Database Solutions (2-6 weeks)',
    'Digital Marketing (Monthly)'
  ];

  services.forEach(service => {
    addText(`• ${service}`, 10);
  });

  // Detailed Service Descriptions
  addSectionHeader('DETAILED SERVICE DESCRIPTIONS');

  // Web Development
  addText('1. WEB DEVELOPMENT', 13, true, '#22C55E');
  addText('Timeline: 4-12 weeks', 10, true);
  addText('Custom web applications built with modern frameworks like React, Vue.js, Node.js, and Django. From simple websites to complex enterprise applications.', 10);
  addText('Technologies: React, Vue.js, Angular, Node.js, Django, Laravel, PostgreSQL, MongoDB', 9);
  addText('Deliverables: Complete source code, documentation, deployment guide, training, 3 months support', 9);
  currentY += 5;

  // Mobile App Development
  addText('2. MOBILE APP DEVELOPMENT', 13, true, '#22C55E');
  addText('Timeline: 8-16 weeks', 10, true);
  addText('Native and cross-platform mobile applications using React Native, Flutter, and native technologies for iOS and Android platforms.', 10);
  addText('Technologies: React Native, Flutter, Swift, Kotlin, Firebase, API Integration', 9);
  addText('Deliverables: App binaries, source code, app store listing, user manual, 6 months support', 9);
  currentY += 5;

  // Data Science & ML
  addText('3. DATA SCIENCE & MACHINE LEARNING', 13, true, '#22C55E');
  addText('Timeline: 6-20 weeks', 10, true);
  addText('Transform your business data into actionable insights using machine learning, predictive analytics, and business intelligence solutions.', 10);
  addText('Technologies: Python, TensorFlow, Scikit-learn, Pandas, Power BI, Tableau', 9);
  addText('Deliverables: ML models, data pipelines, analytics dashboard, documentation, training', 9);
  currentY += 5;

  // Cybersecurity
  addText('4. CYBERSECURITY SERVICES', 13, true, '#22C55E');
  addText('Timeline: 2-8 weeks', 10, true);
  addText('Comprehensive cybersecurity solutions including penetration testing, security audits, and ongoing protection for your digital assets.', 10);
  addText('Technologies: Nmap, Metasploit, Burp Suite, OWASP, Wireshark, Security frameworks', 9);
  addText('Deliverables: Security audit report, penetration test results, security policies, training materials', 9);
  currentY += 5;

  // Graphics Design
  addText('5. GRAPHICS DESIGN & BRANDING', 13, true, '#22C55E');
  addText('Timeline: 1-4 weeks', 10, true);
  addText('Professional graphics design services including branding, logo design, marketing materials, and digital artwork for your business needs.', 10);
  addText('Technologies: Adobe Creative Suite, Figma, Sketch, Canva', 9);
  addText('Deliverables: Logo files, brand guidelines, marketing materials, source files, usage rights', 9);
  currentY += 5;

  // Cloud Solutions
  addText('6. CLOUD SOLUTIONS & DEVOPS', 13, true, '#22C55E');
  addText('Timeline: 3-10 weeks', 10, true);
  addText('Scalable cloud infrastructure setup, migration, and management using leading cloud platforms to ensure reliability and performance.', 10);
  addText('Technologies: AWS, Google Cloud, Azure, Docker, Kubernetes, Terraform', 9);
  addText('Deliverables: Cloud infrastructure, migration plan, monitoring setup, documentation, training', 9);
  currentY += 5;

  // Database Solutions
  addText('7. DATABASE SOLUTIONS', 13, true, '#22C55E');
  addText('Timeline: 2-6 weeks', 10, true);
  addText('Database design, optimization, and management services for both SQL and NoSQL databases to ensure efficient data operations.', 10);
  addText('Technologies: PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch', 9);
  addText('Deliverables: Database schema, migration scripts, backup strategy, performance reports', 9);
  currentY += 5;

  // Digital Marketing
  addText('8. DIGITAL MARKETING & SEO', 13, true, '#22C55E');
  addText('Timeline: Monthly service', 10, true);
  addText('Comprehensive digital marketing strategies including SEO, social media management, content marketing, and PPC campaigns.', 10);
  addText('Technologies: Google Analytics, SEMrush, Hootsuite, Mailchimp, WordPress', 9);
  addText('Deliverables: Marketing strategy, content calendar, performance reports, SEO optimization', 9);
  currentY += 5;

  // Our Team
  addSectionHeader('OUR TEAM');
  const teamMembers = [
    'Excel Baraka - CEO & Cybersecurity Expert',
    'Iann Dior - CTO & Web Development Expert',
    'Andrew Otien - COO & Backend Developer',
    'Ian Ndiritu - Project Manager & Data Scientist',
    'Israel Word - Social Media Manager & Web Developer',
    'Alvin Njoroge - Finance Manager & Full-Stack Developer',
    'Lawrence - Full-Stack Developer',
    'Kimeu - Full-Stack Developer'
  ];

  teamMembers.forEach(member => {
    addText(`• ${member}`, 10);
  });

  // Why Choose Us
  addSectionHeader('WHY CHOOSE CIPHER ORGANIZATION');
  const advantages = [
    'Local Expertise - Based in Nairobi with deep understanding of the Kenyan market',
    'Comprehensive Services - One-stop solution for all your technology needs',
    'Experienced Team - 8 skilled professionals across multiple domains',
    'Quality Assurance - Rigorous testing and quality control processes',
    'Ongoing Support - Post-delivery support and maintenance services'
  ];

  advantages.forEach(advantage => {
    addText(`✓ ${advantage}`, 10);
  });

  // Contact Information
  addSectionHeader('GET STARTED TODAY');
  addText('Ready to transform your business with cutting-edge technology solutions?', 12, true);
  
  addText('Contact Information:', 11, true);
  addText('Email: excel6737@gmail.com', 11);
  addText('Phone: +254 111 748 7554', 11);
  addText('Alternative: +254 759 097 157', 11);
  addText('Location: Nairobi, Kenya', 11);

  addText('How to Get Started:', 11, true);
  addText('1. Contact us via email or phone', 10);
  addText('2. Schedule a free consultation', 10);
  addText('3. Receive a detailed project proposal', 10);
  addText('4. Begin your digital transformation journey', 10);

  // Footer
  checkPageBreak(30);
  doc.setFillColor(31, 41, 55);
  doc.rect(0, pageHeight - 25, pageWidth, 25, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text('© 2025 Cipher Organization - Your Trusted Technology Partner in Kenya', pageWidth / 2, pageHeight - 15, { align: 'center' });
  doc.setFontSize(8);
  doc.text('This document contains proprietary information. All services are subject to formal agreement.', pageWidth / 2, pageHeight - 8, { align: 'center' });

  // Save the PDF
  doc.save('Cipher-Organization-Service-Guide-2025.pdf');
};

export default downloadServiceGuide;
