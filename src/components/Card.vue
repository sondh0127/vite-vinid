<template>
  <div
    v-tw
    class="flex flex-col rounded-2xl shadow-xl bg-white divide(y-1 gray-600 solid opacity-10)"
  >
    <div v-tw class="px-3 py-4 flex justify-between">
      <div v-tw class="font-semibold text-gray-800">
        <slot name="title"></slot>
      </div>
      <div v-tw class="flex items-end space-x-2">
        <slot name="action"></slot>
      </div>
    </div>
    <div v-tw class="p-4">
      <van-row justify="center" v-tw class="text-center text-xs">
        <slot name="content"></slot>
      </van-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {},
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
