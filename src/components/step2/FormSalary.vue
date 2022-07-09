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
            <input :placeholder="data.input.placeholder" />
          </template>
        </input-text-vue>
      </div>
    </div>
  </div>
</template>

<script>
import LableVue from "../slot/Lable.vue";
import InputTextVue from "../slot/InputText.vue";
import { mapGetters } from "vuex";
export default {
  name: "FormSalary",
  components: {
    LableVue,
    InputTextVue,
  },
  data() {
    return {};
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
};
</script>

<style scoped lang="scss">
.labale-required {
  background-color: red;
}
</style>
