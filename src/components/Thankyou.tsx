
function Thankyou() {
 return (
    <div className="fixed bottom-8 right-8 z-50 animate-float-gentle">
      <div className="relative">
        {/* Balloon */}
        <div className="  bg-gradient-to-r from-[#F292B6] to-[#E0C3E9] rounded-full p-6 shadow-lg border-4 border-white">
          <i className="text-6xl pi pi-heart-fill text-white fill-white animate-bounce-gentle" ></i>
        </div>
        
        {/* String */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-[#CAA182]"></div>
        
        {/* Thank you message */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border-2 border-pink-300 whitespace-nowrap">
          <div className="text-bakery-brown font-bold text-center">
            Thank You! 💕
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-pink-300"></div>
        </div>
      </div>
    </div>
  );
}

export default Thankyou