# **Disc Golfer**

#### By Sean McDermott

## Description
* Hosted at https://disc-golfer-3f3f1.firebaseapp.com/


## Specifications

### Completed
* Users should be able to add/edit their names.
* Users should be able to receive a total score.
* Users should be able to sort by name.
* Users should be able to input their scores for each hole.

### in Progress
* Users should be able to store data for previously played games.
* Users should be able to view the leaderboard to see how they compare to other users.


## Setup/Installation Requirements

* To view project code, _clone repository from_ https://github.com/seanulus/review7
* Install Node.js
* Open terminal, navigate to project root directory and run npm install.
* Go to https://firebase.google.com/ and create a new database
* Create file named src/app/api-keys.ts
* Populate with the following with your own firebase credentials:
```
  export let masterFirebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
```

* Name variable shown
* Import sample-info.json into your database


## Development server

Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Known Bugs

* API for maps is currently not working

## Technologies Used

* HTML
* CSS
* Bootstrap 4
* Javascript
* Angular
* jQuery
* Typescript

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License

* GPL

Sean McDermott © 2018
