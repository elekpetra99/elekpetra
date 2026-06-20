export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem" }}>
          Elek Petra
        </div>
        <div style={{ fontSize: "0.875rem", color: "var(--warm-gray)", textAlign: "center" }}>
          © {new Date().getFullYear()} Elek Petra. All rights reserved.
        </div>
        <div className="footer-links">
          <a href="#" style={{ fontSize: "0.875rem", color: "var(--warm-gray)" }}>Privacy</a>
          <a href="#" style={{ fontSize: "0.875rem", color: "var(--warm-gray)" }}>Terms</a>
        </div>
      </div>
    </footer>
  );
}