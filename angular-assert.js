/**
 * AngularAssert - Promise-y assertions for AngularJS
 *
 * @author Michael Schoonmaker <michael.r.schoonmaker@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
angular.module('assert', function ($q) {
  assert.assert = assert;
  function assert(actual, message) {
    if (!actual) {
      return $q.reject(new Error(message || 'Invalid value.'));
    }

    return $q.when(true);
  }

  assert.equal = equal;
  function equal(actual, expected, message) {
    if (actual != expected) {
      return $q.reject(new Error(message || 'Expected ' + actual + ' to equal ' + expected + '.'));
    }

    return $q.when(true);
  }

  assert.same = same;
  function same(actual, expected, message) {
    if (actual !== expected) {
      return $q.reject(new Error(message || 'Expected ' + actual + ' to be ' + expected + '.'));
    }

    return $q.when(true);
  }

  return assert;
});
