import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('person');
  },

  setupController(controller, model) {
    this._super(controller, null);
    controller.set('people', model);
  }

});