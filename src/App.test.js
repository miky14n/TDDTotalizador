
import totalGlobal from "./App.js";


describe("totalGlobal", () => {
  it("deberia ser el total", () => {
    expect(totalGlobal(10,10,"UT")).toEqual(106.65);
  });
});