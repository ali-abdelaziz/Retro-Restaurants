import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRetroComponent } from './list-retro.component';

describe('ListRetroComponent', () => {
  let component: ListRetroComponent;
  let fixture: ComponentFixture<ListRetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRetroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
