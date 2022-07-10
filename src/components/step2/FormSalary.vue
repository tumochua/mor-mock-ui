<template>
  <div>
    <div v-for="formSalary in formSalarys" :key="formSalary.id">
      <div>{{ formSalary.title }}</div>
      <div v-for="data in formSalary.forms" :key="data.id">
        <lable-vue>
          <template v-slot:required v-if="data.required">
            <label class="labale-required">{{ data.required }}</label>
          </template>
          <template v-slot:lableName>
            <label>{{ data.lable }}</label
            ><br />
          </template>
          <label>{{ data.default }}</label>
        </lable-vue>
        <input-text-vue>
          <template v-slot:inputText>
            <input
              :placeholder="data.input.placeholder"
              :value="data.input.value"
              @input="handleOnchanInput($event, data)"
              @blur="handleBlur(data)"
              class="input-text"
              :class="{ inputBlur: data.status }"
            />
          </template>
        </input-text-vue>
        <error-message-vue>
          <template v-if="data.status && data.required" v-slot:errors>
            <p v-if="data.status">{{ data.messageError }}</p>
          </template>
        </error-message-vue>
      </div>
    </div>
  </div>
</template>

<script>
import LableVue from "../slot/Lable.vue";
import InputTextVue from "../slot/InputText.vue";
import ErrorMessageVue from "../slot/ErrorMessage.vue";
import { mapGetters } from "vuex";
export default {
  name: "FormSalary",
  components: {
    LableVue,
    InputTextVue,
    ErrorMessageVue,
  },
  data() {
    return {
      inputSigin: [],
    };
  },
  created() {},
  computed: {
    // ...mapState({
    //   dataEducatioms: (state) => state.formLists[0].formEducation,
    // }),
    ...mapGetters(["getSalarys"]),
    formSalarys() {
      return this.getSalarys.flat(1);
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
      console.log("check bluer", value);
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
.labale-required {
  background-color: red;
}
.inputBlur {
  outline: none;
  border: 1px solid red;
}
</style>
