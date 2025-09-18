# Deploying Your Documentation

Once you have created your documentation, you need to build and deploy it. This page provides instructions for deploying your VitePress site to GitHub Pages.

## Building the Site

First, you need to build the static files for your site. Run the following command in your terminal:

```bash
npm run docs:build
```

This will create a `docs/.vitepress/dist` directory with the production-ready files.

## Deploying to GitHub Pages

To deploy your site to GitHub Pages, you can use a GitHub Actions workflow.

1.  **Create a workflow file:**

    Create a file named `deploy.yml` in the `.github/workflows` directory of your project.

    ```yaml
    # .github/workflows/deploy.yml

    name: Deploy Docs

    on:
      push:
        branches:
          - main # Or your default branch

    jobs:
      deploy:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v3
          - uses: actions/setup-node@v3
            with:
              node-version: 18
              cache: npm

          - run: npm ci
          - run: npm run docs:build

          # Deploy to GitHub Pages
          - name: Deploy
            uses: peaceiris/actions-gh-pages@v3
            with:
              github_token: ${{ secrets.GITHUB_TOKEN }}
              publish_dir: docs/.vitepress/dist
    ```

2.  **Enable GitHub Pages:**

    Go to your repository's **Settings** > **Pages** and select the `gh-pages` branch as the source.

Once you have pushed a change to your main branch, the workflow will automatically build and deploy your documentation.