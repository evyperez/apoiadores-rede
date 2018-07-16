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
            v-model.number="other"
            pattern="[0-9]*"
            :disabled="amount === 'other' ? false : true"
            v-mask="'########'">
          <button type="button" href="#" @click.prevent="validateForm">OK</button>
        </div>
      </fieldset>
        <p class="subtitle">Ao doar, você concorda com os <a href="./termos.pdf" target="_blank">termos de uso e política de privacidade</a></p>

      <p class="error" v-if="errorMessage != ''">
        {{ errorMessage }}
      </p>
    </form>
  </section>
</template>

<script>
import { validate, formatBRLDec, formatBRL } from '../../utilities';
import {
    mask
} from 'vue-the-mask';

export default {
  name: 'selectValue',
  directives: {
      mask,
  },
  data() {
    return {
      errorMessage: '',
      amount: '',
      other: '',
      pledges: [
        2000,
        5000,
        10000,
        20000,
        50000,
        106400,
      ],
    };
  },
  computed: {
        candidate() {
      return this.$store.state.candidate;
    },
    },
  methods: {
    validateForm() {
      const { amount, other } = this;
      let values = amount === 'other' ? { amount, other } : { amount };
      const maxvalue = this.candidate ? this.candidate.max_donation_value : 106400;
      const minvalue = this.candidate ? this.candidate.min_donation_value : 2000;

      console.log ('values', values);
      if (amount === 'other') {
        values.amount = parseInt(values.other, 10) * 100;
      //   console.warn('values.amount', values.other);
      }

      const validation = validate(values);

    if (amount === 'other' && other < minvalue) {
        this.errorMessage = `O valor mínimo da doação é de R$ ${formatBRL(minvalue)}`;
        return;
    } else if (amount === 'other' && other > maxvalue) {
        this.errorMessage = `O valor máximo da doação é de R$ ${formatBRL(maxvalue)}`;
        return;
    }

    if (validation.valid) {
        this.saveStep(values);
    } else {
        this.errorMessage = 'Todos os campos são obrigatórios';
    }

    },
    saveStep(values) {
      const data = {
        amount: values.amount !== 'other' ? values.amount : values.other,
        step: 'userData',
      };

      this.$store.dispatch('CHANGE_PAYMENT_AMOUNT', data);
    },
    checkAmount() {
      if(this.amount !== '') {
        this.validateForm();
      }
    }
  },
};
</script>
