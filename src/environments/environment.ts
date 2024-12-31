// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'car4ukraine-com',
    appId: '1:630048213166:web:351e4ddb650777212e053f',
    storageBucket: 'car4ukraine-com.appspot.com',
    apiKey: 'AIzaSyD4pOPRbc9Q1nyuiw7ov_HaX5IjVTXeJkI',
    authDomain: 'car4ukraine-com.firebaseapp.com',
    messagingSenderId: '630048213166',
    measurementId: 'G-RY8Y1LGHQH',
  },
  hostContacts: 'https://us-central1-car4ukraine-com.cloudfunctions.net/googleSheets/contacts',
  host: 'https://us-central1-car4ukraine-com.cloudfunctions.net/googleSheets',
  api: {
    token: {
      backend: '7a12e1e531cf4448cd734abc7da601405c1749cffbda4c9e58398b8ad0b115fab597d1a075b07cc4ee77f513832f60acb59111068ffa4dfe71ffaa7829adc6c5606c8b8b33211d9d2b13cb9bffad761fb08df74ecbda3679b0cbed5a367ad59b304beaf5a841fe5fe61700369f4cd905c15e307c7f1146d0dce1d3f16125c02c'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
