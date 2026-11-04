function runTimes(n, fn) {
  for (let i = 0; i < n; i++) fn();
}

const timer = {
  ticks: 0,
  tick() {
    this.ticks++;
  },
  start() {
    runTimes(3, () => this.tick());
  },
};

function createButton(label) {
  const button = {
    label,
    onClick: () => `Clicked ${button.label}`,
  };
  return button;
}

function boundGreet(person) {
  return person.greet.bind(person);
}
