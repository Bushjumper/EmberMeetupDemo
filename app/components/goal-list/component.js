import Ember from 'ember';

export default Ember.Component.extend({
  goals: [],

  actions: {
    saveGoal(goal) {
      goal.save().then(() => {
        console.log('goal saved');
      });
    }
  }
});