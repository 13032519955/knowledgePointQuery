 var $$ = (function(){
	function $$(param,obj){
		var oparam = typeof param;//判断类型
		if(oparam == "function"){//第一个条件，如果是函数直接返回window绑定onload 这个还没学原理
			window.onload = param;
		}else if(oparam.toUpperCase() == "STRING"){//第二个条件，判断string兼容all浏览器，满足执行
			var fparam = param.charAt();//charAt方法获传进来的param的第一个字符
			if(fparam == "#"){//判断是不是#，满足执行
				param = param.substring(1,param.length)//substring方法，截取除第一个字符剩下的重新赋值param 
				return document.getElementById(param);//返回 document.getElementById（param）
			}else if(fparam == "."){//判断是不是#，满足执行
				param = param.substring(1,param.length)//substring方法，截取除第一个字符剩下的重新赋值param
				obj = obj||document //惰性赋值，如果没传obj  obj就等于document
				if(document.getElementsByClassName){//判断浏览器是否支持className这个方法，支持就返回方法
					return obj.getElementsByClassName(param);
				}
				var classDom = obj.getElementsByTagName("*");
				var arrClass = [];
				for(var i=0;i<classDom.length;i++){
					var arr = classDom[i].className.split(" ");
					for(var j=0;j<arr.length;j++){
						if(arr[j] == param){
							arrClass.push(classDom[i])
						}
					}
				}
				return arrClass
			}
		}
	}
	return $$
})();

//链式调用
 var lianShi_transfer = (function(){
	function lianShi_transfer(Dom){
		var sDom = document.getElementById(Dom);
			var json = {
				"html":function(html){
					sDom.innerHTML = html;
					return this;
				},
				"css":function(a,b){
					sDom.style[a] = b;
					return this;
				}
			};
		return json;
	};
	return lianShi_transfer
})()


//作业 封装一下用jquery 实现查看自定义属性 设置自定义属性 删除自定义属性
//#查看对象属性name @获取自定义属性 $删除自定义属性 %设置自定义属性
function getStyle(obj,value,attributes){
	var objText = obj.charAt();
	if(objText=="#"){//查看对象的属性名称
		obj = obj.substring(1,obj.leng)
		obj = document.getElementById(obj);
		return obj.attributes[value].name;
		//还可以直接$(obj).attributes[value].name;
	}else if(objText=="@"){//获取对象自定义的属性
		obj = obj.substring(1,obj.leng);
		obj = document.getElementById(obj);
		return obj.getAttribute(value);
	}else if(objText=="$"){//删除自定义属性
		obj = obj.substring(1,obj.leng);
		obj = document.getElementById(obj);
		return obj.removeAttribute(value);
	}else if(objText=="%"){//设置自定义属性
		obj = obj.substring(1,obj.leng);
		obj = document.getElementById(obj);
		return obj.setAttribute(value,attributes);
	}
}





