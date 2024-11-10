import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoseRaulCapablancaComponent } from './jose-raul-capablanca.component';

describe('JoseRaulCapablancaComponent', () => {
  let component: JoseRaulCapablancaComponent;
  let fixture: ComponentFixture<JoseRaulCapablancaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoseRaulCapablancaComponent]
    });
    fixture = TestBed.createComponent(JoseRaulCapablancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
