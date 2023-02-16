<template>
  <div
    v-for="(user, index) in users"
    class="accordeon__item"
    :class="{ isOpen: this.openedAccordeonIndex == index }"
    @click="openAccordion(index, $event)"
    :key="user.id"
  >
    <AccordeonItem
      :name="user.name"
      :email="user.email"
      :phone="user.phone"
      :website="user.website"
      :index="index"
    />
    <div class="accordeon__dropdown">
      <AccordeonForms :user="user" />

      <button @click="alertChanges">
        <img src="@/assets/sendIcon.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
import AccordeonItem from "./AccordeonItem.vue";
import AccordeonForms from "./AccordeonForms.vue";

export default {
  name: "AccordeonItems",
  components: {
    AccordeonItem,
    AccordeonForms,
  },
  data: () => ({
    openedAccordeonIndex: null,
    flag: false,
  }),
  props: ["users"],
  methods: {
    openAccordion(index, e) {
      let activeItemIndex = e.target.getAttribute("index");
      let closestParent = e.target.closest('.accordeon__item')
      if (activeItemIndex == index) {
        if(closestParent.classList.contains('isOpen')) {
          this.openedAccordeonIndex = -1;
          return
        } else {
          this.openedAccordeonIndex = index;
          return
        }
      } else {
        (this.openedAccordeonIndex = index);
        return 
      }
    },
    alertChanges() {
      let alertData = [];
      for (const [key, value] of Object.entries(this.$store.state)) {
        if (value) {
          alertData.push(`${key}: ${value}`);
        }
      }
      alert(alertData);
    },
  },
};
</script>

<style scoped>
.accordeon__item {
  margin: 0 0 10px;
}

.accordeon__item:last-child {
  margin: 0;
}

.accordeon__dropdown {
  position: relative;
}

.accordeon__dropdown button {
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  position: absolute;
  right: 30px;
  top: 0;
  display: none;
}
</style>
