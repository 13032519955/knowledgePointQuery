
	/*总结思路:
		1) 第一个for循环 是吧除了第一个除外的dom 其他的dom位置400+i*50+px的距离,进行初始化;
		2) 另起for循环 给每个元素绑定点击事件并添加自定义下标index属性
		3) 内for循环 被点击事件触发是循环 循环次数由dom数量决定
		4) 每次循环 if 判断当前循环次数 小于并等于 当前点击的索引下标 进入执行代码块,否则进入else
		5) 在自己思路推敲整个过程 忽略了 内循环的次数 以为是当前点击的索引决定 次数 ,
		   这个错误思维 导致整个推敲过程错误.....
		6) 摆正学习态度 停止自己的思路少走弯路........
	*/
//预加载	
window.onload = function(){
	//获取所有liDom节点
	var liDoms = $$("#tlmDom").children;
	/*
		1) 第一步,用for循环 初始化 图片的位置;
		2) 父元素的总宽为600px,图片为400的宽 一共5张图片 剩下的4张分别显示50px 总计600px
		3) 第一张图片的位置不需要动 所以i从1开始循环
	*/
		for(var i=1,len= liDoms.length;i<len;i++){
			liDoms[i].style.left = 400+((i-1)*50)+"px";
		}
	//第二步
		for(var i=0;i<len;i++){
			liDoms[i].onclick = (function(i){
					return function(){
						/*
							第三步
							1) 内循环 触发的条件是 由点击事件触发
							2) 当点击触发事件 循环dom.length长度 次数
							3) 每次当前循环的j 小于等于 当前的i的满足条件 进入 图片位置循环次数(图片下标)*50px
						   	   否则进入else循环 图片位置 400+循环次数(图片下标)+50px
						*/

						for(var j=0;j<len;j++){
							if(j <=i ){
								liDoms[j].style.left = j*50+"px";
							}else{
								liDoms[j].style.left = 400+((j-1)*50)+"px";
							}
						}
					}
			})(i);
			
		}


}

/*window.onload = function(){
	var tlmLiDoms = $$("#tlmDom").children;
	//第一个循环是初始化图片
	for(var i=1,len=tlmLiDoms.length;i<len;i++){
		tlmLiDoms[i].style = "left:"+(400+(i-1)*50)+"px";
	}
	//第二个循环是富循环绑定点击事件

	for(var i=0;i<len;i++){
		tlmLiDoms[i].index = i;
		tlmLiDoms[i].onclick = function(){
			//第三个循环是点击后出触发的...
			for(var j=0;j<len;j++){
				if( j <= this.index ){
					tlmLiDoms[j].style = "left:"+(j*50)+"px";
				}else{
					tlmLiDoms[j].style = "left:"+(400+(j-1)*50)+"px";
				}
			}
			
	
		}
	}

}
*/





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
		轮,播:carousel			购物:shopping						导航:navigation			常用:common
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