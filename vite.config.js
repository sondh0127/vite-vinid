const { createMockServer } = require("vite-plugin-mock");
const path = require("path");

module.exports = {
  alias: {
    "/comps/": path.resolve(__dirname, "src/components"),
  },
  proxy: {
    "/api": {
      target: "http://jsonplaceholder.typicode.com",
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, ""),
    },
  },
  plugins: [
    createMockServer({
      // close support .ts file
      supportTs: false,
    }),
  ],
};
