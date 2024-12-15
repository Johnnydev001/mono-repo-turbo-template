# Monorepo Turborepo learning template

This project was created with the sole purpose of learning how to create a Monorepo using Vercel's Turborepo.

## Structure

- **`apps/`**: This folder contains the individual applications. In this case one with React and another with Svelte.
- **`packages/`**: This folder contains shared libraries and packages. In this case they are utilities and components for each application.
- **`package.json`**: The root configuration for dependencies and scripts.
- **`turbo.json`**: Configuration file for Turborepo.

## How to run:

Run the following command to install the required dependencies (both external and internal).

```bash
npm i
```

Run the turbo tasks to automatically execute the corresponding scripts in each application:

```bash

turbo check
turbo dev
turbo build
turbo preview

```

## Contributing

This project is open-source and serves as a baseline to get started with a turborepo solution. Feel free to clone / download the project and adjust the content as needed to fit your requirements.
