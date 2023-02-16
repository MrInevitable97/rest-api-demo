<template>
  <div class="accordeon">
    <div class="accordeon__items">
      <AccordeonTitle
        name="Name"
        email="Email"
        phone="Phone"
        website="Website"
      />
    </div>
    <AccordeonItems :users="users" />
    </div>
</template>

<script>
import AccordeonTitle from './UI/AccordeonTitle.vue';
import AccordeonItems from './AccordeonItems.vue'

export default {
  name: "AccordeonTemplate",
  components: {
    AccordeonItems, AccordeonTitle
  },
  props:['users'],
};
</script>

<style scoped>

.accordeon {
  max-width: 1626px;
  margin: auto;
}


</style>
