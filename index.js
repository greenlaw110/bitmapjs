"use strict";

/**
 * Constructs a bitmap object with string contains a group of keys separated by space,
 * or an array of String keys
 *
 * For example:
 *
 *   var Flags = genBitmap("blue red green");
 *   console.log(Flags.blue); // output false
 *   
 *   var Flags2 = genBitmap(true, "blue red green");
 *   console.log(Flags.blue); // output true
 *
 * @param {string} obj
 * @return {object}
 */

function isString(v) {
  return (typeof v == 'string' || v instanceof String)
}

function isBoolean(v) {
  return (typeof v == "boolean");
}

function isObject(v) {
  return (v && typeof v == "object" && !Array.isArray(v));
}

function isUndefined(v) {
  return (typeof v == 'undefined');
}

var genBitmap = function(defVal, key) {
  var ret = {};
  var keys = [];

  if (!isBoolean(defVal)) {
    key = defVal;
    if (!isObject(key)) {
      defVal = false;
    } else {
      defVal = undefined;
    }
  }

  if (isObject(key) && isUndefined(defVal)) {
    return key;
  }

  if (Array.isArray(key)) {
    for (var i = 0, j = key.length; i < j; ++i) {
      var k = key[i];
      if (!k || !isString(k)) {
        throw new Error("bad enum key: " + k);
      }
      keys.push(k);
    }
  } else if (key instanceof Object && !Array.isArray(key)) {
    for (k in key) {
      if (key.hasOwnProperty(k)) {
        keys.push(k)
      }
    }
  } else if (!isString(key)) {
    throw new Error('Argument must be a string or an array of strings.');
  } else {
    keys = key.split(/[,;:\s]+/);
  }

  for (var i = 0, j = keys.length; i < j; ++i) {
    var k = keys[i];
    ret[k] = defVal;
  }

  return ret;
};

module.exports = genBitmap;