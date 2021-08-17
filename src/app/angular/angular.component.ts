import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {
 
  message="read only";
  canEdit=false;

  onEdit(){
     this.canEdit=!this.canEdit;
     if(this.canEdit){
       this.message="edit"
     }
     else{
       this.message="readonly"
     }
  }
}
