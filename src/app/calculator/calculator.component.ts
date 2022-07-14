import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  output = 0;
  first = 0;
  second = 0;
  result = '';

  setFirst(value: any) {
    this.first = Number(value);
  }

  setSecond(value: any) {
    this.second = Number(value);
  }

  setResult(value: any) {
    this.result = value;
  }

  calculate() {
    switch (this.result) {
      case '+':
        this.output = this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case '*':
        this.output = this.first * this.second;
        break;
      case '/':
        this.output = this.first / this.second;
        break;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
