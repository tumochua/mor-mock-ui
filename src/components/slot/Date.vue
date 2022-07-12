<template>
  <div class="page-date-ctn">
    <img src="../../assets/date.png" alt="date" class="page-date-icon" />
    <label>2021/09/01までご登録ください</label>
  </div>
</template>

<script>
export default {
  name: "DateVue",
};
</script>

<style scoped lang="scss">
.page-date-ctn {
  margin: 20px 0px;
  display: flex;
  .page-date-icon {
    margin-right: 9px;
    object-fit: contain;
  }
}
</style>
