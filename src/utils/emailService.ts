// Email service utility for handling form submissions
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    console.log('Attempting to send email with form data:', formData);

    // Prepare the email content
    const emailSubject = `New Business Inquiry from ${formData.name} - ${formData.service || 'General'} Service`;
    const emailBody = `
BUSINESS INQUIRY FROM BARAKA CYBER FORGE WEBSITE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT INFORMATION:
👤 Name: ${formData.name}
📧 Email: ${formData.email}
🏢 Company: ${formData.company}
📱 Phone: ${formData.phone || 'Not provided'}

SERVICE INTEREST:
🎯 Service: ${formData.service || 'General Inquiry'}

MESSAGE:
💬 ${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 Submitted: ${new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}
🌐 Source: Baraka Cyber Forge Website
🔗 Contact: ${formData.email}
    `;

    // Method 1: Try Web3Forms (reliable free service)
    try {
      const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY', // You'll need to get this from web3forms.com
          subject: emailSubject,
          from_name: formData.name,
          email: formData.email,
          message: emailBody,
          to: 'excel6737@gmail.com'
        }),
      });

      if (web3formsResponse.ok) {
        const result = await web3formsResponse.json();
        if (result.success) {
          console.log('Email sent successfully via Web3Forms');
          return true;
        }
      }
    } catch (web3Error) {
      console.log('Web3Forms failed, trying next method...');
    }

    // Method 2: Try Formspree (requires account setup)
    try {
      const formspreeResponse = await fetch('https://formspree.io/f/xpwanged', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone || 'Not provided',
          service: formData.service || 'General Inquiry',
          message: formData.message,
          _subject: emailSubject
        }),
      });

      if (formspreeResponse.ok) {
        console.log('Email sent successfully via Formspree');
        return true;
      }
    } catch (formspreeError) {
      console.log('Formspree failed, trying next method...');
    }

    // Method 3: Try FormSubmit
    try {
      const formsubmitResponse = await fetch('https://formsubmit.co/ajax/excel6737@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone || 'Not provided',
          service: formData.service || 'General Inquiry',
          message: formData.message,
          _subject: emailSubject,
          _captcha: false,
          _template: 'table'
        }),
      });

      if (formsubmitResponse.ok) {
        const result = await formsubmitResponse.json();
        if (result.success !== false) {
          console.log('Email sent successfully via FormSubmit');
          return true;
        }
      }
    } catch (formsubmitError) {
      console.log('FormSubmit failed, opening email client...');
    }

    // Final fallback: Open email client with pre-filled content
    console.log('All services failed, opening email client as fallback...');
    
    const subject = encodeURIComponent(emailSubject);
    const body = encodeURIComponent(emailBody);
    
    const mailtoLink = `mailto:excel6737@gmail.com?subject=${subject}&body=${body}`;
    
    // Try to open in a new tab first
    const emailWindow = window.open(mailtoLink, '_blank');
    
    // If popup blocked, try direct navigation
    if (!emailWindow || emailWindow.closed) {
      window.location.href = mailtoLink;
    }
    
    console.log('Email client opened with pre-filled message');
    return true; // Consider successful since email client opened

  } catch (error) {
    console.error('Complete email service failure:', error);
    return false;
  }
};
