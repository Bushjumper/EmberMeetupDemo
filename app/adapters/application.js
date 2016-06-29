import FixtureAdapter from 'ember-data-fixture-adapter';
import FirebaseAdapter from 'emberfire/adapters/firebase';

import config from 'ember-meetup-demo/config/environment';

let adapter;
if (config.firebase) {
  adapter = FirebaseAdapter.extend({});
} else {
  adapter = FixtureAdapter.extend({});
}

export default adapter;