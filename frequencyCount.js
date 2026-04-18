let arr = [1, 2, 1, 3, 2, 1];

let map = {};

for (let item of arr) {
  map[item] = (map[item] || 0) + 1;
  console.log(map[item])
}
console.log(map)