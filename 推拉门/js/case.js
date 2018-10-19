window.onload = function(){

//case合集
	/*case: 一个简易计数器
		思路:
			1) 不造
			2) 你猜
		*/
	/*case: 隔行变色
		思路:
			1) 不造
			2) 你猜
		*/
	/*case: 双色球
		思路:
			1) 不造
			2) 你猜
		*/
	/*case: 打印出 100-10000 水仙花数组 列 153 = 1*1*1 + 5*5*5 + 3*3*3
		思路:
			1) 不造
			2) 你猜
		*/
	/*case: 打印出所有日期函数的值,实现一个日期加时间
		思路:
			1) 不造
			2) 你猜
		*/
	/*case: 二级联动
		思路:
			1);
		参考老师代码:
			结构:
				<select name="" id="sel1">
					<option value="0">北京</option>
					<option value="1">上海</option>
					<option value="2">河北</option>
				</select>
				<select name="" id="sel2">
					<option value="">海淀区</option>
					<option value="">朝阳区</option>
					<option value="">昌平区</option>
					<option value="">大兴区</option>
				</select>
			行为:
				// 1) 获取节点
				var sel1 = document.getElementById("sel1"),
					sel2 = document.getElementById("sel2");

				// 2) change 事件
					sel1.onchange = function(){
					// 定义城市数组
						var cityArr = [["海淀区","朝阳区","昌平区","大兴区"],["浦东区","虹口区","长宁区","静安区"],["石家庄","承德","廊坊"]];
					// 当选择框放生改变时 清空sel2
						sel2.innerHTML = "";
					// 循环创建 option
					for(var i=0;i<cityArr[ this.value ].length;i++){
						// 创建 option
							var oOption = document.createElement("option");
						// 设置option内容
							oOption.innerHTML = cityArr[ this.value ][i];
						// 追加节点
							sel2.appendChild( oOption );
					}
				}
		*/
	/*case: 点击获取随奖品,并随机获取验证码,再进行验证之后收取品,并把奖品池抽到的奖品删除;
		要求:
			1) 点击获取奖品随机码时,没隔5秒点一次
			2) 一共有3次抽奖机会
			3) 奖品池疯狂随机
			4) 验证码一次显示
			5) 抽奖完毕 输入显示的验证码进行验证
			6) 抽奖次数限定为3次
			7) 再看
		*/
		//Encapsulate
		(function(){
			var formDoms = $$("#formDom").children;
			var iptDoms = formDoms[0].children[0].children;
			var count = 5;
			var time = null;
			return (function(){
				iptDoms[2].onclick = function(){
					var thrs = this;
					if(!time){
						time = setInterval(function(){
							click.call(thrs);
						},1000)
						formDoms[1].children[0].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;"+ "dfsfsfd";
						formDoms[2].children[0].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;"+ "dfsfsfd";
						formDoms[3].children[0].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;"+ "dfsfsfd";
						formDoms[4].children[0].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;"+ "dfsfsfd";
						formDoms[5].children[0].innerHTML = "2";

					}	
				}
			})();



			function click(){
				if(count>=0){
					this.value = count+" 秒后重新获取";
					this.style = "background:#444;color:#fff;";
					count--
				}else{
					clearInterval(time);
					this.style = "background:#ddd;color:#000;";
					time = null
					this.value = "获取验证码并抽取奖品"
					count = 5;

				}
				
			}
		
		})();
	/*case: 大乐透抽奖
		需求: 参照素材中给出的效果图，实现大乐透彩票抽奖的编写，要求如下：
			1) 点击“立即投注”按钮开始抽奖，抽奖过程需要添加定时器，抽50秒后自动停止。
			2) 大乐透的前区要求是1-33之间的5个随机数
			3) 大乐透的后区要求是1-12之间的2个随机数
			4) 不管是前区还是后区，抽中的号码不能重复，抽中的号码按照从小到大的顺序排列
		思路总结:
			1) 通过自封装$$方法获取nidaye节点通过children获取所有子节点[0]的所有子节点-->li
			2) 获取按钮节点 
			3) 设置点击事件 if判断 time定时器是否为空  是空满足条件 执行代码块
			4) 设置总数7位不重复的随机数并每10毫秒执行一次;
			5) 设置点击按钮定时器
			6) 当3秒过后清楚2个定时器 并初始化 time定时器 作为下次点击的判断条件,初始化count为3;
		*/
		//获取dom节点
		var liDoms = $$( "#nidaye" ).children[0].children,
			buttonDom = $$( "#nidaye" ).children[1],
			time = null,
			time1 = null,
			count = 3;

		//button点击事件
		buttonDom.onclick = function(){
			if( !time ){
				time = setInterval( fn,10 );
				time1 = setInterval( fn1,1000 );	
			};
			
		};

		//重置
		function fn1(){
					buttonDom.innerHTML = count+" 秒后获取";
					count--
					if(count<0){
						clearInterval(time);
						clearInterval(time1);
						buttonDom.innerHTML = "立即投注";
						count = 3;
						time = null
					}
				};

		//获取7位随机数值
		function fn(){
			var temp = [],
				temp1 = [];

			//获取5位随机1-33不重复的数值
			while( temp.length < 5 ){
				var random_1_33 = $add0( $getRandomNumber( 1,33 ) );
				if( temp.indexOf( random_1_33 ) == -1 ){
					temp.push( random_1_33 )
				}
				
			}

			//获取2位随机1-16不重复的数值
			while( temp1.length < 2 ){
				var random_1_12 = $add0( $getRandomNumber( 1,12 ) );
				if( temp.indexOf( random_1_12 ) == -1 ){
					temp1.push( random_1_12 )
				 }
				
			}

			//拼接成7位随机数值的数组
			var arr = $sort( temp.concat( temp1 ),1 );
			for( var i=0,len=liDoms.length;i<len;i++ ){
				liDoms[i].innerHTML = arr[i];
			}
		}



	//alert("这里是case的 行为js")
	// var a="4";
	// 	console.log("4的AISS码值是 " +a.charCodeAt());
	// 	console.log("AISS码值52 保存的是 "+ String.fromCharCode(52))

		

/*报错
	程序报错单词:	
		捕获:Uncaught			引用错误:ReferenceError			定义:defined			
		语法错误:SyntaxError	参数要求:arguments required		标记:token
		不能:Cannot				设置:set						属性property
		阅读:read				标识符:identifier				执行:execite
		未能:failed				元素:element					意外:Unexpected
		执行:implement			开始:start						保存:save 
		用户user				省份:province					非法的:ILLEGAL		

	日常单词:(长)
		轮播:carousel			购物:shopping						导航:navigation			常用:common
		属性:Properties			透明:transparent					车:trolley				封装:Encapsulation
		验证器:validator		用户名:username						文件:document			随机的:Random
		准备:prepare			返回:return							替换:change				改变:change
		照片:picture			小时:Hours							分钟:minutes			秒钟:Seconds
		乘法:multiplication		查询:query							过滤:filter				当前:current
		驼峰:hump
	日常单词:(短)
		图:map		盒子:box		最少值:min		点击:click		定时器:timer	播放:play
		内:inner		电话:phone	显示:show		获得:get			元素:element	通过:by
		值:value		的:of			我:i				做:make			个:individual	数学:Math
		年龄:age		钟:clock		区:district		标签:tag			开始:start	


	颜色:
		红色:red	蓝色:blue	绿色:green	粉色:pink	白色:white	紫色:purple	黑色:black
		灰色:gray

	英文1-20:
		01:one			02:two			03:three			04:four			05:five			06:six	
		07:seven			08:eight			9:nine			10:ten			11:eleven		12:twelve		
		13:thirteen		14:fourteen		15:fifteen		16:sixteen		17:seventeen	18:eighteen 
		19:nineteen		20:twenty

	css知识点:
		在前面添加一个盒子:before{content:"";}
		在后面添加一个盒子:after{content:"";}
	  	同元素选择器:nth-child(1){}
	  	行内块级元素:display:inline-block
		透明度:opacity
		清除浮动:<div style="clear:both"></div>
		字体:font-family:"Arial"
		鼠标样式跳转小手:cursor: pointer;
		Good morning I hope you have a good time every.and you will become you want once day
*/

(function(){
			return function(){
				setTimeout( fn,50000 );
			}();
			
			function fn(){
				alert("Good morning I hope you have a good time every.and you will become you want once day");
			}
		})();


}