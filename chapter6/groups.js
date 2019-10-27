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
}


let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false