import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
export default function Menu() {
  const { toggleTheme } = useTheme();
  return (
    <>
      <div className="bg-[#FFFFFF] dark:bg-[#09090B] flex h-12 items-center justify-between p-3 border-[#27272A] border-b-[1px]">
        <h1 className="text-xl text-black dark:text-white font-spacemono flex">
          Imagin<p className="text-[#BE153D]">Ai</p> ✨
        </h1>
        <div className="flex justify-center items-center">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden stroke-black" />
            <Moon className="hidden h-5 w-5 dark:block stroke-white" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </>
  );
}
