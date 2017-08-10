import DS from 'ember-data';
import Ember from 'ember';

const { computed } = Ember;

export default DS.Model.extend({
  subject: DS.attr('string'),
  body: DS.attr('string'), //stringified mobiledoc

  mobiledoc: computed('body', function() {
    return JSON.parse(this.get('body'));
  }) //parsed mobiledoc for dom rendering

});
