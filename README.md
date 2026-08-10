# Data Analyst Portfolio Website

My personal portfolio site, showcasing my data analytics and cybersecurity work. Built as a fast, responsive single-page site and deployed on Netlify.

**Live site:** [https://kbr-portfolio.netlify.app/](https://kbr-portfolio.netlify.app/)



## Overview

A single-page portfolio built to present my projects, skills, and career journey to recruiters and hiring managers. The design is dark-themed, mobile-responsive, and organized into clear sections: About, Projects, Journey, Skills, AI Insights, and Contact.

## Features

- **Responsive single-page design** with smooth scrolling and a mobile navigation menu.
- **Projects showcase** linking to my featured work (SQL trading platform, Python ETL pipeline, Power BI cybersecurity dashboard, and more).
- **AI Insights** an interactive feature powered by Google's Gemini model, letting visitors ask questions and generate summaries about my profile.
- **Career journey timeline** and a categorized skills breakdown.

## Security Note

The AI Insights feature calls the Gemini API through a **Netlify serverless function** (`netlify/functions/gemini.js`) rather than from the browser. The API key is stored server-side as a Netlify environment variable (`API_KEY`) and never exposed in client-side code, keeping the credential out of the public repository and the user's browser.

## Tech Stack

- **HTML5** and **Tailwind CSS** (via CDN) for structure and styling
- **JavaScript** for interactivity
- **Netlify Functions** (Node.js) for the serverless Gemini API proxy
- **Netlify** for hosting and continuous deployment

## Project Structure

```
.
├── index.html              # The full single-page site
├── netlify.toml            # Netlify build/functions configuration
├── netlify/
│   └── functions/
│       └── gemini.js       # Serverless proxy to the Gemini API
└── images/                 # Site assets
```

## Running Locally

The site is a static `index.html`, so you can open it directly in a browser for a quick look. To run the serverless function locally as well, use the Netlify CLI:

```bash
npm install -g netlify-cli
netlify dev
```

Set the `API_KEY` environment variable (your Gemini API key) so the AI Insights feature works locally. On the deployed site, this is configured in the Netlify dashboard under Site settings > Environment variables.

## Author

**Khumbudzo Brandan Ramaru** — Data Analyst | Cybersecurity Specialist
