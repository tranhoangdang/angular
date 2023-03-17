import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerManageComponent } from './owner-manage.component';

describe('OwnerManageComponent', () => {
  let component: OwnerManageComponent;
  let fixture: ComponentFixture<OwnerManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
