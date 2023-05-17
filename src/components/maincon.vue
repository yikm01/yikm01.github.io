<template>
  <div class="mainbase">
    <div class="Info1">
      <h4>Personal Information</h4>
      <div class="Infocon1">
        <div style="display:flex;margin-bottom: 8px;">
          <p>姓名：杨壹鑫</p>
          <p>性别：女</p>
          <p>电话：18060000000</p>
        </div>
        <div style="display:flex;margin-bottom: 8px;">
          <p>年龄：20岁</p>
          <p>籍贯：福建省晋江市</p>
          <p>邮箱：2542981111@qq.com</p>
        </div>
        <p style="width:670px;height:70px;">
          个人简介: 本人积极认真，态度乐观，能吃苦耐劳，平时善于观察，做事讲究效率和质量，
          且具有良好的协调与沟通能力。为人热情，人际关系良好，有较强解决问题的能力和学习、
          实际操作、人际沟通能力，团队协作意识强，责任感强，严于律己。
        </p>
      </div>
    </div>
    <div class="Info2">
      <h4>Educational information</h4>
      <div class="Infocon2">
        <div style="display:flex;margin-bottom: 8px;">
          <h5 style="font-size:16px">
            <a href="https://www.fjut.edu.cn">福建工程学院</a>
          </h5>
          <h5 style="font-size:16px;margin-left: 5px;">计算机科学与数学学院 本科</h5>
          <p style="margin-left:200px">--2021年09月至今</p>
        </div>
        <li style="margin-bottom: 8px;">c语言、python语言、java语言</li>
        <li>html、css、JavaScript、node.js、vue、uniapp</li>
      </div>
    </div>
    <div class="Info3">
      <h4>Personal skills</h4>
      <div class="Infocon3">
        <p>能较为熟悉的应用下述软件</p>
        <!-- <router-link to="/intro"><button class="btn" @click="intro()">查看详情</button></router-link> -->
        <div style="display:flex;width:650px;margin-top:10px">
          <p>原型图设计软件:</p>
          <li style="margin-left:20px">Axure</li>
          <li style="margin-left:25px">墨刀</li>
          <li style="margin-left:40px">PS</li>
          <li style="margin-left:20px">AI</li>
          <li style="margin-left:20px">即时设计</li>
        </div>
        <div style="display:flex;width:650px;margin-top:5px">
          <p>前端开发软件:</p>
          <li style="margin-left:35px">vscode</li>
          <li style="margin-left:17px">hbuild</li>
        </div>
        <div style="display:flex;width:650px;margin-top:5px">
          <p>编程语言软件:</p>
          <li style="margin-left:35px">IDEA</li>
          <li style="margin-left:33px">Eclipse</li>
          <li style="margin-left:20px">PyCharm</li>
          <li style="margin-left:20px">CodeBlocks</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.mainbase{
    position: relative;
    left: 30px;
    top: 40px;
    width: 800px;
    height: 360px;
}
.Info1{
  width: 750px;
  height: 170px;
  padding-top: 15px;
  margin: auto;
}
.Info2{
  width: 750px;
  height: 130px;
  padding-top: 15px;
  margin: auto;
}
.Info3{
  width: 750px;
  height: 160px;
  padding-top: 15px;
  margin: auto;
}
.Info1,.Info2 h4{
  margin-bottom: 3px;
}
.Infocon1{
  width: 722px;
  height: 125px;
  padding: 10px;
  border: 1.5px solid #E5E5E5;
  Border-radius:4px;
}
.Infocon1 p{
  width: 220px;
}
.Infocon2{
  width: 722px;
  height: 85px;
  padding: 10px;
  border: 1.5px solid #E5E5E5;
  Border-radius:4px;
}
.img{
  height: 23px;
  width: 200px;
}
.Infocon3{
  width: 722px;
  height: 110px;
  padding: 10px;
  border: 1.5px solid #E5E5E5;
  Border-radius:4px;
}
.btn{
  position: absolute;
  width: 100px;
  height: 25px;
  border: none;
  color: #fff;
  background-color: #d87f7d;
  Border-radius:4px;
  right: 50px;
  top: 380px
}
</style>