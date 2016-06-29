import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    var hash = {
      people: this.store.findAll('person'),
      goals: this.store.findAll('goal')
    };
    return Ember.RSVP.hash(hash);

  },

  setupController(controller, model) {
    this._super(controller, null);
    controller.set('people', model.people);
  }

});