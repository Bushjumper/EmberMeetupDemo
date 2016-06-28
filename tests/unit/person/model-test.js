import Ember from 'ember';
import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('person', 'Unit | Model | person', {
  needs: []
});

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

test('should have many goals', function(assert) {
  const Person = this.store().modelFor('person');
  const relationship = Ember.get(Person, 'relationshipsByName').get('goals');

  assert.equal(relationship.key, 'goals', 'has relationship with goals');
  assert.equal(relationship.kind, 'hasMany', 'kind of relationship is hasMany');
});