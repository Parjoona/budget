# Budget

React application, deployed on Heroku, created from course content.

## Getting Started

These instructions will get a this project running on a local machine.  
It will be explained how to run the development environment and the testing suite.  
It is possible with the current settings to host this project on Heroku, with minor changes on firebase.

### Prerequisites

It will be required to have node installed for this project to run, and it is highly recommended to have yarn or npm installed.  
* [NodeJS](https://nodejs.org/en/) - Required to run server on any hosted site.
* [Yarn](https://yarnpkg.com/lang/en/) - Package management used (recommended)
* [NPM](https://www.npmjs.com/) - Secondary package management  

### Installing

Download a local copy of this repository to your machine.
To be able to get started you are required to have a Google account that has access to Firebase.

For the application to be ran, it requires to have enviroment variables connected to Firebase, this can be achieved by going to [Firebase Console](https://console.firebase.google.com/) and create/use a project for the application.  

```
In the root folder of the application, create a file named:  
".env.development"  
Without quotation marks.
```
After the creation of the .env file, enter the created/existing project on firebase, and enter the database tab, further from here, enter the database tab on the left side, and choose the Realtime Database.  

Here, press the cogwheel (⚙) by project overview on the left hand-side, and choose Project settings. In the settings menu under the "Your apps" card, you will find a icon with the icon of </>, press this one.  

A modal will appear, with a config object inside, the value pair of these will be copied to the .env.development file, with the structure under, matching the object from firebase:  

```
  FIREBASE_API_KEY=<API_KEY>
  FIREBASE_AUTH_DOMAIN=<APP_DOMAIN>.firebaseapp.com
  FIREBASE_DATABASE_URL=https://<DATABASE_URL>.firebaseio.com
  FIREBASE_PROJECT_ID=<PROJECT_ID>
  FIREBASE_STORAGE_BUCKET=<APP_NAME>.appspot.com
  FIREBASE_MESSAGING_SENDER=<APP_NUMBER>
```

For the application to run with backend validation, enter the database tab on the left hand-side, press the rules tab, and enter these rules, and press apply: 

```
{
  "rules": {
    ".read": false,
    ".write": false,
      "users": {
        "$user_id": {
          ".read": "$user_id === auth.uid",
          ".write": "$user_id === auth.uid",
          "expenses": {
            "$expenses_id": {
              ".validate": "newData.hasChildren(['description', 'note', 'createdAt', 'amount'])",
                "description": {
                  ".validate": "newData.isString() && newData.val().length > 0"
                },
                "note": {
                  ".validate": "newData.isString()"
                },
                "createdAt": {
                  ".validate": "newData.isNumber()"
                },
                "amount": {
                  ".validate": "newData.isNumber()"
                },
                "$other": {
                  ".validate": false
                }
            }
          },
          "$other": {
            ".validate": false
          }
        }
      }
  }
}
```

There should now be a connection between your local machine and firebase, with working authentication.

## Running the tests

For running the test suite, in your preferable terminal, navigate to the project, and write:

```
npm run test --watchAll
```

There should be 74 passing tests from the frontend application, from 20 different test suites.

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Redux](https://redux.js.org/) - State management
* [Webpack](https://webpack.js.org/) - Script bundler
* [Jest](https://jestjs.io/) - Javascript testing framework
* [Enzyme](https://airbnb.io/enzyme/) - Javascript testing utility for React

## Acknowledgments

* This code is based on a UDEMY course from Andrew Mead.
