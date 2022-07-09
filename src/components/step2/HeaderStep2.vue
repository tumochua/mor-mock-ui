<template>
  <div>
    <div class="hader-step2">
      <img
        src="../../assets/Confirm/ArrowLeft.png"
        class="hader-step2-icon"
        @click="handleBack"
      />
      <div>雇用契約に戻る</div>
    </div>
    <progress-bar-vue></progress-bar-vue>
    <DateVue />
    <confirm-vue>
      <template v-slot:title>{{ formStep2.confirm }}</template>
      <div>
        {{ formStep2.description }}
      </div>
    </confirm-vue>
  </div>
</template>

<script>
import ProgressBarVue from "../ProgressBar.vue";
import DateVue from "../slot/Date.vue";
import ConfirmVue from "../slot/Confirm.vue";
export default {
  name: "HeaderStep2",
  components: {
    ProgressBarVue,
    DateVue,
    ConfirmVue,
  },
  data() {
    return {
      formStep2: {
        confirm: "ご確認ください",
        description:
          "名前と生年月日が表示されている場合は正しく表示されているか確認をして、間違えている場合は修正をお願いいたします。",
      },
    };
  },
  methods: {
    handleBack() {
      this.$store.dispatch("handleBack");
    },
  },
};
</script>

<style scoped lang="scss">
.hader-step2 {
  display: flex;
  .hader-step2-icon {
    object-fit: contain;
    margin-right: 8px;
    cursor: pointer;
  }
}
</style>
