<template>
  <div>
    <span class="input-text-slot">
      <slot name="inputText"> </slot>
    </span>
    <span class="erorrmess">
      <slot name="errors"></slot>
    </span>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss"></style>
