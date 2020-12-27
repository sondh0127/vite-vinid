<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <div>
    <!-- <img
      class="user-poster"
      src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png"
    /> -->
    <div v-tw class="w-full h-20 bg-danger-500"></div>
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />
        Payment
      </van-col>
      <van-col span="6">
        <van-icon name="records" />
        Records
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />
        Send
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        Logistics
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="Records" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="Points" is-link />
      <van-cell icon="gold-coin-o" title="Payment" is-link />
      <van-cell icon="gift-o" title="Gift" is-link />
    </van-cell-group>
    <van-button type="primary">Primary</van-button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Row, Col, Icon, Cell, CellGroup, Button } from "vant";

export default defineComponent({
  name: "App",
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [Button.name]: Button,
    [CellGroup.name]: CellGroup,
  },
  setup() {
    // const state = ref<Course[]>([]);
    // setTimeout(() => {
    //   state.value.push({ id: 1, name: "全栈架构师" });
    // }, 1000);
  },
});
</script>

<style lang="less">
body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
.user {
  &-poster {
    width: 100%;
    height: 15vw;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
