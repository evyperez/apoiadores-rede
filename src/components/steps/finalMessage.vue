<template>
  <section>
    <template v-if="message[1].type === 'msg'">
      <h2>{{ message[1].text }}</h2>
    </template>
  </section>
</template>

<script>
export default {
  name: 'finalMessage',
  computed: {
    message() {
      return this.$store.state.message;
    },
  },
}
</script>
