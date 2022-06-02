import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestListingComponent } from './quest-listing.component';

describe('QuestListingComponent', () => {
  let component: QuestListingComponent;
  let fixture: ComponentFixture<QuestListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
