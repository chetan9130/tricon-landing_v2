import { motion } from "framer-motion";

const suggestions = [
  { emoji: "🎬", text: "Build a Netflix clone" },
  { emoji: "📊", text: "Build an admin dashboard" },
  { emoji: "📋", text: "Build a kanban board" },
  { emoji: "📁", text: "Build a file manager" },
  { emoji: "🎥", text: "Build a YouTube clone" },
  { emoji: "🛍️", text: "Build a store page" },
  { emoji: "✈️", text: "Build an AirBnb clone" },
  { emoji: "🎵", text: "Build a Spotify clone" },
];

const SuggestionChips = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
    >
      {suggestions.map((suggestion, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + index * 0.05 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2.5 backdrop-blur-xl bg-secondary/60 hover:bg-secondary/80 border border-border/50 rounded-xl text-sm text-foreground transition-all hover:shadow-lg hover:shadow-primary/10"
        >
          <span className="mr-2">{suggestion.emoji}</span>
          {suggestion.text}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default SuggestionChips;
