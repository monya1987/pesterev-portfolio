# TODO — What's left to do

## 1. Delete the wrong GitHub repo
The portfolio was accidentally created in the wrong account first.
Go to https://github.com/mikhailpesterev-star/pesterev-portfolio/settings
→ scroll to the bottom → "Delete this repository"

## 2. Add your CV PDF
Place your CV file at:
```
public/cv.pdf
```
Then commit and push:
```bash
git add public/cv.pdf
git commit -m "feat: add CV pdf"
git push
```

## 3. Set up EmailJS (for the "Send CV to email" form)
1. Register at https://emailjs.com (free tier is enough)
2. Add an Email Service (Gmail or Outlook) → copy the **Service ID**
3. Create an Email Template with these variables:
   - `{{to_email}}` — HR's email address
   - `{{cv_url}}` — link to the CV PDF
   - Example subject: `CV from Mihail Pesterev`
   - Example body: `Hi, here is Mihail's CV: {{cv_url}}`
   → copy the **Template ID**
4. Go to Account → copy your **Public Key**
5. Create `.env.local` in the project root:
```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

## 4. Deploy on Vercel
1. Go to https://vercel.com/new
2. Sign in with the `monya1987` GitHub account
3. Import repository `pesterev-portfolio`
4. Click **Deploy** (Vercel auto-detects Vite config, no changes needed)

## 5. Add environment variables to Vercel
After deploy, go to:
Vercel Dashboard → pesterev-portfolio → Settings → Environment Variables
Add all three:
```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```
Then: Deployments → click "..." → **Redeploy**

## 6. Update LinkedIn profile
Use the texts prepared in this session. Sections to update:
- **Headline** (choose one of the 3 variants)
- **About** (Общие сведения)
- **OLSYS** experience description
- **Ecentria Solutions** experience description
- **GBSFO** experience description
- **Radaris** experience description
- **Comodo** experience description
- **Recommendation for Maryna Popovichenko** — post via LinkedIn

## 7. (Optional) Custom domain
If you buy a domain, add it in:
Vercel Dashboard → pesterev-portfolio → Settings → Domains
