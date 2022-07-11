<template>
  <div id="app">
    <div>
      {{ currentPage }}
    </div>
    <header-vue></header-vue>
    <div class="mock-ui-ctn">
      <keep-alive>
        <form-step-vue v-if="currentPage === 1"></form-step-vue>
      </keep-alive>
      <step2-form-vue
        v-if="currentPage === 2"
        @getForms="getForms"
        @handleOnchanInput="handleOnchanInput"
        ref="step2"
      ></step2-form-vue>
      <form-step3-vue v-if="currentPage === 3"></form-step3-vue>
      <form-step4-vue v-if="currentPage === 4"></form-step4-vue>
    </div>
  </div>
</template>

<script>
// import ButtonVue from "./components/Button.vue";
import HeaderVue from "./components/Header.vue";
import FormStepVue from "./components/step1/FormStep.vue";
import Step2FormVue from "./components/step2/Step2Form.vue";
import FormStep3Vue from "./components/step3/FormStep3.vue";
import FormStep4Vue from "./components/step4/FormStep4.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    HeaderVue,
    FormStepVue,
    Step2FormVue,
    FormStep3Vue,
    FormStep4Vue,
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.mock-ui-ctn {
  width: 560px;
  margin: 0 auto;
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
