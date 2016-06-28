import Ember from 'ember';
import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('goal', 'Unit | Model | goal', {
  needs: []
});

test('should have a title attribute', function(assert) {
  const Goal = this.store().modelFor('goal');

  const attribute = Ember.get(Goal, 'attributes').get('title');

  assert.equal(attribute.type, 'string');
});

test('should have a colour attribute', function(assert) {
  const Goal = this.store().modelFor('goal');

  const attribute = Ember.get(Goal, 'attributes').get('colour');

  assert.equal(attribute.type, 'string');
});