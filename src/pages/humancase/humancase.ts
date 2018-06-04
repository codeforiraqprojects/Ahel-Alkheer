import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase ,AngularFireList ,AngularFireAction } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import firebase from 'firebase';

import { ShowhumancasePage } from '../showhumancase/showhumancase';
import { HomePage } from '../home/home';
import {AddhumancasesPage} from '../addhumancases/addhumancases';


@IonicPage()
@Component({
  selector: 'page-humancase',
  templateUrl: 'humancase.html',
})
export class HumancasePage {

  itemsRef: AngularFireList<any>;
  humancases: Observable<any[]>;

  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>; 
  size$: BehaviorSubject<string|null>;


  constructor(public navCtrl: NavController, public navParams: NavParams,public db:AngularFireDatabase) {

    this.itemsRef =  db.list('/case')
    this.humancases = this.itemsRef.valueChanges() ;
    this.size$ = new BehaviorSubject(null); 
    this.items$ = this.size$.switchMap(size =>  
      db.list('/case', ref =>  
        size ? ref.orderByChild('size').equalTo(size) : ref  
      ).snapshotChanges()
    );
  
    this.items$.subscribe(actions => {
     actions.forEach(action => {
       console.log(action.type);
       console.log(action.key);
       console.log(action.payload.val());
     }); 
  
   });
  
  }
  
  
  
  itemSelected(key, firstname, lastname, address,phone, details){
    // console.log(key, firstName, lastName, address,phone, details);
    this.navCtrl.push(ShowhumancasePage,{
      key : key,
      firstname : firstname,
      lastname : lastname,
      address : address,
      phone : phone , 
      details : details , 
      
          });




  }


  goToMain(){
    this.navCtrl.push(HomePage);
  }
  
  goToaddcase(){
    this.navCtrl.push(AddhumancasesPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HumancasePage');
  }


}
