<template>
  <main :style="{ paddingBottom: '50px' }">
    <slot name="default"></slot>
  </main>
  <van-tabbar v-model="activeTab" @change="onChange">
    <van-tabbar-item name="home" icon="home-o">Trang chủ</van-tabbar-item>
    <van-tabbar-item name="search" icon="search">Ví của tôi</van-tabbar-item>
    <van-tabbar-item name="friends">
      <template #icon="props">
        <!-- <img :src="props.active ? icon.active : icon.inactive" /> -->
        <van-icon size="36" name="qr" color="#ee0a24" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item name="friends" icon="friends-o">Hộp thư</van-tabbar-item>
    <van-tabbar-item name="setting" icon="setting-o">Tài khoản</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
