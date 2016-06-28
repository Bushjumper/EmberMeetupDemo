import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import {
  belongsTo
} from 'ember-data/relationships';

export default Model.extend({

  // attributes
  title: attr('string'),
  colour: attr('string'),

  // relationships
  person: belongsTo()

});