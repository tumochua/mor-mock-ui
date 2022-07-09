<template>
  <div>
    <div v-for="siginAddres in siginAddress" :key="siginAddres.id">
      <title-vue>
        <template v-slot:title>
          <div>{{ siginAddress.title }}</div>
        </template>
      </title-vue>
      <div v-for="data in siginAddres.forms" :key="data.id">
        <lable-vue>
          <template v-slot:required v-if="data.required">
            <label>{{ data.required }}</label>
          </template>
          <template v-slot:lableName>
            <label>{{ data.lable }}</label>
          </template>
        </lable-vue>
        <select-option-vue v-if="data.input.type === 'select'">
          <template v-slot:select>
            <select>
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
            <input :type="data.input.type" />
          </template>
        </input-date-vue>
        <input-text-vue v-if="data.input.type === 'text'">
          <template v-slot:inputText>
            <input :type="data.input.type" />
          </template>
        </input-text-vue>
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
  },
  data() {
    return {
      // siginAddress: this.siginAddress,
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
};
</script>

<style scoped></style>
