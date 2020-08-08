<template>
	<div id="app">
		<p class="p">我的大觅 > 账户中心 > 个人信息</p>	
		<div id="ap">
		<ul class="ul">
			<li>我的大觅</li>
			<li>交易中心</li>
			<li class="p1">订单管理</li>
			<li>账户中心</li>
			<li class="p1">个人信息</li>
			<li class="p1">常用购票人</li>
		</ul>
		<ul class="ul1">
			<li><span>基本资料</span><span>头像设置</span><span>兴趣爱好</span></li>
			<li><p>完善更多个人信息，有助于我们为您提供更加个性化的服务，大麦网将尊重并保护您的隐私。</p></li>
			<table>
				<tr><td>昵称：</td><td><input type="" name="" id="" value="" /></td></tr>
				<tr><td>真实姓名：</td><td><input type="" name="" id="" value="" /></td></tr>
				<tr><td>性别：</td><td><input type="radio" name="q" id="" value="" />男<input type="radio" name="q" id="" value="" style="margin-left: 44px;"/>女</td></tr>
				<tr><td>出生日期：</td><td><select style="width: 74px;"></select>年<select style="width: 50px;"></select>月<select style="width: 50px;"></select>日</td></tr>
			    <tr><td>婚姻状况：</td><td><select style="width: 206px;"><option>请选择</option></select></td></tr>
			    <tr><td>教育程度：</td><td><select style="width: 206px;"><option>请选择</option></select></td></tr>
			    <tr><td>从事行业：</td><td><select style="width: 206px;"><option>请选择</option></select></td></tr>
			    <tr><td>月收入：</td><td><select style="width: 206px;"><option>请选择</option></select></td></tr>
			    <tr><td>家乡：</td><td><select style="width: 116px;"><option>不限</option></select><select style="width: 116px;margin-left: 20px;"><option>不限</option></select></td></tr>
			    <tr><td>现居住地：</td><td><select style="width: 116px;"><option>不限</option></select><select style="width: 116px;margin-left: 20px;"><option>不限</option></select></td></tr>
			    <tr><td>身份证号：</td><td><input type="" name="" id="" value="" style="width: 308px;"/></td></tr>
			    
			</table>
			<li><p style="width: 168px;height: 38px;background-color: red;color: white;margin-top: 26px;" >保存</p></li>
		</ul>
		</div>
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
	.p{
		height: 50px;
		line-height: 50px;
	}
	#app{
		background-color: #f5f5f5;
	}
	#ap {
		display: flex;
		justify-content: space-between;
	}
	.ul{
		height: 498px;
		width: 205px;
		background-color: white;
		padding-left: 20px;
	}
	.ul li{
		padding-top: 22px;
	}
	.ul li:nth-child(1){
		padding-top: 12px;
		color: red;
	}
	.ul li:nth-child(2){
		padding-top: 30px;
	}
	.ul1{
		height: 1090px;
		width: 950px;
		background-color: white;
	}
	.p1{
		padding-left: 16px;
	}
	span{
		display: inline-block;
		width: 112px;
		height: 40px;
		text-align: center;
		padding-top: 24px;
	}
	.ul1 li p{
		width: 710px;
		height: 42px;
		background-color: #fffdee;
		text-align: center;
		line-height: 42px;
		color: #7f7f7d;
		margin-left: 26px;
	}
	table tr td:nth-child(1){
		padding-left: 32px;
		
	}
	table tr td{
		padding-top: 16px;
		
	}
	
</style>