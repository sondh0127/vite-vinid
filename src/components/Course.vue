<template>
  <div>Course</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

interface Course {
  id: number;
  name: string;
}

export default defineComponent({
  setup() {
    const state = ref<Course[]>([]);
    setTimeout(() => {
      state.value.push({ id: 1, name: "全栈架构师" });
    }, 1000);
  },
});
</script>
