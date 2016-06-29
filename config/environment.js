/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-meetup-demo',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    // if using ember-cli-content-security-policy
    ENV.contentSecurityPolicy = {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "self' https://*.firebaseapp.com",
      'connect-src': "self' wss://*.firebaseio.com https://*.googleapis.com"
    };

    // ENV.firebase = {
    //   apiKey: 'PSIOwoPzYTO1wUeOD6d5oQTsz3Jpa5h3fDHAi0Qh',
    //   authDomain: 'embermeetupdemo.firebaseapp.com',
    //   databaseURL: 'https://embermeetupdemo.firebaseio.com',
    //   storageBucket: 'embermeetupdemo.appspot.com',
    // }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};