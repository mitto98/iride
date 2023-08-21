import toHEX from ".";

describe("Test 'parseColor' function", () => {
  test("Convert Black", () => {
    expect(toHEX("#000000")).toBe("#000000");
  });

  test("Convert White", () => {
    expect(toHEX("#ffffff")).toBe("#ffffff");
  });

  test("A color", () => {
    expect(toHEX("#dadedi")).toBe("#dadedi");
  });
});
