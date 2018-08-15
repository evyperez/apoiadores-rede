<template>
  <section>
  <a class="donation-nav donation-nav--rewind" href="#" @click.prevent="goBack">voltar</a>
    <div class="input-wrapper" v-for="(message, index) in messages" v-if="message.type == 'msg'" v-html="message.text" :key="index"></div>
    <div class="donation-nav-wrap">
      <div class="input-wrapper" v-for="(message, index) in messages" v-if="message.type == 'link'" :key="index">
        <a target="_blank" class="donation-nav donation-nav--block" :href="message.href" >{{ message.text }} </a>
      </div>
    </div>
    <ul id="wrap-share">
      <li>
        <a class="twitter" href="https://twitter.com/intent/tweet?text=Marina%20precisa%20de%20n%C3%B3s%20para%20equilibrar%20a%20disputa%21%20https%3A%2F%2Fdoemarina.com.br%3Fref%3Dagradecimento">Compartilhar</a>
      </li>
      <li>
        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdoemarina.com.br%3Fref%3Dagradecimento&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore facebook">Compartilhar</a>
      </li>
      <li>
        <a target="_blank" href="https://wa.me/?text=A%20campanha%20da%20Marina%20Silva%20est%C3%A1%20sendo%20financiada%20pelas%20pessoas.%20Acabei%20de%20fazer%20minha%20contribui%C3%A7%C3%A3o.%0ASomos%20muitos%2C%20cada%20um%20doando%20o%20que%20pode.%20Juntos%20vamos%20fazer%20frente%20aos%20grandes%20partidos!%20Vem%20tamb%C3%A9m!%20%20https%3A%2F%2Fdoemarina.com.br%3Fref%3Dagradecimento" class="whatsapp">Compartilhar</a>
      </li>
    </ul>
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
