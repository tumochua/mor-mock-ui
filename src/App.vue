<template>
  <div id="app">
    <div>
      <!-- <img src="./assets/education/input-seach.png" /> -->
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
    </div>
  </div>
</template>

<script>
// import ButtonVue from "./components/Button.vue";
import HeaderVue from "./components/Header.vue";
import FormStepVue from "./components/step1/FormStep.vue";
import Step2FormVue from "./components/step2/Step2Form.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    HeaderVue,
    FormStepVue,
    Step2FormVue,
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
</style>
