# hng-stage0-profile-card (Stage 1)
**Profile Card Component - HNG Internship Stage 0 and 1**

A multi-page responsive portfolio website featuring a profile card, contact form with validation, and an about me page. Built with semantic HTML5, CSS3, and vanilla JavaScript.

## Live Demo
[View Live Site](https://your-live-site-link.com)

## Project Structure

├── index.html           \
├── contact.html         \
├── about.html           \
├── style.css            \
├── script.js           \
├── contact.js          \
├── nav.js               \
├── bob.png             \
└── README.md            # Project documentation

## Features

# Stage 0 Features (Home Page)
✅ Responsive profile card component\
✅ Real-time clock (milliseconds + human-readable format)\
✅ Social media links (Twitter, GitHub, LinkedIn)\
✅ Hobbies and dislikes sections\
✅ Semantic HTML with accessibility features

# Stage 1 Features (New)

Navigation

✅ Sticky navigation bar across all pages\
✅ Mobile-responsive hamburger menu\
✅ Smooth slide-in animation from left\
✅ Animated hamburger icon (bars ↔ X)\
✅ Auto-close on link click, outside click, or ESC key\
✅ Full keyboard accessibility with ARIA attributes\
✅ Active page highlighting

Contact Us Page

✅ Full form validation (client-side)\
✅ Required fields: Name, Email, Subject, Message\
✅ Email format validation (name@example.com)\
✅ Message minimum length validation (10 characters)\
✅ Real-time error messages with red border indicators\
✅ Success message on valid submission (auto-hides after 5s)\
✅ Accessible form with proper labels and ARIA attributes\
✅ Keyboard navigable with focus management\
✅ Form resets after successful submission

About Me Page

✅ Professional bio section\
✅ Career goals in the program\
✅ Areas for growth and improvement\
✅ Reflective note to future self\
✅ Additional thoughts section\
✅ Semantic structure with proper headings\
✅ Clean, readable typography

General Features

✅ Fully responsive (mobile, tablet, desktop)\
✅ All required data-testid attributes for automated testing\
✅ Accessible and keyboard-friendly\
✅ Modern, consistent dark theme design\
✅ Smooth transitions and hover effects\
✅ Font Awesome icons integration

Running Locally
Option 1: Simple Method
Clone the repository:

# bash
git clone https://github.com/lilbobb/hng-stage1-portfolio.git

Navigate to the project directory:

# bash
cd hng-stage1-portfolio
Open index.html in your browser:

Double-click the file, or
Right-click → Open with → Your browser

Option 2: Using Live Server (VS Code)
Install the "Live Server" extension in VS Code

Right-click on index.html

Select "Open with Live Server"

# Testing Checklist
Contact Form Tests

Empty form submission shows all error messages

Invalid email shows error: "Please enter a valid email address"

Message under 10 characters shows error

Valid submission shows success message

Success message hides after 5 seconds

Form resets after successful submission

Tab key navigates through all fields

Error messages are associated with inputs (aria-describedby)

Red border appears on error fields

Error messages disappear on input

# About Page Tests

All 5 required sections are present

Each section has correct data-testid

Semantic HTML structure (main, section, h2)

Content is readable and properly formatted

Lists are properly structured

# Navigation Tests

All pages accessible via navigation

Active page is highlighted

Navigation is keyboard accessible

Links have visible focus states

Hamburger menu appears on mobile

Menu slides in/out smoothly

Menu closes on link click

Menu closes on outside click

ESC key closes menu

Hamburger animates (bars ↔ X)

# Responsive Tests

Mobile (< 768px): Stacked layout, hamburger menu

Tablet (768px - 1024px): Optimized layout

Desktop (> 1024px): Full side-by-side layout

Navigation adapts on all screen sizes

No horizontal scrolling on mobile

# Responsive Breakpoints

Mobile: < 768px

Tablet: 768px - 1024px

Desktop: > 1024px

## Accessibility Features

Semantic HTML5 elements (nav, main, section, article)

All images have descriptive alt text

Form labels properly linked with inputs (for attribute)

Error messages associated with inputs (aria-describedby)

ARIA live regions for dynamic content (aria-live="polite")

role="alert" for error and success messages

Keyboard navigation support (Tab, Enter, ESC)

Visible focus indicators on all interactive elements

External links open in new tab with rel="noopener noreferrer"

Hamburger menu with aria-expanded attribute

## Design System
# Colors

Primary: #009405 (Green)

Background: #06081F (Dark Navy)

Card Background: rgba(6, 8, 31, 0.3) (Shadow/Container)

Text: #E5E5E5 (Light)

Error: #FF6B6B

Success: #FFFFFF

# Typography

Font Family: System fonts (-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto)

Headings: Bold (700)

Body: Normal (400)

Icons: Font Awesome 6.4.0

# Data TestID Reference
Home Page (index.html)

test-profile-card - Profile card container

test-user-name - User name

test-user-bio - Biography

test-user-time - Current time (milliseconds)

test-user-avatar - Avatar image

test-user-social-links - Social links container

test-user-social-twitter - Twitter link

test-user-social-github - GitHub link

test-user-social-linkedin - LinkedIn link

test-user-hobbies - Hobbies list

test-user-dislikes - Dislikes list

# Contact Page (contact.html)
test-contact-name - Name input

test-contact-email - Email input

test-contact-subject - Subject input

test-contact-message - Message textarea

test-contact-submit - Submit button

test-contact-error-name - Name error message

test-contact-error-email - Email error message

test-contact-error-subject - Subject error message

test-contact-error-message - Message error message

test-contact-success - Success message

# About Page (about.html)
test-about-page - Main container

test-about-bio - Bio section

test-about-goals - Goals section

test-about-confidence - Low confidence areas section

test-about-future-note - Note to future self section

test-about-extra - Extra thoughts section

## Technologies Used

HTML5 (Semantic markup)

CSS3 (Flexbox, Grid, Transitions, Media Queries)

Vanilla JavaScript (ES6+)

Font Awesome 6.4.0 (Icons)

No frameworks or heavy libraries

## Deployment

This project was deployed using Netlify

Author
Robert Adoga

GitHub: [Robert Adoga](https://github.com/lilbobb/))

LinkedIn: [Robert Adoga](https://www.linkedin.com/in/robertadoga/)

License
This project is part of the HNG Program

Related Links
[HNG Internship](https://www.hng.tech)

Acknowledgments
HNG Internship for the opportunity

MDN Web Docs for accessibility guidelines

CSS-Tricks for responsive design patterns
