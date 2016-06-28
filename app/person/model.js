import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {
  hasMany
} from 'ember-data/relationships';

export default Model.extend({

  // attributes
  firstName: attr('string'),
  lastName: attr('string'),

  // relationships
  goals: hasMany()

});