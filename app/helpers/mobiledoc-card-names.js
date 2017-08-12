import Ember from 'ember';

//use this helper to pass all card names into any instances of render-mobiledoc component
//example: {{render-mobiledoc mobiledoc=someMobiledoc cardNames=(mobiledoc-card-names)}}

export function mobiledocCardNames() {
  return [
    'meme-card'
  ];
}

export default Ember.Helper.helper(mobiledocCardNames);
