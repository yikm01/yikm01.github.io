<template>
  <div class="leftbase">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="leftcon">
            <h2>个人介绍</h2>
            <div class="cirlce"></div>
            <img src="../assets/me.jpg" alt="" srcset="" class="img">
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.leftbase{
    position: relative;
    top: 40px;
    width: 170px;
    height: 400px;
    display: flex;
}
.leftbase .line1{
    width: 75px;
    height: 8px;
    background: linear-gradient(to right,#E6A778, #CC5B81);
}
.leftbase .line2{
    width: 8px;
    height: 322px;
    position: absolute;
    left: 0;
    background: linear-gradient(#E6A778, #CC5B81);
}
.leftbase .leftcon{
    position: absolute;
    left: 40px;
    top: 25px;
    text-align: center;
}
.leftbase h2{
    margin-bottom: 15px;
    font-size: 20px;
}
.leftbase .cirlce{
    margin-left: 7px;
    width: 100px;
    height: 100px;
    Border-radius:50px;
    background: linear-gradient(to right,#E6A778, #CC5B81);
}
.leftbase .img{
    position: relative;
    top: -103px;
    width: 100px;
    height: 100px;
    Border-radius:50px;
}

</style>