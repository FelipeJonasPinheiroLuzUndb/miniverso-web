<template>
  <!-- Cabeçalho com navegação global -->
  <header>
    <!-- Acessibilidade: aria-label descreve o propósito do menu para leitores de tela -->
    <nav aria-label="Navegação Principal" class="navbar">
      <div class="logo">
        <router-link to="/" aria-label="Ir para a página inicial da Miniverso">
          <strong>Miniverso VR</strong>
        </router-link>
      </div>
      
      <ul class="nav-links">
        <li><router-link to="/">Portfólio</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/login">Acesso Restrito</router-link></li>
      </ul>
    </nav>
  </header>

  <!-- Ponto de injeção das páginas: Aqui entra o Home.vue, Blog.vue, etc. -->
  <main id="conteudo-principal">
    <router-view />
  </main>

  <!-- Rodapé global -->
  <footer>
    <p>&copy; 2026 Miniverso - Soluções em Realidade Virtual.</p>
  </footer>
</template>

<script setup>
// Como o foco agora são as rotas e a estrutura, não precisamos de lógica JavaScript complexa aqui.
// Quando o sistema de login estiver pronto, podemos adicionar aqui uma verificação se o usuário está autenticado para mudar o menu.
</script>

<style scoped>
/* CSS estrutural básico apenas para os elementos não ficarem amontoados. 
   O refinamento de design inspirado na Melted será feito depois. */

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f9f9f9;
  border-bottom: 1px solid #e0e0e0;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

/* O Vue Router adiciona essa classe automaticamente no link da página que o usuário está acessando */
.nav-links a.router-link-active {
  color: #0056b3;
  text-decoration: underline;
}

#conteudo-principal {
  padding: 2rem;
  min-height: 75vh; /* Garante que o rodapé fique no fim da tela se a página tiver pouco conteúdo */
}

footer {
  text-align: center;
  padding: 1.5rem;
  background-color: #222;
  color: #fff;
  font-size: 0.9rem;
}
</style>