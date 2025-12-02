import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import TrikonLogo from "@/components/TrikonLogo";
import SearchInput from "@/components/SearchInput";
import SuggestionChips from "@/components/SuggestionChips";
import ProjectCard from "@/components/ProjectCard";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading (you can replace with actual API load)
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const projects = [
    { emoji: "🎵", title: "spotify-clone" },
    { emoji: "🎬", title: "netflix-concept" },
    { emoji: "📊", title: "dashboard-ui" },
  ];

  if (loading) return <Loader />;

  return (
    
    <div className="min-h-screen bg-[#030303] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <HeroGeometric badge="Trikon" title1="Build Something" title2="Extraordinary" />
      </div>

      <div className="relative z-20">
        <header className="flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-3">
            <TrikonLogo />
            <span className="text-xl font-semibold bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">Trikon</span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-full"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-violet-500 flex items-center justify-center text-sm font-medium text-white">
              T
            </div>
            <span className="text-sm text-white/60">Get Started</span>
          </motion.div>
        </header>

        <main className="container mx-auto px-8 pt-[60vh] pb-32">
          <div className="mb-8">
            <SearchInput />
          </div>

          <div className="mb-24">
            <SuggestionChips />
          </div>

          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-2xl font-semibold mb-6 text-white/80">Featured Projects</h2>
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
