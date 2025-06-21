# Singh Security Services

A professional security services website with integrated email functionality using Resend API.

## Features

- **Service Request Form**: Contact form for requesting security services
- **Job Application Form**: Application form for joining the security team
- **Email Integration**: Automated email notifications using Resend API
- **Professional UI**: Modern, responsive design with Tailwind CSS

## Email Functionality

The website includes two forms that send emails:

1. **Service Request Form** (`/contact`): Sends emails when clients request security services
2. **Job Application Form** (`/join-us`): Sends emails when candidates apply for positions

### Email Templates

Both forms use professional HTML email templates that include:
- Company branding and styling
- Formatted client/applicant information
- Action items for follow-up
- Professional footer

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

The Resend API key is already configured in `server.js`. If you need to change it:

1. Update the API key in `server.js`:
   ```javascript
   const resend = new Resend('your-resend-api-key');
   ```

2. Update the recipient email in both form components:
   - `src/pages/Contact.tsx` (line with `to: ['deepdre223@gmail.com']`)
   - `src/pages/JoinUs.tsx` (line with `to: ['deepdre223@gmail.com']`)

### Running the Application

1. **Start the Express server** (for email functionality):
   ```bash
   npm run server
   ```
   The server will run on `http://localhost:5000`

2. **Start the React development server**:
   ```bash
   npm run dev
   ```
   The website will run on `http://localhost:5174`

### Testing the Email Functionality

1. Navigate to `/contact` and fill out the service request form
2. Navigate to `/join-us` and fill out the job application form
3. Submit the forms to test email delivery
4. Check your email inbox for the notifications

## Email Templates

### Service Request Email
- **Subject**: "New Service Request - Singh Security"
- **Content**: Client details, service type, date/time, location, and message
- **Action**: Contact client within 24 hours

### Job Application Email
- **Subject**: "New Team Application - Singh Security"
- **Content**: Applicant details, age, experience, and cover letter
- **Action**: Review application and contact if suitable

## File Structure

```
├── server.js                 # Express server with email functionality
├── src/
│   ├── pages/
│   │   ├── Contact.tsx       # Service request form
│   │   └── JoinUs.tsx        # Job application form
│   └── ...
└── package.json
```

## API Endpoints

- `POST /api/send-email`: Sends emails using Resend API
  - Body: `{ from, to, subject, emailType, formData }`
  - `emailType`: 'service-request' or 'job-application'

## Dependencies

- **Frontend**: React, TypeScript, Tailwind CSS, Lucide React
- **Backend**: Express, CORS, Body Parser, Resend
- **Email**: Resend API for reliable email delivery

## Security Notes

- API keys are stored server-side for security
- CORS is configured to allow only the frontend domain
- Form validation is implemented on both client and server side

## Troubleshooting

1. **Emails not sending**: Check if the Express server is running
2. **CORS errors**: Verify the frontend URL in server.js CORS configuration
3. **API errors**: Check the Resend API key and account status

## Support

For issues with the email functionality, check:
1. Server console logs for error messages
2. Resend dashboard for email delivery status
3. Network tab in browser dev tools for API responses 