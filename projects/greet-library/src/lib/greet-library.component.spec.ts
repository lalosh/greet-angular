import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetLibraryComponent } from './greet-library.component';

describe('GreetLibraryComponent', () => {
  let component: GreetLibraryComponent;
  let fixture: ComponentFixture<GreetLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
