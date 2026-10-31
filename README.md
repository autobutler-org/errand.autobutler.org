# errand.autobutler.org

The public site for Errand, AutoButler's self-hosted GitHub Actions runner stack. It is a static
[Nuxt](https://nuxt.com) site, styled to match [quark.autobutler.org](https://quark.autobutler.org),
and deployed to GitHub Pages from `main`.

Every string on the page lives in `data/copy.ts`. Design tokens live in `assets/main.css`.

| Target          | What it does                                     |
| --------------- | ------------------------------------------------ |
| `make setup`    | Install nvm, the Node version in `.nvmrc`, deps  |
| `make serve`    | Nuxt dev server                                  |
| `make generate` | Build the static site that ships                 |
| `make test`     | Run the Vitest suite once                        |
| `make check`    | ESLint, `nuxt typecheck`, Prettier, markdownlint |
| `make fix`      | Apply ESLint, Prettier, and markdownlint fixes   |
