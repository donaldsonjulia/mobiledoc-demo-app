import Ember from 'ember';

const {
  isEmpty,
  computed
} = Ember;

export default Ember.Controller.extend({

  subject: '',
  mobiledoc: null,

  formInvalid: computed('subject', 'mobiledoc', function() {
    let subject = this.get('subject');
    let body = this.get('mobiledoc');

    return isEmpty(subject) || isEmpty(body);
  }),

  actions: {
    mobiledocWasUpdated(updatedDoc) {
      this.set('mobiledoc', updatedDoc);
    },

    createPost() {
      let subject = this.get('subject');
      let body = JSON.stringify(this.get('mobiledoc'));

      let newPost = this.store.createRecord('post', {
        subject,
        body
      });

      newPost.save().then(() => {
        this.setProperties({
          subject: '',
          mobiledoc: null
        });
        this.transitionToRoute('posts.list');
      }).catch((error) => {
        this.set('showError', error);
        newPost.rollbackAttributes();
      });
    }
  }

});
