import React from "react";
import Layout from "../../shared/components/Layout";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          About ASCII Art Generator
        </h1>
        <div className="prose lg:prose-xl">
          <p>
            ASCII Art Generator is a web application that allows you to create
            beautiful ASCII art from text. Our easy-to-use interface lets you
            customize your ASCII art with different font sizes and styles.
          </p>
          <h2>How It Works</h2>
          <p>
            When you enter text and select your preferred options, our
            application uses advanced algorithms to convert your input into
            ASCII characters, creating a visual representation of your text.
          </p>
          <h2>Why ASCII Art?</h2>
          <p>
            ASCII art has been a part of digital culture since the early days of
            computing. It's a creative way to express yourself using only text
            characters, making it perfect for situations where images aren't
            supported or when you want to add a unique, retro touch to your
            content.
          </p>
          <h2>Get In Touch</h2>
          <p>
            We're always looking to improve our ASCII Art Generator. If you have
            any suggestions or feedback, please don't hesitate to contact us at{" "}
            <a href="mailto:contact@asciiartgenerator.com">
              contact@asciiartgenerator.com
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
