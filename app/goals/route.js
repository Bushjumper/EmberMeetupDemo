import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('goal');
  },

  setupController(controller, model) {
    this._super(controller, null);
    controller.set('goals', model);
  }

});