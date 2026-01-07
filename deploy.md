# Hostinger Node.js Deployment Guide

This project is a Next.js application that requires a Node.js environment to run (it is not a static HTML export).

## Prerequisites

1.  **Hostinger Plan**: Ensure your hosting plan supports Node.js (e.g., Cloud Hosting, VPS, or Shared Hosting with Node.js selector).
2.  **Domain**: A domain pointing to your Hostinger account.

## Deployment Steps (Shared/Cloud Hosting with Node.js Selector)

1.  **Build the Project Locally**:
    Run the build command on your local machine to generate the production build.
    ```bash
    npm run build
    ```
    This creates a `.next` folder.

2.  **Prepare Files for Upload**:
    You need to uplonad the following files/folders to your `public_html` (or a subdirectory) on Hostinger:
    - `.next` (folder)
    - `public` (folder)
    - `package.json`
    - `next.config.ts` (or `next.config.js`)
    - `server.js` (The custom server file created for this deployment)
    - `node_modules` (Optional: It's better to run `npm install` on the server, but if you can't, upload this too. Note: Uploading `node_modules` can be slow.)

    *Tip: Zip these files into `deploy.zip` for faster upload.*

3.  **Upload to Hostinger**:
    - Go to **File Manager** in your Hostinger control panel.
    - Navigate to `public_html`.
    - Upload and extract your `deploy.zip`.

4.  **Setup Node.js Application**:
    - Go to **Node.js** (or "Setup Node.js App") in your Hostinger control panel.
    - **Create New App**:
        - **Node.js Version**: Select a version compatible with Next.js 15+ (Recommended: v18 or v20).
        - **Application Mode**: Production.
        - **Application Root**: The path to your uploaded files (e.g., `public_html`).
        - **Application Startup File**: `server.js`.
    - Click **Create**.

5.  **Install Dependencies**:
    - If you didn't upload `node_modules`, click the **Run NPM Install** button in the Node.js App settings.

6.  **Start the App**:
    - Click **Restart** or **Start** to launch your application.

## Troubleshooting

-   **500 Errors**: Check the `stderr.log` file in your application root for error messages.
-   **Port Issues**: Hostinger automatically assigns a port and sets it in `process.env.PORT`. The `server.js` file is configured to use this.
-   **Build Errors**: If you encounter type errors related to `.next/dev/types`, ensure that `.next/dev/types` is in the `exclude` list in your `tsconfig.json`.
