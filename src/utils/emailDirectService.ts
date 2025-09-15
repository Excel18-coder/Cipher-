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
  // Use serverless API route for email delivery
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    if (response.ok && result.success) {
      return {
        success: true,
        message: result.message || '✅ Your message has been sent successfully! We will respond within 24 hours.'
      };
    } else {
      return {
        success: false,
        message: result.message || '❌ Unable to send email at this moment. Please contact us directly at excel6737@gmail.com or call +254 111 748 7554.'
      };
    }
  } catch (error) {
    console.error('❌ API email delivery error:', error);
    return {
      success: false,
      message: '❌ Unable to send email at this moment. Please contact us directly at excel6737@gmail.com or call +254 111 748 7554.'
    };
  }
};

export default sendEmailDirect;
