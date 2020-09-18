const reverseNestedObject = (obj) => {
  let cur = obj;
  let key = Object.getOwnPropertyNames(obj)[0];
  const arr = [];
  const result = {};

  // Push the keys into an array according to it's level
  while (typeof cur[key] === 'object') {
    arr.push(key);
    cur = cur[key];
    key = Object.getOwnPropertyNames(cur)[0];
  }

  // Push last key and value to the array
  arr.push(key);
  arr.push(cur[key]);

  // Revers the array
  const rev = arr.reverse();
  cur = result;

  // Construct the reversed object from reversed array
  while (rev.length > 1) {
    key = rev.shift();
    cur[key] = rev.length === 1 ? rev.shift() : {};
    cur = cur[key];
  }

  return result;
};

module.exports = reverseNestedObject;
