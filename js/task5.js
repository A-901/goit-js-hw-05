'user strict';
class Car {
  constructor ({speed = 0, price = 0, maxSpeed = 0, isOn = false, distance = 0}) {
    this.speed = speed;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }
  static getSpecs(car) {
    console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  turnOn() {
    if (this.isOn === false) {
      this.isOn = true;
    }
  }
  turnOff() {
    if (this.isOn === true) {
      this.isOn = false;
      this.speed = 0;
    }
  }
  accelerate(value) {
    if (this.maxSpeed > this.speed +value) {
      this.speed += value;
    }
  }
  decelerate(value) {
    if (this.speed !== 0) {
      this.speed -= value;
    }
  }
  drive(hours) {
    if (this.isOn === true) {
      this.distance + this.speed * hours;
    }
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000