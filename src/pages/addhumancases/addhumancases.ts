import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase ,AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-addhumancases',
  templateUrl: 'addhumancases.html',
})
export class AddhumancasesPage {

 humancaselist: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public db:AngularFireDatabase) {

    this.humancaselist=db.list('/case');

  }

  addcase(firstname,lastname,address,phone,details){
    this.humancaselist.push({
     key_id: new Date().getTime(),
        firstname :firstname ,
        lastname :lastname,
        address: address,
        phone: phone,
        details:details
          }).then(newPerson => {
  
            this.navCtrl.push(HomePage);
          });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddhumancasesPage');
  }

}
