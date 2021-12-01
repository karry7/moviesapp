import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemovieComponent } from './homemovie.component';

describe('HomemovieComponent', () => {
  let component: HomemovieComponent;
  let fixture: ComponentFixture<HomemovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomemovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomemovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
