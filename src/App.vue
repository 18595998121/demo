<template>
  <div id="app">
  	<v-head></v-head>
  	<div id="ap">
  		<div id="ap1">
  			<div id="s">
  		<ul class="qq">
  			<li><router-link to='/sy' style="display: block; height: 50px;width: 200px;text-align: center;line-height: 50px;">全部商品分类</router-link></li>
  			<li><router-link to='/xj' style="display: block; height: 50px;width: 100px;text-align: center;line-height: 50px;">戏剧</router-link></li>
  			<li><router-link to='/ty' style="display: block; height: 50px;width: 100px;text-align: center;line-height: 50px;">体育</router-link></li>
  			<li><router-link to='/qz' style="display: block; height: 50px;width: 100px;text-align: center;line-height: 50px;">亲子</router-link></li>
  			<li><router-link to='/gr' class="ww" style="display: block; height: 50px;width: 100px;text-align: center;line-height: 50px;">个人</router-link></li>
  			<li><router-link to='/xq' class="ww" style="display: block; height: 50px;width: 100px;text-align: center;line-height: 50px;">详情</router-link></li>
  			
  		</ul>
    
   
   <router-view/>
   
  	</div>
  	<div id="db">
  		<div id="db1">
  			<ul>
  				<li>
  					<p>订购方式</p>
  					<p>在线订购 </p>
  					<p>电话订购 </p>
  					<p>上门订购 </p>
  					<p>大客户团体订购 </p>
  					<p>大麦超级票订购</p>
  				</li>
  				<li>
  					<p>配送方式</p>
  					<p>送货上门  </p>
  					<p>电子票 </p>
  					<p>上门自取  </p>
  					<p>大麦自助机换票  </p>
  				
  				</li>
  				<li>
  					<p>支付方式</p>
  					<p>在线支付 </p>
  					<p>柜台付款  </p>
  					
  				</li>
  				<li>
  					<p>小麦网微信  </p>
  					<p><img src="./assets/20200327192930.png" style="height: 90px;"/></p>
  				</li>
  				<li>
  				<p>小麦网微信  </p>
  				<p><img src="./assets/20200327192930.png" style="height: 90px;"/></p>
  				</li>
  				<li>
  					<p>配送方式</p>
  					<p>找回密码</p>
  					<p>账户注册 </p>
  					<p>账户绑定 </p>
  					<p>SSL安全证书</p>
  					
  				</li>
  				<li>
  					<p>配送方式</p>
  					<p>退换及缺货说明 </p>
  					<p>发票帮助 </p>
  					<p>订票服务条款  </p>
  					
  				</li>
  				<li>
  					<p>特色服务</p>
  					<p>演出订阅 </p>
  					
  				</li>
  			</ul>
  		</div>
  		<div id="db3">
  			<div id="db2">
  			<ul>
  				<li>公司介绍</li>
  				<li>|</li>
  				<li>品牌识别 </li>
  				<li>|</li>
  				<li>企业荣誉 </li>
  				<li>|</li>
  				<li>隐私声明 </li>
  				<li>|</li>
  				<li>联系及合作</li>
  				<li>|</li>
  				<li>招聘信息</li>
  				<li>|</li>
  				<li>网站地图 </li>
  				<li>|</li>
  				<li>友情链接  </li>
  				<li>|</li>
  				<li>公司大事记 </li>
  			</ul>
  			<ul>
  				<li><img src="./assets/20200327194740.png" style="height: 36px;"/></li>
  				<li><img src="./assets/20200327194751.png" style="height: 36px;"/></li>
  				<li><img src="./assets/20200327194831.png" style="height: 36px;"/></li>
  				<li><img src="./assets/20200327194840.png" style="height: 50px;"/></li>
  				<li><img src="./assets/20200327194848.png" style="height: 40px;"/></li>
  				<li><img src="./assets/20200327194910.png" style="height: 40px;"/></li>
  			</ul>
  		</div>
  		</div>
  	</div>
  		</div>
  	</div>
    
  </div>
</template>

<script>
	$(function(){
		$('.ww').click(function(){
			$('.qq').hide()
		})
	})
import head from '@/components/head.vue';
	
export default {
  name: 'App',
  
	components:{
		'v-head':head,
		
	},
	
	methods:{
		
	}
}


 
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	

#s{
	width: 1200px;
	margin: 0 auto;
	background-color: white;
	
}
#ap{
	width: 100%;
	background-color: #f5f5f5;
	
}
#ap1{
	width: 1200px;
	margin: 0 auto;
	background-color: #f5f5f5;
}
#s ul li{
	float: left;
	
}
#s p{
	line-height: 50px;
	text-align: center;
}
.cla{
	background-color: royalblue;
}
.router-link-active{
	
		background-color: black;
		color: white;
	
	
}
#db{
	background-color: #e6e6e6;
	width: 100%;
	height: 400px;
}
#db1{
	width: 1200px;
	margin: 0 auto;
}
#db1 ul{
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid red;
	padding-bottom: 30px;
	background-color: #e6e6e6;
}

#db1 p{
	font-size: 10px;
	padding-top: 18px;
}
#db1 p:nth-child(1){
	font-size: 14px;
	padding-top: 44px;
}
#db2{
	width: 880px;
	margin: 0 auto;
}
#db2 ul{
	display: flex;
	justify-content: space-between;
	padding-top: 20px;
	font-size: 14px;
}
#db3{
	width: 1200px;
	margin: 0 auto;
	background-color: #e6e6e6;
}
</style>
