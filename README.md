# Tracker - Tailwind CSS HTML Responsive Admin Panel Template

## Overview
Introducing Tracker, a free one-page dashboard Tailwind CSS HTML template designed specifically for project management. The clean and professional design of Tracker is fully customizable with Tailwind CSS, allowing you to easily adapt the template to your project's needs. Tracker comes with custom components such as a Kanban board for visualizing workflow, a data management table, and call-to-action banners to help you draw attention to important information. These components are designed to help you manage your projects more efficiently and effectively, all while maintaining a sleek and streamlined user experience.

<strong><a href="https://tracker-html-tailwind.vercel.app/">View Demo</a> | <a href="https://github.com/PixelRocket-Shop/tracker-html-tailwind/archive/main.zip">Download ZIP</a></strong>

![Tailwind CSS Responsive HTML One-Page Admin Panel Template](https://pixelrocket-public-assets.s3.eu-west-2.amazonaws.com/corporate-public/free-tailwind-admin-panel.png "Tracker | Tailwind CSS Responsive HTML One-Page Admin Panel Template")


## Table of contents

- [Requirements](#requirements)
- [Quick Start](#quick-start)
- [Contact Me](#contact-me)


## Requirements
If you do not intend to work with the template source code (and that means you will not be compiling it), you do not need to install anything. You can simply navigate to the public folder and take the HTML snippets directly from there.

Most developers will be editing the source code and will also recompile the template files. If that's the case, then ensure that you have Node.js installed. [You can download it from here](https://nodejs.org/en/download/)

If you are going to customise the template or add new pages, you need to familiar with Pug, the template engine used. [You can read more about Pug here](https://pugjs.org/)

## Quick Start
Project's source files are placed in ./src/ directory. 
* ./src/assets - default static files (eg. image placeholders). You should replace them with your own files.
* ./src/tailwind/ - Tailwind config file used to build the theme.

All your pages (templates) are stored in separated .pug files
* ./src/pug/*.pug  

NOTE: npm commands overwrite the ./public directory.

```
# Install dependencies
npm install 

# Run dev server with live preview (Browsersync)
npm run watch

# Or make a production build 
npm run build
```

## Contact Me
You can find my website [here](https://www.pixelrocket.store) or you can email me at support@pixelrocket.store