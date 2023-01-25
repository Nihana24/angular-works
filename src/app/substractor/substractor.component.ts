import { Component } from '@angular/core';

@Component({
  selector: 'app-substractor',
  templateUrl: './substractor.component.html',
  styleUrls: ['./substractor.component.css']
})
export class SubstractorComponent {
  result:Number=0
  constructor() { }
  ngOnInit():void{

  }
  subNumber(num1:any,num2:any){
  let n1=Number(num1.value)
  let n2=Number(num2.value)
  this.result=n1-n2
}
}

