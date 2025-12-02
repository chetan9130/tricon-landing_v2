"use client";

import * as React from "react";
import { motion, cubicBezier } from "motion/react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

// ---------------------------------------------
// Types
// ---------------------------------------------

interface MenuItem {
  icon: LucideIcon | React.FC;
  label: string;
  href: string;
  gradient: string;
  iconColor: string;
}

/**
 * Remove ALL DOM event handlers because motion-dom
 * replaces them with its own incompatible signatures.
 */
type CleanProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  | `${string}Capture`
  | `on${string}`
>;

interface MenuBarProps extends CleanProps {
  items: MenuItem[];
  activeItem?: string;
  onItemClick?: (label: string) => void;
}

// ---------------------------------------------
// Variants — fully v11 compatible
// ---------------------------------------------

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 }
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 }
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: {
        duration: 0.5,
        easing: cubicBezier(0.4, 0, 0.2, 1)
      },
      scale: {
        duration: 0.5,
        easing: cubicBezier(0.2, 0.9, 0.3, 1)
      }
    }
  }
};

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      easing: cubicBezier(0.4, 0, 0.2, 1)
    }
  }
};

const sharedTransition = {
  duration: 0.45,
  easing: cubicBezier(0.2, 0.9, 0.3, 1)
};

// ---------------------------------------------
// Component
// ---------------------------------------------

export const MenuBar = React.forwardRef<HTMLDivElement, MenuBarProps>(
  ({ className, items, activeItem, onItemClick, ...props }, ref) => {
    const { theme } = useTheme();
    const isDarkTheme = theme === "dark";

    return (
      <motion.nav
        ref={ref}
        className={cn(
          "p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden",
          className
        )}
        initial="initial"
        whileHover="hover"
        {...(props as CleanProps)} // safe props without DOM event handlers
      >
        {/* Background Glow */}
        <motion.div
          className="absolute -inset-2 rounded-3xl pointer-events-none z-0"
          style={{
            background: isDarkTheme
              ? "radial-gradient(circle, rgba(59,130,246,0.3), rgba(147,51,234,0.3), rgba(239,68,68,0.3))"
              : "radial-gradient(circle, rgba(59,130,246,0.18), rgba(147,51,234,0.18), rgba(239,68,68,0.18))"
          }}
          variants={navGlowVariants}
        />

        <ul className="flex items-center gap-2 relative z-10">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = item.label === activeItem;

            return (
              <motion.li key={item.label} className="relative">
                <button
                  onClick={() => onItemClick?.(item.label)}
                  className="block w-full"
                  type="button"
                >
                  <motion.div
                    className="block rounded-xl overflow-visible group relative"
                    style={{ perspective: "600px" }}
                    whileHover="hover"
                    initial="initial"
                  >
                    {/* Glow Background */}
                    <motion.div
                      className="absolute inset-0 z-0 rounded-xl pointer-events-none"
                      variants={glowVariants}
                      animate={isActive ? "hover" : "initial"}
                      style={{
                        background: item.gradient,
                        opacity: isActive ? 1 : 0
                      }}
                    />

                    {/* Front Face */}
                    <motion.div
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 relative z-10 rounded-xl transition-colors",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      )}
                      variants={itemVariants}
                      transition={sharedTransition}
                      style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "center bottom"
                      }}
                    >
                      <span
                        className={cn(
                          "transition-colors duration-300",
                          isActive ? item.iconColor : "text-foreground",
                          `group-hover:${item.iconColor}`
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>{item.label}</span>
                    </motion.div>

                    {/* Back Face */}
                    <motion.div
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 rounded-xl transition-colors",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      )}
                      variants={backVariants}
                      transition={sharedTransition}
                      style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "center top",
                        rotateX: 90
                      }}
                    >
                      <span
                        className={cn(
                          "transition-colors duration-300",
                          isActive ? item.iconColor : "text-foreground",
                          `group-hover:${item.iconColor}`
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>{item.label}</span>
                    </motion.div>
                  </motion.div>
                </button>
              </motion.li>
            );
          })}
        </ul>
      </motion.nav>
    );
  }
);

MenuBar.displayName = "MenuBar";
