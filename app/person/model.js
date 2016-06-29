import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {
  hasMany
} from 'ember-data/relationships';

var Person = Model.extend({

  // attributes
  firstName: attr('string'),
  lastName: attr('string'),

  // relationships
  goals: hasMany(),

  // properties
  score: Ember.computed('goals.@each.value', function() {
    let count = this.get('goals.length');
    let total = 0;
    this.get('goals').forEach(goal => {
      total += goal.get('value');
    });
    return total / count;
  })

});

Person.reopenClass({
  FIXTURES: [{
    id: 1,
    firstName: 'Yehuda',
    lastName: 'Katz'
  }, {
    id: 2,
    firstName: 'Tom',
    lastName: 'Dale'
  }]
});

export default Person;