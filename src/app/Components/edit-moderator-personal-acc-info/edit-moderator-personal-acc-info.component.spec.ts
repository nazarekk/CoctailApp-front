import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModeratorPersonalAccInfoComponent } from './edit-moderator-personal-acc-info.component';

describe('EditModeratorPersonalAccInfoComponent', () => {
  let component: EditModeratorPersonalAccInfoComponent;
  let fixture: ComponentFixture<EditModeratorPersonalAccInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditModeratorPersonalAccInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditModeratorPersonalAccInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
