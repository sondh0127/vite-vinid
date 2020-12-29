import AccountCard from "main/components/AccountCard.vue";
import { shallowMount } from "@vue/test-utils";

describe("aaa", () => {
  test("should ", () => {
    const wrapper = shallowMount(AccountCard, {
      props: {
        msg: "hello,vue3",
      },
    });
    expect(wrapper.text()).toMatch("hello,vue3");
  });
});
