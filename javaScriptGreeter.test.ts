import { JavaScriptGreeter } from "./javaScriptGreeter";

describe("Room", function () {
  test("class is defined", () => {
    let jGreeting: JavaScriptGreeter = new JavaScriptGreeter("");
    expect(jGreeting).toBeDefined();
  });
  test("initial values are set from constructor params", () => {
    let jGreeting: JavaScriptGreeter = new JavaScriptGreeter("Hello");
    expect(jGreeting.greeting).toBe("Hello");
  });
  test("greet method is defined", () => {
    let jGreeting: JavaScriptGreeter = new JavaScriptGreeter("");
    expect(jGreeting.greet("")).toBeDefined();
  });
  test("greet sets a name", () => {
    let jGreeting: JavaScriptGreeter = new JavaScriptGreeter("Hello");
    let result: string = jGreeting.greet("Anthony");
    expect(result).toBe("console.log(Hello, Anthony!)");
  });
  test("greeting is `console.log(Big moves, Joseph Johns!)`", () => {
    let jGreeting: JavaScriptGreeter = new JavaScriptGreeter("Big moves");
    jGreeting.greet("Joseph Johns");
    expect(jGreeting.greet("Joseph Johns")).toBe("console.log(Big moves, Joseph Johns!)");
  });
  test("greeting is `console.log(High five, Emily!)`", () => {
    let jGreeting: JavaScriptGreeter = new JavaScriptGreeter("High five");
    jGreeting.greet("Emily");
    expect(jGreeting.greet("Emily")).toBe("console.log(High five, Emily!)");
  });

});