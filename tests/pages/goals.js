import {
  create,
  visitable,
  collection,
  text
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/goals'),
  header: text('h2'),

  goals: collection({
    itemScope: 'li.qa-goal',

    item: {
      title: text('.qa-title'),
    }
  })

});