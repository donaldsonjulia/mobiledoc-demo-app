
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mobiledoc-atom-names', 'helper:mobiledoc-atom-names', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{mobiledoc-atom-names inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

