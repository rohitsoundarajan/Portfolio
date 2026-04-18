"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Cpu, Shield, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";

export default function Home() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Callback Ref to prevent hydration mismatches with Framer Motion
  const [containerNode, setContainerNode] = useState<HTMLDivElement | null>(null);
  const onRefChange = useCallback((node: HTMLDivElement) => {
    if (node !== null) setContainerNode(node);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerNode ? { current: containerNode } : undefined,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main ref={onRefChange} className="relative transition-colors duration-500">
      
      {/* 1. ATMOSPHERE BACKGROUND */}
      <div className="atmosphere">
        <div className="bg-grid" />
        <div className="light-orb orb-1" />
        <div className="light-orb orb-2" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)] opacity-60" />
      </div>

      {/* 2. FULL-WIDTH TOP MENU */}
      <nav className="fixed top-0 left-0 w-full z-[100] border-b border-tactical/20 bg-white/80 dark:bg-black/80 backdrop-blur-md">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between px-8 py-5">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-tactical animate-pulse shadow-[0_0_10px_var(--color-tactical)]" />
              <span className="font-mono text-[11px] tracking-[0.5em] uppercase font-black text-tactical">
                RS // SYSTEM_CORE
              </span>
            </div>
            <div className="hidden lg:block h-4 w-[1px] bg-tactical/30" />
            <span className="hidden lg:block font-mono text-[9px] text-foreground/40 uppercase tracking-widest">
              Lat: 13.0827° N // Lon: 80.2707° E
            </span>
          </div>
          
          <div className="flex items-center gap-12">
            <div className="hidden md:flex items-center gap-10">
              {['History', 'Missions'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/60 hover:text-tactical transition-all relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-tactical transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
            <div className="h-6 w-[1px] bg-tactical/20 mx-2" />
            <button 
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} 
              className="text-tactical hover:scale-110 transition-transform cursor-pointer p-1"
            >
              {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="min-h-screen flex items-center px-6 md:px-20 max-w-7xl mx-auto pt-20">
        <motion.div style={{ opacity: heroOpacity }} className="w-full">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-16 bg-tactical" />
            <span className="font-mono text-tactical tracking-[0.6em] uppercase text-[10px] font-bold">Initialization Complete</span>
          </div>
          <h1 className="text-7xl md:text-[11rem] font-black italic tracking-tighter leading-[0.8] mb-12 uppercase">
            ROHIT <br /> <span className="stroke-text text-transparent">SOUNDARAJAN</span>
          </h1>
          <p className="max-w-xl text-xl md:text-3xl font-light text-foreground/60 border-l-2 border-tactical/30 pl-10">
            MSc Advanced Computer Science. Engineering <span className="text-tactical italic font-medium">high-velocity</span> interfaces with a background in strategic quality analysis.
          </p>
        </motion.div>
      </section>

      {/* 4. CAREER HISTORY */}
      <section id="history" className="py-60 px-6 md:px-20 max-w-6xl mx-auto relative">
        <div className="absolute left-6 md:left-20 top-0 w-px h-full bg-gradient-to-b from-transparent via-tactical/40 to-transparent" />
        <div className="space-y-80">
          {[
            { 
              role: "Customer Service Expert", 
              company: "Royal Mail — Angard AGY", 
              period: "FEB 2026 — PRESENT",
              desc: "Diagnosing and resolving critical sync errors in Salesforce CRM. Strategic troubleshooting in high-pressure logistical environments."
            },
            { 
              role: "Quality Analyst", 
              company: "Teleperformance — DWP UCR", 
              period: "JUL 2025 — OCT 2025",
              desc: "Promoted to QA within 4 months. Identified systemic errors in DWP scoring, ensuring 100% adherence to quality guidelines."
            },
            { 
              role: "Customer Service Expert", 
              company: "Teleperformance — DWP UCR", 
              period: "FEB 2025 — JUN 2025",
              desc: "Mastered complex regulations to serve as a mentor. Hand-selected for rapid promotion due to high accuracy and leadership potential."
            }
          ].map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-150px" }} className="pl-12 md:pl-32 relative group">
              <div className="absolute left-[-6px] top-4 w-3 h-3 rounded-full bg-tactical shadow-[0_0_20px_var(--color-tactical)] group-hover:scale-150 transition-transform" />
              <div className="flex items-center gap-4 mb-6">
                <div className="font-mono text-[10px] text-tactical tracking-[0.4em] uppercase font-black">LOG ENTRY</div>
                <div className="h-[1px] w-12 bg-tactical/20" />
                <div className="font-mono text-[10px] text-foreground/40 tracking-[0.2em] uppercase italic">{exp.period}</div>
              </div>
              <h3 className="text-5xl md:text-8xl font-black mb-8 italic tracking-tighter text-foreground leading-tight uppercase">{exp.role}</h3>
              <p className="max-w-2xl text-2xl text-foreground/50 font-light leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. ACTIVE MISSIONS (PROJECTS) */}
      <section id="missions" className="py-40 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {[
            { title: "Job Seeker NLP", tech: ["Next.js", "NLP"], icon: <Cpu size={28} />, body: "MSc Project: Intelligently aligning career opportunities with user intent via NLP." },
            { title: "Secure Chat", tech: ["React", "AES"], icon: <Shield size={28} />, body: "End-to-end encrypted messaging featuring custom toxicity detection." },
            { title: "Valorant Strategy", tech: ["Strategy", "Comms"], icon: <Target size={28} />, body: "Utility coordination and tactical leadership in regional competitive circuits." }
          ].map((p, i) => (
            <motion.div key={i} whileHover={{ y: -15 }} className="p-14 rounded-[3rem] border border-tactical/10 bg-white/5 dark:bg-white/[0.02] backdrop-blur-3xl shadow-2xl transition-all duration-500">
              <div className="text-tactical mb-12 p-5 rounded-2xl bg-tactical/10 w-fit">{p.icon}</div>
              <h4 className="text-4xl font-black mb-6 tracking-tighter italic uppercase">{p.title}</h4>
              <p className="text-foreground/50 text-lg font-light mb-12 leading-relaxed">{p.body}</p>
              <div className="flex flex-wrap gap-4 font-mono text-[10px] text-tactical tracking-widest uppercase opacity-60">
                {p.tech.map(t => <span key={t}>#{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="py-40 text-center opacity-20 font-mono text-[10px] tracking-[2em] uppercase">
        Rohit Soundarajan // Performance Design 2026
      </footer>
    </main>
  );
}