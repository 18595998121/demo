<template>
	<div id="app">
		<ul>
			
			<li><img src="../assets/20200326174911.png" style="height: 40px;width: 130px;"/></li>
			<li style="padding-left: 16px;"><p>北京站</p></li>
			<li style="padding-left: 360px;"><input type="text" id="inp" value="" placeholder="请输入演出、赛事、艺人、场馆名称……"/></li>
			<li style="padding-left: 80px;"><p>HI,欢迎来大麦[登录，注册]</p></li>
			
		</ul>
		
	</div>
	
</template>

<script>
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	#app{
		width: 1200px;
		margin: 0 auto;
	}
	#app ul li{
		float: left;
		height: 30px;
	}
	#app ul{
		margin-top: 20px;
		margin-bottom: 16px;
	}
	#app ul:after{
		clear: both;
		content: "";
		display: block;
	}
	#app p{
		line-height: 30px;
	}
	#inp{
		width: 340px;
		height: 30px;
		border-radius:50px ;
		border: 1px solid gainsboro;
		outline: none;
		padding-left: 20px;
	}
</style>