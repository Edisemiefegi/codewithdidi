import { useState, } from "react";
import { Toaster } from "sonner";
import { TreatShelf } from "./components/TreatShelf";
import { Wall } from "./components/Wall";
import Chef from "./components/Chef";
import Followers from "./components/Followers";
import Pulsedot from "./components/Pulsedot";
import Music from "./components/Music";
import { Confetti } from "./components/Confetti";
function App() {
  const [treatCount, setTreatCount] = useState(300);


  return (
    <div className="w-full relative flex flex-col gap-8 p-8 h-full bg-gradient-to-r from-[#FFF9E5] from-10% via-[#FFEDB8]  via-70% to-[#E1E8D1] to-90%  ">
      <Toaster position="top-right" /> <Music />
      <Confetti />
      <Pulsedot className="absolute top-10 left-10" />
      <Pulsedot className="absolute right-10 top-20" />
      {/* Header */}
      <div className="flex flex-col  items-center text-center   gap-3 ">
        <h1 className="font-bold text-5xl bg-gradient-to-r from-[#F292B6] to-[#E0C3E9] bg-clip-text text-transparent flex items-center gap-2 animate-fade-in">
          <i className="pi pi-heart text-2xl text-[#F292B6] animate-bounce"></i>
          300 Thanks Bakery
          <i className="pi pi-heart text-2xl text-[#E0C3E9] animate-bounce"></i>
        </h1>

        <p className="text-[#CAA182] text-2xl">
          Sweet treats for our amazing dev community! 🧁
        </p>
        <p className="text-gray-500">
          Each follower is a delicious treat in our digital bakery ✨
        </p>
      </div>
      <div className="bg-white/70 p-4 rounded-xl text-center shadow-md border border-bakery-pink text-[#CAA182] font-medium">
        Built with code, love, and the support of amazing humans like YOU 💛
      </div>
      <section className="flex justify-between flex-col lg:flex-row gap-6">
        <div>
          <Chef />

          <Followers />
        </div>

        <TreatShelf treatCount={treatCount} />
      </section>
      <Wall />
    </div>
  );
}

export default App;
