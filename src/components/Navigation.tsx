"use client";

import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import TrikonLogo from "./TrikonLogo";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "FAQ", path: "/faq" },

  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center">

        {/* LEFT (logo) */}
        <div className="flex items-center flex-1">
          <Link to="/" className="flex items-center gap-3">
            <TrikonLogo />
            <span className="text-xl font-semibold bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
              Trikon
            </span>
          </Link>
        </div>

        {/* CENTER — NEW GLASSMORPHIC STYLE */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div
            className="
              flex items-center gap-10 px-10 py-3
              bg-white/5 border border-white/10 backdrop-blur-xl
              rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.2)]
            "
          >
            {links.map(({ name, path }) => {
              const active = location.pathname === path;

              return (
                <div key={path} className="relative">
                  <Link
                    to={path}
                    className={`
                      text-sm transition
                      ${active ? "text-blue-400" : "text-white/70 hover:text-white"}
                    `}
                  >
                    {name}
                  </Link>

                  {active && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-1.5 -translate-x-1.5 -bottom-1 w-6 h-1 bg-blue-400 rounded-full"
                      transition={{ type: "spring", stiffness: 260, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT (buttons) */}
        <div className="flex items-center justify-end flex-1 gap-3">
          <Button
            variant="ghost"
            className="text-white/70 hover:text-white hover:bg-white/10"
          >
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
