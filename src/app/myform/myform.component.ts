import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
  obj:any;
  constructor() { }

  ngOnInit(): void {
  }
 onSubmit(val:any){
   console.log(val);
this.obj=val;
 }
}
