import { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";

function Followers() {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, 300, { duration: 5 });
    return () => controls.stop();
  }, []);

  return (
    <div className="shadow-md w-60 bg-white text-2xl font-bold text-[#CAA182] text-center rounded-xl p-6 border border-pink-200">
      <p>
        <i className="pi pi-users text-pink-300"></i>{" "}
        <span className=" ">Followers</span>
      </p>
      <motion.pre className="text-pink-300 text-5xl font-bold">
        {rounded}
      </motion.pre>
      <p className="text-sm font-normal">Amazing People! 👩‍💻👨‍💻</p>
    </div>
  );
}

export default Followers;
