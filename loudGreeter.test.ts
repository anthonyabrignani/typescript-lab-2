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
  test("add volume works and adds 1 !", () => {
    let lGreeting: LoudGreeter = new LoudGreeter("Hello");
    lGreeting.addVolume();
    let result: string = lGreeting.greet("Anthony");
    expect(result).toBe("Hello, Anthony!!!");
  });
  test("add multiple !s, `Big moves, Joseph Johns!!!!!!`", () => {
    let lGreeting: LoudGreeter = new LoudGreeter("Big moves");
    lGreeting.addVolume();
    lGreeting.addVolume();
    lGreeting.addVolume();
    lGreeting.addVolume();
    lGreeting.greet("Joseph Johns");
    expect(lGreeting.greet("Joseph Johns")).toBe("Big moves, Joseph Johns!!!!!!");
  });
  test("no volume added, greeting is `High five, Emily!!`", () => {
    let lGreeting: LoudGreeter = new LoudGreeter("High five");
    lGreeting.greet("Emily");
    expect(lGreeting.greet("Emily")).toBe("High five, Emily!!");
  });

});
