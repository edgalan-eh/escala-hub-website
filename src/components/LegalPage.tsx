export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <section className="section" style={{ background: "var(--ink)" }}>
      <div className="container">
        <div className="mx-auto max-w-[760px]">
          <p className="eyebrow">Legal</p>
          <h1 className="t-h2 mt-4">{title}</h1>
          <p className="t-label-sm mt-3" style={{ color: "var(--muted)", textTransform: "none", letterSpacing: "0.02em" }}>
            Última atualização · {updated}
          </p>
          <div className="t-small mt-10" style={{ color: "var(--muted-2)" }}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
