<template>
  <div id="app">
    <Header />
    <div class="content-container">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
}
</script>


<style src="./stylesheets/index.scss" lang="scss"></style>
