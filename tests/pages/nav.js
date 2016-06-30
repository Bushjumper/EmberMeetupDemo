import {
  create,
  hasClass
} from 'ember-cli-page-object';

export default create({
  scope: 'nav',

  people: {
    scope: 'a[href="/people"]',
    isActive: hasClass('active')
  },

  goals: {
    scope: 'a[href="/goals"]',
    isActive: hasClass('active')
  }

});