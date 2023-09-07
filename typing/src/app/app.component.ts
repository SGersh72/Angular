import { Component } from '@angular/core';
import { loremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'typing';
  randomText = loremIpsum();
  enteredText = '';
  solved = false;

  getNew() {
    this.randomText = loremIpsum();
  }

  onInput(event: any) {
    this.enteredText = event.target.value;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
