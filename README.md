# Khumbudzo Brandan Ramaru — Portfolio

A personal portfolio for cloud engineering, with supporting work in AI, security, IT infrastructure and data analytics. Built with semantic HTML, responsive CSS and a small vanilla JavaScript navigation script. No application build or package installation is required.

## Content

- Selected AWS work: a multi-AZ Terraform network, S3 auto-remediation, and a Bedrock AgentCore warehouse agent.
- Experience at Rekisa, GenSage, Hemmersbach and XTrader; education and certifications.
- Earlier data and analytics projects in an expandable section.
- Three downloadable, one-page CVs: Cloud & DevOps, AI & Cloud, and IT Infrastructure.
- Email, phone, LinkedIn and GitHub contact links.

The copy and experience dates reflect the three supplied CVs. The AI-assisted website builder is explicitly described as in development. Hosting-cost figures refer to the low-traffic website migrations at Rekisa.

## Project structure

```text
index.html          Page, inline CSS, embedded fonts and navigation script
images/             Favicon and earlier project screenshots
fonts/              Original font files and their OFL licences
resumes/            Three original CV PDFs
netlify.toml        Netlify function configuration
netlify/functions/  Existing Gemini proxy, retained for compatibility
```

The portfolio no longer includes generated career answers or AI-written project summaries. The existing Gemini function is retained, but the page does not call it and does not require an API key. DM Sans and DM Serif Display are embedded in `index.html`; the original files and SIL Open Font License files are kept in `fonts/`. Styling and menu behaviour are inline so standalone HTML previews work without neighbouring CSS or JavaScript files. Arial and Georgia provide fallbacks. The page makes no requests to third-party font or script services. Styling does not depend on Tailwind or a JavaScript CDN.

## Run locally

From the repository root:

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

For Netlify-specific development, use `netlify dev`. Testing the retained Gemini function separately requires a server-side `API_KEY`; never put it in browser code or commit it to the repository.

## Validation

Check desktop and mobile layouts, including 320px screens. Test menu open/close, Escape and navigation links, the earlier-work disclosure, image loading and each CV download. Content and links remain available without JavaScript, and smooth scrolling respects reduced-motion preferences. Also test the HTML in isolation: block all neighbouring files and verify styling, embedded fonts and the mobile menu still work. Project images and CVs use repository-relative URLs on the deployed site.

The site can be published as static files on Netlify. It does not need a build command. Update the PDFs in `resumes/` when replacing CVs.
