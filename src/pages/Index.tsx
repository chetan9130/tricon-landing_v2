import { motion } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";
import LogoIcon from "@/components/LogoIcon";
import SearchInput from "@/components/SearchInput";
import SuggestionChips from "@/components/SuggestionChips";
import ProjectCard from "@/components/ProjectCard";

const Index = () => {
  const projects = [
    { emoji: "🎵", title: "spotify-clone" },
    { emoji: "🎬", title: "netflix-concept" },
    { emoji: "📊", title: "dashboard-ui" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-3">
            <LogoIcon />
            <span className="text-xl font-semibold">Vibe</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-card/40 border border-border/50 rounded-full"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-medium">
              M
            </div>
            <span className="text-sm">manas kulkarni</span>
          </motion.div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-8 pt-20 pb-32">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center mb-6">
              <LogoIcon />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Build something with Vibe
            </h1>
            <p className="text-xl text-muted-foreground">
              Create apps and websites by chatting with AI.
            </p>
          </motion.div>

          {/* Search Input */}
          <div className="mb-8">
            <SearchInput />
          </div>

          {/* Suggestion Chips */}
          <div className="mb-24">
            <SuggestionChips />
          </div>

          {/* Projects Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-2xl font-semibold mb-6">manas's Vibes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  emoji={project.emoji}
                  title={project.title}
                  delay={0.7 + index * 0.1}
                />
              ))}
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
};

export default Index;
