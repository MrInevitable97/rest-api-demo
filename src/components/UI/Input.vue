<template>
  <div>
    <span>{{ inputName }}</span>
    <label>
      <input type="text" :value="value" />
    </label>
  </div>
</template>

<script>
export default {
  name: "InputTemplate",
  props: ["inputName", "value"],
};
</script>

<style scoped>
span {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #696969;
  opacity: 0.5;
  text-align: left;
  display: block;
  width: 100%;
  margin: 10px 0 7px;
}

input {
  border: 1px solid #d9dbda;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-height: 35px;
  padding: 9px 18px;
  width: 100%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #696969;
}
</style>
