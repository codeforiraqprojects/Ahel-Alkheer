import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
import { AlertController } from 'ionic-angular';

import { AngularFireDatabase ,AngularFireList  } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { AngularFireAuth } from 'angularfire2/auth';

import {AddneedingPage }  from  '../addneeding/addneeding';

import { HomePage } from '../home/home';
import { ShowneedingPage }  from  '../showneeding/showneeding';

@IonicPage()
@Component({
  selector: 'page-needing',
  templateUrl: 'needing.html',
})
export class NeedingPage {

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  userData :AngularFireList<any>;
  
  userid;
   

  constructor(public alertCtrl: AlertController,private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,public af:AngularFireDatabase) {
  
  
    this.itemsRef = af.list('/device')
      
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ 
        key: c.payload.key,
        firstname:c.payload.val().firstname,
        lastname:c.payload.val().lastname,
        address:c.payload.val().address,
        infor:c.payload.val().infor,
        phone:c.payload.val().phone,
        hide:c.payload.val().hide,
        addBy:c.payload.val().addBy
         })
      );
    });
    this.fire.authState.subscribe(auth =>{
      if (auth) {
        this.userid=auth.uid;
        console.log(auth);
      }
    })


  }

    itemSelected(key, firstname, lastname,address, phone,infor,addBy ){
     console.log(key, firstname, lastname, address, phone, infor);
     this.navCtrl.push(ShowneedingPage,{
      key : key,
      firstname : firstname,
      lastname : lastname,
      address :address,    
      phone : phone ,
      infor:infor,
  
          }); 
    
      
        }









  goToMain(){
    this.navCtrl.push(HomePage)
  }

   goToAdd(){   
   
   this.navCtrl.setRoot(LoginPage)

   }

  deleteMy(key){

      this.itemsRef.update(key,{
        "hide":"1"
      }).then(newPerson => {
  
        let alert = this.alertCtrl.create({
          title: 'تم الحذف',
          buttons: ['OK']
        });
        alert.present();
      
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NeedingPage');
  }
  
  delete(key){
    console.log(key);
  }
  


}
