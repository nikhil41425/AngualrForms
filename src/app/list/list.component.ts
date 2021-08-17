import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

   course=[
    {"id":1,"name":"angular"},
    {"id":2,"name":"react"},
    {"id":3,"name":"bootstarp"},
    {"id":4,"name":"redux"}
  ]

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onSelect(x:any){
    this.route.navigate(['details',x.id]);
  }

 

}
