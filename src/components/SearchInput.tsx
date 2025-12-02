import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

const SearchInput = () => {
  const [value, setValue] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="relative w-full max-w-3xl mx-auto"
    >
      <div className="relative backdrop-blur-xl bg-card/40 border border-border/50 rounded-2xl shadow-2xl overflow-hidden">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="What would like to build"
          className="w-full px-6 py-5 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-lg"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all"
        >
          <Send className="w-5 h-5" />
        </motion.button>
      </div>
      
      <p className="text-muted-foreground text-sm text-center mt-4">
        <span className="inline-block">+ Enter</span>
        <span className="mx-2">to submit</span>
      </p>
    </motion.div>
  );
};

export default SearchInput;
