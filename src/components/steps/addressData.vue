<template>
    <form @submit.prevent="validateForm" :aria-busy="loading ? 'true' : 'false'">
      <fieldset>
        <a class="donation-nav donation-nav--rewind" href="#" @click.prevent="goBack">voltar</a>
        <div class="instructions-donation">
          <p class="instructions">Informe seu endereço</p>
        </div>
        <div :class="`input-wrapper
          ${validation.errors.birthdate ? 'has-error' : ''}`" v-if="paymentData.payment_method === 'boleto'">
          <label for="birthdate">Data de nascimento</label>
          <input type="text" v-model="birthdate" name="birthdate" v-mask="'##/##/####'" required>
          <div class="error" v-if="validation.errors.birthdate">
            {{ validation.errors.birthdate }}
          </div>
        </div>
        <div :class="`input-wrapper
          ${validation.errors.zip_code ? 'has-error' : ''}`">
          <label for="zip_code">CEP</label>
          <input type="tel" v-model="zip_code" name="zipcode" v-mask="'#####-###'" @change="searchAddress($event)" required ref="zipCode">
          <div class="error" v-if="validation.errors.zip_code">
            {{ validation.errors.zip_code }}
          </div>
        </div>
        <div :class="`input-wrapper
          ${validation.errors.city ? 'has-error' : ''}`">
          <label for="city">Cidade</label>
          <input type="text" v-model="city" name="city" :disabled="true" required ref="city">
          <div class="error" v-if="validation.errors.city">
            {{ validation.errors.city }}
          </div>
        </div>
        <div :class="`input-wrapper
          ${validation.errors.street ? 'has-error' : ''}`">
          <label for="street">Rua</label>
          <input type="text" v-model="street" name="street" :disabled="true" required ref="street">
          <div class="error" v-if="validation.errors.street">
            {{ validation.errors.street }}
          </div>
        </div>
        <div :class="`input-wrapper
          ${validation.errors.district ? 'has-error' : ''}`">
          <label for="district">Bairro</label>
          <input type="text" v-model="district" name="district" :disabled="true" required ref="district">
          <div class="error" v-if="validation.errors.district">
            {{ validation.errors.district }}
          </div>
        </div>
        <div :class="`input-wrapper
          ${validation.errors.number ? 'has-error' : ''}`">
          <label for="number">Número</label>
          <input type="tel" v-model="number" name="number" required>
          <div class="error" v-if="validation.errors.number" >
            {{ validation.errors.number }}
          </div>
        </div>
          <div :class="`input-wrapper
          ${validation.errors.complement ? 'has-error' : ''}`">
          <label for="complement">Complemento</label>
          <input type="text" v-model="complement" name="complement">
          <div class="error" v-if="validation.errors.complement">
            {{ validation.errors.complement }}
          </div>
        </div>
      </fieldset>
        <p class="error" v-if="errorMessage != ''">
        {{ errorMessage }}
      </p>
      <button type="submit" :disabled="loading" class="donation-nav donation-nav--forward">Continuar</button>
    </form>
</template>

<script>
import {
  mask
} from 'vue-the-mask';
import {
  validate,
  removeAccented
} from '../../utilities';

export default {
  name: 'addressData',
  directives: {
    mask,
  },
  data() {
    return {
      loading: false,
      errorMessage: '',
      zip_code: '',
      state: '',
      city: '',
      street: '',
      district: '',
      number: '',
      complement: '',
      birthdate: '',
      formData: {},
      validation: {
        errors: {},
      },
    };
  },
  computed: {
    iugu() {
      return this.$store.state.iugu;
    },
    paymentData() {
      return this.$store.state.paymentData;
    }
  },
  methods: {

    controlSession() {
      const data = {
          step: 'boleto',
        };
      const dataSession = JSON.parse(sessionStorage.getItem('user-donation-data'));
      if(dataSession != null){
        this.zip_code = dataSession.zip_code;
        this.state = dataSession.state;
        this.city = dataSession.city;
        this.street = dataSession.street;
        this.district = dataSession.district;
        this.number = dataSession.number;
        this.complement = dataSession.complement;
        this.birthdate = dataSession.birthdate;
      }
    },
    goBack() {
      this.$store.dispatch('CHANGE_PAYMENT_STEP', { step: 'userData' });
    },
    scrollToDonate() {
      const form = document.getElementById('doar');
      form.scrollIntoView({ block: 'start', behavior: 'smooth' });
    },
    toggleLoading() {
      this.loading = !this.loading;
    },
    validateForm() {
      this.toggleLoading();

      const birthdate = this.paymentData.payment_method === 'boleto'
        ? this.birthdate.split('/').reverse().join('-')
        : '';

      const address = {
        zip_code: this.zip_code,
        state: this.state,
        city: this.city,
        street: this.street,
        district: this.district,
        number: this.number,
      };

      if (this.paymentData.payment_method === 'boleto') {
        address.birthdate = birthdate;
      }

      console.log('validar', address)

      const validation = validate(address);

      if (validation.valid) {
        this.saveAddress();

        sessionStorage.setItem(
          "user-donation-data",
          JSON.stringify({
          zip_code: this.zip_code,
          state: this.state,
          city: this.city,
          street: this.street,
          district: this.district,
          number: this.number,
          birthdate,
          })
        );
      } else {
        this.validation = validation;
        this.toggleLoading();
      }
    },
    saveAddress(){
      const payload = this.$store.state.paymentData;

      payload.address_zipcode = this.zip_code;
      payload.address_state = this.state;
      payload.address_city = this.city;
      payload.address_street = this.street;
      payload.address_district = this.district;
      payload.address_house_number = this.number;
      payload.address_complement = this.complement;

      if (this.paymentData.payment_method === 'boleto') {
        let birthdate = this.birthdate.split('/');
        birthdate.reverse();
        birthdate = birthdate.join('-');
        payload.billing_address_zipcode = this.zip_code;
        payload.billing_address_state = this.state;
        payload.billing_address_city = this.city;
        payload.billing_address_street = this.street;
        payload.billing_address_district = this.district;
        payload.billing_address_house_number = this.number;
        payload.birthdate = birthdate,
        payload.billing_address_complement = this.complement;
      }

        this.$store.dispatch('GET_DONATION', payload)
        .then(res => {
          this.handleIugu();
          const stepToGoTo = this.paymentData.payment_method === 'credit_card'
            ? 'cardData'
            : 'printBoleto';

          this.$store.dispatch('CHANGE_PAYMENT_STEP', { step: stepToGoTo });
        })
        .catch(err => {
          this.toggleLoading();
          this.handleErrorMessage(err);
        });
    },
    searchAddress(event){
      this.toggleLoading();
      this.$store.dispatch('GET_ADDRESS', event.target.value).then((response) => {
        this.state = ( response.state  == '' ) ? this.disableField('state') : response.state;
        this.city = ( response.city  == '' ) ? this.disableField('city') : response.city;
        this.street = ( response.street == '' ) ? this.disableField('street') : response.street;
        this.district = ( response.district == '' ) ? this.disableField('district') : response.district;
        this.toggleLoading();
        this.errorMessage = '';
      }).catch((erro)=>{
        this.toggleLoading();
        this.errorMessage = 'Cep não encontrado';
      });
    },
    disableField(field) {
      this.$nextTick(function () {
        var element  = document.getElementsByName(field);
        element[0].disabled=false;
        return '';
      });
	},
    handleErrorMessage(err) {
      this.errorMessage = err.data[0].message;
    },
    handleIugu() {
      Iugu.setAccountID(this.iugu.account_id);
      Iugu.setTestMode(this.iugu.is_testing === 1 ? true : false);
    }
  },
  mounted() {
    this.scrollToDonate();
    this.controlSession();
  },
};
</script>
