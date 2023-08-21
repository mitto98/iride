import parseColor from "../parseColor";

export default function (backgroundColor: string): string {
  const { r, g, b } = parseColor(backgroundColor);
  return `rgb(${r}, ${g}, ${b})`;
}
