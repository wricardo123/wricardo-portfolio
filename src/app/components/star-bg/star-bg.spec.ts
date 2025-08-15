import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarBg } from './star-bg';

describe('StarBg', () => {
  let component: StarBg;
  let fixture: ComponentFixture<StarBg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarBg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarBg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
