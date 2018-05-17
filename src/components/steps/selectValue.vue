<template>
  <section class="content">
    <h2>Escolha um valor para doar</h2>
    <form @submit.prevent="validateForm">
      <fieldset>
        <div class="input-wrapper" v-for="pledge in pledges" :key="pledge">
          <input type="radio" :id="`amount_${pledge}`" name="amount" v-model="amount" :value="pledge" @change="validateForm">
          <label :for="`amount_${pledge}`" class="bigger">R$ {{ customizedValue(pledge) }}</label>
        </div>

				<div class="input-wrapper">
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
          <div class="real-value">{{ formatedOther }}</div>
        </div>
      </fieldset>
      <p class="error" v-if="errorMessage != ''">
        {{ errorMessage }}
      </p>
    </form>
  </section>
</template>

<script>
import { validate, formatBRL } from '../../utilities';

export default {
	name: 'selectValue',
	data() {
		return {
			errorMessage: '',
			amount: '',
			other: '',
      formatedOther: '',
      pledges: [
        1000,
        3000,
        5000,
        10000,
        20000,
        50000,
      ],
		};
	},
	methods: {
		customizedValue(pledge) {
			const value = formatBRL(pledge);
			return Math.trunc(parseFloat(value, 10))
		},
		validateForm() {
			console.log('validate');

			const { amount, other } = this;
			const values = amount === 'other' ? { amount, other } : { amount };
			const validation = validate(values);

			if (amount === 'other' && other < 3000) {
				this.errorMessage = 'O valor mínimo da doação é de R$ 30,00';
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
				amount: values.amount !== 'other' ? values.amount : this.cleanOther(values.other),
			};

			console.log('data', data);
		},
		formatOther() {
			this.formatedOther = formatBRL(this.other);
		},
		cleanOther(value) {
			return value.replace(/\d{2}$/g, '00');
		},
	},
};
</script>
