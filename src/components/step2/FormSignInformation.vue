<template>
  <div class="sign-information-ctn">
    <div
      v-for="siginInformation in siginInformations"
      :key="siginInformation.id"
    >
      <title-vue>
        <template v-slot:title>
          <div>{{ siginInformation.title }}</div>
        </template>
      </title-vue>
      <description-vue>
        <template v-slot:description>
          <div>{{ siginInformation.description }}</div>
        </template>
      </description-vue>
      <div v-for="form in siginInformation.forms" :key="form.id">
        <div class="sign-information-conten">
          <lable-vue>
            <template v-slot:lableName>
              <lable>{{ form.lable }}</lable>
            </template>
            <template v-slot:required v-if="form.required">
              <lable class="lable-default">{{ form.required }}</lable>
            </template>
          </lable-vue>
          <input-text-vue>
            <template v-slot:inputText>
              <input
                v-if="form.input.type === 'text' && form.required"
                :class="{ inputBlur: form.status }"
                class="input-text"
                :type="form.input.type"
                :value="form.input.value"
                @input="handleOnchanInput($event, form)"
                :placeholder="form.input.placeholder"
                @blur="handleBlur(form)"
              />
            </template>
            <span v-if="!form.required">
              <input class="input-text" />
            </span>
          </input-text-vue>
          <input-radio-vue v-if="form.input.type === 'radio'">
            <template v-slot:radio>
              <div class="radio-ctn">
                <div v-for="radio in form.radios" :key="radio.id">
                  <div class="radio-item">
                    <input
                      :type="radio.type"
                      :class="{ inputBlur: form.status }"
                      :value="radio.value"
                      v-model="inputRadio"
                    />
                    <label class="radio-lable">{{ radio.lable }}</label>
                  </div>
                </div>
              </div>
            </template>
          </input-radio-vue>
          <input-date-vue v-if="form.input.type === 'date'">
            <template v-slot:inputDate>
              <input
                :class="{ inputBlur: form.status }"
                :type="form.input.type"
                class="input-date"
                :value="form.input.value"
                @input="handleOnchanInput($event, form)"
                @blur="handleBlur(form)"
              />
            </template>
          </input-date-vue>
        </div>
        <error-message-vue>
          <template v-if="form.status" v-slot:errors>
            <p v-if="form.status">{{ form.messageError }}</p>
          </template>
        </error-message-vue>
      </div>
    </div>
  </div>
</template>

<script>
import TitleVue from "../slot/Title.vue";
import DescriptionVue from "../slot/Description.vue";
import LableVue from "../slot/Lable.vue";
import InputTextVue from "../slot/InputText.vue";
import InputDateVue from "../slot/InputDate.vue";
import InputRadioVue from "../slot/InputRadio.vue";
import ErrorMessageVue from "../slot/ErrorMessage.vue";
import { mapGetters } from "vuex";
export default {
  name: "FormSignInformation",
  // inject: ["siginInformations"],
  components: {
    TitleVue,
    DescriptionVue,
    LableVue,
    InputTextVue,
    InputDateVue,
    InputRadioVue,
    ErrorMessageVue,
  },
  data() {
    return {
      // siginInformations: this.siginInformations,
      inputSigin: [],
      inputRadio: "female",
    };
  },
  created() {
    // console.log("check props siginInformations ", this.siginInformations);
  },
  computed: {
    // ...mapState({
    //   siginInformations: (state) => state.formLists[0].siginInformations,
    // }),
    ...mapGetters(["getSiginInformations"]),
    siginInformations() {
      return this.getSiginInformations.flat(1);
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
      console.log(value);
      if (!value.input.value.trim()) {
        value.status = true;
        // value.messageError = `This field  is required`;
        value.messageError = `このフィールド${value.lable}は必須です`;
        // value.messageError = `This field ${value.lable}  is required`;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.sign-information-ctn {
  background-color: #f1f2f7;
  margin-top: 168px;
  margin-bottom: 100px;
  padding: 7px 0px 27px 23px;
  .sign-information-conten {
    margin-top: 20px;
    .input-text {
      padding: 12px;
      width: 90%;
      outline: none;
      border: 1px solid #dcdcdc;
      border-radius: 4px;
    }
    .inputBlur {
      border: 1px solid red;
      outline: none;
    }

    .lable-default {
      background-color: red;
      padding: 2px 6px;
      color: #ffffff;
      border-radius: 2px;
    }
    .input-date {
      margin-top: 8px;
      margin-bottom: 24px;
      border: 1px solid #dcdcdc;
      padding: 12px;
      border-radius: 4px;
      outline: none;
    }
    .inputBlur {
      border: 1px solid red;
      outline: none;
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
        .radio-lable {
          margin-left: 8px;
        }
        input {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
