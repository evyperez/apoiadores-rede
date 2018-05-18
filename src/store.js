/* eslint-disable no-undef, arrow-body-style, no-param-reassign, no-console */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const api = 'https://dapi.votolegal.com.br/api2/';

export default new Vuex.Store({
  state: {
    paymentStep: 'selectValue',
    amount: 0,
  },
  mutations: {
    SET_PAYMENT_STEP(state, { data }) {
      state.paymentStep = data.step;
    },
    SET_PAYMENT_AMOUNT(state, { data }) {
      state.amount = data.amount;
    },
  },
  actions: {
    CHANGE_PAYMENT_AMOUNT({ commit }, data) {
      commit('SET_PAYMENT_STEP', { data });
      commit('SET_PAYMENT_AMOUNT', { data });
    },
    CHANGE_PAYMENT_STEP({ commit }, data) {
      commit('SET_PAYMENT_STEP', { data });
    },
  },
});
