import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { accountDetailPage } from './accountDetail.page';

const routes: Routes = [
  {
    path: '',
    component: accountDetailPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class accountDetailPageRoutingModule {}
