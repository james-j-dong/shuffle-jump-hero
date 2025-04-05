import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateEmbedComponent } from './generate-embed.component';

describe('GenerateEmbedComponent', () => {
  let component: GenerateEmbedComponent;
  let fixture: ComponentFixture<GenerateEmbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateEmbedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
