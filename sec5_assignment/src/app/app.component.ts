import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  even_arr: number[] = [];
  odd_arr: number[] = [];
  title = 'sec5_assignment';
  someFunc(e){
    if(e % 2 == 0){
      this.even_arr.push(e)
    }else{
      this.odd_arr.push(e)
    }
    console.log(this.even_arr, this.odd_arr)
  }
}
