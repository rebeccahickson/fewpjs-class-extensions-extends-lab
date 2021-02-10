class Polygon {
  constructor(arr) {
    this.sides = arr;
  }
  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((total, num) => total + num);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      if (
        this.sides[0] + this.sides[1] > this.sides[2] &&
        this.sides[1] + this.sides[2] > this.sides[0] &&
        this.sides[2] + this.sides[1] > this.sides[0]
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (
      this.sides.every((x) => {
        return x === this.sides[0];
      })
    ) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    return this.sides[0] * this.sides[1];
  }
}
