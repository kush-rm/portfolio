# Portfolio Website

A modern, responsive portfolio website built with pure HTML, CSS, and JavaScript featuring glass morphism design and vibrant colors.

## Features

✨ **Glass Morphism Design** - Beautiful translucent cards with backdrop blur effects  
🎨 **Vibrant Gradient Background** - Animated gradient with purple, pink, and blue tones  
🚀 **Pure HTML/CSS/JS** - No frameworks, just vanilla JavaScript  
🎭 **Smooth Animations** - Scroll-triggered animations and interactive elements  
📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop  
🎯 **Smooth Scrolling** - Elegant navigation between sections  
💫 **Interactive Elements** - Hover effects, animations, and transitions  

## Sections

- **Hero** - Introduction with profile photo
- **About Me** - Personal introduction and background
- **Education** - Timeline of educational achievements
- **Professional Experience** - Work history and responsibilities
- **Projects** - Flashcard-style project showcase with GitHub links
- **Certifications** - Professional certifications
- **Contact** - LinkedIn, Phone, and GitHub links

## How to Run

Simply open `index.html` in your web browser! No installation or build process needed.

### Option 1: Direct File Opening
1. Navigate to the Portfolio folder
2. Double-click `index.html`
3. It will open in your default browser

### Option 2: Using a Local Server (Recommended)
For the best experience, use a local server:

**Python 3:**
```bash
cd /Users/kush/Documents/Portfolio
python3 -m http.server 8000
```
Then open http://localhost:8000 in your browser

**Python 2:**
```bash
cd /Users/kush/Documents/Portfolio
python -m SimpleHTTPServer 8000
```

**Node.js (if installed):**
```bash
cd /Users/kush/Documents/Portfolio
npx http-server -p 8000
```

**VS Code Live Server:**
If you use VS Code, install the "Live Server" extension and click "Go Live"

## Customization

### Update Your Information

1. **Profile Photo**: Replace `IMG_6407.jpeg` with your photo (or update the filename in `index.html`)

2. **About Me**: Edit the content in `index.html` (lines 58-71)

3. **Education**: Update the education entries in `index.html` (lines 82-100)

4. **Experience**: Update the experience entries in `index.html` (lines 109-135)

5. **Projects**: Update the project cards in `index.html` (lines 145-214)
   - Add your project images
   - Update titles, descriptions, and GitHub links
   - Modify technology tags

6. **Certifications**: Update the certification cards in `index.html` (lines 223-244)

7. **Contact**: Update contact information in `index.html` (lines 255-290)
   - LinkedIn URL
   - Phone number
   - GitHub username

### Styling

- Main styles: `styles.css`
- Color variables: Defined in `:root` in `styles.css`
- Animations: Controlled in `script.js` and `styles.css`

## File Structure

```
Portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript for interactivity
├── IMG_6407.jpeg       # Profile photo
└── README.md          # This file
```

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with glass morphism effects and animations
- **Vanilla JavaScript** - Interactivity and animations

## Browser Support

Works on all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is open source and available under the MIT License.
