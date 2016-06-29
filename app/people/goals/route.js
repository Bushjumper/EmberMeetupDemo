import Ember from 'ember';
import config from 'ember-meetup-demo/config/environment';


export default Ember.Route.extend({

  model(params) {
    if (config.firebase) {
      return this.store.findRecord('person', params.person_id);
    } else {
      return this.store.findAll('person').then(function(people) {
        return people.findBy('id', params.person_id);
      });
    }
  },

  setupController(controller, model) {
    this._super(controller, null);
    controller.set('person', model);
  }

});