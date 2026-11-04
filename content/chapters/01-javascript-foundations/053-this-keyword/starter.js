function runTimes(n, fn) {
  for (let i = 0; i < n; i++) fn();
}

const timer = {
  ticks: 0,
  tick() {
    this.ticks++;
  },
  start() {
    runTimes(3, this.tick);
  },
};

function createButton(label) {
  return {
    label,
    onClick() {
      return `Clicked ${this.label}`;
    },
  };
}

function boundGreet(person) {
  return person.greet;
}
