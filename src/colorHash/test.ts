import isColor from "../isColor";
import colorHash from ".";

describe("Test 'colorHash' function", () => {
  test("The function return a valid color", () => {
    const color1 = colorHash(
      "Cantami, o Diva, del Pelìde Achille l'ira funesta che infiniti addusse lutti agli Achei"
    );
    //My name produce a particular color string lol
    const color2 = colorHash("Dapino Mattia");

    expect(isColor(color1)).toBe(true);
    expect(isColor(color2)).toBe(true);
  });
});
