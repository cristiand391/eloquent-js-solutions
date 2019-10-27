let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
//console.log(map.hasOwnProperty("one"));
// → true

/*
Solution:
  Access "hasOwnProperty" method through map's prototype and call it with "call" method,
  passing map as the "this" value of the function.
*/
console.log(map.__proto__.hasOwnProperty.call(map, "one"))