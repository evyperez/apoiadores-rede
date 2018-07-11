<template>
  <div>
    <ul class="head-steps">
      <li :class="paymentStep === 'userData' ? 'active' : ''">
      </li>
      <li :class="paymentStep === 'cardData' ? 'active' : ''">
      </li>
      <li :class="paymentStep === 'boleto' ? 'active' : ''">
      </li>
      <li :class="paymentStep === 'certFaceVerify' ? 'active' : ''">
      </li>
      <li :class="paymentStep === 'printBoleto' ? 'active' : ''">
        Boleto
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'headSteps',
  computed: {
    paymentStep() {
      return this.$store.state.paymentStep;
    },
    amount() {
      return this.$store.state.amount;
    },
  },
};
</script>

