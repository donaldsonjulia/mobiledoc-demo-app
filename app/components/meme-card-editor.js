import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({

  didReceiveAttrs() {
    this._super(...arguments);

    // check to see if card has existing payload value for image (if card is being re-edited)
    if (this.get('payload.image')) {
      this.set('image', this.get('payload.image'));
    }
  },

  imageOptions: ['yes-drake', 'no-drake', 'grumpy-cat', 'chill-kermit', 'evil-kermit', 'smug-leo'],

  image: 'grumpy-cat', //default 

  assetPath: '/assets/images/memes/',

  imgSrc: computed('assetPath', 'image', function() {
    let assetPath = this.get('assetPath');
    let imageFile = this.get('image') + '.jpg';
    return 'background-image: url("' + assetPath + imageFile + '");';
  }),

});
