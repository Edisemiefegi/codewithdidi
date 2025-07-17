import { useState } from "react";
import { toast } from "sonner";
interface TreatProps {
  type: "cupcake" | "donut" | "cookie";
  delay: number;
}

const thankYouMessages = [
  "300 of you? That’s pure sweetness! 🍯",
  "You just made my day — for real! 💛",
  "Feeling grateful for every follow! 🫶",
  "Thanks for being part of my journey! 🚀",
  "You’re not just a number — you’re the reason I keep creating! 🎨",
  "This little bakery runs on love and support like yours! 🧁",
  "Thanks for cheering me on — it means the world! 🌍",
  "You turned a small dream into a shared moment 💫",
  "From me and my laptop — THANK YOU! 💻❤️",
  "Every single follow = a big smile from me 😊",
  "You’re the real MVP! 🙌",
  "Here for the code, the chaos, and the cupcakes — thanks! 🎉",
  "Just a dev trying to make cool stuff — and you noticed 🥹",
  "300 hearts beating behind the screen — thank you! 💓",
  "I don't take your support lightly. It means EVERYTHING 🫂",
  "Thanks for pressing that follow button — I felt it 💥",
  "Building things is cool. Building WITH you is cooler 🔥",
  "A treat for each of you — thank you! 🍪🍩🧁",
  "You believed in the vibes — thank you ✨",
  "Support like yours makes the pixels dance 💃",
  "You made this more than just content. You made it community 💬",
  "Your follow = more fuel to keep creating 💡",
  "From 0 to 300 — thanks for being part of the ride 🎢",
  "This one’s for you — yes YOU 🫵💖",
  "Big love, bigger goals, and even more gratitude 💕",
  "Thanks for seeing me, supporting me, and sticking around 🥰",
  "Y’all really showed up! Let’s keep building together 🛠️",
  "Whether you’re here for code or cupcakes — I appreciate you 🍰",
  "300 reasons to keep smiling — you're one of them 😄",
  "Here’s to more fun, more builds, and more YOU 🧠💥",
];

const treatEmojis = {
  cupcake: "🧁",
  donut: "🍩",
  cookie: "🍪",
};

const treatColors = {
  cupcake: "from-bakery-pink to-bakery-lavender",
  donut: "from-bakery-golden to-bakery-brown",
  cookie: "from-bakery-cream to-bakery-golden",
};

export const Treat = ({ type, delay }: TreatProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    const randomMessage =
      thankYouMessages[Math.floor(Math.random() * thankYouMessages.length)];
    toast(randomMessage);
    // alert(randomMessage)

    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);
  };

  return (
    <div
      className={`w-12 h-12 rounded-full bg-gradient-to-br ${
        treatColors[type]
      } flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-110 hover:shadow-lg animate-slide-up ${
        isClicked ? "animate-wiggle" : ""
      }`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={handleClick}
    >
      <span className="text-2xl">{treatEmojis[type]}</span>
    </div>
  );
};
