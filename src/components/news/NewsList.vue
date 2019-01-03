<template>
  <div > 
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://gitee.com/uploads/43/904043_theo1.png?1526273871">
          <div class="mui-media-body">
              <h1>幸福</h1>
            <p class="mui-ellipsis">
                <span>发表时间:2017-12-12 12:12</span>
                <span>点击:0次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://gitee.com/uploads/43/904043_theo1.png?1526273871">
          <div class="mui-media-body">
              <h1>幸福</h1>
            <p class="mui-ellipsis">
                <span>发表时间:2017-12-12 12:12</span>
                <span>点击:0次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://gitee.com/uploads/43/904043_theo1.png?1526273871">
          <div class="mui-media-body">
              <h1>幸福</h1>
            <p class="mui-ellipsis">
                <span>发表时间:2017-12-12 12:12</span>
                <span>点击:0次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>

    <!-- 这是评论区 -->
    <comment-box></comment-box>


  </div>
</template>

<script>
import comments from '../subcomponents/comment'

export default {
    // 注册子组件
    components:{
        "comment-box":comments
    }
};
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{
            font-size: 14px;
        }
        .mui-ellipsis{
            font-size: 12px;
            color: #226affff;
            display: flex;
            justify-content: space-between;
        }
    }

}

</style>


