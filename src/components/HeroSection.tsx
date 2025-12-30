import { Terminal, Code2, Rocket } from "lucide-react";
import ProjectBadge from "./ProjectBadge";
import TechBadge from "./TechBadge";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 fade-in">
          Hiago Almeida
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 fade-in-delay-1">
          Hey! I'm Hiago, a passionate backend developer focused on building scalable and efficient systems.
        </p>

        <div className="space-y-4 fade-in-delay-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-muted-foreground">Languages</span>
            <TechBadge name="TypeScript" color="#3178C6" />
            <TechBadge name="Go" color="#00ADD8" />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-muted-foreground">Creator of</span>
            <ProjectBadge 
              icon={<Terminal size={14} />} 
              name="Abacatepay CLI" 
              href="#"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-muted-foreground">Founder of</span>
            <ProjectBadge 
              icon={<Code2 size={14} />} 
              name="Clarice" 
              href="#"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-muted-foreground">Building</span>
            <ProjectBadge 
              icon={<Rocket size={14} />} 
              name="Novi" 
              href="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
