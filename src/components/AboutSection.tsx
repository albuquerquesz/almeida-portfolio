const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Dreaming up cool ideas and making them come true is where my passion lies. I am 
            enthusiastic about building tools that help myself and others to be more productive 
            and enjoy the process of crafting. You can find my{" "}
            <a href="#projects" className="text-link link-underline">
              full projects list here
            </a>
            .
          </p>

          <p>
            I love diving deep into system architecture, optimizing performance, and creating 
            elegant solutions for complex problems. Whether it's building CLI tools, designing 
            APIs, or architecting distributed systems, I find joy in every aspect of backend 
            development.
          </p>

          <p>
            Outside of programming, I enjoy exploring new technologies, contributing to 
            open-source projects, and sharing knowledge with the developer community. Feel 
            free to reach out if you want to collaborate or just chat about tech!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
