import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  value: any;
  status:boolean = true;
  submitbuton(company){
    this.value=company.value;
  }
  removechild(){
    this.status=false;
  }
}

