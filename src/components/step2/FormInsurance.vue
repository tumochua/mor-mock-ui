<template>
  <div class="form-step2-ctn">
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
              <span :class="{ lableRequired: data.required }">{{
                data.required
              }}</span>
            </template>
            <template v-slot:lableName>
              <label>
                {{ data.lable }}
              </label>
            </template>
            <span>{{ data.default }}</span>
          </lable-vue>
        </div>
        <input-text-vue>
          <input
            v-if="data.input.type === 'text'"
            :placeholder="data.input.placeholder"
            :value="data.input.value"
            @input="handleOnchanInput($event, data)"
            @blur="handleBlur(data)"
            class="input-text"
          />
        </input-text-vue>
        <input-file-vue v-if="data.input.type === 'file'">
          <input :type="data.input.type" />
        </input-file-vue>
        <input-radio v-if="data.input.type === 'radio'">
          <div class="radio-ctn">
            <div v-for="radio in data.radios" :key="radio.id">
              <div class="radio-item">
                <label>
                  <input
                    :type="radio.type"
                    v-model="radioInput"
                    :value="radio.value"
                  />
                  {{ radio.lable }}
                </label>
                <!-- <label class="radio-lable">{{ radio.lable }}</label> -->
              </div>
            </div>
          </div>
        </input-radio>
        <error-message-vue>
          <template v-if="data.status" v-slot:errors>
            <p v-if="data.status">{{ data.messageError }}</p>
          </template>
        </error-message-vue>
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
import ErrorMessageVue from "../slot/ErrorMessage.vue";
import { mapGetters } from "vuex";
export default {
  name: "FormInsuranceVue",
  components: {
    TitleVue,
    LableVue,
    InputTextVue,
    InputFileVue,
    InputRadio,
    ErrorMessageVue,
  },
  // inject: ["msg", "formInsurance"],

  data() {
    return {
      // formInsurances: this.formInsurance,
      //   datames: this.msg,
      inputSigin: [],
      radioInput: "female",
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
  methods: {
    handleOnchanInput(event, form) {
      form.status = false;
      form.messageError = "";
      const result = {
        name: form,
        value: (form.input.value = event.target.value),
      };
      this.inputSigin.push(result);

      // this.$emit("handleOnchanInput", this.inputSigin);
    },
    handleBlur(value) {
      if (!value.input.value.trim() && value.required) {
        value.status = true;
        // value.messageError = `This field  is required`;
        value.messageError = `このフィールド${value.lable}は必須です`;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.form-insuarance-title {
  margin-top: 16px;
}
.form-insuarance-lable-ctn {
  margin-top: 24px;
  margin-bottom: 8px;
  // .lable-required {
  //   background-color: red;
  //   padding: 2px 6px;
  //   color: #ffffff;
  //   border-radius: 2px;
  // }
}

.radio-ctn {
  width: 90%;
  display: flex;
  justify-content: space-around;
  .radio-item {
    margin-top: 8px;
    padding: 12px 80px;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
    margin-left: -25px;
  }
}
</style>
