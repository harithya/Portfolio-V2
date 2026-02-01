export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Harithya Wisesa. 無断転載を禁じます。
          </p>
          <p className="text-sm text-muted-foreground">
            想いを込めて制作し、細部まで丁寧に仕上げました。
          </p>
        </div>
      </div>
    </footer>
  );
}
