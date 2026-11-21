/* eslint-disable @next/next/no-img-element */

/** Logo oficial. Troca sozinho entre a versão de fundo claro e a de fundo escuro. */
export function Logo({ altura = 26 }: { altura?: number }) {
  const largura = Math.round((altura * 2083) / 353.35);
  return (
    <>
      <img className="logo-claro" src="/brand/escala/logo-escalahub-light.svg" alt="Escala Hub" width={largura} height={altura} />
      <img className="logo-escuro" src="/brand/escala/logo-escalahub-dark.svg" alt="Escala Hub" width={largura} height={altura} />
    </>
  );
}
