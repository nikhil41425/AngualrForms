import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  myForm=new FormGroup({
    username:new FormControl(''),
    password:new FormControl(''),
    confirmPassword:new FormControl(''),
    address : new FormGroup({
      city:new FormControl(''),
      state:new FormControl(''),
      pincode:new FormControl('')
    })
  })

  constructor() { }

  ngOnInit(): void {
  }

}
