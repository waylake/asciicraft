import React, { useState } from "react";
import { useAsciiArt } from "../hooks/useAsciiArt";

const AsciiArtGenerator: React.FC = () => {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState("medium");
  const [style, setStyle] = useState("standard");
  const { asciiArt, generateAsciiArt, isLoading, error } = useAsciiArt();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateAsciiArt({ text, fontSize, style });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">ASCII Art Generator</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700"
          >
            Text
          </label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label
            htmlFor="fontSize"
            className="block text-sm font-medium text-gray-700"
          >
            Font Size
          </label>
          <select
            id="fontSize"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="style"
            className="block text-sm font-medium text-gray-700"
          >
            Style
          </label>
          <select
            id="style"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="standard">Standard</option>
            <option value="block">Block</option>
            <option value="slim">Slim</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={isLoading}
        >
          {isLoading ? "Generating..." : "Generate ASCII Art"}
        </button>
      </form>
      {error && <p className="mt-4 text-red-600">{error}</p>}
      {asciiArt && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Generated ASCII Art:
          </h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-xs">
            {asciiArt}
          </pre>
        </div>
      )}
    </div>
  );
};

export default AsciiArtGenerator;
