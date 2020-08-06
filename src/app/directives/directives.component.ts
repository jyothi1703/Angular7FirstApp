import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent{
    // ngFor
      userList:string[]=["Hasmika","Apoorava","Sathwika"];
    empList:any=[
      {empId:'E001',empName:'Hamika',empGender:'Female',empNum:9000759333},
      {empId:'E001',empName:'Hamika',empGender:'Female',empNum:9000759333},
      {empId:'E001',empName:'Hamika',empGender:'Female',empNum:9000759333},
    ];
    // ngIf
    userNum:number;
    // ngSwitch
    selectedCountry:string;
    country:any[]=[
      {code:"IND",place:"India"},{code:"UAE",place:"United AE"},{code:"USA",place:"United SA"}
    ];

    choice(code){
      this.selectedCountry = code;
    }
    // second ngSwitch
    selectedDay:string;
    days:any[]=[
      {id:"mon",name:"Monday"},{id:"tus",name:"Tuesday"},{id:"wen",name:"Wenesday"}
    ];
    option(id){
      this.selectedDay = id;
    }
    // attribute directive - ngClass
    cone:boolean = true;
    ctwo:boolean = true;

    toggle(){
      this.cone =! this.cone;
      this.ctwo =! this.ctwo;
    }
    // ngStyle
    style='italic';
    size='30px';
}













