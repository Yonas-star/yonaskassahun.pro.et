"use client";

import React, { useState } from "react";
import {
  TypeScriptIcon,
  PythonIcon,
  ThreeJSIcon,
  NextJSIcon,
  PremiereIcon,
  AfterEffectsIcon,
  DaVinciResolveIcon,
  BlenderIcon,
  GeminiIcon,
  ClaudeIcon,
  OpenAIIcon,
  PyTorchIcon,
} from "./TechIcons";
import { Code2, Video, BrainCircuit } from "lucide-react";

export default function TechArsenal() {
  const [activeCategory, setActiveCategory] = useState<"all" | "code" | "video" | "ai">("all");

  const categories = [
    {
      id: "code",
      title: "Full-Stack Development",
      icon: Code2,
      accentColor: "border-blue-500/40 text-blue-400",
      tools: [
        { name: "TypeScript", role: "Primary Language", Icon: TypeScriptIcon },
        { name: "Python", role: "Scripting & Backend", Icon: PythonIcon },
        { name: "Three.js / WebGL", role: "3D Graphics Engine", Icon: ThreeJSIcon },
        { name: "Next.js 14", role: "Full-Stack Framework", Icon: NextJSIcon },
      ],
    },
    {
      id: "video",
      title: "Video Editing & VFX",
      icon: Video,
      accentColor: "border-purple-500/40 text-purple-400",
      tools: [
        { name: "Premiere Pro", role: "NLE Video Editing", Icon: PremiereIcon },
        { name: "After Effects", role: "Motion Design & VFX", Icon: AfterEffectsIcon },
        { name: "DaVinci Resolve", role: "Color Grading & Audio", Icon: DaVinciResolveIcon },
        { name: "Blender 3D", role: "Modeling & Rendering", Icon: BlenderIcon },
      ],
    },
    {
      id: "ai",
      title: "AI & Neural Systems",
      icon: BrainCircuit,
      accentColor: "border-amber-500/40 text-amber-400",
      tools: [
        { name: "Google Gemini", role: "Multimodal AI Models", Icon: GeminiIcon },
        { name: "Claude AI", role: "Reasoning & Agentics", Icon: ClaudeIcon },
        { name: "OpenAI", role: "Generative Intelligence", Icon: OpenAIIcon },
        { name: "PyTorch", role: "Deep Learning & Tensors", Icon: PyTorchIcon },
      ],
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 px-4 select-none">
      {/* Category Pills Header */}
      <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
            activeCategory === "all"
              ? "bg-white text-zinc-950 font-semibold shadow-md"
              : "bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-white"
          }`}
        >
          ALL ARSENAL
        </button>
        <button
          onClick={() => setActiveCategory("code")}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
            activeCategory === "code"
              ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/20"
              : "bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-white"
          }`}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>FULL-STACK</span>
        </button>
        <button
          onClick={() => setActiveCategory("video")}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
            activeCategory === "video"
              ? "bg-purple-600 text-white font-semibold shadow-md shadow-purple-600/20"
              : "bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-white"
          }`}
        >
          <Video className="w-3.5 h-3.5" />
          <span>VIDEO & VFX</span>
        </button>
        <button
          onClick={() => setActiveCategory("ai")}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
            activeCategory === "ai"
              ? "bg-amber-600 text-white font-semibold shadow-md shadow-amber-600/20"
              : "bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-white"
          }`}
        >
          <BrainCircuit className="w-3.5 h-3.5" />
          <span>AI SYSTEMS</span>
        </button>
      </div>

      {/* Grid of Tools */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {categories
          .filter((cat) => activeCategory === "all" || activeCategory === cat.id)
          .flatMap((cat) => cat.tools)
          .map((tool) => {
            const Icon = tool.Icon;
            return (
              <div
                key={tool.name}
                className="group relative flex items-center gap-3 p-3 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all duration-200 shadow-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-xs font-semibold text-zinc-200 group-hover:text-white truncate">
                    {tool.name}
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500 truncate">
                    {tool.role}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
