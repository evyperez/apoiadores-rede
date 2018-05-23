<template>
  <section>
    <h2 v-for="(message, i) in messages" :key="i">{{ message.text }}</h2>


	<!-- <ul id="wrap-share">
		<li>
			<a href="https://twitter.com/appcivico" target="_blank" class="twitter"></a>
		</li>
		<li>
			<a href="https://www.facebook.com/AppCivicoCSB" target="_blank" class="facebook"></a>
		</li>
	</ul> -->

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
