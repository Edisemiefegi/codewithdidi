import { useState, useEffect } from "react";
import { Treat } from "../components/Treat";

interface TreatShelfProps {
  treatCount: number;
}

export const TreatShelf = ({ treatCount }: TreatShelfProps) => {
  const [treats, setTreats] = useState<
    Array<{ id: number; type: "cupcake" | "donut" | "cookie"; delay: number }>
  >([]);

  useEffect(() => {
    const treatTypes: Array<"cupcake" | "donut" | "cookie"> = [
      "cupcake",
      "donut",
      "cookie",
    ];
    const newTreats = [];

    for (let i = 0; i < treatCount; i++) {
      newTreats.push({
        id: i,
        type: treatTypes[Math.floor(Math.random() * treatTypes.length)],
        delay: Math.random() * 2000, // Random delay up to 2 seconds
      });
    }

    setTreats(newTreats);
  }, [treatCount]);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-bakery-pink/20">
      <h2 className="text-3xl font-bold text-bakery-brown text-center mb-6">
        🍯 Treat Display 🍯
      </h2>

      <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 max-h-96 overflow-y-auto">
        {treats.map((treat) => (
          <Treat key={treat.id} type={treat.type} delay={treat.delay} />
        ))}
      </div>

      <div className="mt-4 text-center text-bakery-brown">
        <p className="text-lg font-medium">
          {treatCount} delicious treats baked with love! 🧁
        </p>
        <p className="text-sm opacity-75">
          Click on any treat for a sweet message! ✨
        </p>
      </div>
    </div>
  );
};
