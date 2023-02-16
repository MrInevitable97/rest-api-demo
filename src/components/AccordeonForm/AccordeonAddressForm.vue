<template>
  <div>
    <AccordeonFromHead accordeonFromTitle="ADDRESS" />
    <form>
      <Input
        inputName="Street"
        type="text"
        :value="this.userAddress.street"
        @input="changeStreet"
      />
      <Input
        inputName="Suite"
        type="text"
        :value="this.userAddress.suite"
        @input="changeSuite"
      />
      <Input
        inputName="City"
        type="text"
        :value="this.userAddress.city"
        @input="changeCity"
      />
      <Input
        inputName="Zipcode"
        type="text"
        :value="this.userAddress.zipcode"
        @input="changeZipcode"
      />
    </form>
  </div>
</template>

<script>
import AccordeonFromHead from "../UI/AccordeonFromHead.vue";
import Input from "../UI/Input.vue";
export default {
  name: "AccordeonAddressForm",
  components: {
    AccordeonFromHead,
    Input,
  },
  props: ['userAddress'],
  methods: {
    changeStreet(e) {
      this.$store.state.street = e.target.value;
    },
	changeSuite(e) {
      this.$store.state.suite = e.target.value;
    },
	changeCity(e) {
      this.$store.state.city = e.target.value
    },
	changeZipcode(e) {
      this.$store.state.zipcode = e.target.value
    },
  },
};
</script>

<style scoped></style>
