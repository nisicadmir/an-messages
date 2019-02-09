import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnMessagesComponent } from './an-messages.component';

describe('AnMessagesComponent', () => {
  let component: AnMessagesComponent;
  let fixture: ComponentFixture<AnMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
