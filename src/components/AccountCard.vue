<template>
  <card>
    <template #title> Số dư ví </template>
    <template #action>
      <div v-tw class="font-semibold text-gray-800 text-md leading-none">
        100,000đ
      </div>
      <van-icon size="20" :name="eyeIcon" @click="toggleShowMoney" />
    </template>
    <template #content>
      <van-col span="6" v-tw class="block text-center">
        <van-icon size="32" name="pending-payment" />
        <div>Nạp tiền</div>
      </van-col>
      <van-col span="6">
        <van-icon size="32" name="records" />
        <div>Quét mã</div>
      </van-col>
      <van-col span="6">
        <van-icon size="32" name="tosend" />
        <div>Chuyển tiền</div>
      </van-col>
      <van-col span="6">
        <van-icon size="32" name="logistics" />

        <div>Giao dịch</div>
      </van-col>
    </template>
  </card>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import Card from "./Card.vue";

const EYE = {
  OPEN: "eye-o",
  CLOSE: "closed-eye",
};

export default defineComponent({
  components: { Card },
  setup() {
    const showMoney = ref(true);

    const eyeIcon = computed(() => (showMoney.value ? EYE.OPEN : EYE.CLOSE));
    const toggleShowMoney = () => {
      showMoney.value = !showMoney.value;
    };
    return { eyeIcon, toggleShowMoney };
  },
});
</script>

<style scoped></style>
