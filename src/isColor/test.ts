import isColor from ".";

describe("Test 'isColor' function", () => {
  test("Detect valid color", () => {
    expect(isColor("#dedede")).toBe(true);
  });
  test("Detect invalid color", () => {
    expect(isColor("blallo")).toBe(false);
    expect(isColor("#dede")).toBe(false);
  });
});
