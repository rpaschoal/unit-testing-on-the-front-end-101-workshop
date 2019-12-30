# Unit Testing On The Front End 101 Workshop
This repository contains the technical material for a 101 Workshop on how to unit test React front-end components.

## Workshop Agenda

* Pre-requisites
* Creating a new React App using CRA
* Creating a simple React component

## Pre-requisites

This workshop assume you have the following software installed on your machine:

* A code editor of preference. Visual Studio Code recommended.
* NodeJS and NPM
* If using Windows as an OS, a better terminal tool. EG: https://cmder.net/

## Creating a new React App using CRA

Create React App, also known as CRA, is by far the most popular React integrated toolchain nowadays (At the time of writing this workshop). Here are a few things CRA helps software development teams with:

* Scaling to many files and components.
* Using third-party libraries from npm.
* Detecting common mistakes early.
* Live-editing CSS and JS in development.
* Optimizing the output for production.

And all of the above without requiring any configuration to get started! 🚀

_The info above was taken from the official ReactJS docs. For further info: https://reactjs.org/docs/create-a-new-react-app.html_

So now that we've covered the basics on CRA, let's create a new React app by opening a terminal, navigating to a folder of preference and running the following:

```
npx create-react-app unit-testing-on-the-front-end-101-workshop --template typescript
cd my-app
npm start
```

## Creating a simple React component

We will be using a simple TODO component (How _innovative_ 😛) as an example so we can unit test it. The source code for this component can be found on this repository under the `src/components/Todo` path. Before you copy these, please run the following on your terminal under your React app's folder:

```
npm install node-sass --save
```

This will allow us to use Sass stylesheets on our components. Here are the files you should be copying/replacing to speed up time on this workshop:

* src/App.tsx
* src/index.css
* src/components/Todo/Todo.module.scss
* src/components/Todo/Todo.tsx

With all the above copied to your local development environment, run the following on your terminal (within the project's folder):

```
npm start
```

You should now be seeing a very simple but functional Todo list 🎉.
