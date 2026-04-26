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
            { label: "LinkedIn", href: "https://www.linkedin.com/in/pushpanjali-patel-b90586322/" },
            { label: "GitHub", href: "https://github.com/pushpanjalipatel" },
            { label: "Resume", href: "https://drive.google.com/file/d/14sCuAeNcY_t1Rw0cM7fIffW6BkApEg6q/view?usp=sharing" },
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
