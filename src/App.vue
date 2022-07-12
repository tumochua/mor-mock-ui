<template>
  <div id="app">
    <header-vue></header-vue>
    <ProgressBarsVue />
    <div class="mock-ui-ctn">
      <div>
        <div class="mock-ui-title">雇用契約について</div>
      </div>
      <form-step-vue v-if="currentPage === 1"> </form-step-vue>
      <step2-form-vue v-if="currentPage === 2">
        <DateVue />
      </step2-form-vue>
      <step2-form-vue v-if="currentPage === 3"> <DateVue /> </step2-form-vue>
      <form-step3-vue v-if="currentPage === 4">
        <DateVue />
      </form-step3-vue>
    </div>
  </div>
</template>

<script>
// import ButtonVue from "./components/Button.vue";
import HeaderVue from "./components/Header.vue";
import FormStepVue from "./components/step1/FormStep.vue";
import Step2FormVue from "./components/step2/Step2Form.vue";
import FormStep3Vue from "./components/step3/FormStep3.vue";
import DateVue from "./components/slot/Date.vue";
import ProgressBarsVue from "./components/ProgressBars.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    HeaderVue,
    FormStepVue,
    Step2FormVue,
    FormStep3Vue,
    ProgressBarsVue,
    DateVue,
    // ButtonVue,
  },
  data() {
    return {
      // testmsg: "nguyen van tu",
    };
  },
  provide() {
    return {
      // msg: this.testmsg,
    };
  },

  computed: {
    ...mapState({
      currentPage: (state) => state.currentPage,
    }),
  },
  created() {
    // console.log("check data app ", this.form2.formInsurance);
  },

  methods: {
    handleNext() {
      this.$store.dispatch("HANLDE_NEXT");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}
.mock-ui-ctn {
  width: 560px;
  margin: 0 auto;
  .mock-ui-title {
    font-weight: 400;
    font-size: 24px;
    line-height: 52px;
  }
}
.input-text {
  padding: 12px;
  width: 90%;
  outline: none;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
}
.input-date {
  margin-top: 8px;
  margin-bottom: 24px;
  border: 1px solid #dcdcdc;
  padding: 12px;
  border-radius: 4px;
  outline: none;
}
.education-select {
  width: 95%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  outline: none;
}
.form-step2-ctn {
  background-color: #f1f2f7;
  padding: 7px 0px 27px 23px;
}
.lableRequired {
  background-color: red;
  padding: 2px 6px;
  color: #ffffff;
  border-radius: 2px;
}
</style>
