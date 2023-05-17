<template>
  <div class="topbase">
        <img src="../assets/welcome.png" alt="" srcset="" class="welcome">
        <router-link to="/introme" class="me">个人介绍</router-link>
        <router-link to="/project" class="project">个人经历</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.topbase{
    width: 100%;
    height: 45px;
    background: linear-gradient(to right,#E6A778, #CC5B81);
}
.topbase .welcome{
    margin-left: 35px;
    width: 280px;
}
.me{
  color: white;
  position: relative;
  right: -650px;
  top: -13px;
  text-decoration:none
}
.project{
  color: white;
  position: relative;
  right: -720px;
  top: -13px;
  text-decoration:none
}
</style>