import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TVshowsComponent } from './tvshows.component';

describe('TVshowsComponent', () => {
  let component: TVshowsComponent;
  let fixture: ComponentFixture<TVshowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TVshowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TVshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
