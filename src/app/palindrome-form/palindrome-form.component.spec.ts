import { PalindromeService } from "./../palindrome.service";
import { FormsModule } from "@angular/forms";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { PalindromeFormComponent } from "./palindrome-form.component";

describe("PalindromeFormComponent", () => {
  let component: PalindromeFormComponent;
  let fixture: ComponentFixture<PalindromeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PalindromeFormComponent],
      providers: [PalindromeService],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
