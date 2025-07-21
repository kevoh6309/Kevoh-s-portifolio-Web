# Portfolio Deployment Guide 🚀

This guide will help you deploy your portfolio to various hosting platforms.

## 🌐 Hosting Options

### 1. Netlify (Recommended)
**Free tier with custom domain support**

1. **Drag & Drop Method:**
   - Go to [netlify.com](https://netlify.com)
   - Drag your portfolio folder to the deploy area
   - Your site will be live instantly!

2. **Git Integration:**
   ```bash
   # Push to GitHub first
   git add .
   git commit -m "Portfolio ready for deployment"
   git push origin main
   ```
   - Connect your GitHub repo to Netlify
   - Auto-deploys on every push!

### 2. Vercel
**Great for modern web projects**

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### 3. GitHub Pages
**Free hosting with GitHub**

1. Create a repository named `username.github.io`
2. Upload your files to the main branch
3. Enable GitHub Pages in settings
4. Your site will be at `https://username.github.io`

### 4. Firebase Hosting
**Google's hosting platform**

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Initialize and deploy:
   ```bash
   firebase login
   firebase init hosting
   firebase deploy
   ```

## 📋 Pre-Deployment Checklist

### ✅ Content Review
- [ ] Update all personal information
- [ ] Add real project links (replace placeholder URLs)
- [ ] Upload your actual resume PDF to `assets/`
- [ ] Optimize all images for web (compress large images)
- [ ] Test all external links

### ✅ Technical Checks
- [ ] Test on different devices and browsers
- [ ] Validate HTML at [validator.w3.org](https://validator.w3.org)
- [ ] Check CSS validity
- [ ] Test contact form submission
- [ ] Verify dark/light theme toggle works
- [ ] Test resume download functionality

### ✅ SEO & Performance
- [ ] Update meta descriptions with your information
- [ ] Add your actual domain to Open Graph tags
- [ ] Compress images (use tools like TinyPNG)
- [ ] Test loading speed with PageSpeed Insights
- [ ] Ensure mobile responsiveness

## 🔧 Customization for Your Deployment

### Update Personal Information
1. **HTML Updates:**
   ```html
   <!-- Update these in index.html -->
   <title>YourName's Portfolio - Web Developer</title>
   <meta name="description" content="Your description here">
   ```

2. **Project Links:**
   ```html
   <!-- Replace placeholder URLs with your actual projects -->
   <a href="https://github.com/yourusername/project">GitHub</a>
   <a href="https://yourproject.netlify.app">Live Demo</a>
   ```

3. **Social Media Links:**
   ```html
   <!-- Update with your actual social media profiles -->
   <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
   <a href="https://github.com/yourusername">GitHub</a>
   ```

### Resume Setup
1. Create your resume PDF
2. Save it as `assets/Kevoh_Resume.pdf` (or update the path in script.js)
3. Update the download link in JavaScript:
   ```javascript
   link.href = 'assets/Your_Resume.pdf';
   ```

### Domain Setup (Optional)
1. **Buy a domain** from providers like:
   - Namecheap
   - GoDaddy
   - Google Domains

2. **Connect to hosting:**
   - Add custom domain in hosting platform settings
   - Update DNS records as instructed
   - Wait for propagation (usually 24-48 hours)

## 🎯 Post-Deployment

### Analytics Setup
Add Google Analytics for visitor tracking:
```html
<!-- Add before closing </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Monitoring
- Set up monitoring with tools like:
  - Google PageSpeed Insights
  - GTmetrix
  - Lighthouse CI

### Regular Updates
- Update portfolio with new projects
- Keep dependencies current
- Monitor and fix any broken links
- Update resume regularly

## 🚨 Troubleshooting

### Common Issues:
1. **Images not loading:** Check file paths and case sensitivity
2. **Form not working:** Verify Formspree endpoint
3. **Slow loading:** Compress images and optimize CSS
4. **Mobile issues:** Test responsive design thoroughly

### Debug Steps:
1. Check browser console for errors
2. Validate HTML and CSS
3. Test on multiple devices
4. Use browser dev tools for debugging

---

Happy deploying! 🎉 Your portfolio will be live and ready to impress potential clients and employers.