<template>
  <section class="content">
    <form @submit.prevent="validateForm">
      <fieldset class="of-radios-and-checks">
        <div class="input-wrapper" v-for="pledge in pledges" :key="pledge">
          <input type="radio" :id="`amount_${pledge}`" name="amount" v-model="amount" :value="pledge" @change="validateForm">
          <label :for="`amount_${pledge}`" class="bigger">R$ {{ pledge | formatBRL }}</label>
        </div>

        <div class="input-wrapper input-wrapper--full-width">
          <input type="radio" id="amount_other" name="amount" v-model="amount" value="other">
          <label for="amount_other">OUTROS</label>
        </div>

        <div class="input-wrapper half has-real-value" v-if="amount === 'other'">
          <label for="other">R$</label>
          <input
            type="text"
            name="other"
            v-model="other"
            :disabled="amount === 'other' ? false : true"
            @keyup="formatOther">
          <span class="real-value">{{ formatedOther }}</span>
          <button type="button" href="#" @click.prevent="validateForm">OK</button>
        </div>
      </fieldset>
      <fieldset class="checkbox-custom">
        <div class="input-wrapper">
          <input type="checkbox" id="maxdonation" name="maxdonation" v-model="maxdonation">
          <label for="maxdonation">Declaro que minhas doações não ultrapassam 10% dos meus rendimentos brutos do ano anterior, a origem do dinheiro não é estrangeira, não sou concessionário ou permissionário de serviço público e concordo com os termos de doação.</label>
        </div>
      </fieldset>
      <p class="error" v-if="errorMessage != ''">
        {{ errorMessage }}
      </p>
    </form>
  </section>
</template>

<script>
import { validate, formatBRLDec } from '../../utilities';

export default {
  name: 'selectValue',
  data() {
    return {
      errorMessage: '',
      amount: '',
      other: '',
      formatedOther: '',
      pledges: [
        2000,
        5000,
        10000,
        20000,
        50000,
        100000,
      ],
      maxdonation: false,
    };
  },
  methods: {
    validateForm() {
      const { amount, other, maxdonation } = this;
      const values = amount === 'other' ? { amount, other } : { amount };

      if (maxdonation) {
        const validation = validate(values);

        if (amount === 'other' && other < 2000) {
          this.errorMessage = 'O valor mínimo da doação é de R$ 20,00';
          return;
        } else if (amount === 'other' && other > 1000000) {
          this.errorMessage = 'O valor máximo da doação é de R$ 10.000,00';
          return;
        }

        if (validation.valid) {
          this.saveStep(values);
        } else {
          this.errorMessage = 'Todos os campos são obrigatórios';
        }
      } else {
        this.errorMessage = 'É obrigatório concordar com as condições acima.';
      }
    },
    saveStep(values) {
      const data = {
        amount: values.amount !== 'other' ? values.amount : this.cleanOther(values.other),
        step: 'userData',
      };

      this.$store.dispatch('CHANGE_PAYMENT_AMOUNT', data);
    },
    formatOther() {
      this.formatedOther = formatBRLDec(this.other);
    },
    cleanOther(value) {
      return value.replace(/\d{2}$/g, '00');
    },
  },
};
</script>
