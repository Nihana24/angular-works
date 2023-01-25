import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstractorComponent } from './substractor.component';

describe('SubstractorComponent', () => {
  let component: SubstractorComponent;
  let fixture: ComponentFixture<SubstractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubstractorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubstractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
