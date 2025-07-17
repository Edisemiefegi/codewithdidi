
function Pulsedot({ className }: { className?: string }) {
  return (
  <span className={`w-4 h-4 rounded-full bg-pink-200 animate-pulse ${className}`} />  )
}

export default Pulsedot