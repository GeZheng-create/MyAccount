import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TutorialService } from '../tutorial.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
 

@Component({
  selector: 'app-home',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss'],

})

export class accountPage {
  public items: Array<Object> = [];
  public searchedItem: any;
  public searchedIts: any;
  public CUST_RID: any;
  public rid: any;
  public alias: any;
  public acct_num: any;
  accounts: Account[];

  constructor(private router: Router, public activeRoute: ActivatedRoute, private alertCtrl: AlertController, private tutorialService: TutorialService) {

  }

  ngOnInit() {
    this.tutorialService.getAll().subscribe(data => {
      this.accounts = data;
    });
  }

  goBack() {
    this.router.navigate(["/home"]);
  };

  // async delete(rid) {
  //   const alert = await this.alertCtrl.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Are you sure to delete?',
  //     buttons: [
  //       {
  //         text: 'Ok',
  //         handler: data => {
  //           this.tutorialService.delete(rid).subscribe(data => {
  //             data;
  //           });
  //         }
          

  //       }, {
  //         text: 'Cancel',
  //         role: 'Cancel',
  //         cssClass: 'secondary',
  //         handler: () => {
  //           console.log('Confirm Cancel');
  //         }
  //       }
  //     ]
  //   });
  //    await alert.present();
    
  //     };

  async update(rid, alias) {

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Please input a display name for this service',
      inputs: [
        {
          name: 'alias',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            document.getElementById(rid).innerHTML = data.alias;
            console.log('Receive the alias name1:' + data.alias);
            this.tutorialService.updateAccount(data.alias, rid).subscribe(alias => {
              console.log('Receive the alias name2:' + data.alias);

            });
          }
        }, {
          text: 'Cancel',
          role: 'Cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ]
    });

    await alert.present();

  }
}

