import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {
  result:Number=0
  constructor() { }

  ngOnInit(): void {

  }
addNumber(num1:any,num2:any) {
  let n1=Number(num1.value)
  let n2=Number(num2.value)
  // let sum=n1+n2;
  // console.log(sum);
  
  this.result=n1+n2
  
  

}
}
