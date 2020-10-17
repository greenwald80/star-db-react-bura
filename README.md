This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

https://bootswatch.com/darkly/
<link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css" />

https://starwars-visualguide.com/assets/img/planets

https://swapi.dev/

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     return res.json();
//   })
//   .then((body) => {
//     console.log(body);
//   });

//the same, but using async/await
const getResource = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` + `,recieved ${res.status}`);
  }
  const body = res.json();
  return body;
};
getResource("https://swapi.dev/api/people/123321").then((body) => {
  console.log(body);
});

//const swapiService = new SwapService();
//swapiService.getAllPeople().then((people) => {
// people.forEach((p) => {
// console.log(p.name);
// });
//});
// swapiService.getPerson(3).then((p) => {
//   console.log(p.name);
// });

…or create a new repository on the command line
echo "# star-db-react-bura" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/greenwald80/star-db-react-bura.git
git push -u origin main
                
…or push an existing repository from the command line
git remote add origin https://github.com/greenwald80/star-db-react-bura.git
git branch -M main
git push -u origin main

https://regex101.com/
https://swapi.dev/api/planets/12/
\/([0-9]*)\/$ => 12

