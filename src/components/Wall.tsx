import { useState, useEffect } from "react";

const devUsernames = [
  {
    name: "@Pedro⚡",
    icon: "👑",
    message: "❤️, Love women that code, I'm a frontend React developer",
  },
  {
    name: "@Creed Tech | Web Developer",
    icon: "🐰",
    message: "thats why i followed her... she can build anything",
  },

  {
    name: "@d.f.w kikie",
    icon: "🍪",
    message: "i just followed you cause i'm thinking of starting this too!",
  },
  {
    name: "@Michaello11",
    icon: "✨",
    message:
      "so let me follow, hope we can be friends, so i can watch you grow",
  },
  {
    name: "@Bimithecreator",
    icon: "❤️",
    message: "Wowwwww... I'm so proud of you🥹❤️",
  },
  { name: "@Whyte Peter", icon: "❤️", message: "You are beautiful😊" },

  {
    name: "@JiMMY",
    icon: "🐰",
    message:
      "I'm a big fan of your work. I'm an aspiring fullstack dev. I'm here to make new friends and connect",
  },
  {
    name: "@for.Timi💅🏿⚡",
    icon: "✨",
    message: "You're doing amazing 👏 plus what are bugs?",
  },
  {
    name: "@Grace||Becoming a DevReal . Friends",
    icon: "🦊",
    message: "You're doing so good💛",
  },
  {
    name: "@phoscodes💻💡",
    icon: "📱",
    message: "keep up the good work, stay consistent",
  },
  { name: "@PrincewillDevX_⚡", icon: "⏱️", message: "this is beautiful" },
  {
    name: "@Simi | Software Developer",
    icon: "☕",
    message: "this is really pretty!",
  },
  {
    name: "@FITVA",
    icon: "🏹",
    message:
      "i'm sat and can't wait to see what it'll look like for you in DAY 60!",
  },
  { name: "@Fashion by Keme", icon: "❤️", message: "Proud of you❤️" },
];

export const Wall = () => {
  const [visibleUsers, setVisibleUsers] = useState<typeof devUsernames>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < devUsernames.length) {
        setVisibleUsers((prev) => [...prev, devUsernames[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const getRandomIcon = () => {
    const icons = [
      <i className="pi pi-heart"></i>,
      <i className="pi pi-star"></i>,
      <i className="pi pi-code"></i>,
    ];
    return icons[Math.floor(Math.random() * icons.length)];
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-bakery-brown mb-2">
          Wall of Dev Love 💖
        </h2>
        <p className="text-bakery-brown/70">
          To those behind the screen, thank you. To my sisters, who supports me
          even without knowing tech, to my babe, who pushes me to be better
          every day, and to everyone who liked, followed, commented, shared, or
          reposted X You’ve helped more than you know. I see you. I appreciate
          you. — Dev Didi💛{" "}
        </p>
      </div>

      <div className="bg-bakery-cream/80 backdrop-blur-sm rounded-3xl p-6 border-2 border-bakery-pink/20 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
          {visibleUsers.map((user, index) => (
            <div
              key={user.name}
              className="bg-primary/10 rounded-2xl p-4 border border-bakery-pink/30 animate-slide-up hover:bg-primary/20 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">{user.icon}</span>
                <span className="font-semibold text-bakery-brown text-sm">
                  {user.name}
                </span>
                <div className="text-bakery-pink">{getRandomIcon()}</div>
              </div>
              <p className="text-bakery-brown/80 text-sm italic">
                "{user.message}"
              </p>
            </div>
          ))}
        </div>

        {visibleUsers.length === 0 && (
          <div className="text-center py-8">
            <div className="animate-sparkle text-4xl mb-4">💝</div>
            <p className="text-bakery-brown/70">Loading love messages...</p>
          </div>
        )}

        {visibleUsers.length > 0 &&
          visibleUsers.length < devUsernames.length && (
            <div className="text-center mt-4">
              <div className="animate-bounce text-bakery-pink">
                <i className="inline-block pi pi-heart"></i>
              </div>
              <p className="text-bakery-brown/70 text-sm mt-2">
                More love coming in...
              </p>
            </div>
          )}
      </div>
    </div>
  );
};
