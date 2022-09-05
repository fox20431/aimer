import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipBoardComponent } from './flip-board.component';

describe('TimerComponent', () => {
  let component: FlipBoardComponent;
  let fixture: ComponentFixture<FlipBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
