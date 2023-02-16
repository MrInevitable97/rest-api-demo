<template>
  <div class="app">
    <div class="app__title">
      <h1>USERS</h1>
    </div>
    <Accordeon :users="this.users"></Accordeon>
  </div>
</template>

<script>
import Accordeon from "./components/Accordeon.vue";
import getUsersApi from "@/api/getUsers";

export default {
  name: "App",
  components: {
    Accordeon,
  },
  data: () => ({
    users: null,
  }),
  async mounted() {
    this.users = await getUsersApi();
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
body {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
div {
  box-sizing: border-box;
}
h1 {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-transform: uppercase;
  color: #696969;
  margin: 0;
}

.app__title {
  width: 100%;
  padding: 0 51px;
  margin: 0 auto 30px;
  height: 77px;
  border-bottom: 1px solid rgba(114, 114, 112, 0.5);
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
