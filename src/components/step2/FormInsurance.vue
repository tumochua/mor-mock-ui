<template>
  <div class="form-insuarance-ctn">
    <div v-for="formInsurance in formInsurances" :key="formInsurance.id">
      <title-vue>
        <template v-slot:title>
          <div class="form-insuarance-title">{{ formInsurance.title }}</div>
        </template>
      </title-vue>
      <div v-for="data in formInsurance.forms" :key="data.id">
        <div class="form-insuarance-lable-ctn">
          <lable-vue>
            <template v-slot:required v-if="data.required">
              <span class="lable-required">{{ data.required }}</span>
            </template>
            <template v-slot:lableName>{{ data.lable }}</template>
            <span>{{ data.default }}</span>
          </lable-vue>
        </div>
        <input-text-vue>
          <input
            v-if="data.input.type === 'text'"
            :placeholder="data.input.placeholder"
          />
        </input-text-vue>
        <input-file-vue v-if="data.input.type === 'file'">
          <input :type="data.input.type" />
        </input-file-vue>
        <input-radio v-if="data.input.type === 'radio'">
          <input :type="data.input.type" />
          <label>{{ data.input.placeholder }}</label>
        </input-radio>
      </div>
    </div>
  </div>
</template>

<script>
import TitleVue from "../slot/Title.vue";
import LableVue from "../slot/Lable.vue";
import InputTextVue from "../slot/InputText.vue";
import InputFileVue from "../slot/InputFile.vue";
import InputRadio from "../slot/InputRadio.vue";
import { mapGetters } from "vuex";
export default {
  name: "FormInsuranceVue",
  components: {
    TitleVue,
    LableVue,
    InputTextVue,
    InputFileVue,
    InputRadio,
  },
  // inject: ["msg", "formInsurance"],

  data() {
    return {
      // formInsurances: this.formInsurance,
      //   datames: this.msg,
    };
  },
  created() {
    // console.log("check props formInsurances", this.formInsurances);
  },
  computed: {
    // ...mapState({
    //   dataEducatioms: (state) => state.formLists[0].formEducation,
    // }),
    ...mapGetters(["getInsurances"]),
    formInsurances() {
      return this.getInsurances.flat(1);
    },
  },
};
</script>

<style scoped lang="scss">
.form-insuarance-ctn {
  .form-insuarance-title {
    margin-top: 16px;
  }
  .form-insuarance-lable-ctn {
    margin-top: 24px;
    margin-bottom: 8px;
    .lable-required {
      background-color: red;
      padding: 2px 6px;
      color: #ffffff;
      border-radius: 2px;
    }
  }
}
</style>
