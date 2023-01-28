<template>
  <div class="btn-com">
    <div
      :class="['change', 'change-user', `change-user-${chatUser}`]"
      @click="updateUser"
    >
      更换角色
    </div>
    <div
      :class="{
        change: true,
        'change-time': true,
        'can-change-time': canTimeChange,
      }"
      @click="canTimeChange = !canTimeChange"
    >
      更改时间
    </div>
    <div
      :class="{
        change: true,
        'change-blur': true,
        'can-change-blur': isBlurShow,
      }"
      @click="isBlurShow = !isBlurShow"
    >
      角色模糊
    </div>
    <div
      :class="{
        change: true,
        'change-friend': true,
        'can-change-friend': isDelShow,
      }"
      @click="isDelShow = !isDelShow"
    >
      被删好友
    </div>
    <div class="change change-back" @click="isBtnShow = false">确定选择</div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useChatListStore } from "../store/chat-list";

const chatStore = useChatListStore();
let { chatUser, isBtnShow, canTimeChange, isBlurShow, isDelShow } =
  storeToRefs(chatStore);
const { updateUser } = chatStore;
</script>

<style lang="less" scoped>
.btn-com {
  position: fixed;
  bottom: 0;
  height: 200px;
  width: 100%;
  background-color: rgba(25, 22, 22, 0.637);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  .change {
    width: 80px;
    height: 80px;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 20px;
    background-color: #fff;
    background-size: 50px 50px;
    background-repeat: no-repeat;
    padding: 35px 0 0 35px;
    box-shadow: 5px 5px 5px;
  }
  .change-user {
    background-image: url(../assets/btn-img/opsgenie.svg);
  }
  .change-user.change-user-right {
    background-color: #a9e978;
  }
  .change-time {
    background-image: url(../assets/btn-img/timescale.svg);
  }
  .change-time.can-change-time {
    background-color: #78c5e9;
  }
  .change-blur {
    background-image: url(../assets/btn-img/stackexchange.svg);
  }
  .change-blur.can-change-blur {
    background-color: #e778e9;
  }
  .change-friend {
    background-image: url(../assets/btn-img/highly.svg);
  }
  .change-friend.can-change-friend {
    background-color: #e97878;
  }
  .change-back {
    background-image: url(../assets/btn-img/verizon.svg);
    background-color: #e7e978;
  }
}
</style>