<template>
  <div>
    <span class="errors">
      <slot name="errors"> </slot>
    </span>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.errors {
  color: red;
}
</style>
