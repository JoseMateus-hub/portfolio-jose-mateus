"use client";

import { useEffect, useRef, useState } from "react";

/* ─── DATA ─────────────────────────────────────────────────────── */

const skills = [
  { name: "TypeScript", icon: "⚡" },
  { name: "Node.js", icon: "⬡" },
  { name: "React", icon: "◎" },
  { name: "Next.js", icon: "▲" },
  { name: "Fastify", icon: "◈" },
  { name: "Express", icon: "⊕" },
  { name: "PostgreSQL", icon: "◉" },
  { name: "Prisma", icon: "◆" },
  { name: "Docker", icon: "⬡" },
  { name: "Jest", icon: "◎" },
  { name: "Git", icon: "⌥" },
  { name: "HTML/CSS", icon: "◇" },
  {name: "FastAPI", icon: "⚡"},
  {name: "Python", icon: "🐍"},
  {name: "JavaScript", icon: "✦"},
  {name: "Zod", icon: "🛡️"},
  {name: "JWT", icon: "🔐"},
  {name: "SQLite", icon: "🗄️"},
  {name: "Flask", icon: "🍶"},
  {name: "Fastify", icon: "🚀"},
  {name: "Tailwind CSS", icon: "🌬️"},
  {name: "Vite", icon: "⚡"},
];

const projects = [
  {
    title: "Find A Friend",
    description:
      "Plataforma completa de adoção de pets. Backend Node.js/Fastify/TypeScript/Prisma e frontend Next.js. Deploy na Railway.",
    tech: ["Node.js", "Fastify", "TypeScript", "Next.js", "Prisma", "PostgreSQL"],
    github: "https://github.com/JoseMateus-hub/find-a-friend-web.git",
    featured: true,
    glyph: "🐾",
  },
  {
    title: "ShopBR Marketplace",
    description:
      "Marketplace estilo Shopee com marketplace-api e marketplace-web. Listagem, carrinho e autenticação JWT.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    github: "https://github.com/JoseMateus-hub/marketplace-api.git",
    featured: true,
    glyph: "⬡",
  },
  {
    title: "API de Contatos",
    description:
      "REST API com Node.js, Express, TypeScript, JWT e 9 testes de integração com Jest/Supertest. Dockerizada.",
    tech: ["Node.js", "Express", "TypeScript", "JWT", "Docker", "Jest"],
    github: "https://github.com/JoseMateus-hub/api-contatos.git",
    featured: false,
    glyph: "◈",
  },
  {
  title: "Full-Stack Task Flow",
  description:
    "Lista de tarefas moderna com CRUD completo, design Dark Mode responsivo e integração em tempo real com banco de dados.",
  tech: ["React", "Fastify", "Prisma", "PostgreSQL", "Tailwind CSS"],
  github: "https://github.com/JoseMateus-hub/todo-challenge",
  featured: true, // Se quiser que ele ganhe destaque no seu site
  glyph: "📋",
  },
  {
    title: "TaskFlow API",
    description:
      "REST API de gerenciamento de tarefas com Node.js, Express, Prisma, SQLite e JWT.",
    tech: ["Node.js", "Express", "Prisma", "SQLite", "JWT"],
    github: "https://github.com/JoseMateus-hub/taskflow-api",
    featured: false,
    glyph: "◆",
  },
  {
    title: "Acme Dashboard",
    description:
      "Dashboard Next.js 14 com TypeScript, Prisma e PostgreSQL. MVC com paginação, busca e rotas REST.",
    tech: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com/JoseMateus-hub/acme.git",
    featured: false,
    glyph: "◇",
  },
];

const experiences = [
  {
    role: "Desenvolvedor Full Stack",
    company: "Digital College",
    location: "Fortaleza, CE",
    period: "2025 em Andamento — Presente",
    desc: "Formação intensiva com projetos reais: APIs REST, JWT, Docker, testes automatizados e deploy em produção.",
    current: true,
  },
  {
    role: "Engenharia de Software",
    company: "Descomplica Faculdade Digital",
    location: "EAD",
    period: "2026 em Andamento — Presente",
    desc: "Bacharelado com ênfase em arquitetura de sistemas, estruturas de dados e segurança da informação.",
    current: true,
  },
  {
    role: "Suporte Técnico",
    company: "Concentrix",
    location: "Fortaleza, CE",
    period: "2022 — 2023",
    desc: "Diagnóstico especializado, redes, hardware e sistemas. Atendimento técnico de alta complexidade.",
    current: false,
  },
  {
    role: "Recuperador de Crédito",
    company: "Almaviva",
    location: "Fortaleza, CE",
    period: "2024 — 2025",
    desc: "Suporte ao cliente com foco em resolução de problemas técnicos e comunicação assertiva.",
    current: false,
  },
];

