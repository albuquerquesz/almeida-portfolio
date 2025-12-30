import { ExternalLink, Github, Terminal, Code2, Rocket } from "lucide-react";

interface Project {
  name: string;
  description: string;
  role: string;
  icon: React.ReactNode;
  tags: string[];
  github?: string;
  link?: string;
}

const projects: Project[] = [
  {
    name: "Abacatepay CLI",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ferramenta de linha de comando para integração com a API do Abacatepay.",
    role: "Open-Source",
    icon: <Terminal size={20} />,
    tags: ["Go", "CLI", "Open-Source"],
    github: "#",
  },
  {
    name: "Clarice",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Plataforma para automação e gerenciamento de processos.",
    role: "Founder",
    icon: <Code2 size={20} />,
    tags: ["TypeScript", "Node.js", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    name: "Novi",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sistema moderno para gestão de dados e analytics.",
    role: "Creator",
    icon: <Rocket size={20} />,
    tags: ["Go", "TypeScript", "Redis"],
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-foreground mb-8">Projects</h2>
        
        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-primary">{project.icon}</span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                    {project.role}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Visit project"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
