import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { accountDetailPage } from './accountDetail.page';

describe('accountDetailPage', () => {
  let component: accountDetailPage;
  let fixture: ComponentFixture<accountDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ accountDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(accountDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
