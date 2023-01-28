<template>
  <div class="chat-content">
    <template v-for="(item, index) in listOfChat" :key="index">
      <input
        type="text"
        v-if="item.user === 'time'"
        class="time-item"
        v-model="item.msg"
        :readonly="!canTimeChange"
        placeholder="时间"
      />
      <div v-else :class="['speak-item', `speak-item-${item.user}`]">
        <div
          :class="['head-icon', `head-icon-${item.user}`]"
          :style="{
            backgroundImage: `url(${
              item.user === 'left' ? chatImg[0] : chatImg[1]
            })`,
          }"
          @click="findHead(item.user)"
        ></div>
        <div :class="['arrow', `arrow-${item.user}`]"></div>
        <div :class="['chat-words', `chat-words-${item.user}`]">
          {{ item.msg }}
          <div class="alarm" v-if="item.none"></div>
        </div>
      </div>
      <div class="none-view" v-if="item.none">
        {{ userName }}
        开启了朋友验证，你还不是他&nbsp;（她）朋友。请先发送朋友验证请求，对方验证<br />通过后，才能聊天。<span
          style="color: #767b91"
          >发送朋友验证</span
        >
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useChatListStore } from "../store/chat-list";

const chatStore = useChatListStore();
const { userName, listOfChat, chatImg, canTimeChange, isPicShow, showRole } =
  storeToRefs(chatStore);

const findHead = (role: string) => {
  isPicShow.value = !isPicShow.value;
  showRole.value = role;
  // console.log(role);
};
</script>

<style lang="less" scoped>
.chat-content {
  width: 100%;
  padding: 15px;
  overflow-y: scroll;
  background-color: #ededed;
  .time-item {
    background-color: #ededed;
    color: #737373;
    margin: 10px auto;
    width: 50%;
    border: none;
    text-align: center;
  }
  .speak-item {
    width: 100%;
    display: flex;
    margin-top: 15px;
    .head-icon {
      height: 50px;
      width: 50px;
      background-size: cover;
    }
    .arrow {
      width: 20px;
      height: 0;
      border: 8px solid transparent;
    }
    .chat-words {
      max-width: 190px;
      border-radius: 5px;
      padding: 12px;
      text-align: left;
      font-size: 16px;
      overflow-wrap: break-word;
    }
  }
  .speak-item-left {
    .arrow-left {
      border-right: 8px solid#fff;
      margin: 16px 0 0 -20px;
    }
    .chat-words-left {
      background-color: #fff;
      margin: 0 65px 0 0;
    }
  }
  .speak-item-right {
    flex-direction: row-reverse;
    .head-icon-right {
      margin-left: -21px;
    }
    .arrow-right {
      border-left: 10px solid#a9e978;
      margin: 16px 0 0 -0.5px;
    }
    .chat-words-right {
      background-color: #a9e978;
      margin: 0 0 0 65px;
      position: relative;
      .alarm {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 16px;
        left: -28px;
        border-radius: 50%;
        background-image: url(../assets/icon-img/deled.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
      }
    }
  }
  .none-view {
    width: 300px;
    padding: 8px;
    font-size: 15px;
    text-align: left;
    margin: 10px auto;
    border-radius: 5px;
    color: #fafafa;
    background-color: #d4d4d4;
  }
}
</style>