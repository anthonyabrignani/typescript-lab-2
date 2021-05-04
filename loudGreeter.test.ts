import { LoudGreeter } from "./loudGreeter";

describe("Room", function () {
  test("class is defined", () => {
    let lGreeting: LoudGreeter = new LoudGreeter("");
    expect(lGreeting).toBeDefined();
  });
  test("initial values are set from constructor params", () => {
    let lGreeting: LoudGreeter = new LoudGreeter("Hello");
    expect(lGreeting.greeting).toBe("Hello");
  });
  test("initial values are set from constructor params", () => {
    let lGreeting: LoudGreeter = new LoudGreeter("Hello");
    let result: string = lGreeting.greet("Anthony");
    expect(result).toBe("Hello, Anthony!!");
  });
  test("initial values are set from constructor params", () => {
    let lGreeting: LoudGreeter = new LoudGreeter("Hello");
    lGreeting.addVolume();
    let result: string = lGreeting.greet("Anthony");
    expect(result).toBe("Hello, Anthony!!!");
  });

});
