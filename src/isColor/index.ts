import parseColor from "../parseColor";

export default function (color: string): boolean {
  try {
    parseColor(color);
    return true;
  } catch (error) {
    return false;
  }
}
