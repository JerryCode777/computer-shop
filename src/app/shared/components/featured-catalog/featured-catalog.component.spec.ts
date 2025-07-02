import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCatalogComponent } from './featured-catalog.component';

describe('FeaturedCatalogComponent', () => {
  let component: FeaturedCatalogComponent;
  let fixture: ComponentFixture<FeaturedCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
