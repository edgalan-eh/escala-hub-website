export function BuildBar() {
  return (
    <div
      className="t-label-sm flex h-9 items-center justify-center gap-2.5"
      style={{ background: "var(--ink)", color: "var(--muted)", borderBottom: "1px solid var(--border)" }}
    >
      <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--amber)" }} />
      Site em construção
    </div>
  );
}
