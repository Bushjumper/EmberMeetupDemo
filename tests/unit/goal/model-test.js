import Ember from 'ember';
import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('goal', 'Unit | Model | goal', {
  needs: ['model:person']
});



/* attributes */

test('should have a title attribute', function(assert) {
  const Goal = this.store().modelFor('goal');
  const attribute = Ember.get(Goal, 'attributes').get('title');

  assert.equal(attribute.type, 'string');
});



test('should have a value attribute', function(assert) {
  const Goal = this.store().modelFor('goal');
  const attribute = Ember.get(Goal, 'attributes').get('value');

  assert.equal(attribute.type, 'number');
});

/* relationships */

test('should belong to a person', function(assert) {
  const Goal = this.store().modelFor('goal');
  const relationship = Ember.get(Goal, 'relationshipsByName').get('person');

  assert.equal(relationship.key, 'person', 'has relationship with person');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});


/* properties */
// test('should have a colour, which is the based on the value', function(assert) {
//   const goal = this.subject();

//   assert.equal(goal.get('colour'), 'red', 'is red when value is 0');


//   // Ember.run(() => goal.set('value', 40));

//   // assert.equal(goal.get('colour'), 'red', 'is still red when value is 40');


//   // Ember.run(() => goal.set('value', 55));

//   // assert.equal(goal.get('colour'), 'amber', 'is amber when value is 55');


//   // Ember.run(() => goal.set('value', 100));

//   // assert.equal(goal.get('colour'), 'green', 'is green when value is 100');

// });