<template>
  <section>
  <a class="donation-nav donation-nav--rewind" href="#" @click.prevent="goBack">voltar</a>
  <div class="input-wrapper" v-html="messages[0].text"></div>
  <p class="input-wrapper" v-html="messages[1].text"></p>
  <ul id="wrap-share">
    <li>
      <a class="twitter" href="https://twitter.com/intent/tweet?text=Marina%20precisa%20de%20n%C3%B3s%20para%20equilibrar%20a%20disputa%21%20https%3A%2F%2Fdoemarina.com.br%3Fref%3Dagradecimento">Compartilhar</a>
    </li>
    <li>
      <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdoemarina.com.br%3Fref%3Dagradecimento&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore facebook">Compartilhar</a>
    </li>
  </ul>
  <div class="donation-nav-wrap" v-if="messages[2]">
    <a target="_blank" class="donation-nav donation-nav--forward" @click.prevent="redirectUser(messages[2])">{{ messages[2].text }} </a>
  </div>
  </section>
</template>

<script>
export default {
  name: 'finalMessage',
  computed: {
    messages() {
      return this.$store.state.messages;
    },
  },
  mounted() {
    const form = document.getElementById('home__donate');
    form.scrollIntoView({ block: 'start', behavior: 'smooth' });
  },
  methods: {
    scrollToDonate() {
      const form = document.getElementById('doar');
      form.scrollIntoView({ block: 'start', behavior: 'smooth' });
	},
    redirectUser(ui) {
      if(ui.value === 'pay_with_cc'){
        this.$router.replace(this.$route.path);
          this.$store.dispatch('CHANGE_PAYMENT_STEP', {
            step: 'userData'
        });
      } else {
        sessionStorage.clear();
        window.open(ui.href)
      }
    },
    goBack() {
      this.$store.dispatch('CHANGE_PAYMENT_STEP', { step: 'selectValue' });
    },
  },
  mounted() {
    this.scrollToDonate();
  },
}
</script>
