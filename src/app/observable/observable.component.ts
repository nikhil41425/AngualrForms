import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // let ob=new Observable((obv)=>{
    //   console.log("ob called");
    //   obv.next("success")
    // }) ;

    // ob.subscribe((value)=>{
    //   console.log(value)
    // })

    let ob=new Observable((obv)=>{
      setTimeout(()=>{
        console.log("call");
        obv.next("first call");
      },5000);
    });
    ob.subscribe(value=>{
      console.log(value);
    })
  }

}
