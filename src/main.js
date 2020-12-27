import { createApp } from "vue";
import App from "./App.vue";
import "vant/lib/index.css";
import { setup, warn, tw } from "twind";
import * as colors from "twind/colors";

setup({
  preflight: true, // do not include base style reset (default: use tailwind preflight)
  mode: warn, // throw errors for invalid rules (default: warn)
  hash: false, // hash all generated class names (default: false)
  theme: {
    extend: {
      colors: {
        brand: colors.blue,
        cta: colors.red,
        info: colors.lightBlue,
        warning: colors.yellow,
        success: colors.green,
        danger: colors.rose,
      },
    },
  }, // define custom theme values (default: tailwind theme)
  darkMode: "media", // us ea different dark mode strategy (default: 'media')
});

const app = createApp(App);

app.directive("tw", function (el) {
  el.className = tw`${el.getAttribute("class")}`;
});

app.mount("#app");
