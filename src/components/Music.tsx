import { useRef, useState, useEffect } from "react";
function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden && audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <div className="absolute top-6 right-6 z-50">
      <audio ref={audioRef} loop src="/believe.mp3" />

      <button
        onClick={toggleMusic}
        className="bg-white/70 hover:bg-white/90 transition-colors text-[#CAA182] border border-bakery-pink shadow-md p-2 rounded-full flex items-center gap-2 text-sm font-medium"
      >
        {isPlaying ? (
          <>
            <i className="pi pi-pause text-pink-400"></i> Pause Music
          </>
        ) : (
          <>
            <i className="pi pi-play text-pink-400"></i> Play Music
          </>
        )}
      </button>
    </div>
  );
}

export default Music