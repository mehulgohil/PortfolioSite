import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "./theme-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full hover:bg-secondary/80"
      data-testid="button-theme-toggle"
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{ 
          scale: theme === "dark" ? 1 : 0,
          rotate: theme === "dark" ? 0 : 180,
          opacity: theme === "dark" ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Moon className="h-5 w-5" />
      </motion.div>
      
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{ 
          scale: theme === "light" ? 1 : 0,
          rotate: theme === "light" ? 0 : -180,
          opacity: theme === "light" ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Sun className="h-5 w-5" />
      </motion.div>
      
      <motion.div
        className="absolute inset-0 bg-primary/10 rounded-full"
        initial={false}
        animate={{
          scale: theme === "dark" ? 0 : 1,
          opacity: theme === "dark" ? 0 : 0.3
        }}
        transition={{ duration: 0.3 }}
      />
    </Button>
  );
}