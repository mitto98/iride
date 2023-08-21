import parseColor from ".";

describe("Test 'parseColor' function", () => {
  test("Parse HEX string", () => {
    const { r, g, b } = parseColor("#d0d0d0");
    expect(r).toBe(208);
    expect(g).toBe(208);
    expect(b).toBe(208);
  });

  test("Parse RGB string", () => {
    const { r, g, b } = parseColor("rgb(208,208, 208)");
    expect(r).toBe(208);
    expect(g).toBe(208);
    expect(b).toBe(208);
  });

  test("Parse uppercase RGB string", () => {
    const { r, g, b } = parseColor("RGB(208, 208,208)");
    expect(r).toBe(208);
    expect(g).toBe(208);
    expect(b).toBe(208);
  });

  test("Parse RGBY string", () => {
    const { r, g, b } = parseColor("rgby(208, 208, 208, 0.7)");
    expect(r).toBe(208);
    expect(g).toBe(208);
    expect(b).toBe(208);
  });

  test("Invalid color throws exception", () => {
    expect(() => parseColor("blallo")).toThrow("Invalid color format");
  });
});
