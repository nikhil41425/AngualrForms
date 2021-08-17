import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormService } from '../form.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  
  
  
  public course=["Angular","React","Vue","Bootstrap"];

  submitted=false;
  

  userModel=new User('','','8688641425','male','default',true);

  constructor(private _fromServ:FormService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.submitted=true;
    console.log(this.userModel);
    this._fromServ.enroll(this.userModel).subscribe(data=>
      console.log("success",data),
      error=>console.log("error",error));
  }

}
