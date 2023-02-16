<template>
  <div class="accordeon__item__title">
    <button :index="this.index">
    </button>
    <p>{{ name }}</p>
    <p>{{ email }}</p>
    <p>{{ phone }}</p>
    <p>{{ website }}</p>
  </div>
</template>

<script>
export default {
  name: "AccordeonItem",
  props: ['name', 'email', 'phone', 'website', 'accordionTitle','index'],
  };
</script>

<style scoped>
.accordeon__item__title {
  display: grid;
  align-items: center;
  justify-content: flex-start;
  column-gap: 20px;
  grid-template-columns: 11px repeat(4, 1fr);
  padding: 14px 12px;
  border: 1px solid #ffd200;
  border-radius: 4px;
}

.accordeon__item__title p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #696969;
  text-align: left;
  margin: 0;
}

.accordeon__item__title button {
	outline: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	width: fit-content;
	border: none;
	padding: 0;
  background: url('../assets/dropdownIcon.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  min-height: 10.5px;
  min-width: 20px;
}
</style>
