import Ember from 'ember';

//use this helper to pass all atom names into any instances of render-mobiledoc component
//example: {{render-mobiledoc mobiledoc=someMobiledoc cardNames=(mobiledoc-atom-names)}}

export function mobiledocAtomNames() {
  return [
    'banana-atom'
  ];
}

export default Ember.Helper.helper(mobiledocAtomNames);
