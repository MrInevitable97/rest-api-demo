<template>
  <div class="accordion__title">
    <p>{{ name }}</p>
    <p>{{ email }}</p>
    <p>{{ phone }}</p>
    <p>{{ website }}</p>
  </div>
</template>

<script>
export default {
  name: "AccordeonTitle",
  props: ['name', 'email', 'phone', 'website',],
};
</script>

<style scoped>
.accordion__title {
  grid-template-columns: repeat(4, 1fr);
  display: grid;
  align-items: center;
  justify-content: flex-start;
  column-gap: 20px;
  padding: 0 44px;
}
.accordion__title p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #696969;
  opacity: 0.5;
  text-align: left;
}
</style>
