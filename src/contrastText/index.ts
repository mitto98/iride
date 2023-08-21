import parseColor from "../parseColor";

export default function (backgroundColor: string): string {
  const { r, g, b } = parseColor(backgroundColor);
  if (r * 0.299 + g * 0.587 + b * 0.114 > 186) {
    return "#000000";
  } else {
    return "#ffffff";
  }
}
