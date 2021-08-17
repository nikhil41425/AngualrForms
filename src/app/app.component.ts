import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public myNumber:number=0;

  get counter(){
    return this.myNumber;
  }

  set counter(value){
    this.myNumber=value;
    console.log(value);
    
  }

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }
}
