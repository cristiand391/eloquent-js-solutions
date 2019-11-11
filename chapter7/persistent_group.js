class PGroup {
  constructor(items) {
    this.group = items;
  }

  add(value) {
    let newPG = new PGroup([...this.group]);
    newPG.group.push(value);
    return newPG;
  }

  delete(value) {
    let newPG = new PGroup([...this.group]);
    let index = this.group.indexOf(value);

    if (index > -1) newPG.group.splice(index, 1);
    return newPG;
  }

  has(value) {
    return this.group.includes(value);
  }
}

PGroup.empty = new PGroup([]);