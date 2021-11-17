import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ModeratorVerificationComponent} from "./moderator.verification.component";

describe('ModeratorVerificationComponent', () => {
  let component: ModeratorVerificationComponent;
  let fixture: ComponentFixture<ModeratorVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratorVerificationComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
