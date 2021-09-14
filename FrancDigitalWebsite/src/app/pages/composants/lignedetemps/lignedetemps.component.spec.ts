import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LignedetempsComponent } from './lignedetemps.component';

describe('LignedetempsComponent', () => {
  let component: LignedetempsComponent;
  let fixture: ComponentFixture<LignedetempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LignedetempsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LignedetempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
