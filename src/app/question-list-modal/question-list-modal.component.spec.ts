import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionListModalComponent } from './question-list-modal.component';

describe('QuestionListModalComponent', () => {
  let component: QuestionListModalComponent;
  let fixture: ComponentFixture<QuestionListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
