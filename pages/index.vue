<template>
  <div class="content">
    <div class="card-container">
      <a-tabs v-model:activeKey="activeKey" type="card">
        <a-tab-pane key="1">
          <template #tab>
            <span>
              <fire-outlined />
              动态
            </span>
          </template>
          <!-- <div style="border: 1px solid #ccc">
            <Toolbar
              style="border-bottom: 1px solid #ccc"
              :editor="editorRef"
              :defaultConfig="toolbarConfig"
              :mode="mode"
            />
            <Editor
              style="height: 500px; overflow-y: hidden"
              v-model="valueHtml"
              :defaultConfig="editorConfig"
              :mode="mode"
              @onCreated="handleCreated"
            />
          </div> -->
        </a-tab-pane>
        <a-tab-pane key="2">
          <template #tab>
            <span>
              <question-outlined />
              求助
            </span>
          </template>
          求助
        </a-tab-pane>
        <a-tab-pane key="3">
          <template #tab>
            <span>
              <edit-outlined />
              文章
            </span>
          </template>
          <p>文章</p>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script setup>
import {
  FireOutlined,
  EditOutlined,
  QuestionOutlined,
} from "@ant-design/icons-vue";
// import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
definePageMeta({
  layout: "custom",
});
const activeKey = ref("1");

useHead({
  titleTemplate: `MoneyBoxs-社区`,
});
</script>

<script>
// import "@wangeditor/editor/dist/css/style.css"; // 引入 css

// export default {
//   components: { Editor, Toolbar },
//   setup() {},
// };
</script>

<style lang="less" scoped>
.ant-tabs-tab .anticon {
  margin: 0;
}
.content {
  min-height: 800px;
}
.card-container p {
  margin: 0;
}
.card-container > .ant-tabs-card .ant-tabs-content {
  height: 120px;
  margin-top: -16px;
}
.card-container > .ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane {
  padding: 16px;
  background: #fff;
}
.card-container > .ant-tabs-card > .ant-tabs-nav::before {
  display: none;
}
.card-container > .ant-tabs-card .ant-tabs-tab,
[data-theme="compact"] .card-container > .ant-tabs-card .ant-tabs-tab {
  background: transparent;
  border-color: transparent;
}
.card-container > .ant-tabs-card .ant-tabs-tab-active,
[data-theme="compact"] .card-container > .ant-tabs-card .ant-tabs-tab-active {
  background: #fff;
  border-color: #fff;
}
#components-tabs-demo-card-top .code-box-demo {
  padding: 24px;
  overflow: hidden;
  background: #f5f5f5;
}
[data-theme="compact"] .card-container > .ant-tabs-card .ant-tabs-content {
  height: 120px;
  margin-top: -8px;
}
[data-theme="dark"] .card-container > .ant-tabs-card .ant-tabs-tab {
  background: transparent;
  border-color: transparent;
}
[data-theme="dark"] #components-tabs-demo-card-top .code-box-demo {
  background: #000;
}
[data-theme="dark"]
  .card-container
  > .ant-tabs-card
  .ant-tabs-content
  > .ant-tabs-tabpane {
  background: #141414;
}
[data-theme="dark"] .card-container > .ant-tabs-card .ant-tabs-tab-active {
  background: #141414;
  border-color: #141414;
}
</style>
