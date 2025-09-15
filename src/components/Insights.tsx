import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Shield, Brain, Clock, Eye, X, Code, Database, Smartphone, Cloud, Globe, Monitor } from 'lucide-react';
import { useState } from 'react';

const Insights = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const insights = [
    {
      category: "Web Development",
      title: "Building Modern Web Applications with React and Node.js in 2025",
      excerpt: "A comprehensive guide to creating scalable, responsive web applications using the latest technologies and best practices for Kenyan businesses.",
      author: "Iann Dior",
      date: "January 10, 2025",
      readTime: "8 min read",
      views: "1.2k",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop",
      featured: true,
      tags: ["React", "Node.js", "Web Development"],
      fullContent: {
        introduction: "In 2025, the landscape of web development continues to evolve rapidly. As businesses in Kenya and across Africa embrace digital transformation, the demand for modern, scalable web applications has never been higher. This comprehensive guide will walk you through the essential technologies, patterns, and best practices for building world-class web applications using React and Node.js.",
        sections: [
          {
            heading: "Why React and Node.js?",
            content: "React and Node.js form a powerful combination for full-stack JavaScript development. React's component-based architecture enables developers to build reusable UI components, while Node.js provides a scalable backend runtime. This stack allows teams to use JavaScript across the entire application, reducing context switching and enabling code sharing between frontend and backend."
          },
          {
            heading: "Setting Up Your Development Environment",
            content: "Start by installing Node.js (version 18 or higher) and npm. Use Create React App or Vite for faster build times. Set up ESLint and Prettier for code quality. Consider using TypeScript for better type safety and developer experience. Install essential VS Code extensions like ES7+ React/Redux/React-Native snippets and Bracket Pair Colorizer."
          },
          {
            heading: "Modern React Patterns in 2025",
            content: "Embrace React 18 features like Concurrent Rendering and Automatic Batching. Use functional components with hooks exclusively. Implement custom hooks for reusable logic. Utilize React Query or SWR for server state management. Apply Context API judiciously for global state. Consider state management libraries like Zustand for complex applications."
          },
          {
            heading: "Building Scalable Node.js APIs",
            content: "Structure your Node.js application using the MVC pattern or clean architecture. Use Express.js with TypeScript for type safety. Implement proper error handling with middleware. Use environment variables for configuration. Apply rate limiting and request validation. Implement JWT authentication and authorization. Use MongoDB with Mongoose or PostgreSQL with Prisma."
          },
          {
            heading: "Performance Optimization Strategies",
            content: "Implement code splitting in React using React.lazy and Suspense. Use React.memo for component memoization. Optimize bundle size with tree shaking. Implement caching strategies in Node.js using Redis. Use CDN for static assets. Implement database indexing and query optimization. Monitor performance with tools like Lighthouse and New Relic."
          },
          {
            heading: "Deployment and DevOps for Kenyan Businesses",
            content: "Deploy React applications on Vercel, Netlify, or AWS S3. Use Docker for Node.js backend containerization. Implement CI/CD pipelines with GitHub Actions or GitLab CI. Use AWS, Google Cloud, or Azure for hosting. Consider local hosting options for data sovereignty. Implement monitoring and logging with services like Sentry and LogRocket."
          }
        ],
        conclusion: "Building modern web applications with React and Node.js in 2025 requires understanding of current best practices, performance optimization, and deployment strategies. For Kenyan businesses, this stack offers the flexibility to build applications that can scale globally while being mindful of local infrastructure constraints. At Cipher Organization, we've successfully delivered numerous React and Node.js applications for clients across various industries.",
        keyTakeaways: [
          "Use React 18 features for better performance and user experience",
          "Implement TypeScript for better code quality and maintainability",
          "Focus on performance optimization from the beginning",
          "Choose hosting solutions that align with your business requirements",
          "Implement proper monitoring and error tracking"
        ]
      }
    },
    {
      category: "Cybersecurity",
      title: "Essential Cybersecurity Practices for Kenyan SMEs",
      excerpt: "Practical cybersecurity measures that small and medium enterprises in Kenya can implement to protect their digital assets and customer data.",
      author: "Excel Baraka",
      date: "January 8, 2025",
      readTime: "6 min read",
      views: "890",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop",
      featured: false,
      tags: ["Cybersecurity", "SME", "Kenya"],
      fullContent: {
        introduction: "Small and Medium Enterprises (SMEs) in Kenya face increasing cybersecurity threats as they digitize their operations. Unlike large corporations, SMEs often lack dedicated IT security teams and substantial cybersecurity budgets. However, implementing fundamental security practices can significantly reduce cyber risks without breaking the bank.",
        sections: [
          {
            heading: "Understanding the Threat Landscape in Kenya",
            content: "Kenyan SMEs face various cyber threats including phishing attacks, ransomware, business email compromise (BEC), and mobile banking fraud. According to recent reports, cybercrime affects Kenyan businesses significantly. Common attack vectors include unsecured Wi-Fi networks, weak passwords, unpatched software, and social engineering tactics targeting employees."
          },
          {
            heading: "Essential Security Controls for SMEs",
            content: "Implement multi-factor authentication (MFA) on all business accounts. Use strong, unique passwords with a password manager like Bitwarden or LastPass. Keep all software and operating systems updated with automatic updates enabled. Install reputable antivirus software on all devices. Enable firewalls on all computers and networks."
          },
          {
            heading: "Email Security Best Practices",
            content: "Configure email security filters to block spam and malicious attachments. Train employees to identify phishing emails and suspicious links. Implement email encryption for sensitive communications. Use business email accounts instead of personal email for work. Set up email backup and recovery procedures. Consider using Microsoft 365 or Google Workspace with advanced security features."
          },
          {
            heading: "Network Security for Small Offices",
            content: "Secure Wi-Fi networks with WPA3 encryption and strong passwords. Set up a guest network separate from business networks. Use a business-grade router with built-in security features. Implement network access controls to limit device access. Consider using a VPN for remote work. Regularly monitor network traffic for unusual activity."
          },
          {
            heading: "Data Protection and Backup Strategies",
            content: "Implement the 3-2-1 backup rule: 3 copies of data, 2 different media types, 1 offsite backup. Use cloud storage services like Google Drive, OneDrive, or AWS S3 for automatic backups. Encrypt sensitive data both in transit and at rest. Implement access controls to limit who can access sensitive information. Regularly test backup and recovery procedures."
          },
          {
            heading: "Compliance with Kenyan Data Protection Laws",
            content: "Understand the Kenya Data Protection Act 2019 requirements. Implement privacy policies and data processing agreements. Obtain consent for data collection and processing. Establish procedures for data subject rights requests. Implement data breach notification procedures. Consider appointing a Data Protection Officer (DPO) for larger SMEs."
          }
        ],
        conclusion: "Cybersecurity for Kenyan SMEs doesn't have to be overwhelming or expensive. By implementing these essential practices, businesses can significantly improve their security posture. The key is to start with the basics and gradually build more sophisticated defenses as the business grows. Remember, cybersecurity is an ongoing process, not a one-time setup.",
        keyTakeaways: [
          "Start with basic security controls like MFA and password managers",
          "Regular software updates are crucial for security",
          "Employee training is your first line of defense",
          "Backup your data regularly and test recovery procedures",
          "Understand and comply with Kenyan data protection laws"
        ]
      }
    },
    {
      category: "Mobile Development",
      title: "Cross-Platform Mobile Apps: React Native vs Flutter in 2025",
      excerpt: "Comparing the two leading cross-platform frameworks to help you choose the right technology for your next mobile application project.",
      author: "Andrew Otien",
      date: "January 5, 2025",
      readTime: "10 min read",
      views: "1.5k",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      featured: false,
      tags: ["React Native", "Flutter", "Mobile Development"],
      fullContent: {
        introduction: "As mobile app development continues to evolve, choosing the right cross-platform framework is crucial for project success. React Native and Flutter are the two dominant players in this space, each with unique strengths and considerations. This comprehensive comparison will help you make an informed decision for your next mobile project.",
        sections: [
          {
            heading: "React Native: Leveraging JavaScript Ecosystem",
            content: "React Native, developed by Facebook (Meta), allows developers to build mobile apps using JavaScript and React. It compiles to native code, providing near-native performance. The framework benefits from the vast JavaScript ecosystem and allows code sharing between web and mobile applications. Popular apps built with React Native include Facebook, Instagram, WhatsApp, and Airbnb."
          },
          {
            heading: "Flutter: Google's UI Toolkit",
            content: "Flutter, created by Google, uses the Dart programming language to build natively compiled applications. It provides a rich set of customizable widgets and excellent performance through its Skia graphics engine. Flutter enables pixel-perfect designs and smooth animations. Notable apps include Google Ads, Alibaba, BMW, and ByteDance apps."
          },
          {
            heading: "Performance Comparison",
            content: "Flutter generally offers better performance due to its compiled nature and direct compilation to native ARM code. React Native has improved significantly with the New Architecture (Fabric and TurboModules) but still has a JavaScript bridge overhead. For graphics-intensive applications, Flutter has an edge. For business applications with standard UI components, both perform adequately."
          },
          {
            heading: "Development Experience and Learning Curve",
            content: "React Native has a gentler learning curve for web developers familiar with JavaScript and React. The hot reload feature provides excellent developer experience. Flutter requires learning Dart, which might be a barrier, but offers excellent tooling, comprehensive documentation, and a rich widget catalog. Both have strong IDE support and debugging tools."
          },
          {
            heading: "Ecosystem and Community",
            content: "React Native benefits from the massive JavaScript ecosystem with npm packages. The community is large and mature with extensive third-party libraries. Flutter's ecosystem is growing rapidly with pub.dev packages. Google's strong backing ensures continuous development and support. Both have active communities and regular updates."
          },
          {
            heading: "Platform-Specific Considerations",
            content: "React Native provides better platform-specific customization and easier integration with native modules. Flutter offers more consistent UI across platforms but might require more effort for platform-specific features. Consider your target platforms (iOS, Android, web, desktop) as Flutter has broader platform support including web and desktop."
          },
          {
            heading: "Development Speed and Efficiency for Kenyan Businesses",
            content: "Both frameworks reduce development time compared to native development. React Native might be faster to start if you have web developers. Flutter might be more efficient long-term due to its performance and maintenance characteristics. Consider the availability of developers in Kenya - JavaScript developers are more common than Dart developers."
          }
        ],
        conclusion: "Both React Native and Flutter are excellent choices for cross-platform mobile development in 2025. React Native is ideal if you have a web development team familiar with JavaScript and React, or if you need extensive platform-specific customizations. Flutter is better for apps requiring high performance, custom UI designs, or if you're planning to target multiple platforms including web and desktop.",
        keyTakeaways: [
          "Choose React Native if you have JavaScript/React expertise",
          "Choose Flutter for better performance and custom UI designs",
          "Consider your team's skills and project requirements",
          "Both frameworks significantly reduce development time compared to native",
          "Evaluate long-term maintenance and scalability needs"
        ]
      }
    },
    {
      category: "Data Science",
      title: "Leveraging Data Analytics for Business Growth in East Africa",
      excerpt: "How businesses in East Africa can harness the power of data science and machine learning to drive growth and make informed decisions.",
      author: "Ian Ndiritu",
      date: "January 3, 2025",
      readTime: "12 min read",
      views: "760",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      featured: false,
      tags: ["Data Science", "Analytics", "East Africa"],
      fullContent: {
        introduction: "East Africa is experiencing rapid digital transformation, creating unprecedented opportunities for businesses to leverage data analytics for growth. From mobile money transactions to e-commerce platforms, the region generates vast amounts of data daily. This guide explores how businesses can harness this data to drive growth, improve operations, and gain competitive advantages.",
        sections: [
          {
            heading: "The Data Landscape in East Africa",
            content: "East Africa generates massive amounts of data through mobile money platforms like M-Pesa, e-commerce sites, social media, and IoT devices. Kenya alone processes over 1 billion mobile money transactions monthly. This data goldmine includes customer behavior patterns, transaction histories, demographic information, and market trends. However, many businesses still struggle to extract actionable insights from this data."
          },
          {
            heading: "Building a Data-Driven Culture",
            content: "Start by educating leadership about data analytics value. Establish clear data governance policies and ensure data quality. Invest in data literacy training for employees. Create data-driven KPIs and decision-making processes. Foster collaboration between business and technical teams. Start small with pilot projects to demonstrate value before scaling analytics initiatives."
          },
          {
            heading: "Essential Tools and Technologies",
            content: "Begin with accessible tools like Google Analytics, Microsoft Power BI, or Tableau for visualization. Use Python with pandas, scikit-learn, and matplotlib for analysis. Consider cloud platforms like AWS, Google Cloud, or Azure for scalability. Implement data warehousing solutions like BigQuery or Snowflake. Use APIs to collect data from various sources including social media and payment platforms."
          },
          {
            heading: "Customer Analytics and Segmentation",
            content: "Analyze customer transaction patterns to identify high-value segments. Use RFM analysis (Recency, Frequency, Monetary) to understand customer behavior. Implement cohort analysis to track customer lifecycle. Use clustering algorithms to group customers with similar behaviors. Develop predictive models to identify customers at risk of churn. Personalize marketing campaigns based on customer segments."
          },
          {
            heading: "Operational Analytics for Efficiency",
            content: "Monitor supply chain performance with real-time dashboards. Optimize inventory management using demand forecasting models. Analyze employee productivity and operational bottlenecks. Use predictive maintenance for equipment and systems. Implement quality control analytics to reduce defects. Optimize market strategies using competitor analysis."
          },
          {
            heading: "Market Intelligence and Competitive Analysis",
            content: "Monitor social media sentiment about your brand and competitors. Analyze market trends using web scraping and public data sources. Track competitor strategies and promotional activities. Use location analytics to optimize store locations and service areas. Analyze economic indicators and their impact on business performance. Implement early warning systems for market changes."
          },
          {
            heading: "Regulatory Considerations and Data Privacy",
            content: "Comply with the Kenya Data Protection Act and similar regulations across East Africa. Implement proper consent mechanisms for data collection. Ensure data anonymization and pseudonymization where required. Establish data retention and deletion policies. Consider cross-border data transfer regulations. Implement security measures to protect customer data."
          }
        ],
        conclusion: "Data analytics represents a significant opportunity for East African businesses to accelerate growth and improve competitiveness. Success requires a combination of the right tools, skills, and organizational culture. Start with clear business questions, ensure data quality, and focus on actionable insights. As the digital economy continues to grow in East Africa, data-driven businesses will have a distinct advantage.",
        keyTakeaways: [
          "Start with clear business questions and objectives",
          "Invest in data quality and governance from the beginning",
          "Use accessible tools and scale gradually",
          "Focus on customer and operational analytics for immediate impact",
          "Ensure compliance with regional data protection regulations"
        ]
      }
    },
    {
      category: "Cloud Solutions",
      title: "Cloud Migration Strategies for African Businesses",
      excerpt: "A step-by-step guide to successfully migrating your business to the cloud, with considerations specific to the African market and infrastructure.",
      author: "Lawrence",
      date: "December 28, 2024",
      readTime: "9 min read",
      views: "980",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=300&fit=crop",
      featured: false,
      tags: ["Cloud Migration", "AWS", "Africa"],
      fullContent: {
        introduction: "Cloud adoption in Africa is accelerating, driven by improving internet infrastructure, digital transformation initiatives, and the need for scalable, efficient IT solutions. However, African businesses face unique challenges including connectivity issues, data sovereignty concerns, and regulatory requirements. This guide provides a practical approach to cloud migration tailored for the African market.",
        sections: [
          {
            heading: "Understanding the African Cloud Landscape",
            content: "Africa's cloud market is growing rapidly, with major providers establishing local data centers. AWS has facilities in Cape Town, Microsoft Azure operates from South Africa, and Google Cloud is expanding its presence. Local providers like Liquid Telecom and MainOne also offer cloud services. Internet connectivity has improved significantly with submarine cables and fiber networks, though rural areas still face challenges."
          },
          {
            heading: "Pre-Migration Assessment and Planning",
            content: "Conduct a comprehensive IT infrastructure audit to identify applications, dependencies, and performance requirements. Assess network bandwidth and latency requirements. Evaluate data sensitivity and regulatory compliance needs. Calculate current IT infrastructure requirements. Identify applications suitable for lift-and-shift versus those requiring refactoring. Plan for staff training and change management."
          },
          {
            heading: "Choosing the Right Cloud Strategy",
            content: "Consider hybrid cloud approaches for gradual migration and data sovereignty. Public cloud (AWS, Azure, GCP) offers scalability and global reach. Private cloud provides better control and security. Multi-cloud strategies can avoid vendor lock-in and optimize performance. Edge computing can address latency concerns in remote areas. Evaluate local cloud providers for regulatory compliance and data residency requirements."
          },
          {
            heading: "Addressing Connectivity and Performance",
            content: "Implement content delivery networks (CDNs) to improve performance across Africa. Use local internet exchange points (IXPs) to reduce latency. Consider multiple internet service providers for redundancy. Implement WAN optimization and caching strategies. Design applications for intermittent connectivity scenarios. Use progressive web apps and offline-first approaches where appropriate."
          },
          {
            heading: "Data Sovereignty and Regulatory Compliance",
            content: "Understand data residency requirements in your country. Implement data classification and governance policies. Use encryption for data in transit and at rest. Consider local cloud providers for sensitive data. Implement proper access controls and audit trails. Ensure compliance with local data protection laws like Nigeria's NDPR or South Africa's POPIA. Plan for data repatriation scenarios."
          },
          {
            heading: "Performance Optimization Strategies",
            content: "Start with right-sizing resources to avoid over-provisioning. Implement auto-scaling to handle variable workloads efficiently. Use reserved instances for predictable workloads. Leverage spot instances for non-critical applications. Implement performance monitoring and alerting. Consider local currency billing where available. Optimize data transfer efficiency by using local CDNs and edge locations."
          },
          {
            heading: "Security and Risk Management",
            content: "Implement identity and access management (IAM) with multi-factor authentication. Use network security groups and virtual private clouds (VPCs). Implement comprehensive backup and disaster recovery strategies. Monitor security events and compliance status. Plan for business continuity during service outages. Consider cyber insurance for cloud-related risks. Establish incident response procedures."
          }
        ],
        conclusion: "Cloud migration offers significant benefits for African businesses, including improved scalability, enhanced performance, and access to advanced technologies. Success requires careful planning, consideration of local factors, and a phased approach. Start with non-critical applications, build expertise gradually, and ensure proper governance throughout the process. The cloud can be a powerful enabler of digital transformation and business growth across Africa.",
        keyTakeaways: [
          "Assess your current infrastructure and business requirements thoroughly",
          "Consider hybrid and multi-cloud strategies for flexibility",
          "Address connectivity and latency challenges proactively",
          "Ensure compliance with local data protection regulations",
          "Start small and scale gradually while building cloud expertise"
        ]
      }
    },
    {
      category: "Digital Marketing",
      title: "Social Media Marketing Trends for Tech Companies in 2025",
      excerpt: "Latest trends and strategies for technology companies to build their brand presence and engage customers through social media platforms.",
      author: "Israel Word",
      date: "December 25, 2024",
      readTime: "7 min read",
      views: "1.1k",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      featured: false,
      tags: ["Social Media", "Marketing", "Tech Industry"],
      fullContent: {
        introduction: "Social media marketing for tech companies in 2025 requires a sophisticated understanding of emerging platforms, changing algorithms, and evolving user behaviors. As technology companies compete for attention in increasingly crowded markets, strategic social media presence becomes crucial for brand building, customer acquisition, and thought leadership establishment.",
        sections: [
          {
            heading: "Platform Evolution and New Opportunities",
            content: "Traditional platforms like LinkedIn, Twitter, and Facebook remain important for B2B tech marketing, but emerging platforms offer new opportunities. TikTok and Instagram Reels are increasingly used for tech education and product demos. Discord and Clubhouse provide community-building opportunities. Consider platform-specific content strategies and audience demographics when planning your social media presence."
          },
          {
            heading: "Video-First Content Strategy",
            content: "Video content dominates social media engagement in 2025. Create product demonstration videos, technical tutorials, and behind-the-scenes content. Use live streaming for product launches and Q&A sessions. Implement short-form video content for quick tips and insights. Consider interactive video formats and augmented reality features. Optimize videos for mobile viewing and accessibility."
          },
          {
            heading: "Thought Leadership and Technical Content",
            content: "Position company executives and technical experts as thought leaders in their domains. Share insights about industry trends, technical innovations, and best practices. Create educational content that demonstrates expertise without being overly promotional. Participate in industry discussions and trending topics. Collaborate with other thought leaders and influencers in the tech space."
          },
          {
            heading: "Community Building and Engagement",
            content: "Build communities around your products and services using Facebook Groups, LinkedIn Communities, or Discord servers. Encourage user-generated content and customer success stories. Respond promptly to comments and questions. Host virtual events, webinars, and AMA sessions. Create hashtag campaigns to increase brand visibility and engagement."
          },
          {
            heading: "AI-Powered Social Media Marketing",
            content: "Use AI tools for content creation, scheduling, and performance analysis. Implement chatbots for customer service on social platforms. Use predictive analytics to optimize posting times and content types. Leverage AI for social listening and sentiment analysis. Implement personalization in social media advertising using machine learning algorithms."
          },
          {
            heading: "Measuring ROI and Performance",
            content: "Define clear KPIs aligned with business objectives such as lead generation, brand awareness, and customer acquisition. Use attribution models to track the customer journey from social media to conversion. Implement UTM parameters for accurate tracking. Monitor engagement quality, not just quantity. Use social media analytics tools to gain insights into audience behavior and content performance."
          },
          {
            heading: "Compliance and Brand Safety",
            content: "Ensure compliance with data protection regulations when collecting user data through social media. Implement brand safety measures to avoid association with inappropriate content. Develop crisis communication plans for social media. Train team members on company social media policies. Monitor brand mentions and respond to negative feedback professionally and promptly."
          }
        ],
        conclusion: "Social media marketing for tech companies in 2025 requires a balanced approach of technical expertise, creative content, and strategic thinking. Success comes from understanding your audience, choosing the right platforms, and consistently delivering value through your content. Focus on building genuine relationships and communities rather than just promoting products. As the social media landscape continues to evolve, staying adaptable and data-driven will be key to long-term success.",
        keyTakeaways: [
          "Embrace video-first content strategies across all platforms",
          "Focus on thought leadership and educational content",
          "Build and nurture communities around your brand",
          "Leverage AI tools for efficiency and personalization",
          "Measure performance based on business objectives, not vanity metrics"
        ]
      }
    }
  ];

  const categories = [
    "All",
    "Web Development",
    "Cybersecurity", 
    "Mobile Development",
    "Data Science",
    "Cloud Solutions",
    "Digital Marketing"
  ];

  const featuredInsight = insights.find(insight => insight.featured);
  const regularInsights = insights.filter(insight => !insight.featured);

  return (
    <section id="insights" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Tech <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Insights</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Stay ahead of technology trends with expert insights, tutorials, and best practices 
              from our experienced team at Cipher Organization.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  index === 0 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Article */}
          {featuredInsight && (
            <div className="mb-16">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl overflow-hidden hover:border-green-500/40 transition-all duration-300 group">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={featuredInsight.image} 
                      alt={featuredInsight.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                        {featuredInsight.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                      {featuredInsight.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredInsight.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{featuredInsight.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredInsight.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{featuredInsight.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{featuredInsight.views}</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedArticle(featuredInsight)}
                      className="group/btn inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors duration-300"
                    >
                      <span className="font-semibold">Read Full Article</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {regularInsights.map((insight, index) => (
              <article
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl overflow-hidden hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              >
                <div className="relative h-48">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gray-900/80 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                      {insight.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300 line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                    {insight.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-3 w-3" />
                      <span>{insight.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>{insight.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{insight.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{insight.views}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedArticle(insight)}
                      className="group/btn text-green-400 hover:text-green-300 transition-colors duration-300"
                    >
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Article Detail Modal */}
          {selectedArticle && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-gray-900 border border-green-500/30 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto relative">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="p-8">
                  {/* Article Header */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                        {selectedArticle.category}
                      </span>
                      {selectedArticle.featured && (
                        <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
                          FEATURED
                        </span>
                      )}
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                      {selectedArticle.title}
                    </h1>
                    
                    <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span className="font-medium text-green-400">{selectedArticle.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{selectedArticle.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{selectedArticle.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="h-4 w-4" />
                        <span>{selectedArticle.views} views</span>
                      </div>
                    </div>

                    <img 
                      src={selectedArticle.image}
                      alt={selectedArticle.title}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                  </div>

                  {/* Article Content */}
                  <div className="prose prose-invert max-w-none">
                    {/* Introduction */}
                    <div className="mb-8">
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {selectedArticle.fullContent.introduction}
                      </p>
                    </div>

                    {/* Article Sections */}
                    {selectedArticle.fullContent.sections.map((section, index) => (
                      <div key={index} className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                          <span>{section.heading}</span>
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    ))}

                    {/* Key Takeaways */}
                    <div className="bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-blue-500/10 rounded-xl border border-green-500/20 p-6 mb-8">
                      <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center space-x-2">
                        <TrendingUp className="h-5 w-5" />
                        <span>Key Takeaways</span>
                      </h3>
                      <ul className="space-y-3">
                        {selectedArticle.fullContent.keyTakeaways.map((takeaway, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Conclusion */}
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedArticle.fullContent.conclusion}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-white mb-3">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedArticle.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-800 border border-green-500/30 text-green-400 rounded-full text-sm hover:bg-gray-700 transition-colors duration-200"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Author Bio */}
                    <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
                      <h3 className="text-lg font-semibold text-white mb-3">About the Author</h3>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">
                            {selectedArticle.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-green-400 mb-2">{selectedArticle.author}</p>
                          <p className="text-gray-300 text-sm">
                            {selectedArticle.author === "Iann Dior" && "CTO & Web Development Expert at Cipher Organization. Specializes in modern web technologies and scalable application architecture."}
                            {selectedArticle.author === "Excel Baraka" && "CEO & Cybersecurity Expert at Cipher Organization. Leading cybersecurity professional with expertise in threat analysis and risk management."}
                            {selectedArticle.author === "Andrew Otien" && "COO & Backend Developer at Cipher Organization. Expert in mobile development and backend systems architecture."}
                            {selectedArticle.author === "Ian Ndiritu" && "Project Manager & Data Scientist at Cipher Organization. Specializes in data analytics and machine learning applications."}
                            {selectedArticle.author === "Lawrence" && "Full-Stack Developer at Cipher Organization. Expert in cloud technologies and DevOps practices."}
                            {selectedArticle.author === "Israel Word" && "Social Media Manager & Web Developer at Cipher Organization. Specializes in digital marketing and brand strategy."}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Related Articles CTA */}
                    <div className="text-center p-6 bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-blue-500/10 rounded-xl border border-green-500/20">
                      <h3 className="text-xl font-semibold text-white mb-2">Want to Work With Us?</h3>
                      <p className="text-gray-400 mb-4">
                        Interested in implementing these strategies for your business? 
                        Our team at Cipher Organization can help you achieve your technology goals.
                      </p>
                      <button
                        onClick={() => {
                          setSelectedArticle(null);
                          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-6 py-3 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:via-cyan-600 hover:to-blue-700 transition-all duration-300"
                      >
                        Contact Us Today
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-blue-500/10 rounded-xl border border-green-500/20 p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <BookOpen className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our tech insights newsletter and get the latest trends, tutorials, 
                and expert analysis on web development, cybersecurity, and emerging technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Subscribe</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
