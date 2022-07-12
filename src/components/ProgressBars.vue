<template>
  <div id="progress">
    <div id="progress-bar"></div>
    <ul id="progress-icon">
      <li
        class="step"
        :class="{
          done: parseInt(getCurrentPage) > 1,
          active: getCurrentPage === 1,
        }"
      >
        <img src="../assets/progess/check.png" />
      </li>
      <li
        class="step"
        :class="{
          done: parseInt(getCurrentPage) > 2,
          active: getCurrentPage === 2,
        }"
      >
        <img src="../assets/progess/edit.png" />
      </li>
      <li
        class="step"
        :class="{
          done: parseInt(getCurrentPage) > 3,
          active: getCurrentPage === 3,
        }"
      >
        <img src="../assets/progess/check.png" />
      </li>
      <li
        class="step"
        :class="{
          done: parseInt(getCurrentPage) > 4,
          active: getCurrentPage === 4,
        }"
      >
        <img src="../assets/progess/edit.png" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProgressBars",
  computed: mapState({
    getCurrentPage: (state) => state.currentPage,
  }),
};
</script>

<style scoped>
#progress {
  position: relative;
  width: 560px;
  margin: 0 auto;
}
#progress-bar {
  position: absolute;
  background: lightseagreen;
  height: 5px;
  width: 0%;
  top: 50%;
  left: 0;
}
#progress-icon {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.step:not(:last-child)::before {
  content: "";
  background-color: #dcdcdc;
  position: absolute;
  top: 50%;
  left: 37px;
  height: 2px;
  width: 350%;
  z-index: -1;
}
#progress-icon .step {
  border: 3px solid #dcdcdc;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-family: sans-serif;
  font-size: 14px;
  position: relative;
  z-index: 1;
  background-color: #dcdcdc;
  color: white;
}
#progress-icon .step.active {
  border-color: #b2b1ff;
  background-color: #b2b1ff;
  color: #fff;
}
#progress-icon .step.done,
.step.done::before {
  border-color: #b2b1ff;
  background-color: #b2b1ff;
  color: #6563ff;
}
</style>
