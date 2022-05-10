import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  plugins: ["@/plugins/antd-ui"],
  css: [
    "ant-design-vue/dist/antd.css",
    "@/assets/css/main.css",
    "@wangeditor/editor/dist/css/style.css",
  ],
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "测试描述" },
        { name: "keywords", content: "关键词1,关键词2" },
      ],
      title: "MoneyBoxs-社区",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/static/favicon.ico" },
      ],
    },
  },
});
