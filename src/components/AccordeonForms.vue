<template>
  <div class="accordeon-forms">
    <AccordeonAddressForm class="accordeon-forms__item" :userAddress="user.address"  />
    <AccordeonCompanyForm class="accordeon-forms__item" :userCompany="user.company" />
    <AccordeonBasicForm class="accordeon-forms__item" :user="user"/>
  </div>
</template>

<script>
import AccordeonAddressForm from "./AccordeonForm/AccordeonAddressForm.vue";
import AccordeonBasicForm from "./AccordeonForm/AccordeonBasicForm.vue";
import AccordeonCompanyForm from "./AccordeonForm/AccordeonCompanyFrom.vue";
export default {
  name: "AccordeonForms",
  props: ['user'],
  components: {
    AccordeonAddressForm, AccordeonBasicForm, AccordeonCompanyForm
  },
};
</script>

<style>

.accordeon-forms {
  display: none;
  align-items: center;
  justify-content: space-between;
  margin: 12px auto 10px 31px;
  border: 1px solid #D9DBDA;
  border-radius: 8px;
  max-width: 1501px;
}
.accordeon-forms__item {
  width: 100%;
  height: 0;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.accordeon__item.isOpen .accordeon-forms {
  display: flex;
}
.accordeon__item.isOpen button {
  display: flex !important;
}
.accordeon__item.isOpen .accordeon-forms__item {
  height: 403px;
  opacity: 1;
}

.accordeon-forms__item:nth-child(even) {
  border-right: 1px solid #D9DBDA;
  border-left: 1px solid #D9DBDA;
}

.accordeon-forms__item form{
  padding: 0 32px;
}

.accordeon-forms__item label {
  display: flex;
  flex-wrap: wrap;
  row-gap: 7px;
  width: 100%;
  margin: 0 0 12px;

}

.accordeon-forms__item label:last-child {
  margin: 0;
}

</style>
