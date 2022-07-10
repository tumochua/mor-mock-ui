<template>
  <div class="form2-body-ctn">
    <input-file-vue @onFileChange="onFileChange">
      <template v-slot:title>
        <div>顔写真の登録</div>
      </template>
      <template v-slot:description
        >システムの本人アイコンに使用します。あなたの顔が分かる写真を登録してください。未登録の場合、姓名の頭文字が表示されます。顔写真見本のように撮影してください。また、背景は白、スーツ着用、身だしなみルールに沿って撮影をお願いいたします。
      </template>
      <template v-slot:showIng>
        <div v-if="inputfile.url1">
          <img :src="inputfile.url1" alt="error" class="show-img" />
        </div>
      </template>
    </input-file-vue>
    <input-file-vue @onFileChangeUrl2="onFileChangeUrl2" :url2="inputfile.url2">
      <template v-slot:title>
        <div>本人確 認書類</div>
      </template>
      <template v-slot:description
        >運転免許証両面もしくは住民票を添付してください。
      </template>
      <template v-slot:showIng>
        <div v-if="inputfile.url2">
          <img :src="inputfile.url2" alt="error" class="show-img" />
        </div>
      </template>
    </input-file-vue>
    <div class="form-sigin-infomation">
      <form-sign-information-vue></form-sign-information-vue>
    </div>
    <div class="form-education">
      <form-education-vue></form-education-vue>
    </div>
    <!-- <div class="form-insurance">
      <form-insurance-vue></form-insurance-vue>
    </div>
    <div class="form-salary">
      <form-salary-vue></form-salary-vue>
    </div>
    <div class="form-resident">
      <form-resident-vue></form-resident-vue>
    </div>
    <div class="form-sigin-address">
      <form-sigin-address></form-sigin-address>
    </div> -->
  </div>
</template>

<script>
import InputFileVue from "../slot/InputFile.vue";

import FormSignInformationVue from "./FormSignInformation.vue";
import FormEducationVue from "./FormEducation.vue";
// import FormInsuranceVue from "./FormInsurance.vue";
// import FormSalaryVue from "./FormSalary.vue";
// import FormResidentVue from "./FormResident.vue";
// import FormSiginAddress from "./FormSiginAddress.vue";
export default {
  name: "FormStep2Body",
  inject: ["siginInformations"],
  components: {
    InputFileVue,
    // TitleVue,
    // DescriptionVue,
    // LableVue,
    // InputTextVue,
    FormSignInformationVue,
    FormEducationVue,
    // FormInsuranceVue,
    // FormSalaryVue,
    // FormResidentVue,
    // FormSiginAddress,
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
    educations: {
      type: Object,
      required: true,
      default: () => {},
    },
    // handleNext: {
    //   type: Function,
    //   default: () => Function,
    // },
  },
  data() {
    return {
      inputfile: {
        url1: "https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045-1.jpg",
        url2: "",
      },
      inputSigin: [],
      reftInput: "",
    };
  },
  created() {
    // console.log("check siginInformations ", this.siginInformations);
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      this.inputfile.url1 = URL.createObjectURL(file);
    },
    onFileChangeUrl2(event) {
      const file = event.target.files[0];
      console.log("check file", file);
      console.log(URL.createObjectURL(file));
      this.inputfile.url2 = URL.createObjectURL(file);
    },
  },
  watch: {
    // inputSigin: function (value) {
    //   console.log("inputSigin", value);
    // },
  },
};
</script>

<style scoped lang="scss">
.form2-body-ctn {
  .show-img {
    width: 100%;
    height: 100%;
  }

  .form-salary {
    margin-top: 16px;
    background-color: #f1f2f7;
  }
  .form-resident {
    background-color: #f1f2f7;
    margin: 20px 0px;
  }
  .form-sigin-address {
    background-color: #f1f2f7;
    margin: 20px 0px;
  }
  .form-insurance {
    background-color: #f1f2f7;
    padding: 7px 0px 27px 23px;
  }
}
</style>
