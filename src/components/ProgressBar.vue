<template>
  <div class="progress">
    <div class="progress-icon">
      <div v-for="progressBar in progressBars" :key="progressBar.stepPage">
        <img :src="progressBar.icon" :alt="progressBar.alt" />
      </div>
    </div>
    <!-- <div
      class="pros"
      :style="{
        width: (progress / length) * 70 + '%',
      }"
    >
      hcbdca
    </div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProgressBar",
  computed: mapState({
    progressBars: (state) => state.ProgressBar,
    progress: (state) => state.currentPage,
    length: (state) => state.ProgressBar.length,
  }),
};
</script>

<style scoped lang="scss">
.progress {
  width: 560px;
  margin: 0 auto;
  background-color: #f1f2f7;
  margin: 25px 0px;
  .progress-icon {
    display: flex;
    justify-content: space-between;
  }
  // .pros {
  //   background: red;
  // }
}
</style>
