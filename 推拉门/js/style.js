//Encapsulation_function
	//封装 函数名: $$( dom ) 				实现类似于jQuery的重构 获取dom节点,返回执行函数 或 类名节点 或 id节点
		/*
		1.闭包封装$$传dom值与obj对象;
		2.判定传进来的dom类型;
		3.第一个根据类型判断是不是函数,如果是函数就自执行该函数;
		4.判断传进来的dom是不是string类型,由于各类浏览器的string类型大小写不一
		所以用toUpperCase()方法把传进来的dom转换成全部大写,当做string对比条件
		然后用substring(startIndex,endInde)方法截取非1的所有字符然后重新赋值dom2;
		5.惰性赋值obj,当没有对obj传值得时候默认是整个文档document
		6.根据重新赋值的dom2的值判断id 和类名
		7.根据第6条的判断实现返回值 是通过id返回 还是通过dom节点的类名
		8.通过对象过去的类 用split("")切割数组;
		9.遍历第8点用for循环if判断是否为dom传进来的值,是就push到新数组里进行返回;
		此案例用到的知识点
			(function(){})();					闭包
			typeof								判断类型
			window.onload						事件(结构加载完成后执行)
			if(){}elseif(){}					多重判断模拟多态
			toUpperCase()						字符串转换全部大写
			substring(startIndex,endIndex)		根据索引下标截取非startIndex的字符
			document.getElementById("dom")		通过文本过去元素通过ID
			obj.getElementsByClassName("xx")	通过对象获取dom节点的类名
			split("")							以空格为切割点 转换成数组
		*/	
		function $$(dom,obj){
			var param = typeof dom;
			var oparam = param.toUpperCase();
			obj = obj || document;
			if(param == "function"){
				dom();
			}else if(oparam =="STRING"){
				var Odom = dom.charAt();
				dom = dom.substring(1,dom.leng);
				if(Odom =="#"){
					return document.getElementById(dom);
				}else if(Odom == "."){
					if(document.getElementsByClassName){
					 	return obj.getElementsByClassName(dom);
					 }
					var arr = [];
					var array = document.getElementsByTagName("*");
					lens = array.length;
					for(var i=0;i<lens;i++){
						var arrClass = array[i].className.split(" ");
						for(var j=0;j<arrClass.length;j++){
						 	if(arrClass[j] == dom){
								arr.push(array[i]); //注意传给arr的是通过array的节点不是类名!!
						 	}
						 }
					}
					return arr; //返回值是数组,用的时候要加[0]	
				}
			}
		}

		/*
			3种调用
			$$(".a")[0].style="background:blue;"
			$$("#a").style="background:red;"
			$$(function(){alert(1)})
		*/
	//封装 函数名: $sort( arr,number )		实现冒泡排序 模仿数组sort()方法; 第一个参数传数组 第二个参数 1为升序 0为降序; 
		/*
		思路:
			1.根据传进来的数组的长度来决排序循环的次数;
			2.根据外循环的i决定内循环排序的次数;
		思维逻辑:
			通过实参传进一个长度为5的数组,当外层for循环1次
			内循环减去外层for循环的次数,为什么要减去外层for循环的次数,
			因为冒泡的思想是拿第一个数与第二个数比较大小,如果第二个数大于
			第一个数,那么就进入if判断体,
			(可乐倒进空杯子,然后雪碧倒进可乐,再把空杯子里的可乐倒进雪碧杯子里,形成一次换位循环)
			根据内循环的J自增进入第二次循环也就是if(Array[j] > Arrau[j+1])进入判断体;
			直到内循环大于外循环的i的值结束内循环,
			执行第二次外循环---思路不清晰等验证案例;

			根据断点调试与冒泡 1与2比较的原则
			总结如下:
				1.假如传进来的数组长度为5
				2.数组的下标就是 0 1 2 3 4
				3.外层循环决定了内循环体的排序次数
					当内层for循环满足 if条件( Array[1] > Array[2] )
					    进入(空杯=可乐,可乐=雪碧,雪碧=空杯)
					循环 此次数的依据 是根据数组的长度,
					但是根据冒泡原则
					内循环4次就能固定 第5个位置的值;
					至此内循环结束;

				4.执行外循环第2次进入内循环因
					注意:当第一次外循环进入内循环的结果是吧第5个位置的值给固定了
					所以当进入第2次内循环的时候 内循环3次就能固定第4个位置;
					根据此原理;
					第二次for循环 减i 是根据第一次外循环固定了第5位数;
					减去不必要的循环次数;
					然后再减去1是什么意思?
					因为索引下标是从开始的;
					数组循环5次 实际上是循环了6次 多循环了一次

					最终for(var j=0;j<len-i-1)的思维逻辑是解释的通的
					
				
		*/		
		function $sort(Array,reverse){
			var len = Array.length;		//获取传进来数组的长度
			switch(reverse){
				case 1:
					for(var i=0;i<len;i++){		//遍历数组
						for(var j=0;j<len-i-1;j++){	//循环排序数组
							if(Array[j] > Array[j+1]){	//如果Array[1] > Array[2]
								var kbz = "";
								kbz = Array[j];
								Array[j] = Array[j+1];
								Array[j+1] = kbz;
							}
						}
					}
					break;
				case 0:
					for(var i=0;i<len;i++){		//遍历数组
						for(var j=0;j<len-i-1;j++){	//循环排序数组
							if(Array[j] < Array[j+1]){	//如果Array[1] > Array[2]
								var kbz = "";
								kbz = Array[j];
								Array[j] = Array[j+1];
								Array[j+1] = kbz;
							}
						}
					}
					break;
			}
			return Array;
		}
		var ssb = [5,8,6,7,4];
	//封装 函数名: $Sort( arr,number )		实现经典排序 模仿数组sort()方法; 第一个参数传数组 第二个参数 1位升序 0为降序
		// 思路:
		// 	外循环决定了第几个开始向后比较
		// 	内循环决定向后比较几次;
			function $Sort(Array,reverse){
				len = Array.length;
				var temp ="";
				var reverse = reverse;
				alert(reverse)
				switch(reverse){
					case 1:
						for(var i=0;i<len;i++){  			//这个外循环是决定Array[i] 和内循环与谁比较
							for(var j=i+1;j<len;j++){       //j等于i+1   Array[j]这样就能拿到数组的第二个值 这样就有比较依据
								if(Array[i] > Array[j]){	//如果Array[0] > Array[1] 满足条件就进入if判断语句
									temp = Array[i];		//j++之后 array[0] > array[2]  满足条件就进入if判断语句
									Array[i] = Array[j];	//内循环结束,外循环第2次  i=1
									Array[j] = temp;
								}							//进入内循环  arry[i=1] > array[j= i+1]  然后j++ 
							}								//这样 数据1就和数据2比较了 然后 数据1和数据3比较 以此类推
						}
						break;
					case 0:
						for(var i=0;i<len;i++){  			//这个外循环是决定Array[i] 和内循环与谁比较
							for(var j=i+1;j<len;j++){       //j等于i+1   Array[j]这样就能拿到数组的第二个值 这样就有比较依据
								if(Array[i] < Array[j]){	//如果Array[0] > Array[1] 满足条件就进入if判断语句
									temp = Array[i];		//j++之后 array[0] > array[2]  满足条件就进入if判断语句
									Array[i] = Array[j];	//内循环结束,外循环第2次  i=1
									Array[j] = temp;
								}							//进入内循环  arry[i=1] > array[j= i+1]  然后j++ 
							}								//这样 数据1就和数据2比较了 然后 数据1和数据3比较 以此类推
						}
						break;
					default:
						alert("请传第2个参数 1为升序 0为降序")
				}
				
				return Array;
			};
		var ArrayDom = [3,6,5,1,7,9,8];
		//console.log($Sort(ArrayDom,1));
	//封装 函数名: $reverseArr( Array )		实现模拟数组reverse方法;
		/*
		思路:
			遍历传进来的Array,然后用一个空数组 push(栈底添加)模拟正序 unshift(栈头添加)模拟反序;

		*/
		function $reverseArr(Array){
			var len = Array.length;
			var arr = [];
			for(var i=0;i<len;i++){
				arr.unshift(Array[i]);
			}
			return arr;
		}
		var array = [1,2,3,4,5,6,7,8,9,10];
		//console.log($reverseArr(array));
	//封装 函数名: $firstIndex( str,val )	实现模拟数组indexOf方法。
		var strDom = "德玛西亚吃屎吃粪吃糠";
		function $firstIndex(str,val){
			var len = str.length-1;
			for(var i=0;i<len;i++){
				if(str[i]=== val){
					return i
				}
			}
			return -1;
		}
		//console.log($firstIndex(strDom,"吃"))
	//封装 函数名: $getTimes( arr,val )		返回数组中某个值出现的次数
		function $getTimes(arr,val){
			var count = 0;
			var len = arr.length;
			for(var i=0;i<len;i++){
				if(arr[i] === val){
					count++;
				}
			}
			return count;
		}
		var deArr = [8,6,5,4,7,"d","d",8,6,5,4,7,"d","d",8,6,5,4,7,"d","d"];
		//console.log($getTimes(deArr,"d"))
	/*封装 函数名: $removeAt( arr,val )		一个函数removeAt，实现删除数组中某个值，并返回
		思路:
			1) 遍历传进来的数组 ;
			2) if判断 不等于传进来的val 满足条件 进入if;
			3) 把不等于val值数据push到新数组 ;
			4) for循环结束 返回新数组;
		*/
		function $removeAt(arr,val){
			var len = arr.length;
			var a=0;
			var tempArr = [];
			for(var i=0;i<len;i++){
				if(arr[i] != val){
					tempArr.push(arr[i])
					a++
				}
			}
			console.log(a+"次");
			return tempArr;
		}
		var removeAtArr = [1,1,1,2,5,4,5,4,5,6,9,8,7,"j"]
		//console.log($removeAt(removeAtArr,5))
	/*封装 函数名: $isObj( val )			一个函数isObj( dom ) 判断是什么类型 包括对象里的所有类型;
		思路:
			1) 把传进来的 val值 用instanceof查看对象属性方法;
			2) 该方法返回值是 Boolean类型 直接返回就可以了;
		*/
			function $isObj(val){
				switch(true){
					case typeof val == "string":
					case typeof val == "number":
					case typeof val == "boolean":
					case typeof val == "undefined":
						return typeof val;
						break;
					case val instanceof Function:
						return "Function"
						break;
					case val instanceof Array:
						return "Array"
						break;
					default:
						return "请正确传参";

				}
			}
			var isStr = "bbs",
				isArr = ["bbs","bba"];
			//console.log(isArray(isStr));
			//console.log(isArray(isArr));
	/*封装 函数名: $getRandomNumber()		实现获取数组随机下标 和字符随机下标 2个参数 返回最小最大之间的值
		思路:
			2) 实现 获取随机字符长度下标的数值;
			3) 实现 获取随机数组长度的下标的数值;
			4) 实现 传入2个参数 最小与最大数值之间的随机数值;
		*/
		function $getRandomNumber(){
			var len = arguments.length;
			if( len == 1 )
				if( arguments[0] instanceof Array || typeof arguments[0] == "string" )
				return Math.floor( Math.random()*arguments[0].length );
				else return "请传参 数组类型 或者 字符类型";
			else if( len == 2 )
				return Math.floor( Math.random()*( arguments[1]-arguments[0]+1 )+arguments[0] );
			return "请正确传参";
		}
	/*封装 函数名: $getStyle(obj,attr)		兼容IE678 获取dom自定义属性
		*/
		function $getStyle(obj,attr){
				return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
			};
	/*封装 函数名: $sibling(dom,callback)   dom,回调函数 同级元素操作
		*/
		function $sibling(dom,callback){
				//当前子节点找到获取父节点,在获取所有子节点;
				var parentNode_domChild = dom.parentNode.children;
				var len = parentNode_domChild.length;
				for(var i=0;i<len;i++){
					if(parentNode_domChild[i] != dom){
						callback.call(parentNode_domChild[i]);
					}
				}
			};
	/*封装 函数名: $add0(val)				数值前面小于10补零
		*/
		function $add0(val){
			return val>=10?val:"0"+val;
		}
	/*封装 数组去重
		思路:
			1) 遍历传进来的数组;
			2) 创建一个空数组 并if判断 新数组有没有相同的数据 没有添加进新数组;
			3) for循环结束后 返回新数组
		*/
			function sansRepeat(arr){
				var tempArr = [];
				var len = arr.length;
				for(var i=0;i<len;i++){
					if(tempArr.indexOf(arr[i]) == -1){
						tempArr.push(arr[i]);
					}
				}
				return tempArr;
			} 

			var sansRepeatArr = [1,1,1,6,6,5,4,4,5,5,8,8,7,9,9,9,6,5,58];
			//console.log(sansRepeat(sansRepeatArr))
	/*封装 二维数组 求和
		思路
			1) 遍历传进来的数组
			2) 根据2维数组的长度再次遍历
			3) 用N变量+上每次遍历2维数组的值
			4) 返回累计的值;
		*/
			function erWeiArr(arr){
				var n = 0;
				var len = arr.length;
				for(var i=0;i<len;i++){
					for(j=0;j<arr[i].length;j++){
						n += arr[i][j];
					}
				}
				return n;
			}
			var erWeiArray = [[5,5,5],[6,6,6,6,6]];
			//console.log(erWeiArr(erWeiArray));
	/*封装 一维转2维数组
		思路:
			1) 用splice删除方法 返回值是数组形式的数据
			2) 注意点 因为把arr原数长度 作为判断条件,所以需要每次重新获取
		*/
			function oneTwoArr(arr,val){
				var tempArr = [];

				while(arr.length>0){
					tempArr.push(arr.splice(0,val));
				}
				return tempArr;
			}
			var oneTwoArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,0,0]
			//console.log(oneTwoArr(oneTwoArray,3));
	/*封装 一个函数实现trim方法.
		思路:
			1) 根据老师的思路 是记录首次不是空格的下标 和最后不是空格的下标 并记录
			2) 然后根据下标截取 用新的变量接收并返回出来 实现 清楚前后空格
		*/
			function strTrim(str){
				var tempStr = "";
				var startIndex = 0;
				var endIndex = 0;
				var len = str.length;
				/*第一种思路 个人思路 是通过indexof 和lastindexOf 找字符下标 
					思路:
						1) for循环不需要注释 不会影响到后面的代码执行 因为在执行的时候 var i 会进行初始化; 
					*/
					for(var i=0;i<len;i++){
						if(str[i].indexOf(" ") == -1){
							startIndex = i;
							break;
						}
					}
					for(var i=len-1;i>=0;i--){
						if(str[i].lastIndexOf(" ") == -1){
							endIndex = i+1;
							break;
						}
					}
					
				/*第二种思路 经过和老师代码比较后 进行优化 
					思路:
						1) 老师的思路是 通过if 判断 当先循环的字符 等不等于" "字符 不等于进入if语句 返回循环次数的i;

				  		2) 哈哈,今天终于明白 循环没有作用域 而同用一个i来循环 却又互不干扰;
				  		   因为进入for循环的时候 var i 重新初始化了;
				  		   经过验证...惨不忍睹啊........内循环的i改变了外面的i 互不干扰成了空;
				  		   不过经过思考 用了个index记录 外面循环的i的值等内循环结束后再 重新把index值 赋值给i  你说我机智不机智 哈哈;

				  		3) 经过第二次验证:for循环 发现互不干扰是有前提条件的,那就是两个循环体是单独的
				  		   for循环 用同一个i互不干扰 成立 德玛西亚~

						4) 内外循环 同用一个i循环 不互相干扰的方法:
							  for(var i=0;i<5;i++){
							  	var index = i;
							  	console.log(i+"我是外层层层循环的i")
							  	for(var i=0;i<5;i++){
							  	 	console.log(i+"我是内层循环的i")
							  	}
								i=index;
							  }	
				  	*/
				  	for(var i=0;i<len;i++){
				  		if(str[i] != " "){
				  			startIndex = i;
				  			break;
				  		}
				  	}
				  	for(var i=len-1;i>=0;i--){
				  		if(str[i] != " "){
				  			endIndex = i+1;
				  			break;
				  		}
				  	}
		
				/*第三种思路 
					思路: 
						1) 用字符方法 replace()方法替换"";
						2) 因replace()方法 只能替换目标一次 所以需要用到 REGEXP正则的一个方法 /str/g 进行全局替换;
					*/
					tempStr = str.replace(/ /g,"")   //这里有点尴尬了,字符串中间的字符也给替换掉了,并不能满足前后去空格的条件

				/*第四种思路
					思路:
						1) 完全用正则 全局匹配替换 /^\s+|\s+$/g  要么理解记忆 要么死记硬背......这个正则  废话我选择理解记忆
						2) REGEXP正则 理解 解释:
							^ == 开始
							\s == 空格.
							+ == 多个
							| == 或者
							$ == 结束
							g == 全局

					*/
					tempStr = str.replace(/^\s+|\s+$/g,"");

				//tempStr = str.slice(startIndex,endIndex);	这里不注释 正则方法重新赋值就被覆盖了...
				return tempStr;  //最后的tempStr是 第四种思路 
			}

			var strRandom = "  hello word   "
			//console.log(strTrim(strRandom))
	/*封装 一个函数，对参数进行判断，如果是string添加”bw-”的前缀返回，如果是数组则给数组中的每一项添加“bw-”的前缀，最后将整个数组返回
		思路:
			1) 检测typeOf只能检测 五大数据类型 而Array是包括在object里面的,那只能用 instanceOf 来判断是不是是数组;
			2) 按照上面的2个情况 能用if elseif 双条件判断  还有switch 判断也可以做;
		*/
			function addBw(val){
				var str = typeof val;
				if(str === "string"){
					return val = "bw-"+val;
				}else{
					str = val instanceof Array;
					if(str){
						var len = val.length;
						for(var i=0;i<len;i++){
							val[i] = "bw-" + val[i];
						}
					}
					return val;
				}
			}
			var addBwStr = "有便宜不占王八蛋";
			var addBWArr = ["有便宜","不占","王八蛋"];
			//console.log(addBw(addBwStr));
			//console.log(addBw(addBWArr));
	/*封装 字符串翻转函数reverseStr(str)，例如：str="welcome to javascript",
	   翻转之后成为var str1="javascript to  welcome";
	   思路:
			1) 把传进来的val 用join(" ")以空格为切割点 字符转成数组;
			2) 把转成数组用 数组方法 reverse()方法反转, 也可以遍历用新数组用unshift()栈头添加 返回新数组
			   想试试 改变原数组 待试试;
			3) 把反转好的数组 用字符方法split(" ") 数组转字符 并返回
		*/

		function reverseStr( val ){
			//return reverseArr( val.split( " " ) ).join( " " );  //这个返回 调用了自己封装的reverseArr()反转数组的方法;
			return val.split( " " ).reverse().join( " " );
		}

		var reverseString = "welcome to javascript";
		//console.log( reverseStr( reverseString ) );
	/*封装 一个函数，返回字符串中某个字符出现的个数(2种方法);
		思路:
			1) 第一思路 理所当然的用 count计数器 遍历计数 并返回
			2) 第二思路 是老师讲的 利用 split(val)字符转数组 打印其长度-1 就是出现的次数; 
		*/
		//第一思路 常规
			function returnStrNumber1(str,val){
				var count = 0;
				var len = str.length;
				for(var i=0;i<len;i++){
					if(str[i] === val){
						count++
					}
				}
				return count+"次";
			}
			var returnStr = "网易小说,不良少年生涯之路.王凯醒来发现自己回到了15年之前,而他自己却保留了25岁的记忆,在他的回忆里朋友越处越少,留下的也就那么一两个,是自己不会处关系吗?我想不是吧,人各有志,我选择不安逸的生活,选择向前走,都这年纪了,身边的朋友几乎都是 吃喝玩乐,酒吧 上网泡吧 游戏 歌舞厅 泡妹子的 关系混乱的很,这种朋友 越来越少,时至今日,身边能谈谈心里话的或许也那么一两个人了,而这剩下兄弟,我们都有多个共同的特点,单亲家庭,有个极其不负责任的父亲,一起流浪,有福共享 有难同当...小时候经常受欺负,所以我们抱成团,成了社会的不良少年,曾今在老家的十几个兄弟,如今好像也只有两三个随着年龄的增长,随着认知的提高,都不谋而合的都学好了,分清了什么是好,什么是坏...原本我们就很好...人之初性本善,只是过早的面对社会上的不良风气,没正确的引导,那个年代,学校与学校 群架是常有的事,个人成就全凭混的好不好来显示权威....还有成年人的圈子里 县城分成了几个类似于帮派 团伙,而我加入的是湖南那帮外地人,看场地,骗女孩等等....混的不好不坏..想起曾今犯下的过错.....到底是年少无知的责任,还是这个社会的责任....2008年的一场严打,或许因为我还有点良心,很多事没做绝 也可能是未满18岁,亦可能是 有亲戚在背后保我,其实我自己最清楚原因,很多严重的事情我并没有参与,原因只是胆子小,也很庆幸那时候胆子小否则我的人生轨迹将无法逆转....看着大多认识的人,不认识的也听过名号的牛逼人物 被特警 一一压上这个县城唯一的体育场 现场两三千人的批斗大会 直接宣布坐牢十几年最少的也3 4年......  历经社会不良风气以及阴暗的一面 那时的思想就是 偷吃爬拿 坑蒙拐骗一样不会就无法在这个社会生存,.....我很庆幸自己能走上正道,还能有自己的前途,相比其曾今的朋友在牢里的生活,估计这辈子都很难跳出,因环境造成的思想,今朝有酒今朝醉,从不考虑以后,也不考虑后果;一切的一切都随风而去,时间会抚平一切,就像沙漠里的沙子 即使坑坑洼洼 风暴过后 一点曾今的痕迹都没留下...这辈子到现在,小时候奶奶就是靠山,不管我好与不好都是她手心里的宝...得到了一种最为幸福的爱,或许对于别人来说 那是溺爱,但对我来说...这是真真无私的爱,一位祖母全身心的爱,这也是我最美好的回忆之一,还有我的婶婶,哑巴伯父 我的母亲....曾今的我把最好的一面给了社会...把最恶劣的态度给了真正关心我的人..而我至今才彻底大彻大悟.........我会努力的学好,拼命的学好,在你们有生之年报答你们...曾今抛弃的记忆,坏的用于警惕,好的留作回忆,直面我该承担的所有责任 绝不逃避;天地为证:谨记 弟子规 圣人训 首孝弟 次谨信 泛爱众 而亲仁 有余力 则学文 父母呼 应勿缓父母命 行勿懒 父母教 须敬听 父母责 须顺承 人生必修课 弟子规........";
			//console.log( returnStrNumber1( returnStr,"我" ) );

		//第二种思路 数组 第一种思路 比第一种好,因为第一种只能 统计一个条件,二数组方法可以统计多个字符;
			function returnStrNumber2( str,val ){
				return str.split( val ).length-1+"次";
			}
			//console.log( returnStrNumber2( returnStr,"的" ) );
	/*封装 一个函数humpFn，实现驼峰形式转字符串 如：var str = “get-element-by-id” , 调用humpFn(str)  返回 “getElementById”
		思路:
			1) 不造
			2) 你猜;
		*/
		function humpFn( val ){
			var temp = "get"
			for(var i=1;i<val.split( "-" ).length;i++){
				temp += val.split( "-" )[i].charAt().toUpperCase() + val.split( "-" )[i].slice(1);
			}
			return temp;
		}
		var humpStr = "get-element-by-id";
		//console.log( humpFn( humpStr ) );
	/* var url = "http://localhost/mylive.php?id=99&key=双11特惠";封装一个函数，调用函数时传入要获取的参数名，函数返回该参数对应的值，
	   如果找不到，弹出警告框提示用户“没有该参数对应的值”。如传入id，返回99；传入key返回“双11特惠”
	   思路:
			1) 你猜;
			2) 我猜你猜不猜;
		*/
		function returnUrl( str,val ){
			if( val === "id" ){
				return str.slice( str.indexOf( "=" )+1,str.indexOf( "=" )+3 );
			}else if( val === "key"){
				return str.slice( str.lastIndexOf( "=" )+1,str.lastIndexOf( "=" )+6 );
			}else{
				 alert( "没有该参数对应的值" )
				 return "没有该参数对应的值";
				
			}

		}
		var url = "http://localhost/mylive.php?id=99&key=双11特惠";
		// console.log(returnUrl(url,"id"));
		// console.log(returnUrl(url,"key"));
		// console.log(returnUrl(url,"麻利麻利哄"));
	
	
  //Encapsulation_function_end  先完成一个小目标 2万行 封装函数代码量~~
	
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