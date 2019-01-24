import { Component, OnInit } from '@angular/core';
import { Car } from '../interfaces';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car: Car;
  handlerNumber: number;
  benzInfoCapacity: number;
  disButon = false;

  constructor() { }

  ngOnInit() {
    this.handlerNumber = 2;
    this.benzInfoCapacity = 40;
    this.car = {
      mark: 'Mazda',
      mileage: 200000,
      benzCapacity: this.benzInfoCapacity,
      currentBenz: 20,
      characteristics: [
        'Engine 2 liters',
        'Maximum speed  200 km/h'
      ]
    };
    if (this.car.currentBenz > this.car.benzCapacity) {
      alert(`Бак переполнен ! обьем бака ${this.car.benzCapacity} а бензина ${this.car.currentBenz}`);
      this.car.currentBenz = this.benzInfoCapacity;
    }
  }

  driveCar() {
    if (this.car.currentBenz > 0) {
      this.car.mileage += this.handlerNumber;
      this.car.currentBenz -= this.handlerNumber;
    }
  }

  fillCar() {
    this.car.currentBenz += this.handlerNumber;
  }

}
