import {
  create,
  visitable,
  collection,
  text
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/people'),
  header: text('h2'),

  people: collection({
    itemScope: 'ul li',

    item: {
      name: text(),
    }
  })

});