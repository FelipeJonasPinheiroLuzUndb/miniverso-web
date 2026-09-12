<template>
  <div class="home-page">
    <ImmersiveIntro />

    <!-- 2. Manifesto / Essência -->
    <section id="sobre" aria-labelledby="manifesto-title" class="manifesto">
      <p class="eyebrow">Além da tela / Sobre a Miniverso</p>
      <h2 id="manifesto-title">Pequeno no nome.<br /><span>Imenso nas possibilidades.</span></h2>
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
    <section id="portfolio" tabindex="-1" aria-labelledby="portfolio-title" class="portfolio">
      <div class="portfolio-header">
        <div><p class="eyebrow">Mundos que criamos / Portfólio</p><h2 id="portfolio-title">Ideias que saíram<br />da imaginação.</h2></div>
        <a href="https://miniversotech.base44.app/#projetos" target="_blank" rel="noopener noreferrer" class="ver-todos">Portfólio completo <span aria-hidden="true">↗</span><span class="sr-only"> (abre em outra aba)</span></a>
      </div>
      
      <p v-if="projetos.length === 0" class="empty-state">
        Estamos reunindo os primeiros projetos da Miniverso. Em breve, esta seleção estará aqui.
      </p>

      <div class="portfolio-grid" v-else>
        <article v-for="projeto in projetos" :key="projeto.id" class="projeto-card">
          <a :href="projeto.url" target="_blank" rel="noopener noreferrer" :aria-label="'Conhecer ' + projeto.titulo + ' no site atual da Miniverso (abre em outra aba)'">
          <img :src="projeto.url_imagem" :alt="'Cena do projeto ' + projeto.titulo" width="960" height="540" loading="lazy" />
          <div class="projeto-info"><span class="project-category">{{ projeto.categoria }}</span>
            <h3>{{ projeto.titulo }}</h3>
            <p>{{ projeto.descricao }}</p><span class="project-link">Explorar projeto <span aria-hidden="true">↗</span></span>
          </div>
          </a>
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
      <p class="cta-note">Sua ideia merece um mundo próprio. Vamos conversar?</p>
      <a class="btn-contato" href="mailto:contato@meuminiverso.com">Conte sua ideia <span aria-hidden="true">↗</span></a>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import ImmersiveIntro from '../components/ImmersiveIntro.vue';

