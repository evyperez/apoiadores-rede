<template>
    <section v-if="messages" class="certiface-verify">
      <a class="donation-nav donation-nav--rewind" href="/#doar">voltar</a>
      <div class="instructions-donation">
        <p class="instructions">Pagamento boleto</p>
      </div>
      <div class="input-wrapper" v-html="messages[0].text"></div>
      <ul id="wrap-share">
        <li>
        <a class="twitter-hashtag-button twitter" href="https://twitter.com/intent/tweet?button_hashtag=doemarina%20https://doemarina.com.br/">Compartilhar</a>
        </li>
        <li>
        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdoemarina.com.br%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore facebook">Compartilhar</a>
        </li>
      </ul>
      <div class="input-wrapper" v-if="messages[1]">
        <a target="_blank" class="donation-nav donation-nav--forward" @click.prevent="redirectUser(messages[1])" >{{ messages[1].text }} </a>
      </div>
    </section>
</template>

<script>

export default {
  name: 'printBoleto',
  data() {
    return {
      loading: false,
      errorMessage: '',
      validation: {
        errors: {},
      },
    };
  },
  computed: {
    username() {
      return this.$store.state.username;
    },
    messages() {
      return this.$store.state.messages.messages;
    },
  },
  methods: {
    scrollToDonate() {
      const form = document.getElementById('doar');
      form.scrollIntoView({ block: 'start', behavior: 'smooth' });
    },
    toggleLoading() {
      this.loading = !this.loading;
    },
    handleErrorMessage(err) {
      this.errorMessage = err.data[0].message;
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
    }
  },
  mounted() {
    this.scrollToDonate();
  },
};
</script>
