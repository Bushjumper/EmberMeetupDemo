import {
  test
} from 'qunit';
import moduleForAcceptance from 'ember-meetup-demo/tests/helpers/module-for-acceptance';
import nav from '../pages/nav';
import page from '../pages/people';

moduleForAcceptance('Acceptance | people');

test('visiting /people', function(assert) {
  page.visit();

  andThen(() => {
    assert.equal(currentURL(), '/people', 'The user is on the /people route after visiting the /people URL');
    assert.ok(nav.people.isActive, 'The "People" nav item is active');

    assert.equal(page.people().count, 2, 'There are 2 people in the list');
    assert.equal(page.people(0).name, 'Yehuda Katz', 'The first person is listed as Yehuda Katz');
    assert.equal(page.people(1).name, 'Tom Dale', 'The second person is listed as Tom Dale');
  });
});

test('viewing a person\'s goals', function(assert) {
  page.visit();

  andThen(() => {

    assert.ok(nav.people.isActive, 'The "People" nav item is active');

    assert.equal(page.goals().count, 0, 'There are 0 goals listed');

    page.people(0).click();
    andThen(() => {
      assert.equal(page.goals().count, 5, 'There are 5 goals listed');
    });
  });
});