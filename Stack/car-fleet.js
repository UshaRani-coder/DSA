var carFleet = function (target, position, speed) {
  let cars = [];

  // Pair each car's position with its speed
  for (let i = 0; i < position.length; i++) {
    cars.push([position[i], speed[i]]);
  }

  // Sort cars by position that are closest to target first
  cars.sort((a, b) => b[0] - a[0]);

  let stack = [];

  for (let i = 0; i < cars.length; i++) {
    let pos = cars[i][0];
    let spd = cars[i][1];

    // Time taken to reach the target
    let time = (target - pos) / spd;

    // If this car cannot catch the fleet ahead(top of the stack), it forms a new fleet.
    if (stack.length === 0 || time > stack[stack.length - 1]) {
      stack.push(time);
    }
  }

  return stack.length;
};
