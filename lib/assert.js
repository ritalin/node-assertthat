var assert = require('assert'),
    should = require('should');

exports = module.exports = assert;

is = {
  equalTo: function(expected) {
    return function(actual) {
      actual.should.eql(expected);
    };
  },
  false: false,
  sameAs: function(expected) {
    return function(actual) {
      actual.should.equal(expected);
    };
  },
  true: true,

  not: {
    equalTo: function(expected) {
      return function(actual) {
        actual.should.not.eql(expected);
      };
    },
    false: true,
    sameAs: function(expected) {
      return function(actual) {
        actual.should.not.equal(expected);
      };
    },
    true: false,
  }
};

throws = {
  a: function(err) {
    return function(f) {
      assert.throws(f, err);
    }
  },
  an: function(err) {
    return this.a(err);
  }
};

doesNotThrow = {
  a: function(err) {
    return function(f) {
      assert.doesNotThrow(f, err);
    }
  },
  an: function(err) {
    return this.a(err);
  }
};

exports.that = function(actual, constraint) {
  if(typeof constraint === 'boolean') {
    actual.should.equal(constraint);
  } else if(typeof constraint === 'function') {
    constraint(actual);
  }
};
