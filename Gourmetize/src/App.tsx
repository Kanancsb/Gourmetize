import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Sobre from "./pages/sobre/sobre";
import Login from "./pages/login/Login";

type Theme = "light" | "dark";

function App() {
  const [theme, setTheme] = useState<Theme>("light");

  // Carrega preferência salva ou do sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme: Theme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.classList.toggle("dark", initialTheme === "dark");
    }
  }, []);

  // Atualiza HTML + localStorage sempre que o tema mudar
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-950 transition-colors duration-300">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-10 sm:py-14 space-y-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 p-4 space-y-2 shadow-sm">
      <div className="text-2xl">{icon}</div>
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-xs text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}

type TagCardProps = {
  title: string;
  text: string;
};

function TagCard({ title, text }: TagCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/70 p-4 space-y-1">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-xs text-slate-600 dark:text-slate-300">{text}</p>
    </div>
  );
}

export default App;