const navLinks = [
  { label: "início", href: "#inicio" },
  { label: "sobre", href: "#sobre" },
  { label: "skills", href: "#skills" },
  { label: "projetos", href: "#projetos" },
  { label: "experiência", href: "#experiencia" },
  { label: "contato", href: "#contato" },
];

/* ─── HOOKS ─────────────────────────────────────────────────────── */

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ─── COMPONENTS ─────────────────────────────────────────────────── */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-sm border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-emerald-300">
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-px w-8 bg-emerald-500" />
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
        {children}
      </span>
    </div>
  );
}

/* ─── MAIN ──────────────────────────────────────────────────────── */

export default function PortfolioJoseMateus() {
  const [active, setActive] = useState("inicio");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const move = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = navLinks.map((l) => l.href.slice(1));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("josemateus957@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* ── CURSOR GLOW ── */}
      <div
        className="pointer-events-none fixed z-[9999] h-64 w-64 rounded-full"
        style={{
          left: cursorPos.x - 128,
          top: cursorPos.y - 128,
          background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
          transition: "left 0.1s ease, top 0.1s ease",
        }}
      />

      <main className="relative min-h-screen overflow-x-hidden bg-[#05040a] font-sans text-white">

        {/* ── BACKGROUND ── */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-600/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 h-[400px] w-[400px] rounded-full bg-fuchsia-600/8 blur-[100px]" />
          <div className="absolute top-1/2 left-0 h-[300px] w-[300px] rounded-full bg-emerald-900/15 blur-[80px]" />
        </div>

        {/* ── NAVBAR ── */}
        <header
          className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
            scrolled
              ? "border-b border-emerald-500/10 bg-[#05040a]/85 backdrop-blur-2xl"
              : "bg-transparent"
          }`}
        >
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <a href="#inicio" className="group flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-sm border border-emerald-500/40 bg-emerald-500/10">
                <span className="font-mono text-xs font-black text-emerald-300 transition group-hover:text-emerald-100">
                  JM
                </span>
                <div className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-emerald-500 transition-transform group-hover:scale-x-100" />
              </div>
              <span className="hidden font-mono text-sm text-slate-400 transition group-hover:text-emerald-300 sm:block">
                jose_mateus<span className="animate-blink text-emerald-400">_</span>
              </span>
            </a>

            <ul className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                        isActive ? "text-emerald-300" : "text-slate-600 hover:text-slate-300"
                      }`}
                    >
                      {isActive && <span className="mr-1 text-emerald-500">/</span>}
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href="https://github.com/JoseMateus-hub"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-sm border border-emerald-500/30 bg-emerald-500/5 px-4 py-2 font-mono text-xs text-emerald-400 transition hover:border-emerald-500/60 hover:bg-emerald-500/15 hover:text-emerald-200 md:flex"
            >
              github ↗
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-1.5 md:hidden"
              aria-label="Menu"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block h-px w-6 bg-emerald-400 transition-all ${
                    mobileOpen && i === 0 ? "translate-y-2.5 rotate-45"
                    : mobileOpen && i === 1 ? "opacity-0"
                    : mobileOpen && i === 2 ? "-translate-y-2.5 -rotate-45"
                    : ""
                  }`}
                />
              ))}
            </button>
          </nav>

          <div className={`overflow-hidden transition-all duration-300 md:hidden ${mobileOpen ? "max-h-96" : "max-h-0"}`}>
            <div className="border-t border-emerald-500/10 bg-[#05040a]/95 px-6 py-4 backdrop-blur-xl">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 font-mono text-sm text-slate-400 hover:text-emerald-300"
                >
                  <span className="mr-2 text-emerald-600">//</span>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </header>

        {/* ── HERO ── */}
        <section
          id="inicio"
          className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-24 text-center"
        >
          <div className="mb-8 flex items-center gap-2 rounded-sm border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-xs text-emerald-400">
              disponível para oportunidades
            </span>
          </div>

          {/* Avatar with corner brackets */}
          <div className="relative mb-8">
            <div className="relative flex h-28 w-28 items-center justify-center rounded-sm border border-emerald-500/30 bg-[#0d0b17]">
              <span className="absolute top-0 left-0 h-3 w-3 border-l border-t border-emerald-500" />
              <span className="absolute top-0 right-0 h-3 w-3 border-r border-t border-emerald-500" />
              <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-emerald-500" />
              <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-emerald-500" />
              <span className="font-mono text-2xl font-black text-emerald-300">JM</span>
            </div>
          </div>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
            <span className="block text-white">José</span>
            <span className="glitch relative block bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
              Mateus
              <span
                aria-hidden
                className="glitch-copy absolute inset-0 bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-500 bg-clip-text text-transparent opacity-0"
              />
            </span>
          </h1>

          <p className="mt-4 font-mono text-lg text-slate-500 md:text-xl">
            <span className="text-emerald-500">&lt;</span>
            Full Stack Developer
            <span className="text-emerald-500"> /&gt;</span>
          </p>

         <p className="mx-auto mt-6 max-w-lg leading-8 text-slate-400">
  Estagiário de tecnologia na{" "}
  <span className="text-emerald-300">i9 Publicidade</span>, construindo
  sites institucionais e APIs com{" "}
  <span className="text-emerald-300">Node.js</span>,{" "}
  <span className="text-emerald-300">TypeScript</span>,{" "}
  <span className="text-emerald-300">React</span> e{" "}
  <span className="text-emerald-300">Next.js</span>.
  Boas práticas, testes e arquitetura limpa.
</p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projetos"
              className="group relative overflow-hidden rounded-sm border border-emerald-500/50 bg-emerald-500/10 px-8 py-3.5 font-mono text-sm font-semibold text-emerald-200 transition-all hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]"
            >
              <span className="relative z-10">ver projetos</span>
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
            </a>
            <a
              href="#contato"
              className="rounded-sm border border-white/10 px-8 py-3.5 font-mono text-sm text-slate-400 transition hover:border-emerald-500/30 hover:text-emerald-300"
            >
              contato
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-2">
            {["Node.js", "TypeScript", "React", "Next.js", "PostgreSQL", "Docker", "Prisma"].map((t) => (
              <span key={t} className="rounded-sm border border-white/5 bg-white/[0.02] px-3 py-1 font-mono text-[11px] text-slate-600">
                {t}
              </span>
            ))}
          </div>

          <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-30">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-600">scroll</span>
            <div className="h-8 w-px animate-pulse bg-gradient-to-b from-emerald-500 to-transparent" />
          </div>
        </section>

        {/* ── SOBRE ── */}
        <section id="sobre" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
          <Reveal><SectionLabel>_sobre_mim</SectionLabel></Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-5">
            <Reveal delay={100} className="md:col-span-3">
              <div className="space-y-5 leading-8 text-slate-400">
                <p>
                  Sou desenvolvedor Full Stack em formação, com foco em{" "}
                  <span className="text-emerald-300">back-end Node.js</span> e{" "}
                  <span className="text-emerald-300">front-end React/Next.js</span>.
                  Construo projetos reais — APIs REST com JWT, testes de integração, deploy com Docker e Railway.
                </p>
                <p>
                  Antes da transição para dev, trabalhei com suporte técnico na Almaviva e Concentrix,
                  o que me deu base sólida em redes, hardware e sistemas. Atualmente curso{" "}
                  <span className="text-white">Engenharia de Software</span> pela Descomplica.
                </p>
                <p>
                  Tenho interesse crescente em{" "}
                  <span className="text-emerald-400">segurança da informação</span> e arquitetura de sistemas —
                  uma direção que quero explorar após consolidar experiência em back-end.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Fortaleza, CE", "Disponível para estágio", "Backend-first"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200} className="md:col-span-2">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { v: "6+", l: "projetos" },
                  { v: "12+", l: "tecnologias" },
                  { v: "9+", l: "testes" },
                  { v: "1", l: "ano em TI" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="relative overflow-hidden rounded-sm border border-emerald-500/15 bg-emerald-500/5 p-5"
                  >
                    <div className="absolute right-2 top-2 h-8 w-8 rounded-full bg-emerald-500/5 blur-xl" />
                    <p className="font-mono text-3xl font-black text-emerald-300">{s.v}</p>
                    <p className="mt-1 font-mono text-xs text-slate-600">{s.l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
          <Reveal>
            <SectionLabel>_stack_técnica</SectionLabel>
            <p className="mt-6 max-w-md font-mono text-sm leading-7 text-slate-600">
              // ferramentas e tecnologias que uso para construir
              <br />
              // aplicações completas, do banco à interface
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
              {skills.map((skill, i) => (
                <div
                  key={skill.name}
                  style={{ animationDelay: `${i * 40}ms` }}
                  className="group relative overflow-hidden rounded-sm border border-white/5 bg-white/[0.02] px-4 py-4 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/5"
                >
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                  <span className="font-mono text-base text-emerald-500/40 group-hover:text-emerald-400">
                    {skill.icon}
                  </span>
                  <p className="mt-2 font-mono text-sm text-slate-500 group-hover:text-white">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-slate-700">outros:</span>
              {["WordPress", "Python", "FastAPI", "Neo4j", "Railway", "Vercel", "REST", "MVC"].map((t) => (
                <span key={t} className="cursor-default font-mono text-xs text-slate-700 hover:text-slate-500">
                  {t}
                  <span className="text-emerald-800"> ·</span>
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── PROJETOS ── */}
        <section id="projetos" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
          <Reveal><SectionLabel>_projetos</SectionLabel></Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projects.filter((p) => p.featured).map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <article className="group relative h-full overflow-hidden rounded-sm border border-emerald-500/15 bg-[#0d0a18] p-8 transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.08)]">
                  <div className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-emerald-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" />
                  <div className="pointer-events-none absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="font-mono text-xs text-emerald-700">[{String(i + 1).padStart(2, "0")}]</span>
                  </div>

                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm border border-emerald-500/20 bg-emerald-500/10 font-mono text-xl text-emerald-400">
                    {p.glyph}
                  </div>

                  <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-3 leading-7 text-slate-500">{p.description}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-sm border border-emerald-500/20 bg-emerald-500/8 px-2 py-0.5 font-mono text-[11px] text-emerald-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs text-slate-500 transition hover:text-emerald-400"
                    >
                      <span className="h-px w-4 bg-current" />
                      ver código ↗
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {projects.filter((p) => !p.featured).map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <article className="group h-full rounded-sm border border-white/[0.05] bg-white/[0.01] p-5 transition-all hover:border-emerald-500/20 hover:bg-emerald-500/[0.03]">
                  <span className="font-mono text-xl text-emerald-700 group-hover:text-emerald-500">
                    {p.glyph}
                  </span>
                  <h3 className="mt-3 font-mono text-sm font-semibold text-slate-300">{p.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-slate-600">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {p.tech.slice(0, 3).map((t) => (
                      <span key={t} className="font-mono text-[10px] text-slate-700">{t} </span>
                    ))}
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] text-slate-700 transition hover:text-emerald-500"
                  >
                    código ↗
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── EXPERIÊNCIA ── */}
        <section id="experiencia" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
          <Reveal><SectionLabel>_trajetória</SectionLabel></Reveal>

          <div className="mt-10 space-y-3">
            {experiences.map((exp, i) => (
              <Reveal key={exp.role + exp.company} delay={i * 80}>
                <div className="group relative overflow-hidden rounded-sm border border-white/[0.05] bg-white/[0.01] p-6 transition-all hover:border-emerald-500/20 hover:bg-emerald-500/[0.03]">
                  <div className="absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-emerald-500 transition-transform duration-300 group-hover:scale-y-100" />

                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-mono font-bold text-white">{exp.role}</h3>
                      <p className="mt-1 font-mono text-sm text-emerald-400/70">
                        {exp.company}
                        <span className="mx-2 text-slate-700">·</span>
                        {exp.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {exp.current && (
                        <span className="rounded-sm border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                          atual
                        </span>
                      )}
                      <span className="font-mono text-xs text-slate-600">{exp.period}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-500">{exp.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── CONTATO ── */}
        <section id="contato" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
          <Reveal>
            <div className="relative overflow-hidden rounded-sm border border-emerald-500/20 bg-[#0d0a18] p-10 md:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-600/10 blur-[80px]" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-fuchsia-600/8 blur-[60px]" />
              <span className="absolute left-6 top-6 font-mono text-xs text-emerald-800">{"/*"}</span>
              <span className="absolute bottom-6 right-6 font-mono text-xs text-emerald-800">{"*/"}</span>

              <SectionLabel>_contato</SectionLabel>

              <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl">
                Vamos{" "}
                <span className="jsx-f5d56ebe490a7ddd bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                 construir
                 </span>{" "}
                algo?
              </h2>

              <p className="mt-4 max-w-lg leading-8 text-slate-500">
                Aberto a estágios, projetos freelance e conexões na área.
                Respondo rápido // 🚀.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <button
                  onClick={copyEmail}
                  className="group flex items-start gap-4 rounded-sm border border-white/[0.06] bg-white/[0.02] p-5 text-left transition hover:border-emerald-500/30 hover:bg-emerald-500/5"
                >
                  <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm border border-emerald-500/20 bg-emerald-500/10 font-mono text-emerald-400">
                    @
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-slate-600">e-mail</p>
                    <p className="mt-1 break-all font-mono text-xs text-slate-300 transition group-hover:text-emerald-300">
                      {copied ? "✓ copiado!" : "josemateus957@gmail.com"}
                    </p>
                  </div>
                </button>

                <a
                  href="https://github.com/JoseMateus-hub"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4 rounded-sm border border-white/[0.06] bg-white/[0.02] p-5 transition hover:border-emerald-500/30 hover:bg-emerald-500/5"
                >
                  <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm border border-white/10 bg-white/5 font-mono text-sm text-slate-400">
                    gh
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-slate-600">github</p>
                    <p className="mt-1 font-mono text-xs text-slate-300 transition group-hover:text-emerald-300">
                      JoseMateus-hub ↗
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/jose-mateus-222a5a144"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4 rounded-sm border border-white/[0.06] bg-white/[0.02] p-5 transition hover:border-emerald-500/30 hover:bg-emerald-500/5"
                >
                  <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm border border-sky-500/20 bg-sky-500/10 font-mono text-xs text-sky-400">
                    in
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-slate-600">linkedin</p>
                    <p className="mt-1 font-mono text-xs text-slate-300 transition group-hover:text-emerald-300">
                      jose-mateus ↗
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── FOOTER ── */}
        <footer className="relative z-10 border-t border-white/[0.04] px-6 py-8 text-center">
          <p className="font-mono text-xs text-slate-700">
            <span className="text-emerald-800">&lt;</span>
            {"  "}José Mateus · Fortaleza, CE · {new Date().getFullYear()}{"  "}
            <span className="text-emerald-800">/&gt;</span>
          </p>
        </footer>

        {/* ── GLOBAL STYLES ── */}
        <style jsx global>{`
          html { scroll-behavior: smooth; }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink { animation: blink 1.1s step-end infinite; }

          @keyframes glitch {
            0%   { clip-path: inset(0 0 98% 0); transform: translate(-4px, 0); opacity: 0.8; }
            10%  { clip-path: inset(30% 0 50% 0); transform: translate(4px, 0); }
            20%  { clip-path: inset(60% 0 20% 0); transform: translate(-3px, 0); }
            30%  { clip-path: inset(80% 0 5% 0); transform: translate(3px, 0); }
            40%  { clip-path: inset(10% 0 80% 0); transform: translate(-2px, 0); }
            50%  { clip-path: inset(50% 0 30% 0); transform: translate(0, 0); opacity: 0; }
            100% { clip-path: inset(0 0 98% 0); opacity: 0; }
          }

          .glitch:hover .glitch-copy {
            opacity: 1;
            animation: glitch 0.4s steps(1) forwards;
            color: rgb(232, 121, 249);
          }
        `}</style>
      </main>
    </>
  );
}