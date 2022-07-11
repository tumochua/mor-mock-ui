<template>
  <div class="labale-ctn">
    <slot name="required"> </slot>
    <slot name="lableName"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LableVue",
};
</script>

<style scoped lang="scss">
.labale-ctn {
  margin-top: 24px;
  margin-bottom: 8px;
}
</style>
