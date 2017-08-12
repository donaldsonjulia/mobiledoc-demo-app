import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('banana-atom', 'Integration | Component | banana atom', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{banana-atom}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#banana-atom}}
      template block text
    {{/banana-atom}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
