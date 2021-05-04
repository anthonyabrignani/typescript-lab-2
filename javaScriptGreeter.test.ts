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

});