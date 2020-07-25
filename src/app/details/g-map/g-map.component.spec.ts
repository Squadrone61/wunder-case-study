import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GMapComponent } from './g-map.component';

describe('GMapComponent', () => {
  let component: GMapComponent;
  let fixture: ComponentFixture<GMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GMapComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
