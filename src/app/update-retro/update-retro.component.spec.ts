import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRetroComponent } from './update-retro.component';

describe('UpdateRetroComponent', () => {
  let component: UpdateRetroComponent;
  let fixture: ComponentFixture<UpdateRetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRetroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
