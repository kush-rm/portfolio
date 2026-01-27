# Portfolio - React Portfolio Website

A modern, responsive portfolio website built with React, featuring glass morphism design, vibrant colors, and smooth animations using Framer Motion.

## Features

- ✨ **Glass Morphism Design** - Beautiful translucent cards with backdrop blur effects
- 🎨 **Vibrant Gradient Background** - Animated gradient with purple, pink, and blue tones
- 🚀 **React Components** - Modular, reusable component architecture
- 🎭 **Framer Motion Animations** - Smooth scroll animations and interactive elements
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🎯 **Smooth Scrolling** - Elegant navigation between sections
- 💫 **Interactive Elements** - Hover effects, animations, and transitions

## Sections

- **Hero** - Introduction with profile photo
- **About Me** - Personal introduction and background
- **Education** - Timeline of educational achievements
- **Professional Experience** - Work history and responsibilities
- **Projects** - Flashcard-style project showcase with GitHub links
- **Certifications** - Professional certifications
- **Contact** - LinkedIn, Phone, and GitHub links

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Update Your Information

1. **Profile Photo**: Replace `src/assets/IMG_6407.jpeg` with your photo
2. **Hero Section**: Edit `src/components/Hero.js`
3. **About Me**: Edit `src/components/About.js`
4. **Education**: Update the `educationData` array in `src/components/Education.js`
5. **Experience**: Update the `experienceData` array in `src/components/Experience.js`
6. **Projects**: Update the `projectsData` array in `src/components/Projects.js`
7. **Certifications**: Update the `certificationsData` array in `src/components/Certifications.js`
8. **Contact**: Update the `contactData` array in `src/components/Contact.js`

### Styling

- Main styles: `src/index.css`
- Component-specific styles: `src/components/*.css`
- Color variables: Defined in `:root` in `src/index.css`

## Technologies Used

- **React** - UI library
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **CSS3** - Styling with glass morphism effects

## License

This project is open source and available under the MIT License.
