<template>
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="handleClone">&times;</span>
      <div>入社手続きの申請をします</div>
      <confirm-vue>
        <template v-slot:title> ご確認ください </template>
        <p>
          >入力ありがとうございました。
          登録した内容を確認する場合は「戻る」を選択してください。
          手続きを申請する場合は「申請する」を選択してください。
        </p>
      </confirm-vue>
      <div>
        <button>戻る</button>
        <button>申請する</button>
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
  },
};
</script>

<style scoped>
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
  width: 80%;
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
