<template>
  <div class="form-step2-ctn">
    <div v-for="dataEducatiom in dataEducatioms" :key="dataEducatiom.id">
      <title-vue>
        <template v-slot:title>
          <div class="education-title">{{ dataEducatiom.title }}</div>
        </template>
      </title-vue>
      <description-vue>
        <template v-slot:description>
          <div class="education-description">
            {{ dataEducatiom.description }}
          </div>
        </template>
        <div>{{ dataEducatiom.education }}</div>
      </description-vue>
      <div v-for="data in dataEducatiom.forms" :key="data.id">
        <label class="lable-ctn">
          <lable-vue>
            <template v-slot:lableName>
              <label>{{ data.lable }}</label>
            </template>
            <template v-if="data.required" v-slot:required>
              <label :class="{ lableRequired: data.required }">
                {{ data.required }}
              </label>
            </template>
          </lable-vue>
        </label>
        <div>
          <div v-if="data.input.type === 'date'">
            <input-date-vue>
              <template v-slot:inputDate>
                <input
                  class="input-date-ctn"
                  :class="{ inputBlur: data.status }"
                  :type="data.input.type"
                  :value="data.input.value"
                  @input="handleOnchanInput($event, data)"
                  @blur="handleBlur(data)"
                />
              </template>
            </input-date-vue>
          </div>
          <div v-if="data.input.type === 'select'">
            <select
              class="education-select"
              :class="{ inputBlur: data.status }"
              @input="handleOnchanInput($event, data)"
              @blur="handleBlur(data)"
            >
              <option
                v-for="slecteducation in data.slecteducations"
                :key="slecteducation.id"
                :value="slecteducation"
              >
                {{ slecteducation.name }}
              </option>
            </select>
          </div>
          <div v-if="data.input.type === 'seach'">
            <div class="education-icon-srach-wapper">
              <span class="education-icon-seach">
                <img
                  src="../../assets/education/input-seach.png"
                  alt="icon seach"
                />
              </span>
              <input-text-vue>
                <template v-slot:inputText>
                  <input
                    class="input-text"
                    :class="{ inputBlur: data.status }"
                    :placeholder="data.input.placeholder"
                    @input="handleOnchanInput($event, data)"
                    @blur="handleBlur(data)"
                    :value="data.input.value"
                  />
                </template>
                <div v-if="inputSeach && data.input.type === 'seach'">
                  <div v-for="(resultQuer, index) in resultQuery" :key="index">
                    <div
                      @click="handleClickSeach(data, resultQuer)"
                      style="cursor: pointer"
                    >
                      {{ resultQuer.name }}
                    </div>
                  </div>
                </div>
              </input-text-vue>
            </div>
          </div>
          <div v-if="data.input.type === 'text'">
            <input-text-vue>
              <template v-slot:inputText>
                <input
                  class="input-text"
                  :placeholder="data.input.placeholder"
                  :value="data.input.value"
                />
              </template>
            </input-text-vue>
          </div>
        </div>
        <error-message-vue>
          <template v-if="data.status && data.required" v-slot:errors>
            <p v-if="data.status">{{ data.messageError }}</p>
          </template>
        </error-message-vue>
      </div>
      <div class="add-education" @click="handleAddEducation">
        <img src="../../assets/education/add-education.png" class="icon-add" />
        <span class="add-education-text">学歴を追加する </span>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import TitleVue from "../slot/Title.vue";
import DescriptionVue from "../slot/Description.vue";
import InputDateVue from "../slot/InputDate.vue";
import InputTextVue from "../slot/InputText.vue";
import LableVue from "../slot/Lable.vue";
import ErrorMessageVue from "../slot/ErrorMessage.vue";
import { mapGetters, mapState } from "vuex";
export default {
  name: "FormEducation",
  inject: ["formEducations"],
  components: {
    TitleVue,
    DescriptionVue,
    InputDateVue,
    InputTextVue,
    LableVue,
    ErrorMessageVue,
  },
  // inject: ["msg"],
  data() {
    return {
      // mesData: this.msg,
      // dataEducatioms: this.formEducations,
      inputSigin: [],
      searchQuery: "",
      inputSeach: false,
    };
  },
  props: {
    educations: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  created() {
    // console.log("check props dataEducatioms ", this.dataEducatioms);
  },

  computed: {
    ...mapState({
      resources: (state) => state.resources,
    }),
    resultQuery() {
      if (this.searchQuery) {
        return this.resources.filter((item) => {
          return item.value
            .toLowerCase()
            .startsWith(this.searchQuery.toLowerCase());
        });
      } else {
        return this.resources;
      }
    },
    ...mapGetters(["getEducatioms"]),
    dataEducatioms() {
      return this.getEducatioms.flat(1);
    },
  },
  methods: {
    handleOnchanInput(event, form) {
      if (form.input.type === "seach") {
        this.inputSeach = true;
      }
      this.searchQuery = event.target.value;
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
      // this.inputSeach = false;
      if (!value.input.value.trim() && value.required) {
        value.status = true;
        // value.messageError = `This field  is required`;
        value.messageError = `このフィールド${value.lable}は必須です`;
      }
    },
    handleAddEducation() {
      this.$store.dispatch("HANDLE_ADD_EDUCATION", {
        id: 1,
        lable: " 入学年月日",
        required: "必須",
        input: {
          value: "",
          type: "date",
          placeholder: "テキストテキス",
        },
        messageError: "",
        status: false,
      });
    },
    handleClickSeach(data, resultQuer) {
      data.input.value = resultQuer.name;
      this.inputSeach = false;
      console.log("check data ", data);
      console.log("check resultQuer", resultQuer);
    },
  },

  watch: {
    // mesData: {
    //   immediate: true,
    //   handler() {
    //     console.log("test message");
    //   },
    // },
    dataEducatioms: {
      immediate: true,
      handler() {
        // console.log("test message");
      },
    },
  },
};
</script>

<style scoped lang="scss">
.form-education {
  // background-color: #f1f2f7;
  // padding: 7px 0px 27px 23px;

  .education-title {
    color: #333333;
    margin-top: 16px;
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 18px;
    line-height: 42px;
  }
  .education-description {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #666666;
  }
  .lable-ctn {
  }
  .inputBlur {
    border: 1px solid red;
    outline: none;
  }
  .input-date-ctn {
    padding: 12px 22px;
    outline: none;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
  }
  .inputBlur {
    border: 1px solid red;
    outline: none;
  }
  .education-select {
    width: 95%;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
    outline: none;
  }
  .inputBlur {
    border: 1px solid red;
    outline: none;
  }
  .input-text {
    padding: 12px;
    width: 90%;
    outline: none;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
  }
  .education-icon-srach-wapper {
    position: relative;
    .education-icon-seach {
      position: absolute;
      right: 10%;
      top: 9px;
    }
    .inputBlur {
      border: 1px solid red;
      outline: none;
    }
  }
  .add-education {
    margin-top: 12px;
    cursor: pointer;
    .icon-add {
    }
    .add-education-text {
      margin-left: 10px;
    }
  }
}
</style>
