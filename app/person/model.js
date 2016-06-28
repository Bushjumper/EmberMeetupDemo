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
  goals: hasMany()

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