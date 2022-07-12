<template>
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="handleClone">&times;</span>
      <div class="model-title">入社手続きの申請をします</div>
      <confirm-vue class="modal-confirm">
        <template v-slot:title> ご確認ください </template>
        <p>
          >入力ありがとうございました。
          登録した内容を確認する場合は「戻る」を選択してください。
          手続きを申請する場合は「申請する」を選択してください。
        </p>
      </confirm-vue>
      <div class="modal-btn-ctn">
        <button class="btn-back" @click="handleReset">戻る</button>
        <button class="btn-application" @click="handleApplication">
          申請する
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ConfirmVue from "../slot/Confirm.vue";
export default {
  name: "ConFirmStep",
  components: {
    ConfirmVue,
  },
  methods: {
    handleClone() {
      this.$emit("handleClone");
    },
    handleApplication() {
      this.$emit("handleApplication");
    },
    handleReset() {
      this.$emit("handleReset");
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 608px;
  .model-title {
    font-weight: 400;
    font-size: 24px;
    line-height: 42px;
  }
  .modal-confirm {
    width: 80%;
    margin: 0 auto;
  }
  .modal-btn-ctn {
    .btn-back {
      margin-right: 12px;
      width: 132px;
      height: 40px;
      background: #ffffff;
      border: 1px solid #6563ff;
      border-radius: 4px;
      color: #6563ff;
      cursor: pointer;
    }
    .btn-application {
      margin-right: 12px;
      width: 132px;
      height: 40px;
      background: #6563ff;
      border-radius: 4px;
      border: none;
      color: #ffffff;
      cursor: pointer;
    }
  }
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
