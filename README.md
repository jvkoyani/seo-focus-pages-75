# Cambay Industries Website Revamp

This project is a Next.js migration of the Cambay Industries website, featuring a modern design, improved performance, and SEO optimization.

## Features

- **Next.js 14 App Router**: Utilizing the latest Next.js features for optimal performance and developer experience.
- **Tailwind CSS**: Utility-first CSS framework for rapid and responsive UI development.
- **Shadcn UI**: Reusable components built with Radix UI and Tailwind CSS.
- **TypeScript**: Static type checking for robust and maintainable code.
- **SEO Optimized**: Built-in metadata, sitemaps, and semantic HTML structure.
- **Responsive Design**: Fully responsive layout for all devices.
- **Interactive Forms**: Contact, consultation, and lead capture forms integrated with API routes.
- **Analytics**: Google Analytics integration ready.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.**

## Build for Production

To create an optimized production build:

```bash
npm run build
```

## Project Structure

- `src/app`: App Router pages and API routes.
- `src/components`: Reusable UI components.
- `src/lib`: Utility functions and data files.
- `src/hooks`: Custom React hooks.
- `public`: Static assets (images, fonts).

## Configuration

- **Google Analytics**: Update the GA ID in `src/app/layout.tsx`.
- **Sitemap**: The sitemap is automatically generated at `/sitemap.xml`.
