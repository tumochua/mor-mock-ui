<template>
  <div>
    <img
      src="../../assets/Confirm/ArrowLeft.png"
      class="hader-step2-icon"
      @click="handleBack"
    />
    <h1>hello h3</h1>
  </div>
</template>

<script>
export default {
  name: "FormStep3",
  methods: {
    handleBack() {
      this.$store.dispatch("HANDLE_BACK_STEP");
    },
  },
};
</script>

<style scoped lang="scss"></style>
