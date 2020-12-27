<template>
  <van-swipe v-tw class="border" :height="150" :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image" v-tw class="object-contain h-full" />
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const images = [
      "https://img.yzcdn.cn/vant/apple-1.jpg",
      "https://img.yzcdn.cn/vant/apple-2.jpg",
      "https://img.yzcdn.cn/vant/apple-3.jpg",
      "https://img.yzcdn.cn/vant/apple-4.jpg",
    ];
    return { images };
  },
});
</script>

<style scoped></style>
