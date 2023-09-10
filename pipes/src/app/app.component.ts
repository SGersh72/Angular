import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = NaN;
  height: number = NaN;
  car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2000,
  };
  miles: number = NaN;

  onNameChange(target: any) {
    const value: string = target.value;
    this.name = value;
  }

  onDateChange(target: any) {
    const value: string = target.value;
    this.date = value;
  }

  onAmountChange(target: any) {
    const value: number = parseFloat(target.value);
    this.amount = value;
  }

  onHeightChange(target: any) {
    const value: number = parseFloat(target.value);
    this.height = value;
  }

  onMilesChange(target: any) {
    const value: number = parseFloat(target.value);
    this.miles = value;
  }
}
