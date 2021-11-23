import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorListInfoComponent } from './moderator-list-info.component';

describe('ModeratorListInfoComponent', () => {
  let component: ModeratorListInfoComponent;
  let fixture: ComponentFixture<ModeratorListInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratorListInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorListInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
