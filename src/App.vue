<template>
  <div id="app" class="app">
      <top></top>
      <router-view></router-view>
      <bottom></bottom>
  </div>
</template>

<script>

import top from './components/top.vue'
import bottom from './components/bottom.vue'
import Introme from './components/introme.vue'

export default {
  components: { 
    top,
    bottom,
    Introme 
  },
  name: 'App'
}
</script>

<style>
/* 去掉vue的默认样式 */
*{
  margin: 0;
  padding: 0;
}
body,html{
    margin: 0;
    padding: 0;
}
.app{
  height: 670px;
}
.con{
  width: 1000px;
  height: 580px;
  margin: auto;
  display: flex;
}
</style>
