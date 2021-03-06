var assert = require('../lib/assert.js');

module.exports = {
  'equalTo succeeds when comparing two numbers with the same values.': function() {
    var actual = 23,
        expected = 23;

    assert.doesNotThrow(function() {
      assert.that(actual, is.equalTo(expected));
    });
  },
  'equalTo fails when comparing two numbers with different values.': function() {
    var actual = 23,
        expected = 42;

    assert.throws(function() {
      assert.that(actual, is.equalTo(expected));
    }, assert.AssertionError);
  },
  'equalTo succeeds when comparing two strings with the same values.': function() {
    var actual = 'foo',
        expected = 'foo';

    assert.doesNotThrow(function() {
      assert.that(actual, is.equalTo(expected));
    });
  },
  'equalTo fails when comparing two strings with different values.': function() {
    var actual = 'foo',
        expected = 'bar';

    assert.throws(function() {
      assert.that(actual, is.equalTo(expected));
    }, assert.AssertionError);
  },
  'equalTo succeeds when comparing two objects with the same values, but different identities.': function() {
    var actual = { foo: 'foo', bar: 'bar' },
        expected = { foo: 'foo', bar: 'bar' };

    assert.doesNotThrow(function() {
      assert.that(actual, is.equalTo(expected));
    });
  },
  'equalTo fails when comparing two objects with different values.': function() {
    var actual = { foo: 'foo', bar: 'bar' },
        expected = { foo: 'foo', bar: 'baz' };

    assert.throws(function() {
      assert.that(actual, is.equalTo(expected));
    }, assert.AssertionError);
  },
  'equalTo succeeds when comparing two objects with the same identity.': function() {
    var actual = expected = { foo: 'foo', bar: 'bar' };

    assert.doesNotThrow(function() {
      assert.that(actual, is.equalTo(expected));
    });
  },
  'not.equalTo succeeds when comparing two numbers with different values.': function() {
    var actual = 23,
        expected = 42;

    assert.doesNotThrow(function() {
      assert.that(actual, is.not.equalTo(expected));
    });
  },
  'not.equalTo fails when comparing two numbers with the same values.': function() {
    var actual = 23,
        expected = 23;

    assert.throws(function() {
      assert.that(actual, is.not.equalTo(expected));
    }, assert.AssertionError);
  },
  'not.equalTo succeeds when comparing two strings with different values.': function() {
    var actual = 'foo',
        expected = 'bar';

    assert.doesNotThrow(function() {
      assert.that(actual, is.not.equalTo(expected));
    });
  },
  'not.equalTo fails when comparing two strings with the same values.': function() {
    var actual = 'foo',
        expected = 'foo';

    assert.throws(function() {
      assert.that(actual, is.not.equalTo(expected));
    }, assert.AssertionError);
  },
  'not.equalTo fails when comparing two objects with the same values, but different identities.': function() {
    var actual = { foo: 'foo', bar: 'bar' },
        expected = { foo: 'foo', bar: 'bar' };

    assert.throws(function() {
      assert.that(actual, is.not.equalTo(expected));
    }, assert.AssertionError);
  },
  'not.equalTo succeeds when comparing two objects with different values.': function() {
    var actual = { foo: 'foo', bar: 'bar' },
        expected = { foo: 'foo', bar: 'baz' };

    assert.doesNotThrow(function() {
      assert.that(actual, is.not.equalTo(expected));
    });
  },
  'not.equalTo fails when comparing two objects with the same identity.': function() {
    var actual = expected = { foo: 'foo', bar: 'bar' };

    assert.throws(function() {
      assert.that(actual, is.not.equalTo(expected));
    }, assert.AssertionError);
  }
};
