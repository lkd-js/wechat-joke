<template>
  <div class="foot-com">
    <div class="speak-icon same-icon"></div>
    <input
      type="text"
      name="chat-ctx"
      v-model="chatValue"
      id="chat-input"
      @keyup.enter="submitChat"
      placeholder="请输入..."
    />
    <div class="face-icon same-icon"></div>
    <div class="add-icon same-icon" @click="isBtnShow = true"></div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useChatListStore } from "../store/chat-list";

const chatStore = useChatListStore();
const { chatValue, isBtnShow } = storeToRefs(chatStore);
const { updateList } = chatStore;

const submitChat = () => {
  updateList();
  chatValue.value = "";
};
</script>

<style lang="less" scoped>
.foot-com {
  width: 100%;
  height: 50px;
  background-color: #f3f3f3;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  .same-icon {
    height: 40px;
    width: 40px;
    background-size: cover;
  }
  .speak-icon {
    background-image: url(../assets/icon-img/speak.jpg);
    margin: 5px 0 0 6px;
  }
  .add-icon {
    background-image: url(../assets/icon-img/add.jpg);
    margin: 5px 2px 0 0;
  }
  .face-icon {
    background-image: url(../assets/icon-img/face.jpg);
    margin: 5px -9px 0 0;
  }
  #chat-input {
    display: block;
    height: 28px;
    width: 230px;
    border: 1px solid #ccc;
    margin-top: 9px;
    border-radius: 3px;
  }
}
</style>