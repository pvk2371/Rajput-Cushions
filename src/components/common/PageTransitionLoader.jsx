import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";
export default function PageTransitionLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, [location.pathname]);
  return <AnimatePresence mode="wait">
      {loading && <motion.div
    key="furnilux-transition-screen"
    initial={{ opacity: 1 }}
    exit={{
      opacity: 0,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
    }}
    className="fixed inset-0 bg-cream z-[99999] flex flex-col items-center justify-center font-sans overflow-hidden select-none"
  >
          {
    /* Main loader design group */
  }
          <div className="flex flex-col items-center max-w-xs px-6 text-center">
            
            {
    /* Outer golden orbiting glow around branding logo box */
  }
            <div className="relative mb-6 flex items-center justify-center">
              {
    /* Spinning orbiting golden frame */
  }
              <motion.div
    className="absolute w-36 h-36 rounded-3xl border border-primary-gold/45"
    animate={{
      rotate: 360,
      scale: [1, 1.05, 1],
      borderColor: [
        "rgba(212, 175, 55, 0.3)",
        "rgba(212, 175, 55, 0.75)",
        "rgba(212, 175, 55, 0.3)"
      ]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
              
              {
    /* Inner Logo Box */
  }
              <motion.div
    initial={{ scale: 0.82, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      type: "spring",
      stiffness: 140,
      damping: 14,
      delay: 0.05
    }}
    className="w-32 h-32 rounded-3xl bg-dark-brown flex items-center justify-center border-2 border-primary-gold text-primary-gold font-serif font-bold text-4xl shadow-2xl relative z-10 overflow-hidden"
  >
                <span className="absolute z-0">R</span>
                <img
    src="https://lh3.googleusercontent.com/d/1DYu-YGZEKQfK5hsegv-7wfbqEi8rDaZa"
    alt="Rajput Cushion Logo"
    className="w-full h-full object-cover relative z-10 bg-dark-brown"
    referrerPolicy="no-referrer"
  />
              </motion.div>
            </div>

            {
    /* Brand Title Layout */
  }
            <motion.div
    initial={{ y: 12, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.15, duration: 0.4 }}
    className="space-y-1"
  >
              <h1 className="font-serif font-bold text-3xl tracking-tight text-dark-brown">
                Rajput<span className="text-primary-gold font-sans font-light"> Cushion</span>
              </h1>
              
              <div className="flex items-center justify-center gap-1 text-[9px] text-text-gray tracking-widest font-sans font-semibold uppercase">
                <Sparkles className="w-3 h-3 text-primary-gold animate-pulse shrink-0" />
                <span>Sofa & Upholstery Experts</span>
                <Sparkles className="w-3 h-3 text-primary-gold animate-pulse shrink-0" />
              </div>
            </motion.div>

            {
    /* Horizontal Golden Loading slider bar */
  }
            <div className="w-44 h-[2px] bg-dark-brown/10 rounded-full mt-7 overflow-hidden relative">
              <motion.div
    className="absolute top-0 bottom-0 left-0 bg-primary-gold"
    initial={{ width: "0%" }}
    animate={{ width: "100%" }}
    transition={{
      duration: 0.65,
      ease: "easeInOut"
    }}
  />
            </div>

            {
    /* Loading microcopy */
  }
            <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: [0.4, 0.85, 0.4] }}
    transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
    className="text-[9px] text-text-gray tracking-wider font-mono uppercase mt-3"
  >
              Styling Interior Spaces...
            </motion.p>

          </div>
        </motion.div>}
    </AnimatePresence>;
}
