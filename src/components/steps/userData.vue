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
          :class="`input-wrapper half
          ${validation.errors.surname ? 'has-error' : ''}`"
        >
          <label for="surname">Sobrenome</label>
          <input
            type="text"
            name="surname"
            v-model="surname">
          <div class="error" v-if="validation.errors.surname">
            {{ validation.errors.surname }}
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
      surname: '',
      cpf: '',
      email: '',
      validation: {
        errors: {},
      },
    };
  },
  computed: {
    amount() {
      return this.$store.state.amount;
    },
    iugu() {
      return this.$store.state.iugu;
    },
  },
  methods: {
    toggleLoading() {
      this.loading = !this.loading;
    },
    validateForm() {
      this.toggleLoading();

      const {
        name,
        surname,
        cpf,
        email,
      } = this;

      const fields = {
        name,
        surname,
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
      this.$store.dispatch('GET_TOKEN')
        .then((res) => {
          const payload = {
            payment_method: 'credit_card',
            device_authorization_token_id: res.data.device_authorization_token_id,
            email: data.email,
            cpf: data.cpf,
            name: `${data.name} ${data.surname}`,
            amount: this.amount,
            candidate_id: 1,
            phone: '11232323232',
            birthdate: '1979-11-03',
          }
          this.$store.dispatch('GET_DONATION', payload)
            .then((res) => {
              const user = {
                name: data.name,
                surname: data.surname,
              }
              this.$store.dispatch('SAVE_USERNAME', user)
              this.handleIugu();
              this.$store.dispatch('CHANGE_PAYMENT_STEP', { step: 'cardData' });
            });
      });
    },
    handleIugu() {
      Iugu.setAccountID(this.iugu.account_id);
      Iugu.setTestMode(true);
    }
  },
};
</script>
