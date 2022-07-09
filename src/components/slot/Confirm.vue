<template>
  <div class="confirm-ctn">
    <div class="confirm">
      <img src="../../assets/Confirm/confirm.png" class="confirm-icon" />
      <slot name="title"></slot>
    </div>
    <div class="confirm-des">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmVue",
};
</script>

<style scoped lang="scss">
.confirm-ctn {
  background-color: #f1f2f7;
  padding: 16px;
  .confirm {
    display: flex;
    margin-bottom: 16px;
    .confirm-icon {
      object-fit: contain;
      margin-right: 9px;
    }
  }
}
</style>
