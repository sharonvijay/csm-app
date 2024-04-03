import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveIssueComponent } from './resolve-issue.component';

describe('ResolveIssueComponent', () => {
  let component: ResolveIssueComponent;
  let fixture: ComponentFixture<ResolveIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolveIssueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolveIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
