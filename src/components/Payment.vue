<template>
  <div class="donation-form" id="donation-form">
    <template v-if="paymentStep === 'selectValue'">
      <h2 v-if="lastDonorFirstName">{{ lastDonorFirstName }} já doou!</h2>
      <h2 v-else>Escolha um valor para doar</h2>
      <p v-if="lastDonorFirstName">
        Apoie você também:
      </p>
      <selectValue />
    </template>
    <template v-else-if="paymentStep === 'finalMessage'">
      <finalMessage />
    </template>
    <template v-else>
      <div class="donation-form-title" v-if="paymentStep !== 'printBoleto'">
          <h2>Você escolheu doar:</h2>
          <h2 v-if="amount">R$ {{ amount | formatBRL }}</h2>
      </div>
      <headSteps/>
      <userData v-if="paymentStep === 'userData'"/>
      <cardData v-if="paymentStep === 'cardData'"/>
      <addressData v-if="paymentStep === 'boleto'"/>
      <certFaceVerify v-if="paymentStep === 'certFaceVerify'"/>
      <section :aria-busy="loading " v-if="loading"> verificando</section>
      <printBoleto v-if="paymentStep === 'printBoleto'" class="loading" />
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import selectValue from '@/components/steps/selectValue.vue';
import userData from '@/components/steps/userData.vue';
import cardData from '@/components/steps/cardData.vue';
import finalMessage from '@/components/steps/finalMessage.vue';
import addressData from '@/components/steps/addressData.vue';
import certFaceVerify from '@/components/steps/certFaceVerify.vue';
import printBoleto from '@/components/steps/printBoleto.vue';
import headSteps from '@/components/steps/headSteps.vue';

export default {
  name: 'Payment',
  components: {
    selectValue,
    userData,
    cardData,
    finalMessage,
    addressData,
    certFaceVerify,
    printBoleto,
    headSteps,
  },
  data(){
		return{
			loading: false,
		}
	},
  computed: {
    paymentStep() {
      return this.$store.state.paymentStep;
    },
    amount() {
      return this.$store.state.amount;
    },
    lastDonorFirstName() {
  		return this.$store.state.lastDonorFirstName;
		},
  },
  mounted(){
    if(this.$route.query.donation_id){
      this.toggleLoading();

      this.$store.dispatch('CHANGE_PAYMENT_STEP', { step: 'printBoleto' });
      const payload = {
        donationId: this.$route.query.donation_id
      }
      this.$store.dispatch('START_DONATION_BOLETO', payload)
        .then((response)=>{
          this.toggleLoading();
          setTimeout(() => {
            const form = document.getElementById('donation-form');
            form.scrollIntoView();
          }, 1000);
        },error => {
          setTimeout(() => {
            const form = document.getElementById('donation-form');
            form.scrollIntoView();
          }, 1000);
          this.toggleLoading();
          console.error(error);
        });
    }
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading;
    },
    goBack() {
      const step = this.paymentStep === 'userData' ? 'selectValue' : 'userData';
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

