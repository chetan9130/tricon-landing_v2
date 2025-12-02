import { motion } from "framer-motion";

const TrikonLogo = () => {
  return (
    <motion.div
      className="relative w-12 h-12"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.3 }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="trikonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        {/* Outer triangle */}
        <polygon
          points="50,5 95,85 5,85"
          fill="none"
          stroke="url(#trikonGradient)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Inner triangle */}
        <polygon
          points="50,25 75,70 25,70"
          fill="url(#trikonGradient)"
          opacity="0.3"
        />
        {/* Accent line */}
        <line
          x1="25"
          y1="70"
          x2="50"
          y2="25"
          stroke="url(#trikonGradient)"
          strokeWidth="3"
        />
      </svg>
    </motion.div>
  );
};

export default TrikonLogo;
