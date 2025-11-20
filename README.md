# IRSG Website

Innovative Regulatory Science Group website - a modern React application.

## Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Deployment Options

### Option A: Deploy to Netlify (Recommended)

**Step 1: Push to GitHub**

1. Create a new repository on GitHub (e.g., `irsg-website`)
2. In your terminal:
   ```bash
   cd irsg-website
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/irsg-website.git
   git push -u origin main
   ```

**Step 2: Connect to Netlify**

1. Go to [netlify.com](https://netlify.com) and sign up/log in
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account
4. Select your `irsg-website` repository
5. Build settings will auto-detect (build command: `npm run build`, publish: `dist`)
6. Click "Deploy site"

**Step 3: Connect Your Domain (JustHost)**

1. In Netlify, go to "Domain settings" → "Add custom domain"
2. Enter `regsci.com`
3. Netlify will give you DNS records (usually a CNAME or A record)
4. In JustHost cPanel:
   - Go to "Zone Editor" or "DNS Zone Editor"
   - Update your A record or add a CNAME pointing to Netlify
   - Example: CNAME `www` → `your-site.netlify.app`
5. Wait 24-48 hours for DNS propagation
6. Netlify automatically provisions SSL certificate

---

### Option B: Deploy to JustHost Directly

**Step 1: Build the Project**

```bash
npm install
npm run build
```

This creates a `dist` folder with static files.

**Step 2: Upload to JustHost**

1. Log into JustHost cPanel
2. Open "File Manager"
3. Navigate to `public_html`
4. Delete existing files (backup first if needed)
5. Upload ALL contents from the `dist` folder:
   - `index.html`
   - `assets/` folder
   - Any other files
6. Your site is now live at regsci.com

**Note:** You'll need to re-upload manually each time you make changes.

---

## Project Structure

```
irsg-website/
├── index.html          # HTML template
├── package.json        # Dependencies & scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS config
├── postcss.config.js   # PostCSS config
├── netlify.toml        # Netlify deployment config
├── .gitignore          # Git ignore rules
├── public/             # Static assets
└── src/
    ├── main.jsx        # React entry point
    ├── index.css       # Global styles + Tailwind
    └── App.jsx         # Main application component
```

---

## Customization

### Adding Images

Replace placeholder areas in `App.jsx`. Look for comments like `{/* Placeholder for... */}`.

Example:
```jsx
// Replace this:
<div className="aspect-video rounded-2xl bg-gradient-to-br...">
  <p>[Image Placeholder]</p>
</div>

// With this:
<img 
  src="/images/your-image.jpg" 
  alt="Description" 
  className="aspect-video rounded-2xl object-cover"
/>
```

Put images in the `public/images/` folder.

### Updating Content

All text content is in `src/App.jsx`. Search for the text you want to change and update it directly.

### Calendly Integration

Update Calendly links in the code. Search for `calendly.com` and replace with your actual Calendly URL:
```jsx
href="https://calendly.com/regulatoryscience"
```

### Contact Form

The contact form currently shows an alert. To make it functional:
1. Use a service like [Formspree](https://formspree.io), [Netlify Forms](https://docs.netlify.com/forms/setup/), or [EmailJS](https://emailjs.com)
2. Update the `handleSubmit` function in the ContactPage component

---

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Inter Font** - Typography

---

## Support

For questions about this website, contact: regulatory@regsci.com
