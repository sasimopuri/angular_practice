import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  
  // // <!--////////////////////////////////////////////// ngModel //////////////////////////////////////////////////////////////-->
  value="";

  
  // // two way binding through event property //////////////////////////////////////////////////////

  // submit(event: any){
  //   // console.log(event.data) //input sasi
  //   //op : s
  //       // a
  //       // s
  //       // i
  //   console.log((<HTMLInputElement>event.target).value)
  //   this.value=(<HTMLInputElement>event.target).value
  //   // op:s
  //   //    sa
  //   //    sas
  //   //    sasi
  // }

// <><><><><><><><><><><><><><><><><><>Hide and Unhide container using event bind0ing and property binding <><><><><><><><><><><><><><><><>
//   hide:boolean=false;
//   hidetxt="Hide container";
//   hidefunction(){
//     this.hide=!this.hide;
//     if(this.hide){this.hidetxt="Show Container"}
//     else{this.hidetxt="Hide Container"}
//   }
  
}
