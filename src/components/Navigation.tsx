"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TrikonLogo from "./TrikonLogo";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/[0.03] backdrop-blur-xl border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <TrikonLogo />
          <span className="text-xl font-semibold bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
            Trikon
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/features" className="text-sm text-white/60 hover:text-white transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="text-sm text-white/60 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link to="/faq" className="text-sm text-white/60 hover:text-white transition-colors">
            FAQ
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-white/[0.05]">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-teal-500 to-violet-500 hover:from-teal-600 hover:to-violet-600 text-white border-0">
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
