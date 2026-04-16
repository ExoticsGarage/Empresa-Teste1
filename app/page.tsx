export default function Home() {
  return (
    <main className="landing">
      <section className="hero">
        <div className="heroBadge">Sua empresa no melhor caminho</div>

        <h1 className="heroTitle">
          Jadlog
        </h1>

        <p className="heroText">
          Estrutura simples, visual moderno e base estável para você continuar
          editando sem quebrar o deploy.
        </p>

        <div className="heroActions">
          <button type="button" className="primaryButton">
            Começar agora
          </button>

          <button type="button" className="secondaryButton">
            Ver detalhes
          </button>
        </div>
      </section>

      <section className="featuresSection">
        <div className="sectionHeader">
          <span className="sectionMini">Vantagens</span>
          <h2>Base pronta para crescer</h2>
          <p>
            Você pode usar essa página como ponto de partida para um site
            institucional, landing page, página de vendas ou apresentação.
          </p>
        </div>

        <div className="featuresGrid">
          <article className="featureCard">
            <div className="featureIcon">01</div>
            <h3>Visual profissional</h3>
            <p>
              Layout limpo, moderno e organizado para transmitir mais confiança.
            </p>
          </article>

          <article className="featureCard">
            <div className="featureIcon">02</div>
            <h3>Carregamento rápido</h3>
            <p>
              Estrutura leve, sem dependências desnecessárias e fácil de manter.
            </p>
          </article>

          <article className="featureCard">
            <div className="featureIcon">03</div>
            <h3>Fácil de editar</h3>
            <p>
              Textos, blocos e botões separados de forma simples para você mudar
              tudo direto no GitHub.
            </p>
          </article>
        </div>
      </section>

      <section className="highlightSection">
        <div className="highlightCard">
          <div className="highlightContent">
            <span className="sectionMini">Estrutura estável</span>
            <h2>Seu projeto já está publicando corretamente</h2>
            <p>
              Agora que a base está funcionando, dá para evoluir o design com
              segurança e sem voltar para aqueles erros de build.
            </p>
          </div>

          <div className="highlightStats">
            <div className="statBox">
              <strong>100%</strong>
              <span>Deploy funcional</span>
            </div>
            <div className="statBox">
              <strong>Base limpa</strong>
              <span>Sem arquivos órfãos</span>
            </div>
            <div className="statBox">
              <strong>Pronta</strong>
              <span>Para personalizar</span>
            </div>
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="ctaCard">
          <h2>Quer continuar melhorando essa página?</h2>
          <p>
            A partir daqui, dá para trocar cores, textos, logo, imagens, cards
            e transformar isso no estilo que você quiser.
          </p>
          <button type="button" className="primaryButton">
            Continuar projeto
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <span>© 2026 Empresa Teste</span>
          <span>Página publicada com Next.js + Vercel</span>
        </div>
      </footer>
    </main>
  )
}
