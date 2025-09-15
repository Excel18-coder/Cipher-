/**
 * Direct Email Service - No Redirects
 * Sends emails directly to excel6737@gmail.com without user redirection
 * Works in both development and production environments
 */

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

export const sendDirectEmail = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  console.log('📧 Starting direct email submission (no redirects)...', {
    name: formData.name,
    email: formData.email,
    company: formData.company,
    environment: window.location.hostname
  });

  // Enhanced data validation
  if (!formData.name || !formData.email || !formData.company || !formData.message) {
    return { 
      success: false, 
      message: '❌ Please fill in all required fields (Name, Email, Company, Message)' 
    };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return { 
      success: false, 
      message: '❌ Please enter a valid email address' 
    };
  }

  // Method 1: Formspree (Most reliable - no redirects)
  try {
    console.log('🔄 Attempting Formspree direct submission...');
    
    const formspreeResponse = await fetch('https://formspree.io/f/mgvewpvr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone || 'Not provided',
        service: formData.service || 'General Inquiry',
        message: formData.message,
        _subject: `🚀 New Business Inquiry from ${formData.name} - ${formData.service || 'General'} Service`,
        _replyto: formData.email
      })
    });

    if (formspreeResponse.ok) {
      const result = await formspreeResponse.json();
      console.log('✅ Formspree response:', result);
      
      if (result.ok !== false && !result.error) {
        console.log('🎉 Email sent successfully via Formspree!');
        return { 
          success: true, 
          message: '✅ Your message has been sent successfully to excel6737@gmail.com! We will respond within 24 hours.' 
        };
      }
    }
  } catch (error) {
    console.log('❌ Formspree failed:', error);
  }

  // Method 2: FormSubmit (Backup - no redirects)
  try {
    console.log('🔄 Attempting FormSubmit direct submission...');
    
    const formSubmitResponse = await fetch('https://formsubmit.co/ajax/excel6737@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone || 'Not provided',
        service: formData.service || 'General Inquiry',
        message: formData.message,
        _subject: `🚀 New Business Inquiry from ${formData.name} - ${formData.service || 'General'} Service`,
        _captcha: false,
        _template: 'table',
        _autoresponse: `Dear ${formData.name}, Thank you for your inquiry! We will get back to you within 24 hours.`
      })
    });

    if (formSubmitResponse.ok) {
      const result = await formSubmitResponse.json();
      console.log('✅ FormSubmit response:', result);
      
      if (result.success !== false && result.success !== 'false') {
        console.log('🎉 Email sent successfully via FormSubmit!');
        return { 
          success: true, 
          message: '✅ Your message has been sent successfully! We will respond within 24 hours.' 
        };
      }
    }
  } catch (error) {
    console.log('❌ FormSubmit failed:', error);
  }

  // Method 3: Web3Forms (Alternative - no redirects)
  try {
    console.log('🔄 Attempting Web3Forms direct submission...');
    
    const web3FormsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: 'a1b2c3d4-e5f6-1234-5678-90abcdef1234', // Placeholder - replace with real key
        subject: `🚀 New Business Inquiry from ${formData.name}`,
        from_name: formData.name,
        email: formData.email,
        message: `
📋 BUSINESS INQUIRY DETAILS

👤 CONTACT INFORMATION:
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone || 'Not provided'}

🎯 SERVICE INTEREST:
${formData.service || 'General Inquiry'}

💬 MESSAGE:
${formData.message}

📅 Submitted: ${new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}
🌐 Source: Baraka Cyber Forge Website
        `,
        to: 'excel6737@gmail.com',
        redirect: false // Important: No redirect
      })
    });

    if (web3FormsResponse.ok) {
      const result = await web3FormsResponse.json();
      if (result.success) {
        console.log('🎉 Email sent successfully via Web3Forms!');
        return { 
          success: true, 
          message: '✅ Your message has been sent successfully! We will respond within 24 hours.' 
        };
      }
    }
  } catch (error) {
    console.log('❌ Web3Forms failed (not configured):', error);
  }

  // Method 4: EmailJS (If configured - no redirects)
  try {
    console.log('🔄 Attempting EmailJS direct submission...');
    
    // Initialize EmailJS
    const emailJSResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'default_service',
        template_id: 'template_contact',
        user_id: 'user_public_key',
        template_params: {
          from_name: formData.name,
          from_email: formData.email,
          to_email: 'excel6737@gmail.com',
          subject: `New Business Inquiry from ${formData.name}`,
          company: formData.company,
          phone: formData.phone || 'Not provided',
          service: formData.service || 'General Inquiry',
          message: formData.message
        }
      }),
    });

    if (emailJSResponse.ok) {
      console.log('🎉 Email sent successfully via EmailJS!');
      return { 
        success: true, 
        message: '✅ Your message has been sent successfully! We will respond within 24 hours.' 
      };
    }
  } catch (error) {
    console.log('❌ EmailJS failed (not configured):', error);
  }

  // Method 5: Getform.io (Alternative - no redirects)
  try {
    console.log('🔄 Attempting Getform.io direct submission...');
    
    const getformResponse = await fetch('https://getform.io/f/arollevv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone || 'Not provided',
        service: formData.service || 'General Inquiry',
        message: formData.message,
        subject: `🚀 New Business Inquiry from ${formData.name}`
      })
    });

    if (getformResponse.ok) {
      console.log('🎉 Email sent successfully via Getform.io!');
      return { 
        success: true, 
        message: '✅ Your message has been sent successfully! We will respond within 24 hours.' 
      };
    }
  } catch (error) {
    console.log('❌ Getform.io failed:', error);
  }

  // If all methods fail, return error (but don't redirect)
  console.error('❌ All email services failed');
  return { 
    success: false, 
    message: '❌ Unable to send email at the moment. Please contact us directly at excel6737@gmail.com or call +254 111 748 7554.' 
  };
};

export default sendDirectEmail;
