import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  showSecret = false;
  logClicks:any = [];
  counter = 0;
  constructor() { }

  ngOnInit(): void {
  }
  display(){
    this.counter += 1;
    this.logClicks.push(this.counter)

  }

}
