<template>
  <header class="site-header" id="home__header">
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
          <a href="#home__header" v-scroll-to="'#home__header'" class="logo-rede">Doe Marina</a>
        </div>
        <ul class="menu-wrap">
          <li class="menu-icon">
            <a href="https://twitter.com/intent/tweet?text=Marina%20precisa%20de%20n%C3%B3s%20para%20equilibrar%20a%20disputa%21%20https%3A%2F%2Fdoemarina.com.br" target="_blank" class="twitter"></a>
          </li>
          <li class="menu-icon">
            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdoemarina.com.br%2F&amp;src=sdkpreparse" target="_blank" class="fb-xfbml-parse-ignore facebook"></a>
          </li>
          <li class="menu-item">
            <a href="#home__knowMore" v-scroll-to="'#home__knowMore'">
              Conheça
            </a>
          </li>
          <li class="menu-item">
            <a href="#home__goals" v-scroll-to="'#home__goals'">
              Metas
            </a>
          </li>
          <li class="menu-item">
            <a href="#home__faq" v-scroll-to="'#home__faq'">
              Perguntas frequentes
            </a>
          </li>
          <li class="menu-item">
            <a href="#home__donors" v-scroll-to="'#home__donors'">
              Doadores
            </a>
          </li>
          <li class="menu-item donate-nav">
            <a href="#doar" v-scroll-to="'#doar'">
              Doar
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="header-container">
      <div class="site-label">
        <h1>
          <span>#Somos</span>
          <vue-typer
            :text='["marina","luta","paz","pessoas","muitos"]'
            :repeat='Infinity'
            :shuffle='false'
            initial-action='typing'
            :pre-type-delay='70'
            :type-delay='70'
            :pre-erase-delay='2000'
            :erase-delay='250'
            erase-style='clear'
            :erase-on-complete='false'
            caret-animation='phase'
          ></vue-typer>
        </h1>
        <!-- <a class="call-to-action" href="#doar" v-scroll-to="'#doar'">
          > quero doar
        </a> -->
      </div>
    </div>

</header>
</template>

<script>
import { VueTyper } from 'vue-typer'
export default {
  name: 'Header',
  components: {
    VueTyper
  },
  methods: {
    scrollMenu() {
      const element = document.querySelector('.main-menu');

      window.addEventListener('scroll', (e) => {
        const newOffset = window.scrollY;
        const currentRouteName = this.$route.name;
          if (newOffset > 13 && window.matchMedia("").matches) {
            element.classList.add('animate');

          } else {
            element.classList.remove('animate');
          }
      });
    },
    showMenu() {
      const element = document.querySelector('.mobile-button');
      const menu = document.querySelector('.menu-wrap');
      element.addEventListener('click', function() {
        menu.classList.toggle('show');
      })
    }
  },
  created() {
    this.$nextTick(function() {
      this.scrollMenu();
      this.showMenu();
    });
  }
}
</script>

