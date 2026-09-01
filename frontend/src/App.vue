<script setup>
import HeroSection from './components/HeroSection.vue'
import ProjectCard from './components/ProjectCard.vue'

const projects = [
  {
    area: 'Saúde',
    title: 'Neurorregulação imersiva',
    description: 'Um espaço reservado para contar o desafio, a solução criada e o impacto alcançado.'
  },
  {
    area: 'Treinamento',
    title: 'Capacitação em realidade virtual',
    description: 'Experiências seguras e envolventes para preparar profissionais para situações reais.'
  }
]
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#inicio" aria-label="Miniverso — página inicial">MINIVERSO</a>
    <nav aria-label="Navegação principal">
      <a href="#essencia">Essência</a>
      <a href="#projetos">Projetos</a>
      <a class="login-link" href="#acesso">Entrar</a>
    </nav>
  </header>

  <main id="conteudo-principal">
    <HeroSection />

    <section id="essencia" class="content-section intro-section" aria-labelledby="essencia-title">
      <p class="eyebrow">O que nos move</p>
      <h2 id="essencia-title">Tecnologia que aproxima pessoas de novas possibilidades.</h2>
      <p>
        A Miniverso transforma desafios de saúde e treinamento em experiências imersivas,
        intuitivas e construídas para gerar impacto no mundo real.
      </p>
    </section>

    <section id="projetos" class="content-section projects-section" aria-labelledby="projects-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Portfólio</p>
          <h2 id="projects-title">Desafios que viraram experiências.</h2>
        </div>
        <p>Os conteúdos abaixo são exemplos temporários para estruturar a apresentação dos futuros projetos.</p>
      </div>

      <div class="project-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :area="project.area"
          :title="project.title"
          :description="project.description"
        />
      </div>
    </section>

    <section id="acesso" class="content-section access-section" aria-labelledby="access-title">
      <p class="eyebrow">Área restrita</p>
      <h2 id="access-title">Gestão dos projetos Miniverso.</h2>
      <p>O login e o dashboard serão desenvolvidos em uma próxima etapa.</p>
      <button type="button" disabled aria-describedby="access-note">Acesso em breve</button>
      <small id="access-note">Funcionalidade ainda não disponível nesta versão.</small>
    </section>
  </main>

  <footer>
    <p>Miniverso — experiências imersivas.</p>
    <a href="#inicio">Voltar ao início <span aria-hidden="true">↑</span></a>
  </footer>
</template>

