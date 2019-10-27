class Group {
  constructor() {
    this.group = []
  }

  add(value) {
    if (this.group.indexOf(value) == -1) this.group.push(value);
  }

  delete(value) {
    let index = this.group.indexOf(value);

    if (index > -1) this.group.splice(index, 1);
  }

  has(value) {
    if (this.group.indexOf(value) > -1) return true;
    return false;
  }

  static from(values) {
    let from_group = new Group();

    for (const value of values) {
      from_group.add(value);
    }

    return from_group;
  }

  [Symbol.iterator]() {
    let nextIndex = 0, group = this.group;

    return {
      next: function () {
        return group.length == nextIndex ?
          { done: true } :
          { value: group[nextIndex++], done: false }
      }
    }
  }
}


for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c