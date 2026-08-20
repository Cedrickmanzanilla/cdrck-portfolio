# 📧 EmailJS Setup Guide

Para ma-receive mo ang messages sa Gmail mo, kailangan mo i-setup ang EmailJS.

## Steps:

1. **Sign up sa EmailJS**
   - Pumunta sa https://www.emailjs.com/
   - I-create ang free account

2. **Create Email Service**
   - Pumunta sa "Email Services"
   - I-click "Add New Service"
   - Piliin "Gmail"
   - I-connect ang Gmail account mo
   - I-copy ang **Service ID**

3. **Create Email Template**
   - Pumunta sa "Email Templates"
   - I-click "Create New Template"
   - I-setup ang template:
     ```
     Subject: {{subject}}
     
     From: {{from_name}} ({{from_email}})
     
     Message:
     {{message}}
     ```
   - I-save at i-copy ang **Template ID**

4. **Get Public Key**
   - Pumunta sa "Account" → "General"
   - I-copy ang **Public Key**

5. **Update Contact.jsx**
   - I-open ang `src/components/Contact.jsx`
   - I-replace ang:
     - `YOUR_SERVICE_ID` → Service ID mo
     - `YOUR_TEMPLATE_ID` → Template ID mo
     - `YOUR_PUBLIC_KEY` → Public Key mo

## Example:
```javascript
const serviceId = 'service_abc123';
const templateId = 'template_xyz789';
const publicKey = 'abcdefghijklmnop';
```

---

**Note:** Hanggang hindi mo na-update ang credentials, ang form ay gagamit ng mailto (email client) as fallback.

