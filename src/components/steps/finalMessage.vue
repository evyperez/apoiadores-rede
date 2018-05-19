<template>
  <section>
    <h2 v-for="(message, i) in messages" :key="i">{{ message.text }}</h2>
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
}
</script>
