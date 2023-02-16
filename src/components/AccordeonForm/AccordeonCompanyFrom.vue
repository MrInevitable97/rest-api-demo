<template>
  <div>
    <AccordeonFromHead accordeonFromTitle="COMPANY" />
    <form>
      <Input 
      inputName="Name" 
      type="text" 
      :value="this.userCompany.name" 
      @input="changenUserCompany"
      />
      <Input
        inputName="CatchPhrase"
        type="text"
        :value="this.userCompany.catchPhrase"
        @input="changeCatchPhrase"
      />
      <Input
       inputName="Bs" 
       type="text"
       :value="this.userCompany.bs"
       @input="changeBs"
        />
    </form>
  </div>
</template>

<script>
import AccordeonFromHead from "../UI/AccordeonFromHead.vue";
import Input from "../UI/Input.vue";
export default {
  name: "AccordeonCompanyForm",
  components: {
    AccordeonFromHead,
    Input,
  },
  props: {
    userCompany: Object,
  },
  methods: {
    changenUserCompany(e) {
      this.$store.state.companyName = e.target.value;
    },
	changeCatchPhrase(e) {
      this.$store.state.catchPhrase = e.target.value;
    },
	changeBs(e) {
      this.$store.state.bs = e.target.value
    },
  }
};
</script>

<style scoped></style>
