import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {
  belongsTo
} from 'ember-data/relationships';

var Goal = Model.extend({

  // attributes
  title: attr('string'),
  colour: attr('string'),

  // relationships
  person: belongsTo(),

});

Goal.reopenClass({
  FIXTURES: [{
    id: 1,
    title: 'Create demo app'
  }, {
    id: 2,
    title: 'Goal model and data'
  }, {
    id: 3,
    title: 'Person model and data'
  }, {
    id: 4,
    title: 'Fixture adapter'
  }, {
    id: 5,
    title: 'Relationship between a goal and a person'
  }, {
    id: 6,
    title: 'Goal model unit tests'
  }, {
    id: 7,
    title: 'Person model unit tests'
  }, {
    id: 8,
    title: 'People list with acceptance tests'
  }, {
    id: 9,
    title: 'Goal list with acceptance tests'
  }, {
    id: 10,
    title: 'Goal list for a specific person'
  }, {
    id: 11,
    title: 'Goal values'
  }, {
    id: 12,
    title: 'Goal colours'
  }]
});


export default Goal;