// Estado reativo: Projetos
// Conteúdo e imagens da seleção pública da Miniverso. Detalhes permanecem no site atual.
const projetos = ref([
  { id: 'avati', titulo: 'Avati: Do zero a um milhão', categoria: '01 / Gamificação & ativação de marca', descricao: 'Uma trilha interativa em xilogravura.', url_imagem: '/images/avati.png', url: 'https://miniversotech.base44.app/projeto?id=avati-do-zero-a-um-milhao' },
  { id: 'aliados', titulo: 'Aliados do Sucesso: Desafio SEBRAETEC', categoria: '02 / Realidade virtual', descricao: 'O “Show do Milhão” Empreendedor.', url_imagem: '/images/aliados.png', url: 'https://miniversotech.base44.app/projeto?id=aliados-do-sucesso-sebraetec' },
  { id: 'reciclaverso', titulo: 'Reciclaverso', categoria: '03 / Realidade virtual & sustentabilidade', descricao: 'Uma imersão ecológica em um game show interativo e educativo.', url_imagem: '/images/reciclaverso.png', url: 'https://miniversotech.base44.app/projeto?id=reciclaverso' }
]);

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
.home-page { background: #211747; color: #f3f4fa; overflow-x: clip; }
.home-page > section { padding: clamp(70px,9vw,140px) 8%; border-bottom: 1px solid #8f87aa33; scroll-margin-top: 24px; }
.home-page > .immersive-intro { padding: 0; border: 0; }
h2 { margin: 0; font-size: clamp(35px,5.2vw,78px); font-weight: 400; line-height: 1.04; letter-spacing: -.055em; max-width: 22ch; }
h2 span { color: #a89bc5; }
.eyebrow { color: #82deef; margin: 0 0 32px; font: 10px/1.5 var(--font-mono); letter-spacing: .12em; text-transform: uppercase; }
.manifesto blockquote { max-width: 650px; margin: 52px 0 0 auto; color: #beb4d4; font-size: clamp(18px,2vw,27px); font-weight: 400; line-height: 1.6; letter-spacing: -.02em; }
.section-heading { display: grid; grid-template-columns: minmax(170px,.65fr) minmax(0,1.35fr); gap: 3rem; align-items: start; }
.section-heading .eyebrow { margin-top: 10px; }
.impacto-grid, .processo-lista { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 36px; margin-top: 64px; }
.impacto-item, .processo-lista li { padding: 26px 0; border-top: 1px solid #8f87aa55; }
.item-number { display: block; color: #82deef; font: 11px var(--font-mono); margin-bottom: 42px; }
.impacto-item h3, .processo-lista h3, .expertise-card h3 { margin: 0; font-size: 22px; font-weight: 400; line-height: 1.2; letter-spacing: -.025em; }
.impacto-item p, .processo-lista p, .expertise-card p { margin: 18px 0 0; color: #beb4d4; font-size: 14px; line-height: 1.7; }
.expertise { background: #1b123b; }
.expertise-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 36px; margin-top: 60px; }
.expertise-card { padding-top: 26px; border-top: 1px solid #8f87aa55; }
.portfolio { background: #0a0b16; }
.portfolio-header { display: flex; justify-content: space-between; align-items: end; gap: 30px; }
.ver-todos { font-size: 12px; text-underline-offset: 7px; white-space: nowrap; padding: 12px 0; }
.ver-todos > span:first-child { margin-left: 16px; }
.portfolio-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 56px 28px; margin-top: 64px; }
.projeto-card:last-child { grid-column: 1 / -1; width: calc(50% - 14px); }
.projeto-card a { display: block; text-decoration: none; }
.projeto-card img { display: block; width: 100%; aspect-ratio: 16/9; height: auto; object-fit: cover; border: 1px solid #ffffff1f; transition: transform .35s; }
.projeto-card a:hover img { transform: translateY(-5px); }
.projeto-info { padding-top: 24px; }
.project-category { color: #82deef; font: 9px/1.6 var(--font-mono); text-transform: uppercase; letter-spacing: .07em; }
.projeto-info h3 { margin: 12px 0; font-size: clamp(21px,2.4vw,34px); font-weight: 400; line-height: 1.15; letter-spacing: -.035em; }
.projeto-info p { color: #a4a5ba; font-size: 13px; line-height: 1.65; }
.project-link { display: inline-flex; gap: 28px; align-items: center; min-height: 44px; font-size: 11px; color: #d9daea; border-bottom: 1px solid #9d99b260; }
.processo-lista { list-style: none; padding: 0; }
.clientes h2 { font-size: clamp(30px,4vw,54px); }
.empty-state { color: #beb4d4; margin: 30px 0 0; font-size: 14px; line-height: 1.7; max-width: 40rem; }
.clientes-logos { display: flex; gap: 28px; flex-wrap: wrap; margin-top: 36px; }
.cta { text-align: center; }
.cta h2 { margin-inline: auto; max-width: 18ch; }
.cta-note { color: #beb4d4; font-size: 14px; line-height: 1.6; margin: 30px 0; }
.btn-contato { display: inline-flex; gap: 55px; align-items: center; padding: 18px 28px; color: #101020; background: #8ee0ec; text-decoration: none; border-radius: 40px; font-size: 14px; min-height: 48px; }
@media(max-width:700px) {
 .home-page > section { padding: 72px 6%; }
 .home-page > .immersive-intro { padding: 0; }
 .section-heading, .impacto-grid, .processo-lista, .expertise-grid, .portfolio-grid { grid-template-columns: minmax(0,1fr); }
 .section-heading { gap: 16px; }
 .section-heading .eyebrow { margin-bottom: 0; }
 .impacto-grid, .processo-lista, .expertise-grid { gap: 16px; margin-top: 40px; }
 .item-number { margin-bottom: 24px; }
 .manifesto blockquote { margin-top: 32px; }
 .portfolio-header { align-items: start; flex-direction: column; }
 .portfolio-grid { gap: 44px; margin-top: 40px; }
 .projeto-card:last-child { grid-column: auto; width: 100%; }
}
</style>
