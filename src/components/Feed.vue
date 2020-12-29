<template>
  <van-grid
    :border="false"
    :column-num="2"
    :clickable="true"
    :center="false"
    v-tw
    class="mx-1 rounded-md"
  >
    <van-grid-item
      v-for="feed in FEEDS"
      :key="feed.id"
      v-tw
      class="custom-grid-item"
    >
      <template #default>
        <div v-tw class="bg-gray-100 rounded-lg shadow-xl">
          <van-image
            :src="feed.image"
            v-tw
            class="rounded-t-lg custom-image block!"
          />
          <div v-tw class="px-4 py-2 space-y-2 bg-white rounded-b-lg">
            <div v-tw class="text-xs font-semibold">{{ feed.label }}</div>
            <div v-tw class="flex space-x-1 items-center">
              <van-icon :name="feed.icon" color="#1989fa" />
              <div v-tw class="text-sm text-brand-500">
                {{ feed.actionMessage }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </van-grid-item>
  </van-grid>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import feed1 from "../assets/feed/feed-1.png";

const FEEDS = [
  {
    id: "1",
    label: "Duis et justo id ligula luctus vehicula a lacinia ipsum.",
    image: feed1,
    icon: "gift",
    actionMessage: "Mua ngay",
  },
  {
    id: "2",
    label: "Duis et justo id ligula luctus vehicula a lacinia ipsum. ",
    image: feed1,
    icon: "gift",
    actionMessage: "Mua ngay",
  },
  {
    id: "3",
    label: "Duis et justo id ligula luctus vehicula a lacinia ipsum. ",
    image: feed1,
    icon: "gift",
    actionMessage: "Mua ngay",
  },
  {
    id: "4",
    label: "Duis et justo id ligula luctus vehicula a lacinia ipsum. ",
    image: feed1,
    icon: "gift",
    actionMessage: "Mua ngay",
  },
  {
    id: "5",
    label: "Duis et justo id ligula luctus vehicula a lacinia ipsum. ",
    image: feed1,
    icon: "gift",
    actionMessage: "Mua ngay",
  },
  {
    id: "6",
    label: "Duis et justo id ligula luctus vehicula a lacinia ipsum. ",
    image: feed1,
    icon: "gift",
    actionMessage: "Mua ngay",
  },
  {
    id: "7",
    label: "Duis et justo id ligula luctus vehicula a lacinia ipsum. ",
    image: feed1,
    icon: "gift",
    actionMessage: "Mua ngay",
  },
  {
    id: "8",
    label: "Duis et justo id ligula luctus vehicula a lacinia ipsum. ",
    image: feed1,
    icon: "gift",
    actionMessage: "Mua ngay",
  },
  {
    id: "9",
    label: "Duis et justo id ligula luctus vehicula a lacinia ipsum. ",
    image: feed1,
    icon: "gift",
    actionMessage: "Mua ngay",
  },
  {
    id: "10",
    label: "Duis et justo id ligula luctus vehicula a lacinia ipsum. ",
    image: feed1,
    icon: "gift",
    actionMessage: "Mua ngay",
  },
  {
    id: "11",
    label: "Duis et justo id ligula luctus vehicula a lacinia ipsum. ",
    image: feed1,
    icon: "gift",
    actionMessage: "Mua ngay",
  },
  {
    id: "12",
    label: "Duis et justo id ligula luctus vehicula a lacinia ipsum. ",
    image: feed1,
    icon: "gift",
    actionMessage: "Mua ngay",
  },
];
export default defineComponent({
  setup() {
    return {
      FEEDS,
    };
  },
});
</script>

<style scoped></style>
