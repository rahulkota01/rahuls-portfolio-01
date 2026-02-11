import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative group w-10 h-10 rounded-full glass-button flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {/* Background gradient that changes with theme */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          theme === "light"
            ? "bg-gradient-to-br from-blue-100/50 to-indigo-100/30"
            : "bg-gradient-to-br from-indigo-900/40 to-purple-900/30"
        }`}
      />

      {/* Sun icon for light mode */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"
        }`}
      >
        <Sun
          size={18}
          className="text-amber-500 drop-shadow-sm"
          style={{ filter: "drop-shadow(0 0 3px rgba(245, 158, 11, 0.5))" }}
        />
      </div>

      {/* Moon icon for dark mode */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
        }`}
      >
        <Moon
          size={18}
          className="text-indigo-300 drop-shadow-sm"
          style={{ filter: "drop-shadow(0 0 3px rgba(129, 140, 248, 0.5))" }}
        />
      </div>

      {/* Animated ring effect on hover */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className={`absolute inset-0 rounded-full border-2 ${
            theme === "light" ? "border-blue-300/50" : "border-indigo-500/50"
          }`}
          style={{ animation: "pulse-ring 2s ease-in-out infinite" }}
        />
      </div>

      <style>{`
        @keyframes pulse-ring {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>
    </button>
  );
};

export default ThemeToggle;
