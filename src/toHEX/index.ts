import parseColor from "../parseColor";

export default function (backgroundColor: string): string {
  const { r, g, b } = parseColor(backgroundColor);
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}
