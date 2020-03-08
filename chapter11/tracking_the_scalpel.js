async function locateScalpel(nest) {
  let prevLocation = await anyStorage(nest, nest.name, 'scalpel');
  let scalpelCrow;

  while (true) {
    let newLocation = await anyStorage(nest, prevLocation, 'scalpel');

    if (newLocation == prevLocation) {
      scalpelCrow = newLocation;
      break;
    }

    prevLocation = newLocation;
  }

  return scalpelCrow;
}

function locateScalpel2(nest) {
  return new Promise((resolve, _) => {
    const locate = nest => {
      anyStorage(nest, prevCrow, 'scalpel').then(name => {
        if (name === prevCrow) resolve(name);
        prevCrow = name;
        locate(nest);
      });
    };

    let prevCrow;

    anyStorage(nest, nest.name, 'scalpel').then(name => {
      prevCrow = name;
      locate(nest);
    });
  });
}
