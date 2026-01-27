# How to Run Your Portfolio

## Step 1: Install Node.js

You need Node.js to run the React portfolio. Choose one of these methods:

### Option A: Download from Official Website (Recommended)
1. Go to https://nodejs.org/
2. Download the LTS (Long Term Support) version for macOS
3. Run the installer and follow the instructions
4. Restart your terminal after installation

### Option B: Install via Homebrew (if you fix permissions)
```bash
brew install node
```

### Option C: Use NVM (Node Version Manager)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
nvm use --lts
```

## Step 2: Verify Installation

After installing Node.js, verify it's working:
```bash
node --version
npm --version
```

You should see version numbers for both commands.

## Step 3: Install Dependencies

Navigate to your portfolio folder and install dependencies:
```bash
cd /Users/kush/Documents/Portfolio
npm install
```

This will install all required packages (React, Framer Motion, etc.)

## Step 4: Start the Development Server

Run this command to start the portfolio:
```bash
npm start
```

The portfolio will automatically open in your browser at:
**http://localhost:3000**

## Troubleshooting

### If you see "command not found: npm"
- Node.js is not installed or not in your PATH
- Try restarting your terminal after installing Node.js
- Or use the full path: `/usr/local/bin/npm` or `/opt/homebrew/bin/npm`

### If port 3000 is already in use
- The terminal will ask if you want to use a different port (like 3001)
- Type `Y` to confirm

### If you see module errors
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Stop the server
Press Ctrl+C in the terminal
```

## What to Expect

Once running, you should see:
- Your portfolio with glass morphism design
- Smooth animations as you scroll
- All sections: About, Education, Experience, Projects, Certifications, Contact
- Your profile photo in the hero section
