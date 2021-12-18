import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModeratorPersonalDataComponent } from './edit-moderator-personal-data.component';

describe('EditModeratorPersonalDataComponent', () => {
  let component: EditModeratorPersonalDataComponent;
  let fixture: ComponentFixture<EditModeratorPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditModeratorPersonalDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditModeratorPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
