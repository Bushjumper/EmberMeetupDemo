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
    itemScope: 'li.qa-person',

    item: {
      name: text('.name'),
      score: text('.score'),
      click: clickable()
    }
  }),

  goals: collection({
    itemScope: 'li.qa-goal',

    item: {
      title: text(),
    }
  })

});