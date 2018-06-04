import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

//pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import {  HumancasePage } from '../pages/humancase/humancase';
import {  AddhumancasesPage } from '../pages/addhumancases/addhumancases';
import { ShowhumancasePage } from '../pages/showhumancase/showhumancase';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {  NeedingPage }  from  '../pages/needing/needing';
import {AddneedingPage }  from  '../pages/addneeding/addneeding';
import  {ShowneedingPage }  from  '../pages/showneeding/showneeding';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import {MapPage}  from  '../pages/map/map';
import {JsmapPage} from '../pages/jsmap/jsmap';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule} from 'angularfire2';
 import { AngularFireDatabaseModule,AngularFireDatabase } from 'angularfire2/database';
 import { AngularFireAuthModule } from 'angularfire2/auth';
 import { AngularFirestore  } from 'angularfire2/firestore';



 import { HttpModule } from '@angular/http';



 
  

 export const  firebaseConfig = {
  apiKey: "AIzaSyDbVWK2phjQ1anZuyTWCAyDpWhDOheFWMQ",
  authDomain: "ahlkhar-198020.firebaseapp.com",
  databaseURL: "https://ahlkhar-198020.firebaseio.com",
  projectId: "ahlkhar-198020",
  storageBucket: "ahlkhar-198020.appspot.com",
  messagingSenderId: "134697031230"
  };



  




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NeedingPage,
    AddneedingPage,
    ShowneedingPage,
    MapPage,
    AddhumancasesPage,
    HumancasePage,
    SignupPage,
    LoginPage,
    ShowhumancasePage,
    JsmapPage
   
  ],
  imports: [   
    
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: 'رجوع',
      backButtonIcon:'arrow-back'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule ,
     HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NeedingPage,
    AddneedingPage,
    ShowneedingPage,
    MapPage,
    AddhumancasesPage ,
    HumancasePage,
    ShowhumancasePage,
    JsmapPage ,
    SignupPage,
    LoginPage
   
   
  ],
  providers: [   
    
    Facebook,
    GooglePlus,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
