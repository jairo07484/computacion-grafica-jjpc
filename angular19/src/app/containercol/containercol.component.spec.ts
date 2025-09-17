import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainercolComponent } from './containercol.component';

describe('ContainercolComponent', () => {
  let component: ContainercolComponent;
  let fixture: ComponentFixture<ContainercolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainercolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainercolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
