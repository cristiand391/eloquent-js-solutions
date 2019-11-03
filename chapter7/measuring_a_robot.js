function compareRobots(robot1, memory1, robot2, memory2) {
  function getSteps(state, robot, memory) {
    let steps = 0;

    for (let turn = 0; ; turn++) {
      if (state.parcels.length == 0) {
        return steps;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
      steps++;
    }
  }

  let steps1 = 0, steps2 = 0;

  for (let n = 0; n < 100; n++) {
    let task = VillageState.random();

    steps1 += getSteps(task, robot1, memory1);
    steps2 += getSteps(task, robot2, memory2)

  }
  console.log(`Robot 1: ${steps1 / 100}`)
  console.log(`Robot 2: ${steps2 / 100}`)
}