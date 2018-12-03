import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var BMap;
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  localCityName: string;
  ionViewDidLoad()
   {
  var myCity = new BMap.LocalCity();
    myCity.get(function (result) {
    var cityName = result.name; 
    //使用localStoage存储cityName. 此处不可以使用this.localCityName = cityName; 因为这里的this 指向的是当前的类， 也就是 function(result)这个类
    localStorage.setItem('currentCity', cityName);
    return cityName;
   })
   setTimeout(() => {
    this.localCityName = localStorage.getItem('currentCity'); 
 }, 500);
  }
}
