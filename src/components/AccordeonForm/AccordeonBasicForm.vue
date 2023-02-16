<template>
  <div>
    <AccordeonFromHead accordeonFromTitle="BASIC INFO" />
    <form>
      <Input
        inputName="Name"
        type="text"
        :value="this.user.name"
        @input="changenName"
      />
      <Input
        inputName="Username"
        type="text"
        :value="this.user.username"
        @input="changeUsername"
      />
      <Input
        inputName="Email"
        type="text"
        :value="this.user.email"
        @input="changeEmail"
      />
      <Input
        inputName="Phone"
        type="text"
        :value="this.user.phone"
        @input="changenName"
      />
      <Input
        inputName="Website"
        type="text"
        :value="this.user.website"
        @input="changeWebsite"
      />
    </form>
  </div>
</template>

<script>
import AccordeonFromHead from "../UI/AccordeonFromHead.vue";
import Input from "../UI/Input.vue";
export default {
  name: "AccordeonBasicForm",
  components: {
    AccordeonFromHead,
    Input,
  },
  props: ["user"],
  methods: {
    changenName(e) {
      this.$store.state.name = e.target.value;
    },
	changeUsername(e) {
      this.$store.state.username = e.target.value;
    },
	changeEmail(e) {
      this.$store.state.email = e.target.value
    },
	changeWebsite(e) {
      this.$store.state.website = e.target.value
    },
  }
};
</script>

<style scoped></style>
