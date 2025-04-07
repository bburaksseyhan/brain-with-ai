# Interactive 3D Brain Explorer

An educational interactive 3D brain exploration application built with Three.js. This application allows users to explore different brain regions, learn about their functions, and simulate damage effects.

## Features

- Interactive 3D brain visualization
- Detailed information about brain regions
- Bilingual support (English and Turkish)
- Damage simulation effects
- Anatomically accurate brain regions
- Facial features for better visualization

## Local Development

1. Clone the repository
2. Open `index.html` in your browser or use a local server
3. For development, you can use Python's built-in server:
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser

## Deployment to Vercel

1. Install Vercel CLI (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```

4. Follow the prompts to complete the deployment

Alternatively, you can deploy directly from the Vercel dashboard:
1. Go to [Vercel](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project settings (they should be automatically detected)
5. Click "Deploy"

## Project Structure

- `index.html` - Main HTML file
- `style.css` - Styling for the application
- `main.js` - Main application logic
- `brain-regions.js` - Brain region data and configurations
- `vercel.json` - Vercel deployment configuration

## Technologies Used

- Three.js for 3D rendering
- HTML5 and CSS3
- JavaScript (ES6+)
- Vercel for deployment

## License

MIT License 