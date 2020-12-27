<template>
  <card>
    <template #title> Điểm tích lũy </template>
    <template #action>
      <van-icon size="20" name="gold-coin-o" />
      <div v-tw class="font-semibold text-gray-800 text-md leading-none">
        30
      </div>
    </template>
    <template #content>
      <van-col span="6">
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
import { defineComponent } from "vue";
import Card from "./Card.vue";

export default defineComponent({
  components: { Card },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
