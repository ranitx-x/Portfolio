const Footer = () => {
  return (
    <footer className="relative px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-sm text-foreground font-medium">Let's build something.</p>
          <p className="font-mono text-xs text-muted-foreground mt-1">
            Open to PM roles in AI, Platform, and Growth.
          </p>
        </div>
        <div className="flex items-center gap-6">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/ranit-mondal-881701373?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
            { label: "GitHub", href: "https://github.com/ranitx-x" },
            { label: "Resume", href: "https://drive.google.com/file/d/1bN6zyl45jqBuNhqfpRknNf7KdJP6Llpd/view" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="magnetic-hover font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
