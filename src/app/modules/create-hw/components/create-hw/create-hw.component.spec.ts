import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHwComponent } from './create-hw.component';

describe('CreateHwComponent', () => {
  let component: CreateHwComponent;
  let fixture: ComponentFixture<CreateHwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
