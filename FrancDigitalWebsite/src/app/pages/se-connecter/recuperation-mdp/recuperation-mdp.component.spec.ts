import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperationMdpComponent } from './recuperation-mdp.component';

describe('RecuperationMdpComponent', () => {
  let component: RecuperationMdpComponent;
  let fixture: ComponentFixture<RecuperationMdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperationMdpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperationMdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
