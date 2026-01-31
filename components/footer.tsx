export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Harithya Wisesa. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with intention. Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
