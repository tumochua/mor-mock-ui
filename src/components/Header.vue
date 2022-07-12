<template>
  <div class="header-ctn">
    <div class="header-item">
      <div class="heaader-icon">
        <img src="../assets/wsp_01.png" alt="icon" />
      </div>
      <div class="header-procedure">入社手続き</div>
      <div class="header-help">ヘルプ</div>
    </div>
  </div>
</template>

<script>
// import date from '../assets/date.png'
export default {
  name: "HeaderVue",
};
</script>

<style scoped lang="scss">
.header-ctn {
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #f1f2f7;

  .header-item {
    display: flex;
    margin-left: 20px;
    align-items: center;
    cursor: pointer;
    .heaader-icon {
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
  .header-procedure {
    margin: 0 15px;
    padding-bottom: 5px;
    border-bottom: 2px solid #007bc3;
  }
}
</style>
