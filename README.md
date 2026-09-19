# Joana Trashlieva | Personal Portfolio Website

A lightweight personal website and portfolio hosted on GitHub Pages. The site is for my background, projects, skills, and contact information in a clean, responsive format.

## Overview

This project is a static personal website designed to serve as an online portfolio and digital resume. It was built to be fast, simple to maintain, and easy to deploy without a backend or framework overhead. The website is optimized for GitHub Pages, making it easy to publish updates directly from the repository.

## Architecture

The project follows a simple static-site architecture:

```text
Repository
  ├── HTML pages and sections
  ├── CSS for layout and styling
  ├── JavaScript for interactivity
  ├── Images and media assets
  └── GitHub Pages deployment
          ↓
      Public website
```

Main responsibilities:
- Content structure lives in HTML
- Styling and responsiveness live in CSS
- Small interactive behavior is handled in JavaScript
- GitHub Pages hosts the final site with no server-side runtime

## Features

- Responsive single-page portfolio layout
- About / profile section
- Projects showcase with descriptions and links
- Skills and experience highlights
- Contact and social links
- Clean, modern visual design
- Lightweight static hosting with fast page loads
- Easy content updates directly in the repository

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/joanatrashlieva/joanatrashlieva.github.io.git
   ```

2. Navigate into the project folder:
   ```bash
   cd joanatrashlieva.github.io
   ```

3. Open the site locally:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit:
   ```text
   http://localhost:8000
   ```

## Usage

This project is intended for a personal portfolio website. To update the content:
- Edit the HTML files to change text, sections, and project cards
- Update CSS for styling and layout changes
- Replace media assets in the relevant folders
- Commit and push to the `main` branch for GitHub Pages deployment

## Example

This project is designed to showcase a personal brand with a polished portfolio experience. It can be used as a landing page for:
- portfolio work
- technical projects
- personal bio and resume
- contact information and social profiles

Example section structure:
- Home
- About
- Projects
- Skills
- Experience
- Contact

## What I learned

- Building a responsive static website from scratch
- Structuring content for a personal brand
- Applying consistent design patterns in HTML and CSS
- Hosting a website with GitHub Pages
- Keeping a project lightweight, maintainable, and easy to deploy
- Using version control and iterative design improvements

## Limitations

- No backend or database
- Content updates are manual
- Limited dynamic functionality without additional tooling
- Not ideal for large content-driven sites unless expanded

## Future improvements

- Add a blog or articles section
- Improve animations and transitions
- Add dark mode support
- Add project filtering/search
- Add automated deployment workflows
- Optimize accessibility and performance further
- Expand portfolio content with case studies and downloadable resume