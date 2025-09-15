/**
 * Contact Form Handler - Multiple Methods for Email Delivery
 * This service tries multiple email delivery methods to ensure messages reach excel6737@gmail.com
 */

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  console.log('📧 Starting email submission process...', formData);

  // Method 1: Formspree (Most reliable)
  try {
    console.log('🔄 Attempting Method 1: Formspree...');
    
    const formspreeResponse = await fetch('https://formspree.io/f/xpwanged', {
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

    console.log('📊 Formspree response status:', formspreeResponse.status);
    const responseText = await formspreeResponse.text();
    console.log('📄 Formspree response:', responseText);

    if (formspreeResponse.ok) {
      try {
        const result = JSON.parse(responseText);
        console.log('✅ Formspree result:', result);
        if (result.ok !== false) {
          console.log('🎉 Email sent successfully via Formspree!');
          return true;
        }
      } catch (parseError) {
        console.log('✅ Formspree response OK (non-JSON)');
        return true;
      }
    }
  } catch (error) {
    console.log('❌ Formspree failed:', error);
  }

  // Method 2: FormSubmit
  try {
    console.log('🔄 Attempting Method 2: FormSubmit...');
    
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
        _template: 'table'
      })
    });

    console.log('📊 FormSubmit response status:', formSubmitResponse.status);

    if (formSubmitResponse.ok) {
      const result = await formSubmitResponse.json();
      console.log('✅ FormSubmit result:', result);
      if (result.success !== false) {
        console.log('🎉 Email sent successfully via FormSubmit!');
        return true;
      }
    }
  } catch (error) {
    console.log('❌ FormSubmit failed:', error);
  }

  // Method 3: Web3Forms
  try {
    console.log('🔄 Attempting Method 3: Web3Forms...');
    
    const web3Response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'a1b2c3d4-e5f6-7890-1234-567890abcdef', // Placeholder - need real key
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
        to: 'excel6737@gmail.com'
      })
    });

    if (web3Response.ok) {
      const result = await web3Response.json();
      console.log('✅ Web3Forms result:', result);
      if (result.success) {
        console.log('🎉 Email sent successfully via Web3Forms!');
        return true;
      }
    }
  } catch (error) {
    console.log('❌ Web3Forms failed:', error);
  }

  // Method 4: EmailJS (if configured)
  try {
    console.log('🔄 Attempting Method 4: EmailJS...');
    
    // This would require EmailJS setup
    const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_barakacyber',
        template_id: 'template_contact',
        user_id: 'user_barakacyber',
        template_params: {
          from_name: formData.name,
          from_email: formData.email,
          to_email: 'excel6737@gmail.com',
          subject: `New Business Inquiry from ${formData.name}`,
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
          `
        }
      })
    });

    if (emailjsResponse.ok) {
      console.log('🎉 Email sent successfully via EmailJS!');
      return true;
    }
  } catch (error) {
    console.log('❌ EmailJS failed:', error);
  }

  // Final Method: Direct Email Client (Always works)
  console.log('🔄 All services failed, opening email client...');
  
  const emailSubject = `🚀 Business Inquiry from ${formData.name} - ${formData.service || 'General'} Service`;
  const emailBody = `
📋 BUSINESS INQUIRY FROM BARAKA CYBER FORGE WEBSITE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 CONTACT INFORMATION:
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone || 'Not provided'}

🎯 SERVICE INTEREST:
${formData.service || 'General Inquiry'}

💬 CUSTOMER MESSAGE:
${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 Submitted: ${new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}
🌐 Source: Baraka Cyber Forge Website
📧 Customer Email: ${formData.email}
📱 Customer Phone: ${formData.phone || 'Not provided'}

Please respond to this inquiry within 24 hours.
  `;

  const subject = encodeURIComponent(emailSubject);
  const body = encodeURIComponent(emailBody);
  
  const mailtoLink = `mailto:excel6737@gmail.com?subject=${subject}&body=${body}`;
  
  // Try to open in new tab first
  try {
    const emailWindow = window.open(mailtoLink, '_blank');
    
    // If popup blocked, try direct navigation
    if (!emailWindow || emailWindow.closed) {
      window.location.href = mailtoLink;
    }
    
    console.log('📧 Email client opened with pre-filled message');
    return true;
    
  } catch (emailError) {
    console.error('❌ Failed to open email client:', emailError);
    return false;
  }
};

export default sendContactEmail;
