<template>
  <div class="projectbase">
     <!-- 创建外部展示容器 -->
    <div class="banner-container clearfix">
        <!-- 创建图片存储容器 -->
        <div class="banner-image-container">
            <!-- 引入轮播图图片 -->
            <img src="../assets/project/1.png" alt=""/>
            <img src="../assets/project/2.png" alt=""/>
            <img src="../assets/project/3.png" alt=""/>
            <img src="../assets/project/4.png" alt=""/>
            <img src="../assets/project/5.png" alt=""/>
        </div>
    </div>
    <div class="projects">
        <h2>项 目 链 接</h2>
        <img src="../assets/some.png" alt="" style="width: 200px;">
        <el-collapse v-model="activeName" accordion class="cons">
            <el-collapse-item title="心理咨询预约平台" name="1">
                <div>心理咨询预约平台可以在微信搜索Appointment platform即可找到</div>
                <div>由于小程序的评分人数不足，所以暂时无法生成链接</div>
                <div>账号密码为亲苍霞系统的账号密码</div>
            </el-collapse-item>
            <el-collapse-item title="福工校园智慧报修系统" name="2">
                <div>原型图链接：https://modao.cc/app/T5kvtiUkrjy63zQhPWJbjd #报修系统-分享  </div>
                <div>可以在微信小程序搜索苍霞报修系统使用体验</div>
            </el-collapse-item>
            <el-collapse-item title="拓扑园预约系统" name="3">
              <div>ps的图片分享没办法生成链接</div>
              <div>拓扑园是计数学院老师使用滴，学生没有权限，具体的我也不太清楚</div>
            </el-collapse-item>
            <el-collapse-item title="霞客技术协会官网" name="4">
              <div>官网链接：https://www.fjutxiake.com/</div>
              <div>部分ui设计链接：https://modao.cc/app/zFENDSz7rhsemgrLOwzhDk #霞客考试系统-分享  </div>
            </el-collapse-item>
            <el-collapse-item title="此外" name="5">
              <div>校园活动平台还在开发中</div>
              <div>参与了协会乐高项目，用于比赛打基础的项目</div>
              <div>还有学校土木学院的国家教学成果申报网站的原型图设计和开发，但这个不能展示</div>
            </el-collapse-item>
        </el-collapse>
    </div>
    <div class="bisai">
        <h2>比 赛 经 历</h2>
        <img src="../assets/some.png" alt="" style="width: 200px;">
    </div>
    <div class="block" style="width:800px;margin: auto;">
          <el-timeline>
            <el-timeline-item timestamp="2022/10" placement="top">
              <el-card>
                <h4>2022年参加第二届中国大学生大数据挑战赛</h4>
                <p>二等奖</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2022/11" placement="top">
              <el-card>
                <h4>2022年参加亚太杯数学建模比赛</h4>
                <p>继续努力</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2023/3" placement="top">
              <el-card>
                <h4>2023年参加数学建模美赛</h4>
                <p>H奖</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2023/4" placement="top">
              <el-card>
                <h4>2023年泰迪杯</h4>
                <p>(还没出结果)</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
  </div>
</template>

<script>

export default {
    data() {
      return {
        activeName: '1'
      };
    }
}
</script>

<style>
.projectbase{
    width: 100%;
    height: 1350px;
}
.banner-container{
    width:1000px;
    height:300px;
    margin:0px auto;
    position:relative;
    overflow: hidden;/*用于隐藏超出展示容器的内容部分*/
}
.banner-image-container{
    width:5000px;
    height:300px;
    margin:0px auto;
    animation:text 30s infinite  linear;
    font-size:0px;/*消除图片间隔*/
    
}
.banner-image-container img{
    width:1000px;
    height:300px;
    float:left;
}

@keyframes text {          /*0%-20%是播放下一个图片，0%-10%是图片暂停的时间*/
    0%,10%{
        /* margin-left:0px; */
        transform: translateX(0px);
    }
    30%,40%{
        /* margin-left:-1200px; */
        transform: translateX(-1000px);
    }
    50%,60%{
        /* margin-left:-2400px; */
        transform: translateX(-2000px);
    }
    70%,80%{
        /* margin-left:-3600px; */
        transform: translateX(-3000px);
    }
    90%,100%{
        /* margin-left:-4800px; */
        transform: translateX(-4000px);
    }
    110%,120%{
        /* margin-left: 0px; */
        transform: translateX(0px);
    }
}
.projects{
    margin: auto;
    width: 800px;
    text-align: center;
}
.bisai{
    margin: auto;
    width: 800px;
    text-align: center;
}
.projects h2{
    font-size: 20px;
    position: relative;
    top: 43px;
    color: #fff;
}
.bisai h2{
    font-size: 20px;
    position: relative;
    top: 43px;
    color: #fff;
}
.cons{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 5px; 
}
.bisaicon{
    width: 800px;
    height: 120px;
}
</style>