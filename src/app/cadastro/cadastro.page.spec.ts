import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { CadastroPage } from './cadastro.page';

describe('CadastroPage', () => {
  let component: CadastroPage;
  let fixture: ComponentFixture<CadastroPage>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
