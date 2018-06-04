import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-showhumancase',
  templateUrl: 'showhumancase.html',
})
export class ShowhumancasePage {

  myInfo = {
    key : '',
    firstname : '',
    lastname : '',
    address : '',
    phone : '' , 
    details : '' 
} 

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.myInfo.key = this.navParams.get('key')
    this.myInfo.firstname = this.navParams.get('firstname')
    this.myInfo.lastname = this.navParams.get('lastname')
    this.myInfo.address = this.navParams.get('address')
    this.myInfo.phone = this.navParams.get('phone')
    this.myInfo.details = this.navParams.get('details')
    
    
    
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowhumancasePage');
  }

}
