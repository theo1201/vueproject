<template>
  <div id="app_container">
    <!-- 顶部header -->
    <mt-header fixed title="固定在顶部"></mt-header>

    <!-- 中间路由 -->

    <!-- 底部tabbar -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

    <div>
      <transition>
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<style lang="scss" scoped>
#app_container{
  padding-top: 40px;
  padding-bottom: 50px;
  // 这里解决动画过程中导航条和tabbar调走的问题
  overflow-x: hidden;
}

// 这部分是动画
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}

</style>
