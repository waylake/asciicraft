import type { Request, Response, NextFunction } from "express";
import { generateAsciiArt } from "../services/asciiArtService";
import type { AsciiArtOptions } from "../types";

export async function handleAsciiArtGeneration(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const { text, fontSize, style } = req.body as AsciiArtOptions;

  if (!text) {
    res.status(400).json({ error: "Text is required" });
    return;
  }

  try {
    const asciiArt = await generateAsciiArt({ text, fontSize, style });
    res.status(200).json({ asciiArt });
  } catch (error) {
    next(error);
  }
}
