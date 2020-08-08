<template>
	<div id="app">
		<div class="ul4">
			<ul class="ul">
				<li>演唱会</li>
				<li>音乐会</li>
				<li>去苑杂坛</li>
				<li>话剧歌剧</li>
				<li>体育比赛</li>
				<li>舞蹈芭蕾</li>
				<li>儿童亲子</li>
				<li>动漫</li>
			</ul>
			<ul class="ul1">
				<li><img src="../assets/20200327112015.png" style="width: 1000px;" /></li>
			</ul>
		</div>

		<div class="ul3">
			<ul>
				<li><img src="../assets/20200327140014.png" />
					<p>门与匙2017嘻哈巡回演...</p>
					<p><span>票价：</span>￥180<span>起</span></p>
				</li>
				<li><img src="../assets/20200327140034.png" />
					<p>门与匙2017嘻哈巡回演...</p>
					<p><span>票价：</span>￥180<span>起</span></p>
				</li>
				<li><img src="../assets/20200327140102.png" />
					<p>门与匙2017嘻哈巡回演...</p>
					<p><span>票价：</span>￥180<span>起</span></p>
				</li>
				<li><img src="../assets/20200327140123.png" />
					<p>门与匙2017嘻哈巡回演...</p>
					<p><span>票价：</span>￥180<span>起</span></p>
				</li>
				<li><img src="../assets/20200327140133.png" />
					<p>门与匙2017嘻哈巡回演...</p>
					<p><span>票价：</span>￥180<span>起</span></p>
				</li>
				<li><img src="../assets/20200327140143.png" />
					<p>门与匙2017嘻哈巡回演...</p>
					<p><span>票价：</span>￥180<span>起</span></p>
				</li>
			</ul>
		</div>
		<div class="kl" v-for="ul in 5">

			<ul class="kl1">
				<p style="padding-left: 24px;padding-top: 20px;"><span style="color:red;display: inline-block;padding-right:14px;">1F</span>戏剧达人</p>
				<li><img src="../assets/20200327151612.png" style="width: 240px;" /></li>
				<li>
					<div class="t">
						<div class="t1">
							<img src="../assets/20200327151655.png" style="height: 152px;" />
						</div>
						<div class="t2">
							<p style="width: 160px;font-size: 12px;padding-left: 10px;">麦戏聚│孟京辉戏剧作品《一 个陌生女人的来信》深圳站
							</p>
							<p style="font-size: 12px;padding-left: 10px;padding-top: 50px;color: #C8C8C8;">2018.01.26-2018.01.28</p>
							<p style="font-size: 12px;padding-left: 10px;padding-top: 12px;color: #C8C8C8;">深圳市少年宫剧场</p>
							<p style="font-size: 12px;padding-left: 10px;padding-top: 12px;color: #C8C8C8;">¥ 100起</p>
						</div>
					</div>
					<div class="t3">
						<div class="t1">
							<img src="../assets/20200327151713.png" style="height: 152px;" />
						</div>
						<div class="t2">
							<p style="width: 160px;font-size: 12px;padding-left: 10px;">麦戏聚│孟京辉戏剧作品《一 个陌生女人的来信》深圳站
							</p>
							<p style="font-size: 12px;padding-left: 10px;padding-top: 50px;color: #C8C8C8;">2018.01.26-2018.01.28</p>
							<p style="font-size: 12px;padding-left: 10px;padding-top: 12px;color: #C8C8C8;">深圳市少年宫剧场</p>
							<p style="font-size: 12px;padding-left: 10px;padding-top: 12px;color: #C8C8C8;">¥ 100起</p>
						</div>
					</div>
				</li>
				<li>
					<div class="t">
						<div class="t1">
							<img src="../assets/20200327151930.png" style="height: 152px;" />
						</div>
						<div class="t2">
							<p style="width: 160px;font-size: 12px;padding-left: 10px;">麦戏聚│孟京辉戏剧作品《一 个陌生女人的来信》深圳站
							</p>
							<p style="font-size: 12px;padding-left: 10px;padding-top: 50px;color: #C8C8C8;">2018.01.26-2018.01.28</p>
							<p style="font-size: 12px;padding-left: 10px;padding-top: 12px;color: #C8C8C8;">深圳市少年宫剧场</p>
							<p style="font-size: 12px;padding-left: 10px;padding-top: 12px;color: #C8C8C8;">¥ 100起</p>
						</div>
					</div>
					<div class="t3">
						<div class="t1">
							<img src="../assets/20200327151805.png" style="height: 152px;" />
						</div>
						<div class="t2">
							<p style="width: 160px;font-size: 12px;padding-left: 10px;">麦戏聚│孟京辉戏剧作品《一 个陌生女人的来信》深圳站
							</p>
							<p style="font-size: 12px;padding-left: 10px;padding-top: 50px;color: #C8C8C8;">2018.01.26-2018.01.28</p>
							<p style="font-size: 12px;padding-left: 10px;padding-top: 12px;color: #C8C8C8;">深圳市少年宫剧场</p>
							<p style="font-size: 12px;padding-left: 10px;padding-top: 12px;color: #C8C8C8;">¥ 100起</p>
						</div>
					</div>
				</li>
			</ul>
			<ul class="kl2">
			<p style="padding-top: 20px;padding-left: 24px;padding-bottom: 20px;">热门戏剧排行</p>
				<li><span>1</span>《四川好人》</li>
				<li><span>2</span>《恋爱的犀牛》</li>
				<li><span>3</span>《一个陌生女人的来信》</li>
				<li><span>4</span>《其实你是爱笑的》</li>
				<li><span>5</span>《那次奋不顾身的爱情》</li>
				<li><span>6</span>《埋葬》</li>
				<li><span>7</span>沉浸式戏剧：梦想之船泰坦尼克</li>
				<li><span>8</span>《第十二夜》</li>
			    <li><span>9</span>《蛋》</li>
			    <li><span>10</span>《梵高》</li>
			    <li><img src="../assets/20200327184815.png" style="width: 230px;"/></li>
			</ul>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'sy',
		data() {
			return {

			}
		},
		methods: {
			
		}
	}
