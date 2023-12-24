<script setup lang="ts">
</script>

<template>
  <div class="container">
    <div class="title">联系我们</div>
    <p class="tagline">有想法建议？<a href="https://github.com/OldPanda/xiaodigua-homepage/issues/new" target="_blank"><i
          class="fa-regular fa-hand-point-right"></i>尽管提！</a></p>
  </div>
  <div class="media-logos">
    <a href="https://hao.logosc.cn/p/1927" target="_blank"><img class="logo" src="/shenqiji.svg" /></a>
    <a href="https://www.appinn.com/xiaodigua-for-xhs/" target="_blank"><img class="logo" src="/appinn.png"
        style="height: 40px; margin-top: 35px;" /></a>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  text-align: center!important;
  max-width: 1152px;
}

.title {
  font-family: 'ZCOOL KuaiLe', cursive;
  font-size: 32px;
  margin-bottom: 30px;
}

.media-logos {
  margin-bottom: -150px;
  max-height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.logo {
  margin-left: 10px;
  margin-right: 10px;
}

@media (min-width: 256px) {
  .media-logos {
    margin-bottom: -120px;
  }
}
</style>
