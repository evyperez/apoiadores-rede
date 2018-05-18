<template>
  <section>
    <form @submit.prevent="validateForm">
      <fieldset>
        <div
          :class="`input-wrapper half
          ${validation.errors.name ? 'has-error' : ''}`"
        >
          <label for="name">Nome</label>
          <input
            type="text"
            name="name"
            v-model="name">
          <div class="error" v-if="validation.errors.name">
            {{ validation.errors.name }}
          </div>
        </div>

        <div
          :class="`input-wrapper
          ${validation.errors.cpf ? 'has-error' : ''}`"
        >
          <label for="cpf">CPF</label>
          <input
            type="text"
            name="cpf"
            v-model="cpf"
            v-mask="'###.###.###-##'">
          <div class="error" v-if="validation.errors.cpf">
            {{ validation.errors.cpf }}
          </div>
        </div>

        <div
          :class="`input-wrapper
          ${validation.errors.email ? 'has-error' : ''}`"
        >
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            v-model="email">
          <div class="error" v-if="validation.errors.email">
            {{ validation.errors.email }}
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
import { mask } from 'vue-the-mask';
import { validate } from '../../utilities';

export default {
  name: 'userData',
  directives: {
		mask,
	},
	data() {
		return {
      loading: false,
			errorMessage: '',
			name: '',
			cpf: '',
			email: '',
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
				name,
				cpf,
				email,
			} = this;

			const fields = {
				name,
				cpf,
				email,
			};

			const validation = validate(fields);

			if (validation.valid) {
				this.registerUser(fields);
			} else {
				this.validation = validation;
				this.toggleLoading();
			}
		},
		registerUser(data) {
      console.log(data);
      this.$store.dispatch('CHANGE_PAYMENT_STEP', { step: 'cardData' });
		},
	},
};
</script>
