import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRetroComponent } from './add-retro.component';

describe('AddRetroComponent', () => {
  let component: AddRetroComponent;
  let fixture: ComponentFixture<AddRetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRetroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
