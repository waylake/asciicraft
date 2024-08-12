import figlet from "figlet";
import { AsciiArtOptions } from "../types";

export async function generateAsciiArt({
  text,
  fontSize = "medium",
  style = "standard",
}: AsciiArtOptions): Promise<string> {
  return new Promise((resolve, reject) => {
    const font = getFigletFont(fontSize, style);
    figlet.text(text, { font }, (err, data) => {
      if (err) {
        console.error("Figlet error:", err);
        reject(new Error("Failed to generate ASCII art"));
      } else {
        resolve(data || "No ASCII art generated");
      }
    });
  });
}

function getFigletFont(fontSize: string, style: string): figlet.Fonts {
  if (style === "block") return "3D-ASCII";
  if (style === "slim") return "Slant";

  switch (fontSize) {
    case "small":
      return "Small";
    case "large":
      return "Big";
    default:
      return "Standard";
  }
}
