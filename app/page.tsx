export default function Home() {
  return (
    <main className="landing">
      <section className="hero">
        <div className="heroBrand">
          <img src="/logo.png" alt="Logo" className="heroLogo" />
          <h1 className="heroTitle">
            Jadlog
          </h1>
        </div>

        <p className="heroText">
          Confira os dados do produto, modalidade de envio e valor estimado do
          transporte antes de prosseguir.
        </p>

        <div className="heroActions">
          <button type="button" className="primaryButton">
            Ver resumo
          </button>

          <button type="button" className="secondaryButton">
            Mais detalhes
          </button>
        </div>
      </section>

      <section className="highlightSection">
        <div className="highlightCard">
          <div className="highlightContent">
            <span className="sectionMini">Dados do envio</span>
            <h2>Prévia do produto e do frete</h2>
            <p>
              Esta página reúne as principais informações do item, transporte e
              custo estimado para conferência antes da próxima etapa.
            </p>
          </div>

          <div className="highlightStats">
            <div className="statBox">
              <strong>Produto</strong>
              <span>Caixa eletrônica premium</span>
            </div>
            <div className="statBox">
              <strong>Peso</strong>
              <span>2,4 kg</span>
            </div>
            <div className="statBox">
              <strong>Destino</strong>
              <span>São Paulo - SP</span>
            </div>
          </div>
        </div>
      </section>

      <section className="featuresSection">
        <div className="sectionHeader">
          <span className="sectionMini">Resumo</span>
          <h2>Informações principais do transporte</h2>
          <p>
            Visualize os dados essenciais do envio em uma única página, de forma
            clara e organizada.
          </p>
        </div>

        <div className="featuresGrid">
          <article className="featureCard">
            <div className="featureIcon">01</div>
            <h3>Produto</h3>
            <p>
              Nome do item, categoria, quantidade e identificação do volume.
            </p>
          </article>

          <article className="featureCard">
            <div className="featureIcon">02</div>
            <h3>Transporte</h3>
            <p>
              Modalidade de envio, origem, destino e prazo estimado de entrega.
            </p>
          </article>

          <article className="featureCard">
            <div className="featureIcon">03</div>
            <h3>Taxa de frete</h3>
            <p>
              Valor estimado com base em peso, distância e tipo de serviço
              selecionado.
            </p>
          </article>
        </div>
      </section>

      <section className="ctaSection">
        <div className="ctaCard">
          <span className="sectionMini">Resumo financeiro</span>
          <h2>Valor estimado do transporte</h2>
          <p>
            Revise abaixo o custo previsto do frete antes de continuar.
          </p>

          <div
            style={{
              display: 'grid',
              gap: '14px',
              marginTop: '24px',
              marginBottom: '24px',
              textAlign: 'left',
            }}
          >
            <div className="statBox">
              <strong>Produto</strong>
              <span>Caixa eletrônica premium</span>
            </div>

            <div className="statBox">
              <strong>Serviço de transporte</strong>
              <span>Envio expresso nacional</span>
            </div>

            <div className="statBox">
              <strong> Liberação imediata </strong>
              <span>Pagamento via pix</span>
            </div>

            <div className="statBox">
              <strong>Taxa de tributos</strong>
              <span>R$ 55,00</span>
            </div>
          </div>

          <button type="button" className="primaryButton">
            Prosseguir
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="footerInner">
          <span>© 2026 Jadlog </span>
          <span>Resumo tributação</span>
        </div>
      </footer>
    </main>
  )
}
