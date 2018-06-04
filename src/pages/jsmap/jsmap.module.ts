import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JsmapPage } from './jsmap';

@NgModule({
  declarations: [
    JsmapPage,
  ],
  imports: [
    IonicPageModule.forChild(JsmapPage),
  ],
})
export class JsmapPageModule {}
