import React from "react";
import Layout from "../../shared/components/Layout";
import AsciiArtGenerator from "../../shared/components/AsciiArtGenerator";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to ASCII Art Generator
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Transform your text into amazing ASCII art with just a few clicks!
        </p>
        <AsciiArtGenerator />
      </div>
    </Layout>
  );
};

export default HomePage;