</script>

<style scoped="scoped">
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	
	#app {
		width: 1200px;
		margin: 0 auto;
		padding-top: 50px;
	}
	
	.ul4 {
		height: 420px;
	}
	
	.ul4:after {
		clear: both;
		content: "";
		display: block;
	}
	
	.ul {
		height: 421.55px;
		float: left;
	}
	
	.ul1 {
		float: left;
	}
	
	.ul li {
		height: 52.6px;
		width: 200px;
		text-align: center;
		line-height: 50px;
		background-color: #FF3F1B;
		color: white;
	}
	
	.ul3 {
		margin-top: 102px;
		height: 360px;
	}
	
	.ul3 ul {
		display: flex;
		justify-content: space-around;
		font-size: 12px;
	}
	
	.ul3 img {
		height: 192px;
		width: 146px;
	}
	
	.ul3 p {
		padding-top: 10px;
	}
	
	.ul3 span {
		color: #C8C8C8;
	}
	
	.ul li:hover {
		background-color: #DE2B09;
	}
	
	.kl:after {
		clear: both;
		content: "";
		display: block;
	}
	.kl{
		margin-bottom: 30px;
	}
	.kl1 {
		float: left;
		width: 896px;
		height: 466px;
		border: 1px solid red;
	}
	
	.kl2 {
		float: right;
		width: 280px;
		height: 466px;
		border: 1px solid red;
	}
	
	.kl1:after {
		clear: both;
		content: "";
		display: block;
	}
	
	.kl1 li {
		float: left;
		padding-left: 24px;
		padding-top: 20px;
	}
	
	.t:after {
		clear: both;
		content: "";
		display: block;
	}
	
	.t1 {
		float: left;
	}
	
	.t2 {
		float: left;
	}
	
	.t3 {
		margin-top: 56px;
	}
	.kl2 li{
		padding-left: 24px;
		padding-bottom: 10px;
	}
	.kl2 span{
		font-size: 10px;
		display: inline-block;
		width: 12px;
		height: 14px;
		text-align: center;
		background-color: red;
		color: white;
	}
</style>