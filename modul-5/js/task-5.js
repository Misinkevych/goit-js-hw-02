'use strict';
class Car {
  constructor(Car) {
    this.maxSpeed = Car.maxSpeed || 0;
    this.speed = Car.speed || 0;
    this.isOn = Car.isOn || false;
    this.distance = Car.distance || 0;
    this.price = Car.price || 0;
  }

  static getSpecs(car) {
    console.log(car);
  }

  get turnOn() {
    return this.price;
  }

  set turnOn(price) {
    this.price || 0;
  }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */

  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
    this.isOn || false;
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */

  turnOff() {
    this.isOn || false;
    this.speed = 0;
  }
  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  // accelerate(value) {
  //   // this.speed += value;
  //   // while (this.speed < this.maxSpeed) {
  //   //   // console.log('counter: ', counter);
  //   //   // this.speed += value;
  //   // }

  //   this.speed > this.maxSpeed;
  //   this.speed += value;
  // }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
      return true;
    }
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
      return true;
    }
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    this.distance = hours * this.speed;
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
// maxSpeed: 200, speed: 0, isOn: false, distance: 120, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
