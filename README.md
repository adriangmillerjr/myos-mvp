# MyOS MVP

This repository contains the source code for **MyOS**, an AI‑powered personal operating system. It includes voice‑based chat, a dynamic dashboard, profile management with multiple tabs, and Supabase authentication. The UI is built with Next.js 13, React, Tailwind CSS, and shadcn/ui for a sleek, modern appearance inspired by the Landin template.

## Features

- **Voice Input** – Optional real‑time speech‑to‑text using the browser’s `SpeechRecognition` API.
- **Dark / Light Theme** – Uses CSS variables with Tailwind to easily toggle between light and dark modes.
- **Collapsible Sidebar & Topbar** – Navigate between pages using a responsive sidebar and top bar.
- **Profile Tabs** – Manage personal information, vision, values, advisors, and more with a tabbed interface.
- **Chat History** – Persist your conversations in Supabase for continuity across sessions.
- **Supabase Auth** – Secure user authentication integrated out of the box.

## Getting Started

1. Clone the repository and install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env.local` file based on `.env.example` and enter your Supabase credentials.

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000` in your browser to see the application running.

## Deployment

This project is ready to be deployed to Vercel. Ensure your environment variables are configured in the Vercel dashboard. Use `npm run build` to create a production build.

## License

All rights reserved.