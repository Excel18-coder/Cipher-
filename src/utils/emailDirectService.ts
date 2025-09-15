/**
 * Bulletproof Email Service - Direct to excel6737@gmail.com
 * No redirects, no popups, just direct email delivery
 */

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

export const sendEmailDirect = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  console.log('📧 Sending email directly to excel6737@gmail.com...', {
    name: formData.name,
    email: formData.email,
    company: formData.company
  });

  // Method 1: Formspree - Most reliable service
  try {
    console.log('🔄 Method 1: Formspree...');
    
    const response = await fetch('https://formspree.io/f/mgvewpvr', {
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
        _replyto: formData.email,
        _format: 'plain'
      })
    });

    console.log('📊 Formspree Status:', response.status);

    if (response.ok) {
      const result = await response.json();
      console.log('✅ Formspree Success:', result);
      
      if (result.ok !== false && !result.error) {
        return { 
          success: true, 
          message: '✅ Your message has been sent successfully to excel6737@gmail.com! We will respond within 24 hours.' 
        };
      }
    }

    // If we get here, formspree failed
    console.log('❌ Formspree failed, trying backup...');
    
  } catch (error) {
    console.log('❌ Formspree error:', error);
  }

  // Method 2: FormSubmit - Backup service
  try {
    console.log('🔄 Method 2: FormSubmit...');
    
    const response = await fetch('https://formsubmit.co/ajax/excel6737@gmail.com', {
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
        _template: 'table'
      })
    });

    console.log('📊 FormSubmit Status:', response.status);

    if (response.ok) {
      const result = await response.json();
      console.log('✅ FormSubmit Result:', result);
      
      if (result.success !== false && result.success !== 'false') {
        return { 
          success: true, 
          message: '✅ Your message has been sent successfully to excel6737@gmail.com! We will respond within 24 hours.' 
        };
      }
    }

    console.log('❌ FormSubmit failed, trying next method...');
    
  } catch (error) {
    console.log('❌ FormSubmit error:', error);
  }

  // Method 3: Getform.io - Third backup
  try {
    console.log('🔄 Method 3: Getform.io...');
    
    const response = await fetch('https://getform.io/f/arollevv', {
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

    if (response.ok) {
      console.log('✅ Getform.io Success!');
      return { 
        success: true, 
        message: '✅ Your message has been sent successfully to excel6737@gmail.com! We will respond within 24 hours.' 
      };
    }

    console.log('❌ Getform.io failed');
    
  } catch (error) {
    console.log('❌ Getform.io error:', error);
  }

  // Method 4: Web3Forms - Fourth backup
  try {
    console.log('🔄 Method 4: Web3Forms...');
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_key: 'a1b2c3d4-e5f6-1234-5678-90abcdef1234', // Placeholder key
        subject: `🚀 New Business Inquiry from ${formData.name}`,
        from_name: formData.name,
        email: formData.email,
        message: `
📋 BUSINESS INQUIRY DETAILS

👤 Contact: ${formData.name}
📧 Email: ${formData.email}
🏢 Company: ${formData.company}
📱 Phone: ${formData.phone || 'Not provided'}
🎯 Service: ${formData.service || 'General Inquiry'}

💬 Message:
${formData.message}

📅 Submitted: ${new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}
🌐 Source: Baraka Cyber Forge Website
        `,
        to: 'excel6737@gmail.com',
        redirect: false
      })
    });

    if (response.ok) {
      const result = await response.json();
      if (result.success) {
        console.log('✅ Web3Forms Success!');
        return { 
          success: true, 
          message: '✅ Your message has been sent successfully to excel6737@gmail.com! We will respond within 24 hours.' 
        };
      }
    }
    
  } catch (error) {
    console.log('❌ Web3Forms error:', error);
  }

  // Final Method: EmailJS (if you set it up)
  try {
    console.log('🔄 Final Method: EmailJS...');
    
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
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
      })
    });

    if (response.ok) {
      console.log('✅ EmailJS Success!');
      return { 
        success: true, 
        message: '✅ Your message has been sent successfully to excel6737@gmail.com! We will respond within 24 hours.' 
      };
    }
    
  } catch (error) {
    console.log('❌ EmailJS error (not configured):', error);
  }

  // All methods failed - return error but don't redirect
  console.error('❌ All email services failed');
  return { 
    success: false, 
    message: '❌ Unable to send email at this moment. Please contact us directly at excel6737@gmail.com or call +254 111 748 7554.' 
  };
};

export default sendEmailDirect;
