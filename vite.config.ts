const { createMockServer } = require("vite-plugin-mock");
const path = require("path");

const pathAliasMap = {
  "@/": "/src/",
  "@components/": "/src/components/",
  "@views/": "/src/views/",
};

module.exports = {
  // alias: {
  //   "/@/": path.resolve(__dirname, "./src"),
  // },
  resolvers: [
    {
      alias(path: string) {
        for (const [slug, res] of Object.entries(pathAliasMap)) {
          if (path.startsWith(slug)) {
            return path.replace(slug, res);
          }
        }
      },
    },
  ],
  proxy: {
    "/api": {
      target: "http://jsonplaceholder.typicode.com",
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, ""),
    },
  },
  plugins: [
    // createMockServer({
    //   ignore: /^_/,
    //   mockPath: "mock",
    //   watchFiles: true,
    //   localEnabled: process.env.NODE_ENV === "development",
    //   supportTs: false,
    // }),
  ],
};
