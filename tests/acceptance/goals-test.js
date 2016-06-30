import {
  test
} from 'qunit';
import moduleForAcceptance from 'ember-meetup-demo/tests/helpers/module-for-acceptance';
import nav from '../pages/nav';
import page from '../pages/goals';

moduleForAcceptance('Acceptance | goals');

test('visiting /goals', function(assert) {
  page.visit();

  andThen(() => {
    assert.equal(currentURL(), '/goals', 'The user is on the /goals route after visiting the /goals URL');

    assert.ok(nav.goals.isActive, 'The "Goals" nav item is active');

    assert.equal(page.goals().count, 12, 'There are 12 goals in the list');
    assert.equal(page.goals(0).title, 'Create demo app', 'The first goal title is correct');
    assert.equal(page.goals(11).title, 'Goal colours', 'The last goal title is correct');
  });
});