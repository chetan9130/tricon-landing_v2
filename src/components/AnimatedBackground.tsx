import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Large glowing orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-glow-orange opacity-20"
        style={{ filter: "blur(100px)" }}
        animate={{
          x: ["-10%", "30%", "-10%"],
          y: ["10%", "50%", "10%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-glow-coral opacity-25"
        style={{ filter: "blur(80px)", right: 0 }}
        animate={{
          x: ["10%", "-20%", "10%"],
          y: ["20%", "60%", "20%"],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-glow-amber opacity-20"
        style={{ filter: "blur(90px)", left: "50%", bottom: 0 }}
        animate={{
          x: ["-50%", "-30%", "-50%"],
          y: ["0%", "-30%", "0%"],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Smaller floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
