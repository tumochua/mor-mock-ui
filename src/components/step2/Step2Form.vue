<template>
  <div>
    <header-step-2></header-step-2>
    <form-step2-body-vue
      @handleOnchanInput="handleOnchanInput"
    ></form-step2-body-vue>
    <button @click="handleNextStep" class="btn-next">Next Step</button>
  </div>
</template>

<script>
import HeaderStep2 from "./HeaderStep2.vue";
import FormStep2BodyVue from "./FormStep2Body.vue";
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
      nextStep: [],
      messageErrors: "",
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
    handleNextStepComputed() {
      return this.nextStep.flat(1);
    },
    validateFormSigin() {
      const dataFormSigins = this.getDataForms[0].forms;
      return dataFormSigins.map((data) => {
        if (data.input && data.required && !data.input.value) {
          data.status = true;
          data.messageError = `このフィールド${data.lable}は必須です`;
        }
        return data;
      });
    },
    validateFormEducation() {
      const dataFormEducation = this.getDataForms[1].forms;
      return dataFormEducation.map((data) => {
        // console.log("check data validateFormEducation", data.input);

        if (data.input && data.required && !data.input.value) {
          data.status = true;
          data.messageError = `このフィールド${data.lable}は必須です`;
        }
        return data;
      });
    },
    validateFormInsurance() {
      const dataFormInsuarance = this.getDataForms[2].forms;

      return dataFormInsuarance.map((data) => {
        if (data.input && data.required && !data.input.value) {
          data.status = true;
          data.messageError = `このフィールド${data.lable}は必須です`;
        }
        return data;
      });
    },
    validateFormSalary() {
      const dataFormSalary = this.getDataForms[3].forms;

      return dataFormSalary.map((data) => {
        if (data.input && data.required && !data.input.value) {
          data.status = true;
          data.messageError = `このフィールド${data.lable}は必須です`;
        }
        return data;
      });
    },
    validateFormSiginAddress() {
      const dataFormSiginAddress = this.getDataForms[5].forms;

      return dataFormSiginAddress.map((data) => {
        if (data.input && data.required && !data.input.value) {
          data.status = true;
          data.messageError = `このフィールド${data.lable}は必須です`;
        }
        return data;
      });
    },
    // validateFormResident() {
    //   const dataFormResident = this.getDataForms[4].forms;
    //   return dataFormResident.map((data) => {
    //     // console.log("check validateFormResident", data.input && data.input.value);
    //     if (data.input && data.input.value) {
    //       data.status = true;
    //       data.messageError = `このフィールド${data.lable}は必須です`;
    //     }
    //     return data;
    //   });
    // },
  },
  created() {},
  methods: {
    handleNextStep() {
      const sigin = this.validateFormSigin;
      const education = this.validateFormEducation;
      const insurance = this.validateFormInsurance;
      const salary = this.validateFormSalary;
      const siginAddress = this.validateFormSiginAddress;
      this.nextStep.push(sigin);
      this.nextStep.push(education);
      this.nextStep.push(insurance);
      this.nextStep.push(salary);
      this.nextStep.push(siginAddress);
      let result = this.handleNextStepComputed.every((value) => {
        console.log(value.messageError);
        return value.messageError === "";
      });
      console.log("check result", result);
      if (result) {
        this.$store.dispatch("HANLDE_NEXT");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.btn-next {
  width: 100%;
  cursor: pointer;
  padding: 12px 10px;
  background-color: #b2b1ff;
  border: none;
  border-radius: 4px;
  color: #ffffff;
}
</style>
