# MietexVueStarter

This project is a starter template for building Vue.js applications with Nuxt. It includes a setup for using Volta to manage Node.js and pnpm for package management.

## Prerequisites

Ensure you have [Volta](https://volta.sh/) installed to manage your Node.js versions:

```bash
winget install Volta.Volta
volta install node
volta install pnpm
```

Initial tool versions:
- `pnpm@10.2.0` (default)
- `runtime: node@22.13.1`

## Getting Started

To start the development server, run:

```bash
pnpm run dev
```

## Libraries and Tools


### Nuxt

This project uses [Nuxt](https://nuxt.com/) as the framework. Nuxt is a powerful framework built on top of Vue.js that simplifies the development of universal or single-page Vue applications. It provides features like server-side rendering, static site generation, and a powerful module ecosystem.

### PrimeVue

[PrimeVue](https://primevue.org/) is a rich set of UI components for Vue.js. It offers a wide range of components that are easy to use and integrate, making it an excellent choice for building modern, responsive user interfaces.

### UnoCSS

[UnoCSS](https://unocss.dev/) is an atomic CSS engine that provides a highly efficient and flexible way to style your applications. It allows for on-demand generation of CSS classes, reducing the overall CSS bundle size and improving performance.

### Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML. It promotes a highly productive workflow and ensures consistency across the application.

### i18next

[ Nuxt i18n](https://i18n.nuxtjs.org/) is a powerful internationalization framework that provides a complete solution for translating your web applications. It supports various features like pluralization, formatting, and interpolation, making it easy to manage multilingual content across your application.

### Pinia

[Pinia](https://pinia.vuejs.org/) is the official state management solution for Vue.js applications. It provides a simple and effective way to manage shared state across components with TypeScript support, devtools integration, and a modular design that scales well with your application.


### ESLint

[ESLint](https://eslint.org/) is a static code analysis tool that helps identify and fix problems in JavaScript code. It enforces coding style consistency and catches potential errors before they occur in runtime, making it an essential tool for maintaining code quality.

## Setup

Install the dependencies using your preferred package manager:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview the production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

For more information on deployment, check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## Additional Resources

- [Nuxt Documentation](https://nuxt.com/)
- [PrimeVue Documentation](https://primevue.org/)
- [UnoCSS Documentation](https://unocss.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)