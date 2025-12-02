import { motion } from "framer-motion";

interface ProjectCardProps {
  emoji: string;
  title: string;
  delay: number;
}

const ProjectCard = ({ emoji, title, delay }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="backdrop-blur-xl bg-card/40 border border-border/50 rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all cursor-pointer group"
    >
      <div className="flex items-start gap-4">
        <div className="text-4xl group-hover:scale-110 transition-transform">
          {emoji}
        </div>
        <div className="flex-1">
          <h3 className="text-foreground font-medium text-lg mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm">
            Click to view project
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
