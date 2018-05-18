<template>
  <article>
    <template v-if="paymentStep === 'selectValue'">
      <h2>Escolha um valor para doar</h2>
       <selectValue />
    </template>
    <template v-else-if="paymentStep === 'finalMessage'">
      <finalMessage />
    </template>
    <template v-else>
      <h2>Você escolheu doar: <strong v-if="amount">R$ {{ amount | formatBRL }}</strong></h2>
      <a class="donation-nav donation-nav--rewind" href="#" @click.prevent="goBack('selectValue')">voltar</a>

      <ul>
        <li :class="paymentStep === 'userData' ? 'active' : ''">
          passo 1
        </li>
        <li :class="paymentStep === 'cardData' ? 'active' : ''">
          passo 2
        </li>
      </ul>

      <userData v-if="paymentStep === 'userData'"/>
      <cardData v-if="paymentStep === 'cardData'"/>
    </template>
  </article>
</template>

<script>
// @ is an alias to /src
import selectValue from '@/components/steps/selectValue.vue';
import userData from '@/components/steps/userData.vue';
import cardData from '@/components/steps/cardData.vue';
import finalMessage from '@/components/steps/finalMessage.vue';

export default {
  name: 'Payment',
  components: {
    selectValue,
    userData,
    cardData,
    finalMessage,
  },
  computed: {
    paymentStep() {
      return this.$store.state.paymentStep;
    },
    amount() {
      return this.$store.state.amount;
    },
  },
  methods: {
    goBack(step) {
      this.$store.dispatch('CHANGE_PAYMENT_STEP', { step });
    },
  },
};
</script>

<style>
.home__donate h2{
  color: #fff;
}
</style>

