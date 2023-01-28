<template>
  <TopBar />
  <ContentCom id="chat-content" />
  <FootBar />
  <transition name="btn">
    <BtnConsole v-show="isBtnShow" />
  </transition>
  <transition name="pic">
    <HeadPicList v-show="isPicShow" />
  </transition>
  <div class="blur" v-if="isBlurShow"></div>
</template>

<script setup lang="ts">
import TopBar from "./components/TopBar.vue";
import ContentCom from "./components/ContentCom.vue";
import FootBar from "./components/FootBar.vue";
import BtnConsole from "./components/BtnConsole.vue";
import HeadPicList from "./components/HeadPicList.vue";

import { useChatListStore } from "./store/chat-list";
import { storeToRefs } from "pinia";

const chatStore = useChatListStore();
let { isBtnShow, isPicShow, isBlurShow } = storeToRefs(chatStore);
</script>

<style lang="less">
body {
  height: 100vh;
  width: 100vw;
  margin: 0px;
  padding: 0;
  box-sizing: border-box;
  color: #000;
}
#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  #chat-content {
    flex-grow: 1;
    box-sizing: border-box;
  }
}
.btn-enter-active,
.btn-leave-active,
.pic-enter-active,
.pic-leave-active {
  transition: all 0.5s ease;
}
.btn-enter-from,
.btn-leave-to {
  transform: translateY(200px);
}
.pic-enter-from,
.pic-leave-to {
  transform: translateY(400px);
}
.blur {
  position: fixed;
  top: 0;
  left: 110px;
  height: 50px;
  width: 200px;
  background-image: url(./assets/icon-img/blur.png);
  background-size: contain;
  background-repeat: no-repeat;
  fill: #fff;
}
</style>