import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Autocomplete2Component } from './autocomplete2.component';

describe('Autocomplete2Component', () => {
  let component: Autocomplete2Component;
  let fixture: ComponentFixture<Autocomplete2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [Autocomplete2Component],
        imports: [FormsModule, HttpClientModule],
        providers: [{ provide: 'BASE_URL', useValue: 'http://localhost' }]
        
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Autocomplete2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
