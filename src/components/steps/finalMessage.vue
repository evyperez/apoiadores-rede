<template>
  <section>
  <div v-for="(message, i) in messages" :key="i" v-html="message.text"></div>
  <ul id="wrap-share">
    <li>
      <a class="twitter" href="https://twitter.com/intent/tweet?text=Marina%20precisa%20de%20n%C3%B3s%20para%20equilibrar%20a%20disputa%21%20https%3A%2F%2Fdoemarina.com.br">Compartilhar</a>
    </li>
    <li>
      <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdoemarina.com.br%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore facebook">Compartilhar</a>
    </li>
  </ul>
  <div class="donation-nav-wrap">
  	<a class="donation-nav donation-nav--block" href="https://eokoe2.typeform.com/to/iyaBER" target="_blank">responda nossa pesquisa</a>
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
    goBack() {
      this.$store.dispatch('CHANGE_PAYMENT_STEP', { step: 'selectValue' });
    },
  },
  mounted() {
    this.scrollToDonate();
  },
}
</script>
