import { htmlGreeter } from "./htmlGreeter";

describe("Room", function () {
    test("class is defined", () => {
      let hGreeting: htmlGreeter = new htmlGreeter("");
      expect(hGreeting).toBeDefined();
    });
    test("initial values are set from constructor params", () => {
      let hGreeting: htmlGreeter = new htmlGreeter("Hello");
      expect(hGreeting.greeting).toBe("Hello");
    });
    test("greet method is defined", () => {
      let hGreeting: htmlGreeter = new htmlGreeter("");
      expect(hGreeting.greet("")).toBeDefined();
    });
    test("greet sets a name, default is h1", () => {
      let hGreeting: htmlGreeter = new htmlGreeter("Hello");
      let result: string = hGreeting.greet("Anthony");
      expect(result).toBe("<h1> Hello, Anthony! <h1>");
    });
    test("greeting is `Big moves, Joseph Johns!`, use <a> tag", () => {
      let hGreeting: htmlGreeter = new htmlGreeter("Big moves");
      hGreeting.greet("Joseph Johns");
      hGreeting.tagName = "<a>"
      expect(hGreeting.greet("Joseph Johns")).toBe("<a> Big moves, Joseph Johns! <a>");
    });
    test("greeting is `High five, Emily!`, uses <p> tag", () => {
      let hGreeting: htmlGreeter = new htmlGreeter("High five");
      hGreeting.greet("Emily");
      hGreeting.tagName = "<p>"
      expect(hGreeting.greet("Emily")).toBe("<p> High five, Emily! <p>");
    });
  
  });