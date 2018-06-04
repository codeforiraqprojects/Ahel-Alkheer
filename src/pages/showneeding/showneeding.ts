import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-showneeding',
  templateUrl: 'showneeding.html',
})
export class ShowneedingPage {

  myInfo = {
    key : '',
    firstname : '',
    lastname : '',
    address:'',
    phone:'',
    infor : ''
  }
 



  constructor(private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {

   

    this.myInfo.key = this.navParams.get('key')
    this.myInfo.firstname = this.navParams.get('firstname')
    this.myInfo.lastname = this.navParams.get('lastname')
    this.myInfo.address = this.navParams.get('address')
    this.myInfo. phone = this.navParams.get('phone')
    this.myInfo.infor = this.navParams.get('infor')    

    

    
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ShowneedingPage');
    
  }
  
}
