import { Greeter } from "./greeter";

describe("Room", function () {
  test("class is defined", () => {
    let greeting: Greeter = new Greeter("");
    expect(greeting).toBeDefined();
  });
  test("initial values are set from constructor params", () => {
    let greeting: Greeter = new Greeter("Hello");
    expect(greeting.greeting).toBe("Hello");
  });
  test("greet method is defined", () => {
    let greeting: Greeter = new Greeter("");
    expect(greeting.greet("")).toBeDefined();
  });
  test("greet sets a name", () => {
    let greeting: Greeter = new Greeter("Hello");
    greeting.greet("Anthony");
    expect(greeting.greet("Anthony")).toBe("Hello, Anthony!");
  });
  test("greeting is `Sup, Brian!`", () => {
    let greeting: Greeter = new Greeter("Sup");
    greeting.greet("Brian");
    expect(greeting.greet("Brian")).toBe("Sup, Brian!");
  });
  test("greeting is `Big moves, Joseph Johns!`", () => {
    let greeting: Greeter = new Greeter("Big moves");
    greeting.greet("Joseph Johns");
    expect(greeting.greet("Joseph Johns")).toBe("Big moves, Joseph Johns!");
  });
  test("greeting is `High five, Emily!`", () => {
    let greeting: Greeter = new Greeter("High five");
    greeting.greet("Emily");
    expect(greeting.greet("Emily")).toBe("High five, Emily!");
  });
});
