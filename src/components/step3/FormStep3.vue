<template>
  <div class="form4-ctn">
    <h2>入社手続きの申請ありがとうございました。</h2>
    <img src="../../assets/form4/icon-email.png" class="form4-icon" />
    <div class="form4-des">
      申請がありがとうございました。<br />
      入社手続きの承認をお待ちください。
    </div>
    <con-firm-step v-if="showhideModel" @handleClone="handleClone">
    </con-firm-step>
    <!-- <confirm-vue v-if="showhideModel" @handleClone="handleClone"></confirm-vue> -->
    <button class="form4-btn" @click="handleConFirm">申請した内容を見る</button>
  </div>
</template>

<script>
import ConFirmStep from "../confirmStep/ConFirmStep.vue";
export default {
  name: "FormStep3",
  components: {
    ConFirmStep,
  },
  data() {
    return {
      showhideModel: false,
    };
  },
  methods: {
    handleConFirm() {
      this.showhideModel = true;
    },
    handleClone() {
      this.showhideModel = false;
    },
  },
};
</script>

<style scoped lang="scss">
.form4-ctn {
  text-align: center;
  margin-top: 92px;
  margin-bottom: 50px;
  .form4-icon {
    margin-top: 76px;
    margin-bottom: 32px;
  }
  .form4-des {
    margin-bottom: 32px;
  }
  .form4-btn {
    padding: 12px 16px;
    border: 1px solid #007bc3;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
  }
}
</style>
