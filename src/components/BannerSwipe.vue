<template>
  <van-swipe
    v-tw
    class="border"
    lazy-render
    :autoplay="3000"
    @change="onChange"
  >
    <van-swipe-item v-for="(image, index) in images" :key="image">
      <img
        :src="image"
        v-tw
        class="object-fill h-36 w-full"
        :alt="'banner' + index"
      />
    </van-swipe-item>
    <template #indicator>
      <div
        v-tw
        class="absolute bottom-0 text-sm h-0.5 bg-brand-400 transition duration-500 ease-in-out"
        :style="{
          width: `${(1 / images.length) * 100}%`,
          transform: `translateX(${current * 100}%)`,
        }"
      ></div>
    </template>
  </van-swipe>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import banner1 from "../assets/banner/banner-1.png";
import banner2 from "../assets/banner/banner-2.png";
import banner3 from "../assets/banner/banner-3.png";
import banner4 from "../assets/banner/banner-4.png";

export default defineComponent({
  setup() {
    const current = ref(0);
    const onChange = (index: number) => {
      current.value = index;
    };

    const images = [banner1, banner2, banner3, banner4];
    return { images, current, onChange };
  },
});
</script>

<style scoped></style>
