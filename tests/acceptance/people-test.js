import {
  test
} from 'qunit';
import moduleForAcceptance from 'ember-meetup-demo/tests/helpers/module-for-acceptance';
import page from '../pages/people';

moduleForAcceptance('Acceptance | people');

test('visiting /people', function(assert) {
  page.visit();

  andThen(function() {
    assert.equal(currentURL(), '/people', 'The user is on the /people route after visiting the /people URL');
    assert.equal(page.header, 'People', 'The page header is "People"');

    assert.equal(page.people().count, 2, 'There are 2 people in the list');
    assert.equal(page.people(0).name, 'Yehuda Katz', 'The first person is listed as Yehuda Katz');
    assert.equal(page.people(1).name, 'Tom Dale', 'The second person is listed as Tom Dale');
  });
});