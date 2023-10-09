# GuilhermeBaskHealth Dashboard

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

BaskHealth Dashboard is a comprehensive web application developed in response to the challenge set by Bask Health, renowned as the "Shopify of e-prescribing." The primary objective was to craft a fully responsive website with customizable widget configurations, providing users with a dynamic and user-friendly experience.

This project was bundled with [create-next-app](https://nextjs.org/docs/pages/api-reference/create-next-app).

and deployed by [Vercel](https://vercel.com/)

## Table of Contents

- [Demo](#demo)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment variables](#environment-variables)
- [Tech Stack](#stack)
- [Api documentation](#api-documentation)
- [Usage](#usage)
- [Future Improvements](#future-improvements)

## Demo

You can see a live demo of [BaskHealths dashboard here!](https://guilherme-bask-health.vercel.app/).

## Project Structure

- `src/app` code base for layout, pages;
- `src/lib` utils file;
- `src/components` components isolated with their styling
- `src/components/DashboardComponents` components made for the dashboard widget feature
- `src/components/ui` components imported from shadcn
- `src/scenes/Globe` react three fiber scene exporting world map component;
- `src/services` api call exported functions
- `src/stores` zustand stores for widget use
- `src/styles` global styles

## Features

- **[Three-Globe Animation](https://www.npmjs.com/package/three-globe)**:
 Utilized React Three Fiber and 3js to create an immersive animated map, enhancing the visual appeal of the application. Data comes [from here](https://geojson-maps.ash.ms)

- **Responsive Design**: Implemented a fully responsive layout with customizable widget configurations.

- **Real-time Data Updates**: Integrated Next.js 13 features, including the latest loading features, to revalidate API data every 5 seconds, emulating real-world application behavior.

- **Authentication and Security**: Implemented user authentication using JWT tokens with a simple login flow; Axios interceptors for efficient token management and middleware for route protection.

- **Loading Skeletons**: Designed loading skeletons for each component preventing layout shifts during asynchronous operations.

- **Global Error Handling**: Implemented a global toast system to display errors.

## Stack

- UI: [React 18](https://reactjs.org/)
- Routing, api and optimizations: [NextJs 13](https://nextjs.org)
- State Control: [Zustand](https://github.com/pmndrs/zustand) for global state
- Styling: [Tailwindcss](https://tailwindcss.com/) and [Shadcn-ui](https://ui.shadcn.com/) powered by [Radixui](https://www.radix-ui.com/)
- Charts: [recharts](https://recharts.org/en-US/)
- HTTP Client: [Axios](https://github.com/axios/axios) 
- Icons: [lucide-react](https://lucide.dev/guide/packages/lucide-react)
- Form Control: [React Hook Form](https://react-hook-form.com/)
- Testing: [Jest](https://jestjs.io/pt-BR/)
- 3D Scene: [react three fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) and [ThreeJs](https://threejs.org)
- WebGL Globe: [three-globe](https://www.npmjs.com/package/three-globe)
- [Typescript](https://www.typescriptlang.org/)

## Getting Started

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/guiduck/GuilhermeBaskHealth.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

### Environment Variables

1. **Create a `.env` File:**

   - Create a file named `.env` in your project's root folder.

2. **Define Environment Variables:**

   - In the `.env` file, define your environment variables in the following format:
   
     ```
     VARIABLE_NAME=variable_value
     ```

   Replace `VARIABLE_NAME` with the name of your variable and `variable_value` with the actual value you want to set.

3. **Example:**

   ```plaintext
   NEXT_PUBLIC_API_URL=https://dashboard-api-dusky.vercel.app
   USER_TOKEN=your_user_token_here
   SITE_URL_LOCAL=http://localhost:3000

### API Documentation

#### Authentication

- Some routes require user authentication through logging in an username and password.

#### Endpoints
   - **Login**
      - POST /login
         - Payload
         ```json
            {
               email: String,
               password: String
            }
         ```
         - Success Response
         ```json
            {
               message: string,
               token: string,
            }
         ```
   - **logout**
      - GET /logout
         - Response
         ```json
            { 
               redirect: string 
            }
         ```

## Usage

Visit [http://localhost:3000](http://localhost:3000) to explore the application. Customize widgets, interact with the three-globe animation, and experience the real-time data updates.

## Future improvements

While developing the dashboard, I am primarly focused on enhancing user experience and functionality:

- **Streamlined Token Authorization:** add the authorization header through the middleware that checks for authentication instead of axios interceptor.

- **Enhanced World Map Performance:** Optimizing the interactive world map to reduce initial loading time.

- **Drag-and-Drop Widget Editing:** Introducing a user-friendly dashboard customization feature for intuitive widget arrangement.

- **Fixed Map Orientation with User Interaction:** Creating an engaging map experience, inspired by Vercel's site, where users can drag and rotate while the map only spins in a fixed axis.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
