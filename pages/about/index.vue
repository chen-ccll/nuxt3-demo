<template>
  <div class="about">关于</div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
// const route = useRoute();
useHead({
  titleTemplate: `MoneyBoxs-关于`,
});
</script>

<style lang="less" scoped>
.about {
  min-height: 800px;
}
</style>
