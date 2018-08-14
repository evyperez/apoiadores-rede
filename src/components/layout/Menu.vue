<template>
  <header class="menu-header">
    <nav class="skip-links">
      <ul>
        <li class="to-content"><a href="#conteudo">conteúdo</a></li>
        <li class="to-menu"><a href="#menu">menu</a></li>
      </ul>
    </nav>
    <nav class="main-menu">
      <div class="menu-container">
        <button class="mobile-button">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="brand-wrap">
          <a href="/" class="logo-rede">Doe Marina</a>
          <a href="/" class="logo-pv">PV</a>
        </div>
        <!-- <ul class="menu-wrap">
          <li class="menu-icon">
            <a href="https://twitter.com/intent/tweet?text=Marina%20precisa%20de%20n%C3%B3s%20para%20equilibrar%20a%20disputa%21%20https%3A%2F%2Fdoemarina.com.br" target="_blank" class="twitter"></a>
          </li>
          <li class="menu-icon">
            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdoemarina.com.br%2F&amp;src=sdkpreparse" target="_blank" class="fb-xfbml-parse-ignore facebook"></a>
          </li>
          <li class="menu-item">
            <a href="/#home__knowMore" v-scroll-to="'/#home__knowMore'">
              Saiba mais
            </a>
          </li>
          <li class="menu-item">
            <a href="/#home__goals" v-scroll-to="'/#home__goals'">
              Metas
            </a>
          </li>
          <li class="menu-item">
            <a href="/#home__donors" v-scroll-to="'/#home__donors'">
              Doadores
            </a>
          </li>
          <li class="menu-item donate-nav">
            <a href="/#doar" v-scroll-to="'/#doar'">
              Doar
            </a>
          </li>
        </ul> -->
      </div>
    </nav>

</header>
</template>

<script>
export default {
  name: 'Menu',
}
</script>

