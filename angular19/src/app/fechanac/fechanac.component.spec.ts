import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechanacComponent } from './fechanac.component';

describe('FechanacComponent', () => {
  let component: FechanacComponent;
  let fixture: ComponentFixture<FechanacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FechanacComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechanacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
