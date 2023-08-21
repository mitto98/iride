import { Color } from "../types";

const HEX_REGEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
const RGB_REGEX = /^rgby?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})( ?, ?\d?.?\d)?\)/i;

export default function (color: string): Color {
  //TODO Parse short version
  let result = HEX_REGEX.exec(color);
  if (result)
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    };

  result = RGB_REGEX.exec(color);
  if (result)
    return {
      r: parseInt(result[1]),
      g: parseInt(result[2]),
      b: parseInt(result[3]),
    };

  //TODO Convert color names
  throw new Error("Invalid color format");
}
