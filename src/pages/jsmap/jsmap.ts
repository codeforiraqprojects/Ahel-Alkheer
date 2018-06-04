import { Component ,ViewChild ,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase ,AngularFireList  } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

import {    AngularFireAction } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


declare var google;

@IonicPage()
@Component({
  selector: 'page-jsmap',
  templateUrl: 'jsmap.html',
})
export class JsmapPage {

  @ViewChild('map') mapElement:ElementRef;
  map: any;
  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>; //added
  size$: BehaviorSubject<string|null>;//added
  
coordinates :any;

  constructor(public alertCtrl: AlertController , public af:AngularFireDatabase,public navCtrl: NavController,
     public navParams: NavParams,private http:Http) {

      //added
  this.size$ = new BehaviorSubject(null); //added
  this.items$ = this.size$.switchMap(size =>  //added
    af.list('/map', ref =>  //added
      size ? ref.orderByChild('size').equalTo(size) : ref  //added
    ).snapshotChanges() //added
  );
  
  
  }
 

  ionViewDidLoad() {

    this.loadMap();
  }
  loadMap() {
    let latLng = new google.maps.LatLng(33.937663,44.630127);
    
    let mapOptions = {
      center: latLng,
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);    
   
    
    var infowindow = new google.maps.InfoWindow();
    
    var marker, i;
  

    this.items$.subscribe(actions => {
      actions.forEach(action => {
      
       
       // console.log(action.payload.val().latitude);

        marker = new google.maps.Marker({
          position: new google.maps.LatLng(action.payload.val().latitude, action.payload.val().longitude ),
          map:this.map,
         
        });
  
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent("   ___"+action.payload.val().info + "  ");
            infowindow.open(this.map, marker);
          }
        })(marker, i));



      })  ; 
   
    });




     
    

    }
   // }
   
   


}








// var locationsObject = 
// {
//   "-KaVpzFh0FE9QmuMR8aa" : {
//     "latitude" : "33.759684",
//     "longitude" : "44.607975",
//     "info" : "Ahmed" 
    
//   },
//   "-KbVpzFh0FE9QmuMR8ba" : {
//     "latitude" : "33.843152",
//     "longitude" : "44.522209",
//     "info" : "Role of IT in Innovation" 
//   },
//   "-KcVpzFh0FE9QmuMR8ca" : {
//     "latitude" : "34.404077",
//     "longitude" : "45.386353",
//     "info" : "hello" 
//   },
//   "-KdfffFh0FE9QmuMR8ca" : {
//     "latitude" : "34.013396",
//     "longitude" : "44.869995",
//     "info" : "Muhamed" 
//   },
 
// }




    //   Object.keys(locationsObject).forEach(key => {
    //     // console.log(key);          // the name of the current key.
    //     // console.log(locationsObject[key][ "latitude"]);   // the value of the current key.

    //           marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(locationsObject[key][ "latitude"], locationsObject[key][ "longitude"]),
    //     map:this.map,
       
    //   });

    //   google.maps.event.addListener(marker, 'click', (function(marker, i) {
    //     return function() {
    //       infowindow.setContent(locationsObject[key][ "info"]);
    //       infowindow.open(this.map, marker);
    //     }
    //   })(marker, i));


    // });