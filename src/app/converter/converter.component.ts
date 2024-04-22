import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css',
})
export class ConverterComponent {
  fahrenheitValue: number = 0; // Egenskap för att lagra värdet från input
  celsiusValue: number = 0;
  meterValue: number = 0;
  feetValue: number = 0;

  // Egenskap för att lagra resultatet av konverteringen
  resultOne: string = '';
  resultTwo: string = '';
  resultThree: string = '';
  resultFour: string = '';

  constructor() {}

  // Funktioner för att konvertera Fahrenheit till Celsius och vice versa
  fahrenheitToCelsius(): void {
    let fahrenheit = this.fahrenheitValue;
    let celsius = (fahrenheit - 32) * (5 / 9);
    this.resultOne = celsius.toFixed(2);
  }

  celsiusToFahrenheit(): void {
    let celsius = this.celsiusValue;
    let fahrenheit = celsius * (9 / 5) + 32;
    this.resultTwo = fahrenheit.toFixed(2);
  }

  // Funktion för att konvertera Meter till Feet
  meterToFeet(): void {
    let meter = this.meterValue;
    let feet = meter * 3.28084;
    this.resultThree = feet.toFixed(2);
  }

  // Funktion för att konvertera Feet till Meter
  feetToMeter(): void {
    let feet = this.feetValue;
    let meter = feet / 3.28084;
    this.resultFour = meter.toFixed(2);
  }
}
