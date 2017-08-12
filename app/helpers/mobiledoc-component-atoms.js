import Ember from 'ember';
import createComponentAtom from 'ember-mobiledoc-editor/utils/create-component-atom';

//use this helper to pass component atoms into any instances of mobiledoc-editor component
//example: {{mobiledoc-editor mobiledoc=someMobiledoc atoms=(mobiledoc-component-atoms)}}

export function mobiledocComponentAtoms() {
  return [
    createComponentAtom('banana-atom')
  ];
}

export default Ember.Helper.helper(mobiledocComponentAtoms);
