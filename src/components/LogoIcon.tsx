import { motion } from "framer-motion";

const LogoIcon = () => {
  return (
    <motion.div
      className="relative w-12 h-12"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-glow-coral to-accent rounded-2xl" />
      <div className="absolute inset-[2px] bg-background rounded-2xl flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 h-6"
        >
          <path
            d="M12 2L4 7v10l8 5 8-5V7l-8-5z"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7v10M8 9l4 4 4-4"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--glow-orange))" />
              <stop offset="100%" stopColor="hsl(var(--glow-amber))" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  );
};

export default LogoIcon;
