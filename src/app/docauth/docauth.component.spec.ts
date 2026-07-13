import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocauthComponent } from './docauth.component';

describe('DocauthComponent', () => {
  let component: DocauthComponent;
  let fixture: ComponentFixture<DocauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocauthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
