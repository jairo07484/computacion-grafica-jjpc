import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucitoComponent } from './menucito.component';

describe('MenucitoComponent', () => {
  let component: MenucitoComponent;
  let fixture: ComponentFixture<MenucitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenucitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenucitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
