import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { InstagramIcon, LinkedinIcon, WhatsAppIcon, YoutubeIcon } from "./SocialIcons";
import { footerColumns } from "@/lib/content";
import { site } from "@/lib/site";
import { CalButton } from "./CalModal";

export function Footer() {
  return (
    <footer style={{ background: "var(--ink)", borderTop: "1px solid var(--border)" }}>
      <div className="container pt-20 pb-10">
        <div className="grid gap-12" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
          <div className="flex flex-col items-start gap-5" style={{ gridColumn: "span 2" }}>
            <Image src="/brand/escala/logo-escalahub-dark.svg" alt="Escala Hub" width={180} height={33} style={{ height: 32, width: "auto" }} />
            <p className="t-small" style={{ color: "var(--muted)", maxWidth: 320 }}>
              Estruturamos e aceleramos operações de e-commerce.
            </p>
            <div className="flex items-center gap-4" style={{ color: "var(--text)" }}>
              <a href={site.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-[var(--amber)]">
                <InstagramIcon />
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-[var(--amber)]">
                <LinkedinIcon />
              </a>
              <span aria-label="YouTube (em breve)" style={{ opacity: 0.5 }}>
                <YoutubeIcon />
              </span>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-2.5">
              <h4 className="t-label-sm mb-1" style={{ color: "var(--muted)" }}>
                {col.heading}
              </h4>
              {col.links.map((l) =>
                "disabled" in l && l.disabled ? (
                  <span key={l.label} className="t-small inline-flex items-center gap-1.5" style={{ color: "var(--dim)" }} title="Site em breve">
                    {l.label}
                  </span>
                ) : "external" in l && l.external ? (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener" className="t-small inline-flex items-center gap-1.5 hover:text-[var(--amber)]">
                    {l.label}
                    <span style={{ fontSize: 12 }}>↗</span>
                  </a>
                ) : l.href.startsWith("#") ? (
                  <a key={l.label} href={l.href} className="t-small hover:text-[var(--amber)]">
                    {l.label}
                  </a>
                ) : (
                  <Link key={l.label} href={l.href} className="t-small hover:text-[var(--amber)]">
                    {l.label}
                  </Link>
                ),
              )}
            </div>
          ))}

          <div className="flex flex-col items-start gap-2.5">
            <h4 className="t-label-sm mb-1" style={{ color: "var(--muted)" }}>
              Contato
            </h4>
            <a href={site.whatsapp} target="_blank" rel="noopener" className="t-small inline-flex items-center gap-2.5 hover:text-[var(--amber)]">
              <WhatsAppIcon size={17} />
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="t-small inline-flex items-center gap-2.5 hover:text-[var(--amber)]" style={{ wordBreak: "break-word" }}>
              <Mail size={17} strokeWidth={1.75} aria-hidden="true" style={{ flex: "0 0 17px" }} />
              {site.email}
            </a>
            <span className="t-small" style={{ color: "var(--muted)" }}>
              {site.city}
            </span>
            <CalButton className="btn btn-primary btn-sm mt-3">Solicitar diagnóstico</CalButton>
          </div>
        </div>

        <div className="t-label-sm mt-16 pt-6" style={{ borderTop: "1px solid var(--border)", color: "var(--muted)", textTransform: "none", letterSpacing: "0.02em" }}>
          <p>
            © {new Date().getFullYear()} {site.legalName} · CNPJ {site.cnpj} ·{" "}
            <Link href="/privacidade" className="hover:text-[var(--text)]">
              Privacidade
            </Link>{" "}
            ·{" "}
            <Link href="/termos" className="hover:text-[var(--text)]">
              Termos
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
