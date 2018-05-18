<template>
  <section>
    <form @submit.prevent="validateForm">
      <fieldset>
        <div :class="`input-wrapper
          ${validation.errors.number ? 'has-error' : ''}`">
          <label for="number">Número do cartão de crédito</label>
          <input
            type="text"
            v-model="number"
            name="number"
            v-mask="'#### #### #### #### ####'">
          <div class="error" v-if="validation.errors.number">
            {{ validation.errors.number }}
          </div>
        </div>
        <div :class="`input-wrapper
          ${validation.errors.name_on_card ? 'has-error' : ''}`">
          <label for="name_on_card">Nome impresso no cartão</label>
          <input
            type="text"
            v-model="name_on_card"
            name="name_on_card"
            maxlength="26">
          <div class="error" v-if="validation.errors.name_on_card">
            {{ validation.errors.name_on_card }}
          </div>
        </div>
        <div :class="`input-wrapper
          ${validation.errors.validity_month ? 'has-error' : ''}`">
          <label for="validity_month">Mês</label>
          <input
            type="text"
            v-model="validity_month"
            name="validity_month"
            placeholder="MM"
            v-mask="'##'">
          <div class="error" v-if="validation.errors.validity_month">
            {{ validation.errors.validity_month }}
          </div>
        </div>
        <div :class="`input-wrapper
          ${validation.errors.validity_year ? 'has-error' : ''}`">
          <label for="validity_year">Ano</label>
          <input
            type="text"
            v-model="validity_year"
            name="validity_year"
            placeholder="AAAA"
            v-mask="'####'">
          <div class="error" v-if="validation.errors.validity_year">
            {{ validation.errors.validity_year }}
          </div>
        </div>
        <div :class="`input-wrapper
          ${validation.errors.csc ? 'has-error' : ''}`">
          <label for="csc">Cód. Segurança</label>
          <input
            type="text"
            v-model="csc"
            name="csc"
            maxlength="3">
          <div class="error" v-if="validation.errors.csc">
            {{ validation.errors.csc }}
          </div>
        </div>
      </fieldset>
      <p class="error" v-if="errorMessage != ''">
        {{ errorMessage }}
      </p>
      <button type="submit" :disabled="loading">Continuar</button>
    </form>
  </section>
</template>

<script>
/* eslint-disable camelcase */
import creditCardType from 'credit-card-type';
import { mask } from 'vue-the-mask';
import { validate, removeAccented } from '../../utilities';

export default {
  name: 'cardData',
  directives: {
    mask,
  },
  data() {
    return {
      loading: false,
      errorMessage: '',
      name_on_card: '',
      csc: '',
      number: '',
      validity_month: '',
      validity_year: '',
      brand: '',
      validation: {
        errors: {},
      },
    };
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading;
    },
    validateForm() {
      this.toggleLoading();

      const {
        name_on_card,
        csc,
        number,
        validity_year,
        validity_month,
      } = this;

      const fields = {
        name_on_card,
        csc,
        number,
        validity_year,
        validity_month,
      };

      const validation = validate(fields);

      if (validation.valid) {
        fields.brand = this.getBrand(number);


        this.saveCard({
            name_on_card: removeAccented(name_on_card),
            csc,
            number: number.replace(/\s+/g, ''),
            validity: validity_year + validity_month,
          });
      } else {
        this.validation = validation;
        this.toggleLoading();
      }
    },
    getBrand(number) {
			const result = creditCardType(number);
			if (result.length < 1) {
				return 'No brand found';
			}

			return result[0].type.replace('-', '');
		},
    saveCard(card) {
      console.log(card)
    },
  },
};
</script>
