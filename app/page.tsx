export default function PortfolioJoseMateus() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Git",
    "GitHub",
    "WordPress",
    "Docker",
  ];

  const projects = [
    {
      title: "API de Contatos",
      description:
        "API REST completa com autenticação JWT, testes automatizados e Docker. Projeto com foco em back-end profissional e boas práticas.",
      tech: ["Node.js", "Express", "TypeScript", "JWT", "Jest", "Docker"],
    },
    {
      title: "Workout API",
      description:
        "API para prática de estruturação de rotas, regras de negócio e organização de código.",
      tech: ["Node.js", "TypeScript", "API REST"],
    },
    {
      title: "Sistema Bancário em Python",
      description:
        "Projeto focado em lógica de programação e simulação de operações bancárias.",
      tech: ["Python", "Lógica", "Estruturas de Dados"],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-block rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm text-sky-300">
              Portfólio profissional
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              José Mateus
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Desenvolvedor Full Stack em formação, com foco em interfaces modernas,
              aplicações web e projetos práticos utilizando Node.js, TypeScript,
              React, WordPress e boas práticas de desenvolvimento.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projetos"
                className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 transition hover:scale-105"
              >
                Ver projetos
              </a>

              <a
                href="#contato"
                className="rounded-2xl border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10"
              >
                Contato
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
            <h2 className="text-2xl font-semibold">Sobre mim</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Sou estudante de Engenharia de Software pela Descomplica (EAD) e
              venho desenvolvendo projetos práticos em front-end e back-end.
              Tenho experiência com HTML, CSS, JavaScript, TypeScript, React,
              Node.js, WordPress e criação de APIs com autenticação, testes e
              organização profissional de código.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                <p className="text-2xl font-bold">Front-end</p>
                <p className="mt-2 text-slate-400">
                  Interfaces modernas, responsivas e organizadas
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                <p className="text-2xl font-bold">Back-end</p>
                <p className="mt-2 text-slate-400">
                  APIs, autenticação, testes e estrutura profissional
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-3xl font-bold">Habilidades</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projetos" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Projetos</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-5 h-40 rounded-2xl bg-slate-800" />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-bold">Contato</h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-300">
            Estou aberto a oportunidades de estágio, projetos e conexões na área
            de tecnologia.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">E-mail</p>
              <a
                href="mailto:josemateus957@gmail.com"
                className="mt-2 inline-block hover:underline">
                josemateus957@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">GitHub</p>
              <a
                href="https://github.com/JoseMateus-hub"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block hover:underline">
                github.com/JoseMateus-hub
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/seu-linkedin"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block hover:underline">
                linkedin.com/in/seu-linkedin
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
