import {
  create,
  visitable,
  collection,
  text,
  clickable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/people'),
  header: text('h2'),

  people: collection({
    itemScope: 'ul.people li',

    item: {
      name: text(),
      click: clickable()
    }
  }),

  goals: collection({
    itemScope: 'ul.goals li',

    item: {
      title: text(),
    }
  })

});