<template>
  <div class="form-step2-ctn">
    <div v-for="siginAddres in siginAddress" :key="siginAddres.id">
      <title-vue>
        <template v-slot:title>
          <div>{{ siginAddress.title }}</div>
        </template>
      </title-vue>
      <div v-for="data in siginAddres.forms" :key="data.id">
        <lable-vue>
          <template v-slot:required v-if="data.required">
            <label :class="{ lableRequired: data.required }">{{
              data.required
            }}</label>
          </template>
          <template v-slot:lableName>
            <label>{{ data.lable }}</label>
          </template>
        </lable-vue>
        <select-option-vue v-if="data.input.type === 'select'">
          <template v-slot:select>
            <select
              :class="{ inputBlur: data.status }"
              @input="handleOnchanInput($event, data)"
              @blur="handleBlur(data)"
              class="education-select"
            >
              <option
                v-for="slecteducation in data.slecteducations"
                :key="slecteducation.id"
                :value="slecteducation"
              >
                {{ slecteducation.name }}
              </option>
            </select>
          </template>
        </select-option-vue>
        <input-date-vue v-if="data.input.type === 'date'">
          <template v-slot:inputDate>
            <input
              :type="data.input.type"
              :class="{ inputBlur: data.status }"
              class="input-date"
              :value="data.input.value"
              @input="handleOnchanInput($event, data)"
              @blur="handleBlur(data)"
            />
          </template>
        </input-date-vue>
        <input-text-vue v-if="data.input.type === 'text'">
          <template v-slot:inputText>
            <input
              :type="data.input.type"
              :class="{ inputBlur: data.status }"
              class="input-text"
              :value="data.input.value"
              @input="handleOnchanInput($event, data)"
              :placeholder="data.input.placeholder"
              @blur="handleBlur(data)"
            />
          </template>
        </input-text-vue>
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
import SelectOptionVue from "../slot/SelectOption.vue";
import LableVue from "../slot/Lable.vue";
import InputDateVue from "../slot/InputDate.vue";
import InputTextVue from "../slot/InputText.vue";
import ErrorMessageVue from "../slot/ErrorMessage.vue";
import { mapGetters } from "vuex";
export default {
  name: "FormSiginAddress",
  // inject: ["siginAddress"],
  components: {
    TitleVue,
    SelectOptionVue,
    LableVue,
    InputDateVue,
    InputTextVue,
    ErrorMessageVue,
  },
  data() {
    return {
      // siginAddress: this.siginAddress,
      inputSigin: [],
    };
  },
  created() {
    // console.log("check props siginAddress", this.siginAddress);
  },
  computed: {
    // ...mapState({
    //   dataEducatioms: (state) => state.formLists[0].formEducation,
    // }),
    ...mapGetters(["getsiginAddress"]),
    siginAddress() {
      return this.getsiginAddress.flat(1);
    },
  },
  methods: {
    handleOnchanInput(event, data) {
      data.status = false;
      data.messageError = "";
      const result = {
        name: data,
        value: (data.input.value = event.target.value),
      };
      this.inputSigin.push(result);

      // this.$emit("handleOnchanInput", this.inputSigin);
    },
    handleBlur(value) {
      if (!value.input.value.trim()) {
        value.status = true;
        // value.messageError = `This field  is required`;
        value.messageError = `このフィールド${value.lable}は必須です`;
      }
    },
  },
};
</script>

<style scoped>
.inputBlur {
  outline: none;
  border: 1px solid red;
}
/* .lable-required {
  background: red;
} */
</style>
