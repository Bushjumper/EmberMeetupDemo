import Ember from 'ember';
import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('person', 'Unit | Model | person', {
  needs: ['model:goal']
});

/* attributes */

test('should have a firstName attribute', function(assert) {
  const Person = this.store().modelFor('person');
  const attribute = Ember.get(Person, 'attributes').get('firstName');

  assert.equal(attribute.type, 'string');
});

test('should have a lastName attribute', function(assert) {
  const Person = this.store().modelFor('person');
  const attribute = Ember.get(Person, 'attributes').get('lastName');

  assert.equal(attribute.type, 'string');
});

/* relationships */

test('should have many goals', function(assert) {
  const Person = this.store().modelFor('person');
  const relationship = Ember.get(Person, 'relationshipsByName').get('goals');

  assert.equal(relationship.key, 'goals', 'has relationship with goals');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is hasMany');
});

/* properties */

test('should have a score, which is the average of goal values', function(assert) {
  const person = this.subject();

  assert.equal(person.get('score'), 0, 'is 0 when there are no goals');

  person.get('goals').pushObject(person.store.createRecord('goal', {
    value: 10
  }));

  assert.equal(person.get('score'), 10, 'is 10 when there is 1 goal with a value of 10');

  person.get('goals').pushObject(person.store.createRecord('goal', {
    value: 50
  }));

  assert.equal(person.get('score'), 30, 'is 30 when there is another goal with a value of 50');

  person.get('goals').pushObject(person.store.createRecord('goal', {
    value: 65
  }));

  assert.equal(person.get('score'), 42, 'is rounded to 42 when there is another goal with a value of 65');

  person.get('goals').pushObject(person.store.createRecord('goal', {
    value: '100'
  }));

  assert.equal(person.get('score'), 56, 'is 56 when there is another goal with a string value of 100');
});

