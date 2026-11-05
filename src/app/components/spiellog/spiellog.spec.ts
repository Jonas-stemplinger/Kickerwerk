import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Spiellog } from './spiellog';

describe('Spiellog', () => {
  let component: Spiellog;
  let fixture: ComponentFixture<Spiellog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spiellog],
    }).compileComponents();

    fixture = TestBed.createComponent(Spiellog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
