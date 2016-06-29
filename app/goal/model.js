import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {
  belongsTo
} from 'ember-data/relationships';

var Goal = Model.extend({

  // attributes
  title: attr('string'),
  colour: attr('string'),
  value: attr('number', {
    defaultValue: 0
  }),

  // relationships
  person: belongsTo(),

});

Goal.reopenClass({
  FIXTURES: [{
    id: 1,
    title: 'Create demo app',
    person: 1
  }, {
    id: 2,
    title: 'Goal model and data',
    person: 1
  }, {
    id: 3,
    title: 'Person model and data',
    person: 1
  }, {
    id: 4,
    title: 'Fixture adapter',
    person: 1
  }, {
    id: 5,
    title: 'Relationship between a goal and a person',
    person: 1
  }, {
    id: 6,
    title: 'Goal model unit tests',
    person: 2
  }, {
    id: 7,
    title: 'Person model unit tests',
    person: 2
  }, {
    id: 8,
    title: 'People list with acceptance tests',
    person: 2
  }, {
    id: 9,
    title: 'Goal list with acceptance tests',
    person: 2
  }, {
    id: 10,
    title: 'Goal list for a specific person',
    person: 2
  }, {
    id: 11,
    title: 'Goal values',
    person: 2
  }, {
    id: 12,
    title: 'Goal colours',
    person: 2
  }]
});


export default Goal;