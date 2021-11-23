import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModeratorPersonalAccComponent } from './edit-moderator-personal-acc.component';

describe('EditModeratorPersonalAccComponent', () => {
  let component: EditModeratorPersonalAccComponent;
  let fixture: ComponentFixture<EditModeratorPersonalAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditModeratorPersonalAccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditModeratorPersonalAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
