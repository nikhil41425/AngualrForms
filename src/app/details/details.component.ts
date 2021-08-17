import { flatten, ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  courseId:any;
  id:any;
  next:boolean | undefined
  prev:boolean | undefined

  branch:any;

 

  
  constructor(private _activate:ActivatedRoute , private route:Router) { }
  
  ngOnInit() {
  
   this._activate.paramMap.subscribe((params:ParamMap)=>{  
    this.id=params.get('id') ;
    this.courseId=parseInt(this.id);
    console.log(this.courseId);

    if(this.courseId==1){
      this.prev=true;
    }
     // this.next = false;
  
    

    if(this.courseId==4){
      this.next = true;
    }
    
  });
  }
  toPrevious(){
    
  
    this.next=false
    let previous = this.courseId - 1 ;
    this.route.navigate(['/details',previous]);

  }

  toNext(){
    
   
    this.prev=false
    let next = this.courseId + 1 ;
    this.route.navigate(['/details',next]);

  }

}
