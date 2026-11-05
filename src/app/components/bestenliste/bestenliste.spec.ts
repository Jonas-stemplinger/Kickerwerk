import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bestenliste } from './bestenliste';

describe('Bestenliste', () => {
  let component: Bestenliste;
  let fixture: ComponentFixture<Bestenliste>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bestenliste],
    }).compileComponents();

    fixture = TestBed.createComponent(Bestenliste);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
