const { Resend } = require('resend');

// Email templates
const createServiceRequestEmail = (formData) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Security Service Request</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1a1a1a; }
        .value { color: #666; }
        .highlight { background: #ffd700; padding: 2px 6px; border-radius: 3px; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🛡️ New Security Service Request</h1>
            <p>Singh Security Services</p>
        </div>
        <div class="content">
            <h2>Client Information</h2>
            <div class="field">
                <span class="label">Full Name:</span>
                <span class="value">${formData.fullName}</span>
            </div>
            <div class="field">
                <span class="label">Phone Number:</span>
                <span class="value">${formData.phone}</span>
            </div>
            <div class="field">
                <span class="label">Email Address:</span>
                <span class="value">${formData.email}</span>
            </div>
            <div class="field">
                <span class="label">Service Type:</span>
                <span class="value highlight">${formData.serviceType}</span>
            </div>
            <div class="field">
                <span class="label">Date & Time:</span>
                <span class="value">${formData.dateTime}</span>
            </div>
            <div class="field">
                <span class="label">Location:</span>
                <span class="value">${formData.location}</span>
            </div>
            <div class="field">
                <span class="label">Additional Message:</span>
                <span class="value">${formData.message || 'No additional message provided'}</span>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #e8f4fd; border-left: 4px solid #2196F3; border-radius: 5px;">
                <h3 style="margin-top: 0; color: #1976D2;">Action Required</h3>
                <p style="margin-bottom: 0;">Please contact the client within <strong>24 hours</strong> to discuss their security requirements and provide a quote.</p>
            </div>
        </div>
        <div class="footer">
            <p>This email was sent from the Singh Security website contact form.</p>
            <p>© 2024 Singh Security Services. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

const createJobApplicationEmail = (formData) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Job Application</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1a1a1a; }
        .value { color: #666; }
        .highlight { background: #ffd700; padding: 2px 6px; border-radius: 3px; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>👥 New Job Application</h1>
            <p>Singh Security Services</p>
        </div>
        <div class="content">
            <h2>Applicant Information</h2>
            <div class="field">
                <span class="label">Full Name:</span>
                <span class="value">${formData.fullName}</span>
            </div>
            <div class="field">
                <span class="label">Phone Number:</span>
                <span class="value">${formData.phone}</span>
            </div>
            <div class="field">
                <span class="label">Email Address:</span>
                <span class="value">${formData.email}</span>
            </div>
            <div class="field">
                <span class="label">Age:</span>
                <span class="value">${formData.age} years old</span>
            </div>
            <div class="field">
                <span class="label">Experience:</span>
                <span class="value highlight">${formData.experience}</span>
            </div>
            <div class="field">
                <span class="label">Cover Letter/Message:</span>
                <span class="value">${formData.message || 'No cover letter provided'}</span>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 5px;">
                <h3 style="margin-top: 0; color: #856404;">Review Required</h3>
                <p style="margin-bottom: 0;">Please review this application and contact the candidate if they meet our requirements.</p>
            </div>
        </div>
        <div class="footer">
            <p>This email was sent from the Singh Security website job application form.</p>
            <p>© 2024 Singh Security Services. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;


exports.handler = async (event) => {
    // Standard headers for CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
    };

    // Handle preflight requests for CORS
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ message: 'OPTIONS request successful' }),
        };
    }

    // Ensure it's a POST request
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method Not Allowed' }),
        };
    }

    // Initialize Resend with API key from environment variables
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { from, to, subject, formData, emailType } = JSON.parse(event.body);

        let emailHtml;
        if (emailType === 'service-request' && formData) {
          emailHtml = createServiceRequestEmail(formData);
        } else if (emailType === 'job-application' && formData) {
          emailHtml = createJobApplicationEmail(formData);
        } else {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Invalid email type or missing form data' }),
            };
        }
    
        const { data, error } = await resend.emails.send({
          from: from || 'onboarding@resend.dev',
          to,
          subject,
          html: emailHtml,
        });
    
        if (error) {
            throw new Error(error.message);
        }
    
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ message: 'Email sent successfully', data }),
        };

    } catch (err) {
        console.error('Function Error:', err);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Failed to send email', details: err.message }),
        };
    }
}; 