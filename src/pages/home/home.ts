import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';

import { NeedingPage}  from   '../needing/needing';
import {MapPage}  from   '../map/map';
import {JsmapPage} from '../jsmap/jsmap';
import {HumancasePage} from  '../humancase/humancase';
import {AboutPage} from  '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }




  ionViewDidLoad() {

   

   
  }









  goToMap(){
    this.navCtrl.push ( JsmapPage)
  }



  goToHumancase(){
    this.navCtrl.push ( HumancasePage)
  }


  goToNeeding(){
    this.navCtrl.push (NeedingPage)
  }



  goToAbout(){
    this.navCtrl.push ( AboutPage)
  }


}
