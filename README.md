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

## Nuxt Minimal Starter

This project uses Nuxt as the framework. Refer to the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

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
