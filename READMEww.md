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
- [Tech Stack](#tech-stack)
- [Usage](#usage)

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

#### [Three-Globe Animation](https://www.npmjs.com/package/three-globe)

- Utilized React Three Fiber and 3js to create an immersive animated map, enhancing the visual appeal of the application.

#### Responsive Design

- Implemented a fully responsive layout with customizable widget configurations, ensuring a seamless experience across various devices.

#### Real-time Data Updates

- Integrated Next.js 13 features, including the latest loading features, to revalidate API data every 5 seconds, emulating real-world application behavior.

#### Authentication and Security

- Implemented user authentication using JWT tokens with a simple login flow.
- Utilized Axios interceptors for efficient token management.
- Created middleware using Next.js 13 features for route protection, ensuring a secure and seamless user experience.

### Logout Functionality

- Included a logout option that sends a request to the Next API to delete the authentication cookie and redirects the user securely.

### Loading Skeletons

- Designed loading skeletons for each component using Next.js 13 loading features to prevent layout shifts during asynchronous operations, optimizing user experience.

### Global Error Handling

- Implemented a global toast system to gracefully handle and display errors returned from the API, ensuring users receive informative feedback.

## Stack

#### [Recharts Integration]

- Integrated Recharts library to create interactive and animated maps, adding a layer of data visualization to enhance user engagement.

- **Next.js 13:** Leveraged the latest features of Next.js, including improved loading mechanisms, middleware support, and more. [Learn more](https://nextjs.org/blog/next-13).
- **React 18:** Utilized React 18 to take advantage of concurrent rendering, automatic batching, and other performance enhancements. [Learn more](https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html).

- **Additional Dependencies:**
  - `@hookform/resolvers`, `@radix-ui/react-*`, `axios`, `class-variance-authority`, `clsx`, `lucide-react`, `next-themes`, `react-hook-form`, `react-toastify`, `recharts`, `three`, `three-globe`, `zod`, `zustand`, and more.

## Installation

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

## Usage

Visit [http://localhost:3000](http://localhost:3000) to explore the application. Customize widgets, interact with the three-globe animation, and experience the real-time data updates.

## Recharts Interaction

- Leveraged the Recharts library for interactive and animated maps, providing users with an enhanced and engaging data visualization experience.

## Deployment

- Deployed the project to Vercel using the Next.js API, ensuring both the web and server components are seamlessly hosted and accessible.

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Your feedback and contributions are highly appreciated.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to modify and personalize it according to your preferences. Best of luck with your application!
