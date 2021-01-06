import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';
import {TutorialService} from '../tutorial.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'accountDetail.page.html',
  styleUrls: ['accountDetail.page.scss'],
})
export class accountDetailPage {
  selectedSeg = 'summary';
  // public CUST_RID: any;
  // public alias: any;
  // accounts: Account[];

  constructor(private tutorialService: TutorialService, private router: Router, public activeRoute: ActivatedRoute) {
  
  }
  acct_num = this.activeRoute.snapshot.queryParams["acct_num"];
  cus_num = this.activeRoute.snapshot.queryParams["cus_num"];
  billagt = this.activeRoute.snapshot.queryParams["billagt"];
  cust_rid = this.activeRoute.snapshot.queryParams["cust_rid"];

  // ngOnInit() {
  //   this.tutorialService.getAll().subscribe(data => {
  //     this.accounts = data;
  //   });
  // }

  goBack(){
    this.router.navigate(["/account"]);
   }
}
