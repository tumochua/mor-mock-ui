<template>
  <div>
    <div v-for="formResident in formResidents" :key="formResident.id">
      <title-vue>
        <template v-slot:title>
          <div>{{ formResident.title }}</div>
        </template>
      </title-vue>
      <div v-for="data in formResident.forms" :key="data.id">
        <div class="form-resident-ctn">
          <div class="form-residen-lable">
            <lable-vue v-if="data.required" class="form-resident-required">{{
              data.required
            }}</lable-vue>
            <lable-vue>{{ data.lable }}</lable-vue>
            <lable-vue>{{ data.default }}</lable-vue>
          </div>
          <div v-if="data.input.type === 'checkbox'">
            <input-checkbox-vue>
              <template v-slot:checkBox>
                <input :type="data.input.type" :value="data.input.value" />
              </template>
              <span>{{ data.lable }}</span>
            </input-checkbox-vue>
          </div>
          <div
            :class="{
              active: !data.input.value,
              activecheck: data.input.value,
            }"
          >
            <div v-if="data.input.type === 'text'">
              <input-text-vue>
                <template v-slot:inputText>
                  <input :type="data.input.type" />
                </template>
              </input-text-vue>
            </div>
            <div v-if="data.input.type === 'select'">
              <select>
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
                  <input :type="data.input.type" />
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
      </div>
    </div>
  </div>
</template>

<script>
import TitleVue from "../slot/Title.vue";
import InputCheckboxVue from "../slot/InputCheckbox.vue";
import InputTextVue from "../slot/InputText.vue";
import LableVue from "../slot/Lable.vue";
import InputDateVue from "../slot/InputDate.vue";
import InputFileVue from "../slot/InputFile.vue";
import { mapGetters } from "vuex";

export default {
  name: "FormResident",
  // inject: ["formResidents"],

  components: {
    TitleVue,
    InputCheckboxVue,
    InputTextVue,
    LableVue,
    InputDateVue,
    InputFileVue,
  },
  data() {
    return {
      // formResidents: this.formResidents,
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
};
</script>

<style scoped lang="scss">
.form-resident-ctn {
  //   display: flex;
  .form-resident-required {
    background-color: red;
  }
  .form-residen-lable {
    display: flex;
  }
  .active {
    opacity: 0.6;
  }
}
</style>
