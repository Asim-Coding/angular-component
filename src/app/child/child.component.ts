import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
   @Input() company = "wscubeteh";
   mycompany : any;
  constructor() { 
    console.log("constructor called")
  }
 
  
 ngOnChanges(change:SimpleChanges){
   this.mycompany = change.company.currentValue;
  console.log("ngonchangecalled" + this.mycompany);
}

  ngOnInit() {
    console.log("ngonInit called");
  
  }  
  ngDoCheck(){
    console.log("ngdocheck called");
  }
  // after component render when we call something then we use
  ngAfterContentInt(){
    console.log("ngaftercontentinit called");
  }

}













