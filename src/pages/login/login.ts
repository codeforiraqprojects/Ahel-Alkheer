
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController , AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import {AddneedingPage} from '../addneeding/addneeding';
import {HomePage} from '../home/home';
import {SignupPage} from '../signup/signup';
import { AngularFireDatabase ,AngularFireList  } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email :string ;
  password : string ;
  peoplelist: AngularFireList<any>;
  uid;


  constructor( public af:AngularFireDatabase,private fb: Facebook,private googlePlus: GooglePlus, public alertCtrl:AlertController ,
     public toastCtrl:ToastController,public fire: AngularFireAuth , public navCtrl: NavController, public navParams: NavParams) {
  
      this.peoplelist=af.list('/device');


      this.fire.auth.onAuthStateChanged(function(user){
        // if(!user){
        //   this.navCtrl.push(LoginPage);
        // }else{
          
        // }
         console.log(user);
         });
         this.fire.authState.subscribe(auth =>{
          if (auth) {
            this.uid=auth.uid;
            console.log(auth);
          }
        })
         


  
    }


    goToMain(){
      this.navCtrl.setRoot(HomePage)
    }

    
  ionViewDidLoad() { 
    
   
   



    
    console.log('ionViewDidLoad LoginPage'); }



  Login(){

    
if (this.email === undefined && this.password === undefined ) {
  console.log('email: '+this.email + '  password: '+this.password)
     return  this.showAlert();
}

    let toast = this.toastCtrl.create({
      message: 'اهلا بك مجددا  ',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    }); 




    this.fire.auth.signInWithEmailAndPassword(this.email,this.password).then(user =>{
      toast.present();
    
   this.navCtrl.push(AddneedingPage);
     
    }).catch(error=>{
      this.showAlert();
      
    })
      
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'خطا ',
      subTitle: ' ! يرجى التاكد من الايميل و كلمة السر الخاصة بك ',
      buttons: ['حسنا ']
    });
    alert.present();
  }
  signUP(){
    this.navCtrl.push(SignupPage);
  }
  google(){
    let toast = this.toastCtrl.create({
      message: 'اهلا بك مجددا  ',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    this.googlePlus.login({
      'webClientId': '614542000368-sgioom8nioq20dii53dl8r765prjrkr7.apps.googleusercontent.com',
      'offline': true
    }).then(res => alert(res))
    .catch(err => alert(err));
   
  
  }
  facebook(){
    let toast = this.toastCtrl.create({
      message: 'اهلا بك مجددا  ',
      duration: 3000,
      position: 'top'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    }); 
    return this.fb.login(['email'])
    .then( response => {
      const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
      this.fire.auth.signInWithCredential(facebookCredential)
        .then( success => { 
          this.navCtrl.setRoot(AddneedingPage);
         alert("Firebase success: " + JSON.stringify(success)); 
        });
    }).catch((error) => { alert("error"+error) });
}
    
  
}
