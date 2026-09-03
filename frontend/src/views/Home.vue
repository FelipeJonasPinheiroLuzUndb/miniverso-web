<template>
  <main id="conteudo-principal">
    
    <!-- 1. Hero / Showreel (Primeira dobra de impacto) -->
    <section aria-labelledby="hero-title" class="hero">
      <div class="hero-content">
        <h1 id="hero-title">Miniverso VR</h1>
        <p class="hero-subtitle">Expandindo os limites da sua realidade.</p>
        <!-- Espaço para um futuro vídeo de background estilo Melted -->
        <div class="video-placeholder" aria-hidden="true">
          [ Showreel de Projetos VR rodando em loop ]
        </div>
      </div>
    </section>

    <!-- 2. Manifesto / Essência -->
    <section aria-labelledby="manifesto-title" class="manifesto">
      <h2 id="manifesto-title" class="sr-only">Nosso Manifesto</h2>
      <blockquote>
        "Nós não criamos apenas ambientes 3D. Nós construímos novas formas de 
        interagir, aprender e fazer negócios em um mundo onde a tela plana já não é suficiente."
      </blockquote>
    </section>

    <!-- 3. Benefícios / Por que imersão -->
    <section aria-labelledby="impacto-title" class="impacto">
      <div class="section-heading">
        <p class="eyebrow">Por que imersão?</p>
        <h2 id="impacto-title">Experiências que fazem a ideia permanecer.</h2>
      </div>
      <div class="impacto-grid">
        <article v-for="(beneficio, index) in beneficios" :key="index" class="impacto-item">
          <span class="item-number">0{{ index + 1 }}</span>
          <h3>{{ beneficio.nome }}</h3>
          <p>{{ beneficio.descricao }}</p>
        </article>
      </div>
    </section>

    <!-- 4. Expertise / Nossos Serviços -->
    <section aria-labelledby="expertise-title" class="expertise">
      <h2 id="expertise-title">O que fazemos</h2>
      <div class="expertise-grid">
        <article v-for="(servico, index) in servicos" :key="index" class="expertise-card">
          <h3>{{ servico.nome }}</h3>
          <p>{{ servico.descricao }}</p>
        </article>
      </div>
    </section>

    <!-- 5. Portfólio / Selected Works -->
    <section aria-labelledby="portfolio-title" class="portfolio">
      <div class="portfolio-header">
        <h2 id="portfolio-title">Projetos em Destaque</h2>
        <a href="#portfolio" class="ver-todos">Ver projetos</a>
      </div>
      
      <p v-if="projetos.length === 0" class="empty-state">
        Estamos reunindo os primeiros projetos da Miniverso. Em breve, esta seleção estará aqui.
      </p>

      <div class="portfolio-grid" v-else>
        <article v-for="projeto in projetos" :key="projeto.id" class="projeto-card">
          <img :src="projeto.url_imagem" :alt="'Cena do projeto ' + projeto.titulo" loading="lazy" />
          <div class="projeto-info">
            <h3>{{ projeto.titulo }}</h3>
            <p>{{ projeto.categoria }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- 6. Processo -->
    <section aria-labelledby="processo-title" class="processo">
      <div class="section-heading">
        <p class="eyebrow">Do briefing ao lançamento</p>
        <h2 id="processo-title">Clareza em cada etapa do projeto.</h2>
      </div>
      <ol class="processo-lista">
        <li v-for="(etapa, index) in etapas" :key="index">
          <span class="item-number">0{{ index + 1 }}</span>
          <div>
            <h3>{{ etapa.nome }}</h3>
            <p>{{ etapa.descricao }}</p>
          </div>
        </li>
      </ol>
    </section>

    <!-- 7. Social Proof / Clientes -->
    <section aria-labelledby="clientes-title" class="clientes">
      <h2 id="clientes-title">Quem já inova com a gente</h2>
      <div v-if="clientes.length > 0" class="clientes-logos">
        <span v-for="(cliente, index) in clientes" :key="index" class="logo-placeholder">
          {{ cliente.nome }}
        </span>
      </div>
      <p v-else class="empty-state">Marcas e parceiros que fazem parte dessa história em breve.</p>
    </section>

    <!-- 8. Call to Action / Contato -->
    <section id="contato" aria-labelledby="cta-title" class="cta">
      <h2 id="cta-title">Vamos construir o próximo universo juntos?</h2>
      <p class="cta-note">Estamos preparando nosso canal de contato.</p>
    </section>

  </main>
</template>

<script setup>
import { ref } from 'vue';

// Estado reativo: Projetos
const projetos = ref([]);

// Estado reativo: Serviços (Expertise)
const servicos = ref([
  { nome: 'Simuladores de Treinamento', descricao: 'Reduza riscos e custos operacionais com simulações idênticas ao mundo real.' },
  { nome: 'Gêmeos Digitais', descricao: 'Cópias perfeitas das suas instalações físicas para monitoramento e gestão de dados.' },
  { nome: 'Experiências de Marca', descricao: 'Ativações imersivas para eventos e lançamentos de produtos.' }
]);

const beneficios = ref([
  { nome: 'Mais atenção', descricao: 'Transforme uma mensagem em uma experiência que convida as pessoas a participar.' },
  { nome: 'Aprendizado real', descricao: 'Permita que equipes pratiquem decisões e procedimentos em um ambiente controlado.' },
  { nome: 'Decisões melhores', descricao: 'Visualize produtos, espaços e cenários antes de investir na execução física.' }
]);

const etapas = ref([
  { nome: 'Ideação e planejamento', descricao: 'Entendemos o desafio, o público e o resultado esperado para definir o melhor caminho.' },
  { nome: 'Criação e desenvolvimento', descricao: 'Desenhamos a experiência, construímos a tecnologia e validamos cada entrega com você.' },
  { nome: 'Lançamento e suporte', descricao: 'Colocamos o projeto no ar, acompanhamos seu uso e permanecemos por perto depois da entrega.' }
]);

// Estado reativo: Clientes
const clientes = ref([]);
</script>

<style scoped>
/* Estrutura mínima de espaçamento. A classe sr-only oculta o texto visualmente para seguir o design da Melted, mas o mantém para leitores de tela (acessibilidade) */

section {
  padding: 4rem 0;
  border-bottom: 1px solid #eaeaea;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.hero {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.video-placeholder {
  margin-top: 2rem;
  height: 400px;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.manifesto blockquote {
  font-size: 2rem;
  line-height: 1.4;
  font-weight: bold;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.section-heading {
  display: grid;
  grid-template-columns: minmax(180px, 0.7fr) minmax(0, 1.3fr);
  gap: 2rem;
  align-items: end;
}

.eyebrow {
  margin: 0;
  color: #ff7452;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.impacto-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 4rem;
}

.impacto-item,
.processo-lista li {
  padding: 1.5rem 0;
  border-top: 1px solid #c9c4bb;
}

.item-number {
  display: block;
  margin-bottom: 2rem;
  color: #ff7452;
  font-size: 0.8rem;
  font-weight: 800;
}

.impacto-item h3,
.processo-lista h3 {
  margin: 0;
  font-size: 1.35rem;
}

.impacto-item p,
.processo-lista p {
  margin: 0.75rem 0 0;
  color: #536070;
  line-height: 1.6;
}

.processo-lista {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 0;
  margin: 4rem 0 0;
  list-style: none;
}

.processo-lista li {
  display: flex;
  flex-direction: column;
}

.expertise-grid, .portfolio-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 2rem;
}

.projeto-card img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.empty-state {
  max-width: 38rem;
  margin: 2rem 0 0;
  color: #536070;
  line-height: 1.6;
}

.clientes-logos {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.logo-placeholder {
  padding: 1rem 2rem;
  background: #f4f4f4;
  border-radius: 4px;
  font-weight: bold;
  color: #666;
}

.cta {
  text-align: center;
  padding: 6rem 0;
  border-bottom: none;
}

.btn-contato {
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 3rem;
  font-size: 1.2rem;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.cta-note {
  margin: 1.5rem auto 0;
  color: #536070;
}

@media (max-width: 700px) {
  .section-heading,
  .impacto-grid,
  .processo-lista {
    grid-template-columns: 1fr;
  }
}
</style>