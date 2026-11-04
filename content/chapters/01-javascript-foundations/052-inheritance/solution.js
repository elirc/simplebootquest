class Shape {
  constructor(name) {
    this.name = name;
  }
  area() {
    return 0;
  }
  describe() {
    return `${this.name} with area ${this.area().toFixed(2)}`;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super('rectangle');
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.name = 'square';
  }
}

class ValidationError extends Error {
  constructor(field) {
    super(`${field} is invalid`);
    this.name = 'ValidationError';
    this.field = field;
  }
}
