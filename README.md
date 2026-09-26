# Richfield Connect - Web Technology 511

Front-end academic social platform prototype for Richfield Graduate Institute.

Richfield Connect is a secure, institution-focused social platform where students can create academic profiles, share posts, and build collaborative networks. Built last semester as a dynamic prototype without a backend - all data persists via localStorage.

Live Demo: [Add your GitHub Pages link here]

## Features
- User Registration: Captures Full Name, Student Number, Campus, Email, Password, Interests & Bio
- Smart Validation: Real-time inline validation (email format, 8+ char password, match check, numeric student number) - no alert boxes
- Live Preview (jQuery): Name, bio, and interests update instantly as you type
- Dynamic Profile: Profile page populates entirely from localStorage - no hardcoded data
- Interactive Feed: Create posts with auto date/time, like posts, delete with confirmation
- Data Persistence: Users and posts survive page refresh, tied to logged-in user
- UI Enhancements: Fade-in posts, slide toggle for profile sections, nav hover animations

## Pages
1. Home - Landing & branding
2. About - Platform purpose
3. Sign-Up - Registration + live preview
4. Profile - Dynamic user data
5. Feed - Posts & interactions

## Tech Stack
HTML5 | CSS3 | JavaScript | jQuery (CDN) | Browser localStorage
- No Bootstrap / React / Vue - Pure front-end as per brief
- Responsive (desktop, tablet, mobile)
- Richfield branding: Primary blue + neutrals
- External CSS/JS only

## How to Run
1. Clone repo: git clone https://github.com/your-username/richfield-connect.git
2. Open index.html in browser
3. Sign up -> Profile -> Feed

## Structure
/index.html, about.html, signup.html, profile.html, feed.html
/css/style.css
/js/main.js
/assets/

## Assignment Info
Module: Web Technology 511 - Richfield Graduate Institute
Year: 2025 (Semester 2)
Prototype demonstrating DOM manipulation, event handling & client-side persistence.

---
Developed by Timukudze
