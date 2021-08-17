import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let promise=new Promise((reslove)=>{
      console.log("promise is running");
      console.log(reslove);
      reslove("success");
    });
    promise.then((value)=>{
      console.log(value)
    })
  }

}
