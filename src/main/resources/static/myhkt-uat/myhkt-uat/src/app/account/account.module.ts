import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonItemSliding } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { accountPage } from './account.page';
import { HttpClientModule } from '@angular/common/http';

import { accountPageRoutingModule } from './account-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    accountPageRoutingModule,
    HttpClientModule
  ],
  declarations: [accountPage]
})
export class accountPageModule {

  
}
