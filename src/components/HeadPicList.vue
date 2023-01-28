<template>
  <div class="head-pic-list">
    <h2>请选择头像</h2>
    <div class="pic-list">
      <template v-for="(pic, index) in imgList" :key="index">
        <img :src="pic" alt="pic" @click="updateImg(pic)" />
      </template>
    </div>
    <button @click="isPicShow = false">x</button>
    <div class="more-img" @click="changeImg"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { storeToRefs } from "pinia";
import { useChatListStore } from "../store/chat-list";
import { getGirl } from "../assets/img-txt/imgGirl";
import { getBoy } from "../assets/img-txt/imgBoy";

const chatStore = useChatListStore();
const { isPicShow, imgList, showRole, chatImg } = storeToRefs(chatStore);
const { updateImgList } = chatStore;

const changeImg = () => {
  showRole.value === "left"
    ? (imgList.value = getGirl())
    : (imgList.value = getBoy());
};

const updateImg = (url: string) => {
  if (showRole.value === "left") {
    chatImg.value[0] = url;
    updateImgList();
    isPicShow.value = false;
  } else {
    chatImg.value[1] = url;
    updateImgList();
    isPicShow.value = false;
  }
};

onMounted(() => {
  changeImg();
});
</script>

<style lang="less" scoped>
.head-pic-list {
  position: fixed;
  bottom: 0;
  height: 400px;
  width: 100%;
  background-color: rgba(25, 22, 22, 0.637);
  display: flex;
  flex-direction: column;
  h2 {
    color: #fff;
  }
  .pic-list {
    height: 200px;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    img {
      display: block;
      width: 80px;
      height: 80px;
      border-radius: 10px;
    }
  }
  button {
    height: 50px;
    width: 50px;
    position: fixed;
    top: 275px;
    right: 5px;
  }
  .more-img {
    height: 50px;
    width: 50px;
    border-radius: 20px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #fff;
    box-shadow: 1px 1px 4px 4px;
    background-image: url(../assets/btn-img/flattr.svg);
    background-size: 30px 30px;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
</style>