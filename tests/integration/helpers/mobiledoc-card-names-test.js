
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mobiledoc-card-names', 'helper:mobiledoc-card-names', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{mobiledoc-card-names inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

