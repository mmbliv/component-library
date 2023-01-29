## About

- This is a React component library built using [Storybook](https://storybook.js.org/).
- The user interface for this project has already been deployed on [Github pages](https://mmbliv.github.io/component-library/?path=/story/example-introduction--page), and the package has been published on [NPM](https://www.npmjs.com/package/component-library-hm)

## Commands

- To run the Storybook user interface locally:
  ```js
  npm run storybook
  ```
- To run the React application:
  ```js
  npm run start
  ```
- To build the project for deployment:
  ```js
  npm run build-storybook
  ```
- To deploy to Github pages using the[storybook-deployer](https://github.com/storybook-eol/storybook-deployer)tool, with the `storybook-static` directory as the output directory:

  ```js
  npm run deploy-storybook -- --existing-output-dir=storybook-static
  ```
