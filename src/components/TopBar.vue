<template>
  <div class="top-com">
    <div class="left-back same-icon"></div>
    <input
      type="text"
      name="title"
      id="title"
      class="other-title"
      v-model="userName"
      placeholder="请输入姓名"
    />
    <div class="more-tool same-icon"></div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useChatListStore } from "../store/chat-list";

const chatStore = useChatListStore();
let { userName } = storeToRefs(chatStore);
</script>

<style lang="less" scoped>
.top-com {
  width: 100%;
  height: 50px;
  background-color: #ededed;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  .same-icon {
    height: 40px;
    width: 40px;
    background-size: cover;
  }
  .left-back {
    background-image: url(../assets/icon-img/back.jpg);
    margin: 5px 0 0 6px;
  }
  .more-tool {
    background-image: url(../assets/icon-img/more.jpg);
    margin: 5px 6px 0 0;
  }
  .other-title {
    height: 40px;
    width: 200px;
    font-size: 18px;
    color: #000;
    margin: 7px 0 0;
    text-align: center;
    border: none;
    background-color: #ededed;
    outline-color: #ccc;
  }
}
</style>