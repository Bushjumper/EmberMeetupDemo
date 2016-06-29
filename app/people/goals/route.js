import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findAll('person').then(function(people) {
      return people.findBy('id', params.person_id);
    });
  },

  setupController(controller, model) {
    this._super(controller, null);
    controller.set('person', model);
  }

});