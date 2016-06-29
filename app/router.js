import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('goals');

  this.route('people', function() {
    this.route('goals', {
      path: ":person_id/goals"
    });
  });
});

export default Router;