import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import {ContactPage } from '../contact/contact';
import {  HumancasePage } from '../humancase/humancase';
import {  AddhumancasesPage } from '../addhumancases/addhumancases';
import { ShowhumancasePage } from '../showhumancase/showhumancase';
import { HomePage } from '../home/home';
import {  NeedingPage }  from  '../needing/needing';
import {AddneedingPage }  from  '../addneeding/addneeding';
import  {ShowneedingPage }  from  '../showneeding/showneeding';
import { MapPage }  from  '../map/map';
import {JsmapPage} from '../jsmap/jsmap';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root =  HumancasePage;
  tab3Root =AddhumancasesPage; 
  
  tab4Root = ShowhumancasePage ; 

  tab5Root = MapPage;
  tab6Root =  NeedingPage;
  tab7Root =  AddneedingPage;

  tab8Root = ShowneedingPage;
  
  tab9Root = AboutPage;
  tab10Root = ContactPage;
  tab11Root = JsmapPage;
  
  constructor() {

  }
}
