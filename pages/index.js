import { useEffect, useState } from "react";

export default function Home() {
  const greetings = [
    "Assalamu Alaykum",
    "hallo. guten Tag.",
    "i’m tanisha."
  ];

  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000); // 2 seconds each
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-10 bg-white text-gray-800 font-serif transition-all">
      <div className="max-w-3xl text-center">
        <h1 className="text-2xl md:text-4xl mb-6 leading-snug">
          <span className="block text-lg text-gray-500 h-6 transition-opacity duration-500 ease-in-out">
            {greetings[currentGreeting]}
          </span>
          {currentGreeting === 2 && (
            <>
              Hi, I’m <span className="font-bold">Tanisha</span>.
            </>
          )}
        </h1>

        <p className="text-lg md:text-xl leading-relaxed mb-6">
          I create digital spaces where intelligence meets emotion — where AI isn't just a tool, but a thoughtful companion. 
          I built <span className="italic font-medium">TALKwithAI</span> because I believe technology should listen as much as it speaks.
          <br /><br />
          With a background in research data, a love for storytelling, and an obsession with intuitive design —
          I now spend my days crafting AI products and frontend experiences that feel... <span className="italic">human</span>.
        </p>
        
        <p className="text-base text-gray-600">
          This is my corner of the internet. <span className="font-semibold">Welcome.</span>
        </p>
      </div>
    </main>
  );
}
