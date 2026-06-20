export function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--border)]">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
          <div className="font-[family-name:var(--font-display)] text-lg text-[var(--foreground)]">
            Petra
          </div>
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Petra. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--burgundy)] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[var(--burgundy)] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}