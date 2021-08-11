import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionAvecComponent } from './connexion-avec.component';

describe('ConnexionAvecComponent', () => {
  let component: ConnexionAvecComponent;
  let fixture: ComponentFixture<ConnexionAvecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionAvecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionAvecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
