import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { UiComponent } from "./ui.component";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

describe("Ui Addition - Component", () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should call addition method", () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.addition();
    result = component.result;

    // Assert
    expect(result).toBe(4);
  });

  it("Should call substraction method", () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.substraction();
    result = component.result;

    // Assert
    expect(result).toBe(0);
  });

  it("Should call exp method", () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.exp();
    result = component.result;

    // Assert
    expect(result).toBe(4);
  });

  it("Should call multiplication method", () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.multiplication();
    result = component.result;

    // Assert
    expect(result).toBe(4);
  });

  it("should call division method", () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;
    component.operator2 = 2;

    // Act
    component.division();
    result = component.result;

    // Assert
    expect(result).toBe(1);
  });

  it("should call sqrt method", () => {
    // Arrange
    let result = 0;
    component.operator1 = 4;

    // Act
    component.sqrt();
    result = component.result;

    // Assert
    expect(result).toBe(2);
  });

  it("should call sqr method", () => {
    // Arrange
    let result = 0;
    component.operator1 = 2;

    // Act
    component.sqr();
    result = component.result;

    // Assert
    expect(result).toBe(4);
  });

  it ("should call porcentaje method", () => {
    // Arrange
    let result = 0;
    component.operator1 = 50;
    component.operator2 = 16;

    // Act
    component.porcentaje();
    result = component.result;

    // Assert
    expect(result).toBe(8);
  });

  it("Should set operator1 model through ngModel", async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator1"]')
    ).nativeElement;

    // Act
    inputElement.value = "3.1416";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    // Assert
    expect(component.operator1).toEqual(3.1416);
  });

  it("Should set operator2 model through ngModel", async () => {
    // Arrange
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator2"]')
    ).nativeElement;

    // Act
    inputElement.value = "2.71";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();

    // Assert
    expect(component.operator2).toEqual(2.71);
  });

  it("should add operator1 and operator2 when i click the addition button ", () => {
    // Arrange
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let additionButton = fixture.debugElement.query(By.css(".addition-button"));

    // Act
    additionButton.triggerEventHandler("click", null);

    // Assert
    expect(component.result).toBe(7.5);
  });

  it("should substract operator1 and operator2 when i click the substraction button ", () => {
    // Arrange
    component.operator1 = 5.0;
    component.operator2 = 2.5;
    let substractionButton = fixture.debugElement.query(
      By.css(".substraction-button")
    );

    // Act
    substractionButton.triggerEventHandler("click", null);

    // Assert
    expect(component.result).toBe(2.5);
  });

  it("should exp operator1 and operator2 when i click the exp button ", () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 2;
    let expButton = fixture.debugElement.query(By.css(".exp-button"));

    // Act
    expButton.triggerEventHandler("click", null);

    // Assert
    expect(component.result).toBe(25);
  });

  it("should multiplication operator1 and operator2 when i click the multiplication button ", () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 2;
    let multiplicationButton = fixture.debugElement.query(
      By.css(".miltiplication-button")
    );

    // Act
    multiplicationButton.triggerEventHandler("click", null);

    // Assert
    expect(component.result).toBe(10);
  });

  it("should division operator1 and operator2 when i click the division button ", () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 2;
    let divisionButton = fixture.debugElement.query(By.css(".division-button"));

    // Act
    divisionButton.triggerEventHandler("click", null);

    // Assert
    expect(component.result).toBe(2.5);
  });

  it("should sqrt operator1 when i click the sqrt button ", () => {
    // Arrange
    component.operator1 = 4;
    let sqrtButton = fixture.debugElement.query(By.css(".square-button"));

    // Act
    sqrtButton.triggerEventHandler("click", null);

    // Assert
    expect(component.result).toBe(2);
  });

  it("should sqr operator1 when i click the sqr button ", () => {
    // Arrange
    component.operator1 = 2;
    let sqrButton = fixture.debugElement.query(By.css(".sqr-button"));

    // Act
    sqrButton.triggerEventHandler("click", null);

    // Assert
    expect(component.result).toBe(4);
  });

  it("should porcentaje operator1 and operator2 when i click the porcentaje button ", () => {
    // Arrange
    component.operator1 = 50;
    component.operator2 = 16;
    let porcentajeButton = fixture.debugElement.query(By.css(".porcentaje-button"));

    // Act
    porcentajeButton.triggerEventHandler("click", null);

    // Assert
    expect(component.result).toBe(8);
  });

  it("Should render sum in result div", () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;

    // Act
    component.addition();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("10");
  });

  it("Should render substraction in result div", () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;

    // Act
    component.substraction();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("0");
  });

  it("Should render exp in result div", () => {
    // Arrange
    component.operator1 = 8;
    component.operator2 = 2;

    // Act
    component.exp();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("64");
  });

  it("Should render multiplication in result div", () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;

    // Act
    component.multiplication();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("25");
  });

  it("Should render division in result div", () => {
    // Arrange
    component.operator1 = 5;
    component.operator2 = 5;

    // Act
    component.division();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("1");
  });

  it("Should render sqrt in result div", () => {
    // Arrange
    component.operator1 = 4;

    // Act
    component.sqrt();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("2");
  });

  it("Should render sqr in result div", () => {
    // Arrange
    component.operator1 = 2;

    // Act
    component.sqr();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("4");
  });

  it("Should render porcentaje in result div", () => {
    // Arrange
    component.operator1 = 50;
    component.operator2 = 16;

    // Act
    component.porcentaje();
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css(".result"));
    let el: HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain("8");
  });
});
