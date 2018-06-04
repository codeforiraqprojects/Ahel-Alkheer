import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HumancasePage } from './humancase';

@NgModule({
  declarations: [
    HumancasePage,
  ],
  imports: [
    IonicPageModule.forChild(HumancasePage),
  ],
})
export class HumancasePageModule {}
