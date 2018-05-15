import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 5 app';
  technologies:string[]=['Java','Angular','Python','React'];
  headings:string[]=["Animals","Stationaries","Electronic Items"];
  childdata:string[][]=[
    ["Lion","Tiger","Elephant","Dog"],
  ["Pen","Paper","Book","Pencil"],
  ["Pendrive","Harddisk","RAM"]
];
recieveChildItem(data,childcount){
  this.childdata[childcount].push(data);
  this.headings[childcount]=data;
}
ngDoCheck() {
  console.log("ngDoCheck-Parent version....!");   
}
}
