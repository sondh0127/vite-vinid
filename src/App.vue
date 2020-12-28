<template>
  <default>
    <!-- <img
      class="user-poster"
      src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png"
    /> -->
    <div
      v-tw
      class="w-full h-24 bg-danger-500 flex justify-between items-center space-x-2"
    >
      <div v-tw class="w-full">
        <van-search
          shape="round"
          v-model="search"
          placeholder="Phúc Long, Tocototco"
          background="transparent"
        />
      </div>
      <div v-tw class="px-4">
        <van-button size="small" icon="bill" type="default" round>
          30
        </van-button>
      </div>
    </div>

    <van-swipe
      indicator-color="white"
      :loop="false"
      v-tw
      class="custom-swipe py-6"
      :width="350"
      :show-indicators="false"
    >
      <div v-tw class="mx-2"></div>
      <van-swipe-item v-tw class="flex-shrink!">
        <account-card />
      </van-swipe-item>
      <div v-tw class="mx-1"></div>
      <van-swipe-item v-tw class="flex-shrink!">
        <wallet-card />
      </van-swipe-item>
      <div v-tw class="mx-2"></div>
    </van-swipe>

    <van-grid
      :border="false"
      :column-num="4"
      :clickable="true"
      :center="false"
      v-tw
      class="px-4"
    >
      <van-grid-item
        v-for="feature in FEATURES"
        :key="feature.id"
        v-tw
        class="text-center"
      >
        <template #icon>
          <van-icon :size="30" :name="feature.icon" />
        </template>
        <template #text>
          <span v-tw class="text-xs font-medium">{{ feature.label }}</span>
        </template>
      </van-grid-item>
    </van-grid>

    <div v-tw class="px-4 py-4">
      <banner-swipe />
    </div>

    <div v-tw class="mt-3 mb-2 px-4">
      <h1 v-tw class="font-semibold text-base">Đừng bỏ lỡ</h1>
    </div>

    <van-grid
      :border="false"
      :column-num="2"
      :clickable="true"
      :center="false"
      :gutter="4"
      v-tw
      class="mx-2 rounded-md"
    >
      <van-grid-item
        v-for="feature in FEATURES"
        :key="feature.id"
        v-tw
        class="text-center"
      >
        <template #icon>
          <van-icon :size="30" :name="feature.icon" />
        </template>
        <template #text>
          <span v-tw class="text-xs font-medium">{{ feature.label }}</span>
        </template>
      </van-grid-item>
    </van-grid>
  </default>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { Toast } from "vant";
import AccountCard from "@components/AccountCard.vue";
import WalletCard from "@components/WalletCard.vue";
import BannerSwipe from "@components/BannerSwipe.vue";
import Default from "./layouts/default.vue";

const FEATURES = [
  { id: "market", label: "Đi chợ", icon: "photo-o" },
  { id: "eating", label: "Ăn uống", icon: "photo-o" },
  { id: "VinMart", label: "VinMart", icon: "photo-o" },
  { id: "Vincom", label: "Vincom", icon: "photo-o" },
  { id: "Vinhomes", label: "Vinhomes", icon: "photo-o" },
  { id: "voucher", label: "Voucher - Đổi thưởng", icon: "photo-o" },
  { id: "vsmart", label: "Vsmart", icon: "photo-o" },
  { id: "ticket", label: "Mua vé", icon: "photo-o" },
  { id: "card", label: "Dùng thẻ", icon: "photo-o" },
  { id: "utilities", label: "Tiện ích", icon: "photo-o" },
  { id: "prepay", label: "Trả trước", icon: "photo-o" },
  { id: "phonecard", label: "Mua thẻ điện thoại", icon: "photo-o" },
];

export default defineComponent({
  components: {
    AccountCard,
    WalletCard,
    BannerSwipe,
    Default,
  },
  name: "App",
  setup() {
    const search = ref("");

    const activeTab = ref(0);

    const onChange = index => {
      Toast(`Tab ${index}`);
    };

    return { search, activeTab, onChange, FEATURES };
  },
});
</script>

<style lang="less">
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
.custom-swipe {
}
</style>
