import { motion } from "framer-motion";

export interface ProjectCardProps {
  emoji: string;
  title: string;
  delay: number;
}

const ProjectCard = ({ emoji, title, delay }: ProjectCardProps) => {
  return (
    <motion.div>
      {emoji} {title}
    </motion.div>
  );
};

export default ProjectCard;
