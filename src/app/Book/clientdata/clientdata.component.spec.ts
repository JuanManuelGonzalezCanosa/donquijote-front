import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientdataComponent } from './clientdata.component';

describe('ClientdataComponent', () => {
  let component: ClientdataComponent;
  let fixture: ComponentFixture<ClientdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
