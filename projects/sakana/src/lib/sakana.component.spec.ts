import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SakanaComponent } from './sakana.component';

describe('SakanaComponent', () => {
  let component: SakanaComponent;
  let fixture: ComponentFixture<SakanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SakanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SakanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
