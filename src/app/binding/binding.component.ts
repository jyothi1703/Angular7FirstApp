import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent{
imgUrl:string="./assets/images/nature.jpg";
months=["January","February","March","April","May","June","July","August","September","October","November","December"];
days=["Monday","Tuesday","Wenesday","Thursday","Friday","Saturday","Sunday"];
name:string="Hasmika";
text:string="Who is the owner of this page?";
username:string;

changeImage(){
  this.imgUrl="./assets/images/nature2.jpg";
}
changeText(){
  this.text="Hasmika is the owner  of this page!!!";
}
}
