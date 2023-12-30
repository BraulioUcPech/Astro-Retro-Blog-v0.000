# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!
![Ejemplo de imagen](https://imgur.com/ew55Ie5)


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:



```
└── 📁Astro-Retro
    └── .prettierrc.mjs
    └── 📁.vscode
        └── extensions.json
        └── launch.json
    └── astro.config.mjs
    └── package.json
    └── pnpm-lock.yaml
    └── 📁public
        └── favicon.svg
        └── 📁fonts
            └── OFL.txt
            └── PressStart2P-Regular.ttf
        └── 📁img
            └── captura-1.png
            └── post-image.jpg
        └── 📁styles
            └── global.css
    └── README.md
    └── 📁src
        └── 📁components
            └── 📁Footer
                └── Footer.astro
                └── Footer.css
            └── 📁Hamburger
                └── Hamburger.astro
                └── Hamburger.css
            └── 📁Navigation
                └── Navigation.astro
                └── Navigation.css
            └── 📁PostCard
                └── PostCard.astro
                └── PostCard.css
            └── 📁PostImage
                └── PostImage.astro
                └── PostImage.css
            └── 📁Tag
                └── Tag.astro
                └── Tag.css
        └── env.d.ts
        └── 📁pages
            └── blog.astro
            └── index.astro
            └── 📁post
                └── hola-mundo.md
            └── 📁tags
                └── index.astro
                └── [tag].astro
        └── 📁scripts
            └── menu.ts
    └── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
