import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {TieziPage} from '../tiezi/tiezi'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [];
  isActive=0;
  isClick(i){
    this.isActive = i;
  }
  constructor(public navCtrl: NavController,public http:HttpClient) {
    for (var i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }

  gotiezi(){
    this.navCtrl.push(TieziPage);
  }
   num1=0;
   num2=0;
   num3=0;
   num4=0;
  Zan1(){
    var xin1=document.getElementById("heart1");
    this.num1=this.num1+1;
    if(this.num1%2===1){
    xin1.style.color="red";}
    else{
      xin1.style.color="black";
    }
  }
  Zan2(){
    var xin2=document.getElementById("heart2");
    this.num2=this.num2+1;
    if(this.num2%2===1){
    xin2.style.color="red";}
    else{
      xin2.style.color="black";
    }
  }
  Zan3(){
    var xin3=document.getElementById("heart3");
    this.num3=this.num3+1;
    if(this.num3%2===1){
    xin3.style.color="red";}
    else{
      xin3.style.color="black";
    }
  }
  Zan4(){
    var t4=document.getElementsByClassName("text4");
    console.log(t4);
    var xin4=document.getElementById("heart4");
    this.num4=this.num4+1;
    if(this.num4%2===1){
    xin4.style.color="red";}
    else{
      xin4.style.color="black";
    }
  }
}
