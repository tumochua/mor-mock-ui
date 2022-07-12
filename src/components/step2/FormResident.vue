<template>
  <div class="form-step2-ctn">
    {{formResidents[0].forms[0].input.value}}
    <div class="formResident-check">
      <div>在留カード（外国籍の方はご記入ください</div>
      <label class="formResident-check-labe">
        <input
          type="checkbox"
          v-model="formResidents[0].forms[0].input.value"
        />
        外国籍の方はチェックを入れてください
      </label>
    </div>
    <div :class="{ active: !formResidents[0].forms[0].input.value }">
      <div v-for="formResident in formResidents" :key="formResident.id">
        <div v-for="data in formResident.forms" :key="data.id">
          <div class="form-resident-ctn">
            <div class="form-residen-lable">
              <lable-vue>
                <template v-slot:lableName>
                  <!-- <label>{{ data.lable }}</label> -->
                </template>
                <template v-slot:required v-if="data.required">
                  <label
                    :class="[
                      formResidents[0].forms[0].input.value
                        ? 'lableRequired'
                        : 'disabled',
                    ]"
                  >
                    {{ data.required }}
                  </label>
                </template>

                <label>{{ data.default }}</label>
              </lable-vue>
            </div>
            <div>
              <div v-if="data.input.type === 'text'">
                <input-text-vue>
                  <template v-slot:inputText>
                    <input
                      :type="data.input.type"
                      class="input-text"
                      :class="{ inputBlur: data.status }"
                      :placeholder="data.input.placeholder"
                      :value="data.input.value"
                      @input="handleOnchanInput($event, data)"
                      @blur="handleBlur(data)"
                    />
                  </template>
                </input-text-vue>
              </div>
              <div v-if="data.input.type === 'select'">
                <select class="education-select">
                  <option
                    v-for="slecteducation in data.slecteducations"
                    :key="slecteducation.id"
                    :value="slecteducation"
                  >
                    {{ slecteducation.name }}
                  </option>
                </select>
              </div>
              <div v-if="data.input.type === 'date'">
                <input-date-vue>
                  <template v-slot:inputDate>
                    <input :type="data.input.type" class="input-date" />
                  </template>
                </input-date-vue>
              </div>
              <div v-if="data.input.type === 'file'">
                <input-file-vue>
                  <template>
                    <input :type="data.input.type" />
                  </template>
                </input-file-vue>
              </div>
            </div>
          </div>
          <error-message-vue>
            <template v-if="data.status && data.required" v-slot:errors>
              <p v-if="data.status">{{ data.messageError }}</p>
            </template>
          </error-message-vue>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TitleVue from "../slot/Title.vue";
// import InputCheckboxVue from "../slot/InputCheckbox.vue";
import InputTextVue from "../slot/InputText.vue";
import LableVue from "../slot/Lable.vue";
import InputDateVue from "../slot/InputDate.vue";
import InputFileVue from "../slot/InputFile.vue";
import ErrorMessageVue from "../slot/ErrorMessage.vue";
import { mapGetters } from "vuex";

export default {
  name: "FormResident",
  // inject: ["formResidents"],

  components: {
    // TitleVue,
    // InputCheckboxVue,
    InputTextVue,
    LableVue,
    InputDateVue,
    InputFileVue,
    ErrorMessageVue,
  },
  data() {
    return {
      // formResidents: this.formResidents,
      checkboxResident: true,
      inputSigin: [],
    };
  },
  created() {
    // console.log("check props formResidents ", this.formResidents);
  },
  computed: {
    // ...mapState({
    //   dataEducatioms: (state) => state.formLists[0].formEducation,
    // }),
    ...mapGetters(["getResidents"]),
    formResidents() {
      return this.getResidents.flat(1);
    },
  },
  methods: {
    handleOnInput(value) {
      console.log("checkbox", value);
    },
    handleOnchanInput(event, form) {
      form.status = false;
      form.messageError = "";
      const result = {
        name: form,
        value: (form.input.value = event.target.value),
      };
      console.log(result);
      console.log(form.input.value);
      console.log(event.target.value);

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
.formResident-check {
  .formResident-check-labe {
    cursor: pointer;
  }
}
.active {
  opacity: 0.6;
  pointer-events: none;
  .form-resident-ctn {
    //   display: flex;
    .inputBlur {
      outline: none;
      border: 1px solid red;
    }
    .form-residen-lable {
      display: flex;
      .disabled {
        background: gray;
        padding: 2px 6px;
        color: #ffffff;
        border-radius: 2px;
      }
    }
  }
}

// .form-resident {
//   background-color: #f1f2f7;
//   padding: 7px 0px 27px 23px;
// }
</style>
