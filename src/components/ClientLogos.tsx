import React from 'react';

const ClientLogos = () => {
  const clients = [
    { name: "TechCorp Industries", logo: "/logos/techcorp.svg" },
    { name: "FinanceSecure Bank", logo: "/logos/financesecure.svg" },
    { name: "HealthTech Solutions", logo: "/logos/healthtech.svg" },
    { name: "Global Manufacturing Co.", logo: "/logos/globalmanufacturing.svg" },
    { name: "Microsoft", logo: "/logos/microsoft.svg" },
    { name: "AWS", logo: "/logos/aws.svg" },
    { name: "Google Cloud", logo: "/logos/google-cloud.svg" },
    { name: "Splunk", logo: "/logos/splunk.svg" }
  ];

  return (
    <section className="py-16 bg-gray-800/10 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Trusted by <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Leading Organizations</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We work with industry leaders and innovative companies to deliver exceptional technology solutions
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group flex items-center justify-center h-20 bg-white/5 rounded-lg border border-green-500/10 hover:border-green-500/30 transition-all duration-300 hover:bg-white/10 hover:scale-105 p-4"
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                  title={client.name}
                />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Join these industry leaders and transform your business with our technology solutions
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
