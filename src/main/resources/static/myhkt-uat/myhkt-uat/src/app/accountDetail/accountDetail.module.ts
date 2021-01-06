import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonItemSliding } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { accountDetailPage } from './accountDetail.page';

import { accountDetailPageRoutingModule } from './accountDetail-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    accountDetailPageRoutingModule
  ],
  declarations: [accountDetailPage]
})
export class accountDetailPageModule {

}
