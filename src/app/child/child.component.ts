import { Component, OnInit,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input('title')info:string;
unit:string="unit1";
@Input('items') items:string[];
@Output('send')emitdata:EventEmitter<string>=new EventEmitter<string>();


current :string;
state:string;

  constructor() {
    console.log("Constructor-constructor executed");
    console.log('Constructor-the value of info  in constructor ....'+this.info); }

  ngOnInit() {
    console.log("ngOnInit-component Initialized");
    console.log('ngOnInit-the value of info  in ngOninit ...'+this.info);
  }

  ngDoCheck() {
    console.log("ngDoCheck-Instance members changed :"+this.info);   
  }

  
  ngOnChanges() {
    console.log(this.state+"ngOnChnages-Input chnaged :"+this.info);
    if(this.state=='old')
    {this.state='new';}
    else
    this.state='old';
    
  } 
 


  

  changeColor(){
    if(this.unit=="unit1")
    this.unit="unit2";
    else
    this.unit="unit1";
  }

  addItem(){
    this.emitdata.emit(this.current);


  }

}
