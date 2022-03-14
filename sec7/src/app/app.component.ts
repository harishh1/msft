import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sec7';
  onlyOdd: boolean = false;
  numbers: number[] = [1, 2, 3, 4, 5];
  oddNums: number[] = [1, 3, 5, 7];
  evenNums: number[] = [2, 4, 6, 8];

  
}

