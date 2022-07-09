<template>
  <div>
    <!-- <div>{{ getDataForms }}</div> -->
    <!-- <div v-for="data in dataForm" :key="data">{{ data }}</div> -->
    <header-step-2></header-step-2>
    <form-step2-body-vue
      @handleOnchanInput="handleOnchanInput"
    ></form-step2-body-vue>
    <button @click="handleNextStep">Next Step</button>
  </div>
</template>

<script>
import HeaderStep2 from "./HeaderStep2.vue";
import FormStep2BodyVue from "./FormStep2Body.vue";
// import { mapGetters } from "vuex";
import { mapGetters, mapState } from "vuex";
export default {
  components: {
    HeaderStep2,
    FormStep2BodyVue,
  },
  data() {
    return {
      siginInfor: [],
      education: [],
    };
  },
  props: {
    // siginInformations: {
    //   type: Object,
    //   required: true,
    //   default: () => {},
    // },
    // forms: {
    //   type: Object,
    //   required: true,
    //   default: () => {},
    // },
    // educations: {
    //   type: Object,
    //   required: true,
    //   default: () => {},
    // },
    // handleNext: {
    //   type: Function,
    //   default: () => Function,
    // },
  },
  computed: {
    ...mapGetters(["getSiginInformations"]),
    ...mapState({
      getDataForms: (state) => state.formLists[0].form2,
    }),

    // siginInformations() {
    //   return this.getSiginInformations.flat(1);
    // },
    // validateSigin() {
    //   return this.siginInformations.map((data) => {
    //     return (this.siginInfor = data.forms);
    //   });
    // },
  },
  created() {},
  methods: {
    validateFormSigin() {
      const dataFormSigins = this.getDataForms[0].forms;
      return dataFormSigins.map((data) => {
        // console.log("check data", data);
        if (!data.input.value && data.required) {
          data.status = true;
          data.messageError = `This field ${data.lable}  is required`;
        }
        return data.status;
      });
    },
    validateFormEducation() {
      const dataFormEducation = this.getDataForms[1].forms;
      return dataFormEducation.map((data) => {
        if (!data.input.value && data.required) {
          data.status = true;
          data.messageError = `This field ${data.lable}  is required`;
        }
        return data.status;
      });
    },
    handleNextStep() {
      this.validateFormSigin();
      this.validateFormEducation();
    },
  },
};
</script>

<style></style>
