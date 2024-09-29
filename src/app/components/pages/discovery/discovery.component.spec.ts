import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryComponent } from './discovery.component';

describe('DiscoveryComponent', () => {
  let component: DiscoveryComponent;
  let fixture: ComponentFixture<DiscoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoveryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
