# Portfolio - Udaygiri D. Aparnathi 🚀

Welcome to the repository of my personal portfolio website! This project showcases my skills, experience, projects, and accomplishments as a Software Engineer specializing in Python Backend Development and Full Stack Web Applications.

---

## 🌐 Live Demo
*(Optional: Add your hosted link here)*  
👉 **[Live Portfolio Link](https://udaygiri-d-aparnathi.vercel.app/)**

---

## 🛠️ Tech Stack & Libraries

This portfolio is built using modern web development practices and technologies:

* **Core Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/) (for fast builds and optimized bundling)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using the new `@tailwindcss/vite` integration)
* **Animations**: [Framer Motion](https://www.framer.com/motion/) (for fluid, spring-based component transitions and entry animations)
* **Smooth Scrolling**: [Lenis React](https://lenis.darkroom.engineering/) (for ultra-smooth, hardware-accelerated scrolling)
* **Icons**: [Lucide React](https://lucide.dev/) (for clean, responsive vector icons)

---

## ✨ Features

1. **Interactive Preloader (`Loader.jsx`)**: A visually appealing animated entry screen that prepares the assets and controls page overflow during load.
2. **Interactive Follower Cursor (`Cursor.jsx`)**: A custom-built reactive mouse pointer that changes scale and opacity when hovering over clickable/interactive elements.
3. **Hero Landing Page (`Hero.jsx`)**: A dynamic split-screen layout displaying title animations (typewriter effect), introductory statement, and high-quality profile rendering.
4. **Detailed Timeline (`Education.jsx` & `Experience.jsx`)**: Responsive timelines highlighting academic accomplishments and professional experiences.
5. **Categorized Tech Skills (`Skills.jsx`)**: Grid showcasing proficiencies in Python backend frameworks (Django, FastAPI, Flask), databases (PostgreSQL, MySQL, SQLite), and frontend tools.
6. **Project Showcase (`Projects.jsx`)**: Features key projects (Dwarkesh Event, AIDEX, Listify) with interactive hover states, technology tags, and direct GitHub links.
7. **Certifications Tracker (`Certifications.jsx`)**: Clean layout highlighting accredited licenses, certifications, and technical accomplishments.
8. **Contact & Social Hub (`Contact.jsx`)**: Accessible layout featuring social profiles and a direct contact form.

---

## 📁 Repository Structure

```text
ME/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and local media files
│   ├── Components/         # React sections
│   │   ├── About.jsx       # About me info
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx     # Contact form & socials
│   │   ├── Cursor.jsx      # Custom animated cursor
│   │   ├── Education.jsx   # Academic history
│   │   ├── Experience.jsx  # Work experience
│   │   ├── Hero.jsx        # Typing hero landing section
│   │   ├── Loader.jsx      # Pre-loader transition
│   │   ├── Projects.jsx    # Projects gallery
│   │   └── Skills.jsx      # Skills matrix
│   ├── index.css           # Global CSS and Tailwind directives
│   ├── main.jsx            # React app mount entry
│   └── App.jsx             # Root layout component
├── index.html              # HTML shell
├── vite.config.js          # Vite plugins and setups
├── package.json            # Node project configuration
└── README.md               # Documentation
```

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/udaygiri/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependency packages:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   *The site will be live at `http://localhost:5173`.*

4. **Build for Production:**
   ```bash
   npm run build
   ```
   *This compiles assets and outputs a highly optimized production bundle into the `dist/` directory.*

---

## 📄 License
This project is open-source and available under the MIT License.
