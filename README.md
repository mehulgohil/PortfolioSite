# Mehul Gohil - Portfolio Website

A modern, responsive portfolio website showcasing my journey as a Senior Software Engineer specializing in backend development, cloud technologies, and DevOps.

## 🚀 Live Demo

Visit the live portfolio: [Your deployment URL here]

## 📋 About

This portfolio represents my professional experience and technical expertise in:
- **Backend Development**: Golang, Node.js, REST APIs
- **Cloud & DevOps**: Kubernetes, Docker, AWS, Terraform
- **Database Systems**: PostgreSQL, MongoDB, Redis
- **Frontend Technologies**: React, Svelte, TypeScript

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Radix UI** components for accessibility
- **Wouter** for client-side routing
- **TanStack Query** for state management
- **Vite** for build tooling

### Backend
- **Node.js** with Express.js
- **PostgreSQL** database
- **Drizzle ORM** for type-safe database operations
- **Zod** for validation

## 🌟 Features

- **Responsive Design**: Optimized for all device sizes
- **Dark Theme**: Professional dark color scheme
- **Modern UI**: Clean, accessible design with smooth animations
- **Floating Skill Bubbles**: Dynamic skill tags that rotate around profile image
- **Real Projects**: Showcases actual work including:
  - Curl2 Terraform Module (1.1M+ downloads)
  - shorti.fy URL shortening service
  - go-bffauth authentication pattern implementation
- **Professional Experience**: Complete career timeline from IAM Engineer to Senior Software Engineer
- **Contact Information**: Easy ways to connect professionally

### 📄 CV Download (Currently Disabled)

To enable the CV download button in the hero section:

1. Open `client/src/components/hero-section.tsx`
2. Find the commented section marked `/* Download CV button - temporarily hidden`
3. Uncomment the entire button block (lines 274-291)
4. Update the `handleDownloadCV` function to link to your actual CV file:
   ```typescript
   const handleDownloadCV = () => {
     const link = document.createElement('a');
     link.href = '/path/to/your/cv.pdf'; // Update this path
     link.download = 'Mehul_Gohil_CV.pdf';
     link.click();
   };
   ```
5. Place your CV file in the `public` directory or use a direct URL

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mehulgohil/portfolio
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy example environment file
cp .env.example .env

# Update with your database credentials
```

4. Run database migrations:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
├── client/          # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   └── lib/         # Utilities and configuration
├── server/          # Backend Express application
│   ├── routes.ts    # API endpoints
│   └── storage.ts   # Database operations
├── shared/          # Shared types and schemas
└── db/              # Database migrations
```

## 🚀 Deployment

This portfolio is designed for static deployment and can be easily deployed to:
- **Vercel**
- **Netlify** 
- **GitHub Pages**
- **AWS S3 + CloudFront**

Build the project for production:
```bash
npm run build
```

## 💼 Professional Background

**Senior Software Engineer** at [Talentica Software](https://www.talentica.com/)
- Kubernetes migration and infrastructure optimization
- High-performance distributed systems
- Scalable APIs processing millions of requests

**Previous Experience** at [MSCI Inc](https://www.msci.com/)
- Enterprise Go application development
- Security-focused development practices
- API integrations and monitoring systems

## 🔗 Connect with Me

- **GitHub**: [github.com/mehulgohil](https://github.com/mehulgohil)
- **LinkedIn**: [LinkedIn Profile](https://linkedin.com/in/mehulgohil)
- **Email**: [Your email here]
- **Location**: Ahmedabad, Gujarat, India

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with modern web technologies and best practices
- Designed for performance and accessibility
- Responsive design principles throughout

---

*This portfolio represents real projects and professional experience. All achievements and statistics are accurate as of the latest update.*