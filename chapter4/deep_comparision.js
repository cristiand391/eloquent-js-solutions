function deepEqual(a, b) {
  if (typeof(a) == 'object' && typeof(b) == 'object') {
    if (a == b) return true;

    keys_a = Object.keys(a);
    keys_b = Object.keys(b);

    if (keys_a.length != keys_b.length) return false;

    for (let i = 0; i < keys_a.length; i++) {
      return deepEqual(a[keys_a[i]], b[keys_b[i]]) ? true : false;
    }
  }

  return a === b ? true : false
}