# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`
- Create a `.env` or `.env.local` file and add the variable `REACT_APP_API_URL=https://opentdb.com` in the file

- Run `yarn` or `npm install` to install dependencies

- Run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

## Architecture

The app is structure following the MVP(model, view, presenter) architecture. This type of architecture cuts aross all frontend app development therereby making the codebase maintainable, testable, flexible and scalable. You can learn more [here](https://khalilstemmler.com/articles/client-side-architecture/architecture)

The app is broken down into pieces otherwise called components. Recall that components are self contained: can handle their own logic, make network and host of other things. Components are later composed where and when needed.

A notable technology used in the development of the app is redux saga. Redux sagas are used to perform asynchronous operations like fetching data from the backend. It is a middleware that is used within the layer of redux to dispatch impure actions

## App Routes

- Home screen[http://localhost:3000](http://localhost:3000)
- Quiz Screen [http://localhost:3000/quiz](http://localhost:3000/quiz)
- Results screen [http://localhost:3000/results](http://localhost:3000/results)

`Note: The app is more targeted at mobile screen`
