<template>
  <div class="accordeon__item__head">
    <p>
      {{ accordeonFromTitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: "AccordeonFromTitle",
  props: ["accordeonFromTitle"],
};
</script>

<style scoped>
.accordeon__item__head {
  width: 100%;
  border-bottom: 1px solid #d9dbda;
  padding: 11px 32px;
  margin: 0 0 18px;
}

.accordeon__item__head p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #696969;
  text-align: left;
  margin: 0;
}
</style>
