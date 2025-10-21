# hng-stage0-profile-card
Profile Card Component - HNG Internship Stage 0

# Profile Card Component - HNG Internship Stage 0

A multi-page responsive portfolio website featuring a profile card, contact form with validation, and an about me page. Built with semantic HTML5, CSS3, and vanilla JavaScript.


## Live Demo
[View Live Site](https://myprofilecardd.netlify.app/)

## Project Structure

```
hng-stage1-portfolio/
├── index.html           # Home page with profile card
├── contact.html         # Contact page with form validation
├── about.html           # About me page with reflections
├── style.css            # Global styles for all pages
├── script.js            # Time update script for home page
├── contact.js           # Form validation logic
├── bob.png              # Profile avatar image
└── README.md            # Project documentation

## Features

### Stage 0 Features (Home Page)
- ✅ Responsive profile card component
- ✅ Real-time clock (milliseconds + human-readable format)
- ✅ Social media links (Twitter, GitHub, LinkedIn)
- ✅ Hobbies and dislikes sections
- ✅ Semantic HTML with accessibility features

### Stage 1 Features (New)

#### Contact Us Page
- ✅ Full form validation (client-side)
- ✅ Required fields: Name, Email, Subject, Message
- ✅ Email format validation
- ✅ Message minimum length validation (10 characters)
- ✅ Real-time error messages
- ✅ Success message on valid submission
- ✅ Accessible form with proper labels and ARIA attributes
- ✅ Keyboard navigable

#### About Me Page
- ✅ Personal bio section
- ✅ Program goals
- ✅ Areas of low confidence
- ✅ Note to future self
- ✅ Additional thoughts section
- ✅ Semantic structure with proper headings

### General Features
- ✅ Sticky navigation bar
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ All required `data-testid` attributes
- ✅ Accessible and keyboard-friendly
- ✅ Modern, consistent design

## Running Locally

### Option 1: Simple Method
1. Clone the repository:
```bash
git clone https://github.com/lilbobb/hng-stage1-portfolio.git
```

2. Navigate to the project directory:
```bash

3. Open `index.html` in your browser:
   - Double-click the file, or
   - Right-click → Open with → Your browser

### Option 2: Using Live Server (VS Code)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Testing Checklist

### Contact Form Tests
- [ ] Empty form submission shows all error messages
- [ ] Invalid email shows error: "name@example.com"
- [ ] Message under 10 characters shows error
- [ ] Valid submission shows success message
- [ ] Success message hides after 5 seconds
- [ ] Form resets after successful submission
- [ ] Tab key navigates through all fields
- [ ] Error messages are associated with inputs (aria-describedby)

### About Page Tests
- [ ] All 5 required sections are present
- [ ] Each section has correct data-testid
- [ ] Semantic HTML structure (main, section, h2)
- [ ] Content is readable and properly formatted

### Navigation Tests
- [ ] All pages accessible via navigation
- [ ] Active page is highlighted
- [ ] Navigation is keyboard accessible
- [ ] Links have visible focus states

### Responsive Tests
- [ ] Mobile (< 768px): Stacked layout
- [ ] Tablet (768px - 1024px): Partial side-by-side
- [ ] Desktop (> 1024px): Full side-by-side layout
- [ ] Navigation adapts on mobile

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Accessibility Features

- Semantic HTML5 elements (nav, main, section, article)
- All images have descriptive alt text
- Form labels properly linked with inputs (`for` attribute)
- Error messages associated with inputs (`aria-describedby`)
- ARIA live regions for dynamic content
- Keyboard navigation support
- Visible focus indicators
- External links open in new tab with `rel="noopener noreferrer"`

## Design System

### Colors
- **Primary**: `#009405` (Green)
- **Background**: `#000000` to `#090c18` (Gradient)
- **Card Background**: `rgb(6, 8, 31)`
- **Text**: `#e5e5e5` (Light)
- **Secondary Text**: `#a0aec0`
- **Error**: `#ff6b6b`
- **Success**: `#00ff00`

### Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto)
- **Headings**: Bold (700)
- **Body**: Normal (400)

## Data TestID Reference

### Home Page (index.html)
- `test-profile-card` - Profile card container
- `test-user-name` - User name
- `test-user-bio` - Biography
- `test-user-time` - Current time (milliseconds)
- `test-user-avatar` - Avatar image
- `test-user-social-links` - Social links container
- `test-user-social-twitter` - Twitter link
- `test-user-social-github` - GitHub link
- `test-user-social-linkedin` - LinkedIn link
- `test-user-hobbies` - Hobbies list
- `test-user-dislikes` - Dislikes list

### Contact Page (contact.html)
- `test-contact-name` - Name input
- `test-contact-email` - Email input
- `test-contact-subject` - Subject input
- `test-contact-message` - Message textarea
- `test-contact-submit` - Submit button
- `test-contact-error-name` - Name error message
- `test-contact-error-email` - Email error message
- `test-contact-error-subject` - Subject error message
- `test-contact-error-message` - Message error message
- `test-contact-success` - Success message

### About Page (about.html)
- `test-about-page` - Main container
- `test-about-bio` - Bio section
- `test-about-goals` - Goals section
- `test-about-confidence` - Low confidence areas section
- `test-about-future-note` - Note to future self section
- `test-about-extra` - Extra thoughts section

## Technologies Used

- HTML5 (Semantic markup)
- CSS3 (Flexbox, Grid, Custom Properties)
- Vanilla JavaScript (ES6+)
- No frameworks or libraries

## Deployment
This project was deployed using Netlify

## Author
**Robert Adoga**
- Twitter: [@BobAdoga](https://twitter.com/BobAdoga)
- GitHub: [@lilbobb](https://github.com/lilbobb)
- LinkedIn: [Robert Adoga](https://linkedin.com/in/RobertAdoga)

## License
This project is part of the HNG Program

## Related Links
- [HNG Internship](https://hng.tech/internship)

## Acknowledgments

- HNG Internship for the opportunity
- MDN Web Docs for accessibility guidelines
- CSS-Tricks for responsive design patterns