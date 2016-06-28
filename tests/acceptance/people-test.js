import {
  test
} from 'qunit';
import moduleForAcceptance from 'ember-meetup-demo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | people');

test('visiting /people', function(assert) {
  visit('/people');

  andThen(function() {
    assert.equal(currentURL(), '/people');
  });
});