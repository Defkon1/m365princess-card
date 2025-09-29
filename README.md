# M365 Princess CLI Card 👑

> A personalized CLI calling card for Luise Freese 

In case you ever need my information and all you have is a terminal and `npm`.

## 🚀 Usage

```bash
npx m365princess-card
```

That's it! No installation required.

## 📋 What You'll See

- **Custom ASCII portrait** 
- **M365 PRINCESS banner**
- **Professional info** (work, contacts, favorites)
- **Beautiful pink gradient styling** (#ff69b4 theme)
- **Links to all my profiles**

## 🛠️ Build Your Own CLI Card

Want to create your own personalized CLI calling card? Here's how:

### Prerequisites

- Node.js installed
- NPM account (for publishing)
- A photo for ASCII art conversion

### Step 1: Clone and Setup

```bash
git clone https://github.com/LuiseFreese/m365princess-card.git
cd m365princess-card
npm install
```

### Step 2: Create Your ASCII Art

1. **Convert your photo to ASCII**:
   - Visit [ASCII Art Generator](https://www.asciiart.eu/image-to-ascii)
   - Upload your photo
   - Adjust settings for best results
   - Copy the generated ASCII art

2. **Create your portrait file**:
   ```javascript
   // art/portrait.js
   "use strict";

   export default `your-ascii-art-here`;
   ```

### Step 3: Customize Your Profile

Edit `config/profile.js`:

```javascript
export const profile = {
    name: "YOUR NAME",
    handle: "yourhandle",
    bio: "Your amazing bio here...",
    infoSections: [
        { label: "Work", value: ["Your Job Title", "Company"], style: "gradient" },
        { label: "Website", value: "yourwebsite.com", style: "purple" },
        { label: "GitHub", value: "https://github.com/yourusername", style: "purple" },
        // Add more sections...
    ]
};
```

### Step 4: Update Colors

Customize `bin/colors.js` with your favorite colors:

```javascript
export const colors = {
    pink: "#your-favorite-color",
    purple: "#your-secondary-color",
    // ... other colors
};
```

### Step 5: Update Package Info

Edit `package.json`:

```json
{
    "name": "your-unique-package-name",
    "description": "Your CLI calling card description",
    "bin": {
        "your-command": "bin/card.js"
    },
    "repository": {
        "url": "https://github.com/yourusername/your-repo.git"
    }
}
```

### Step 6: Test Locally

```bash
node bin/card.js
```

### Step 7: Publish to NPM

```bash
npm login
npm publish
```

### Step 8: Test Published Version

```bash
npx your-package-name
```

## 🎨 Customization Options

### ASCII Art Sources
- [ASCII Art Generator](https://www.asciiart.eu/image-to-ascii) - Convert photos to ASCII
- Create text banners with figlet
- Draw your own ASCII art

### Color Themes
- Use hex colors in `bin/colors.js`
- Create gradients with `gradient-string`
- Style different sections independently

### Profile Sections
Add any information you want:
- Work experience
- Social media links
- Favorite things
- Contact information
- Fun facts

## 📁 Project Structure

```
├── bin/
│   ├── card.js          # Main CLI script
│   ├── colors.js        # Color definitions and styling
│   ├── text.js          # Text formatting utilities
│   └── render-info.js   # Info section rendering
├── config/
│   └── profile.js       # Your profile data
├── art/
│   ├── index.js         # Art asset loader
│   ├── banner.js        # Text banner
│   └── portrait.js      # ASCII portrait
├── package.json         # NPM package configuration
└── README.md           # This file
```

## 🔧 Dependencies

- [boxen](https://www.npmjs.com/package/boxen) - Terminal boxes
- [chalk](https://www.npmjs.com/package/chalk) - Terminal string styling
- [gradient-string](https://www.npmjs.com/package/gradient-string) - Gradient colors



## 🎯 Inspiration & Credits

This project was inspired by and built upon the excellent work of:

- **[Tierney Cyren](https://github.com/bnb/bitandbang)** - Created the original CLI business card concept
- **[David Neal (ReverentGeek)](https://github.com/reverentgeek/reverentgeek-card)** - Developed the modular architecture and beautiful implementation that this project is based on

Special thanks to **ReverentGeek** for creating such a well-structured, extensible, and thoroughly documented CLI card system. The project structure, color system, and rendering approach in this repository directly builds upon his excellent foundation. 

🙏 **Thank you David for making this so approachable and inspiring others to create their own CLI cards!**

Check out the original: `npx reverentgeek`

## 📄 License

MIT License - feel free to use this as a template for your own CLI card!

## 🤝 Contributing

Found a bug or want to suggest an improvement? Open an issue or submit a PR!

**Try my card:** `npx m365princess-card`