<template>
  <article id="conteudo" role="main">
    <div class="container">
      <h1>TK</h1>
      <div style="color: black">
        receipt:
        <pre>
          {{ receipt }}
        </pre>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'home',
    mounted() {
      const candidateId = (
          window.location.origin.indexOf('somosrede.com.br') !== -1 ||
          window.location.origin.indexOf('doemarina.com.br') !== -1
        )
        ? 40
        : 130;
      const payload = {
        candidateId: candidateId,
        digest: this.$route.params.digest
      };
      this.$store.dispatch('GET_RECEIPT', payload);
    },
    computed: {
      receipt() {
        return this.$store.state.receipt;
      },
    },
  };
</script>
