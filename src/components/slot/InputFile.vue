<template>
  <div class="input-file-ctn">
    <slot name="title"> </slot>
    <slot name="description"></slot>
    <slot name="showIng"></slot>

    <div class="input-file-text">
      <input type="file" class="input-none" @change="onFileChange" />
      <input
        v-if="!url2"
        type="file"
        class="input-none"
        @change="onFileChangeUrl2"
      />
      <div>
        <img src="../../assets/file/icon-file.png" />
        <p>
          ファイルをドラッグ&ドロップ <br />
          ファイルをドロップするか、 <br />
          <span class="input-element-a">ファイルを参照する</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url2: {
      type: Object,
    },
  },
  methods: {
    onFileChange(event) {
      this.$emit("onFileChange", event);
    },
    onFileChangeUrl2(event) {
      console.log("check onFileChangeUrl2", event);
      this.$emit("onFileChangeUrl2", event);
      // console.log("check onFileChangeUrl2 ", event);
    },
  },
};
</script>

<style scoped lang="scss">
.input-file-ctn {
  margin: 16px 0px;
  background-color: #f1f2f7;
  padding: 16px;
  .input-file-text {
    margin-top: 24px;
    text-align: center;
    background-color: #ffff;
    position: relative;
    padding: 5px;
    .input-none {
      cursor: pointer;
      opacity: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      position: absolute;
      right: 0;
    }
    .input-element-a {
      text-decoration: underline;
    }
  }
}
</style>
