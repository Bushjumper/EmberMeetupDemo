import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    gotoPersonGoals(person) {
      this.transitionToRoute('people.goals', person.get('id'));
    }
  }
});