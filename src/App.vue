<template>
  <div id="app">
  	<div id="top">
    	<img src="./assets/list.png" class="list"/>
    	<input type="search" name="search" id="search" />
    	<div class="top_list"></div>
    	<img src="./assets/search.png" class="icon_search"/>
    	<h4 class="text_search">提问</h4>
    	<div class="line_search"></div>
  	</div>
  	<div class="top_nav">
  		<el-tabs  v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="关注" name="first"></el-tab-pane>
		    <el-tab-pane label="推荐" name="second"></el-tab-pane>
		    <el-tab-pane label="热榜" name="third"></el-tab-pane>
  		</el-tabs>
  	</div>
		

  </div>
</template>

<script>
export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
   }
</script>

<style>
	*{margin: 0;padding: 0;}
	#top{
		background-color: #FFFFFF;
	}
	.list{
		width: 30px;
		height: 30px;
		position: relative;
		top: 20px;
		left: 16px;
	}
	#search{
		position: relative;
		left: 20px;
		top: 8px;
		width: 305px;
		height: 40px;
		background-color:#EBEBEB;
		border-radius: 5px;
		opacity: 0.9;
	}
	.icon_search{
		width: 22px;
		height: 22px;
		position: relative;
		top: -22px;
		left: 75px;
	}
	.text_search{
		position: relative;
		top: -48px;
		left: 300px;
	}
	.line_search{
		width: 1px;
		height: 22px;
		position: absolute;
		background-color:#B8B8B8 ;
		top: 24px;
		left: 250px;
	}
	.top_nav{
		position: relative;
		top: 0px;
		left: 100px;
	}
</style>
