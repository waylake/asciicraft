import { useState } from "react";

interface AsciiArtOptions {
  text: string;
  fontSize: string;
  style: string;
}

export const useAsciiArt = () => {
  const [asciiArt, setAsciiArt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateAsciiArt = async (options: AsciiArtOptions) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/ascii3d", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
      });

      if (!response.ok) {
        throw new Error("Failed to generate ASCII art");
      }

      const data = await response.json();
      setAsciiArt(data.asciiArt);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return { asciiArt, generateAsciiArt, isLoading, error };
};
