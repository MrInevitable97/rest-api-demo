import { createStore } from "vuex";

const store = createStore({
  state: {
    street: null,
    suite: null,
    city: null,
    zipcode: null,
    companyName: null,
    catchPhrase: null,
    bs: null,
    name: null,
    username: null,
    email: null,
    phone: null,
    website: null,
  },
  mutations: {
    setStreet: (state, payload) => {
      state.street = payload;
    },
    setSuite: (state, payload) => {
      state.suite = payload;
    },
    setCity: (state, payload) => {
      state.city = payload;
    },
    setZipCode: (state, payload) => {
      state.zipcode = payload;
    },
    setCompaneName: (state, payload) => {
      state.companyName = payload;
    },
    setCatchPhrase: (state, payload) => {
      state.catchPhrase = payload;
    },
    setBs: (state, payload) => {
      state.bs = payload;
    },
    setName: (state, payload) => {
      state.name = payload;
    },
    setUsername: (state, payload) => {
      state.username = payload;
    },
    setEmail: (state, payload) => {
      state.email = payload;
    },
    setPhone: (state, payload) => {
      state.phone = payload;
    },
    setWebsite: (state, payload) => {
      state.website = payload;
    },
  },
});

export default store;
