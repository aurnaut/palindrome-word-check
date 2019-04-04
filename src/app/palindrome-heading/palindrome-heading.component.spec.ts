import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PalindromeHeadingComponent } from "./palindrome-heading.component";

describe("PalidromeHeadingComponent", () => {
  let component: PalindromeHeadingComponent;
  let fixture: ComponentFixture<PalindromeHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PalindromeHeadingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Check if a word is a palindrome'`, () => {
    const fixture = TestBed.createComponent(PalindromeHeadingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Check if a word is a palindrome");
  });

  it("should render title in a h1 tag", () => {
    const fixture = TestBed.createComponent(PalindromeHeadingComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Check if a word is a palindrome"
    );
  });
});
