export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="mx-auto max-w-[760px]">
          <h1 className="h2">{title}</h1>
          <p className="small mt-3 text-muted">Última atualização: {updated}</p>
          <div className="prosa mt-2">{children}</div>
        </div>
      </div>
    </section>
  );
}
