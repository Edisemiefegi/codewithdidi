
function Chef() {
  return (
    <div className="rounded-full relative bg-white w-fit flex flex-col justify-center items-center gap-3 animate-bounce-gentle  p-8 border-4 border-pink-300">
      <div className="border-2 border-pink-300 rounded-full w-fit   ">
        <img src="/baker.jpg" className="w-20  rounded-full" />
      </div>
      <p className="text-[#CAA182] text-xl font-bold">Chef Developer Didi <span className="text-xs">@codewithdidi</span></p>
      <p className="text-pink-300 font-medium">Baking up some gratitude! 🍰</p>
      <div className=" bg-[#fff8f2] text-sm absolute -right-6 animate-bounce-gentle -bottom-14  font-medium text-[#CAA182] text-center rounded-xl p-3 border-2 w-30 border-pink-300">
        <p>Thank you for 300+ followers! 💕</p>
      </div>
    </div>
  );
}

export default Chef;
