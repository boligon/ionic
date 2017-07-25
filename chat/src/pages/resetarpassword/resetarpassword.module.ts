import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResetarPasswordPage } from './resetarpassword';

@NgModule({
  declarations: [
    ResetarPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(ResetarPasswordPage),
  ],
  exports: [
    ResetarPasswordPage
  ]
})
export class ResetarPasswordPageModule {}
