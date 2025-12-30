const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hiago Almeida. Building cool stuff with code.
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="mailto:hello@example.com" className="text-link link-underline">
              hello@example.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
