//commonFunctionEncapsulation
	function $(obj){
		return document.getElementById(obj);
	};

	function getStyle(obj,attr){
		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
	};

	function sibling(dom,callback){
		//当前子节点找到获取父节点,在获取所有子节点;
		var parentNode_domChild = dom.parentNode.children;
		var len = parentNode_domChild.length;
		for(var i=0;i<len;i++){
			if(parentNode_domChild[i] != dom){
				callback.call(parentNode_domChild[i]);
			}
		}
	};

	function dh(dom,attribute,speed){
		var start = 0;
		var end = 330;
		var time = null;
		time = setInterval(function(){
			var pos =parseFloat(getStyle(dom,attribute));
			if(pos>=end){
				clearInterval(time);
				dom.children[0].style.display="block";	
			}else{
				dom.style.height = pos+speed+"px"
			}
		},20)	
	};


window.onload = function(){
//left_navigetionBox and buttomOnclick	
		(function(){
			var buttom = $("left_navigetionBox_concealShowButton");
			var nav_leftDom = $("left_navigetionBox");
			var trueDom = '<i class="icon iconfont icon-angle-double-left"></i>';
			var falseDom = '<i class="icon iconfont icon-gengduo-2"></i>'
			buttom.onclick =function(){
				var buttomValue = buttom.innerHTML;
				//动画的三要素 起始位置start ,终点end 速度 speed
				var start =0;
				var end = -200;
				var speed = 10;
				var time = null;
				if(buttomValue == falseDom){
					clearInterval(time);
					time=setInterval(function(){
						var pos = parseFloat(getStyle(nav_leftDom,"left"));
						if(pos>=start){
							clearInterval(time);  
						}else{
							nav_leftDom.style.left= pos+speed+"px";
							buttom.innerHTML = trueDom;
							buttom.style = "left:0"
						}
					},30)	
				}else if(buttomValue == trueDom){
					clearInterval(time);
					time=setInterval(function(){
						var pos = parseFloat(getStyle(nav_leftDom,"left"));
						if(pos<=end){
							clearInterval(time);  
						}else{
							nav_leftDom.style.left= pos-speed+"px";
							buttom.innerHTML = falseDom;
							buttom.style = "left:53px"
						}
					},30)	
				};
			};	

		})();
//left_navigetionBox_content and childNav
	(function(){
		var navDom = $("left_navigetionBox_content").children;
		var contentDom = $("middleContentBox").children;
		var nav_len = navDom.length;
		var con_len = contentDom.length;	

		for(var i=0;i<nav_len;i++){
			navDom[i].index = i;
			navDom[i].onmouseover = function(){            
				
				this.style = "background:rgba(255, 255, 255, 0.4);color:#fff;"
				contentDom[this.index].style = "display:block";
				sibling(this,function(){
					this.style = "background:rgba(255, 255, 255, 0.2);color:#000";
					contentDom[this.index].style = "display:none";
				});
			}
		}	

	})();
//alertTime
		(function(){
			var timeDom = $("topBox_content_timeBox_time");
			var span01Dom = timeDom.children[0];
			var span02Dom = timeDom.children[1];

			function returnDom(dom){
				return dom<10?"0"+dom:dom;
			};

			time = null;
			time = setInterval(function(){
				var times = new Date();
				var fullyear = times.getFullYear();
				var month = times.getMonth()+1;			
				var date = times.getDate();
				var day = times.getDay()+1;
				var hours = times.getHours();
				var minutes = times.getMinutes();
				var seconds = times.getSeconds();	

				switch(day){
					case 1:day="一";break;
					case 2:day="二";break;
					case 3:day="三";break;
					case 4:day="四";break;
					case 5:day="五";break;
					case 6:day="六";break;
					default:day="日";break;
				}

				span01Dom.innerHTML =fullyear+"年"+returnDom(month)+"月"+returnDom(date)+"日"
				span02Dom.innerHTML = "星期"+day+" "+returnDom(hours)+":"+returnDom(minutes)+":"+returnDom(seconds);

			},1000);
		})();	
		
//userNameDengRu
		(function(){
					var buttomDom = $("userNameDengRu");
			return buttomDom.onclick = function(ev){
				var e = ev||window.event;
				e.cancelBubble = "true";
				
				var userNeme_dengRuDom = $("userNeme_dengRu");
				var formDom = $("formDom");
				var textDom = formDom.userName.value;
				var passwordDom =formDom.password.value;
				var suo = false;
				var a = "666666";
				var b = "123456";
				
				if(textDom == a && passwordDom == b){
					suo = true;
				}
				if(suo == true){
					userNeme_dengRuDom.style.display="none";
					return false;
				}else{
					alert("请输入账号密码")
				}

			}
		})();
//content_Nav_Onclick
var content_Nav_Onclick = (function(dom1,dom2){
		var navDom = $(dom1).children;
		len = navDom.length;
		var nav__ul = [];
		var divBox_contentDom = $(dom2).children;

		for(var i=0;i<len;i++){
			navDom[i].index = i;
			navDom[i].onclick = function(){
				this.style = "background:#666;color:#fff";
				this.children[0].style.display = "flex";
				divBox_contentDom[this.index].style.display = "block"

				var nav_nav = this.children[0].children;
				var lens = nav_nav.length;
				var preDom = divBox_contentDom[this.index].children;
				for(var i=0;i<lens;i++){
					nav_nav[i].index = i;
					nav_nav[i].onclick = function(){
						preDom[this.index].style = "display:block";
						if(preDom[this.index].children[0]){
							preDom[this.index].children[0].style="display:block";
						}
						this.style = "color:#000;background: linear-gradient(#666, #666, #666, #666, #D7D5D5);";
						sibling(this,function(){
							preDom[this.index].style = "display:none";
							this.style = "background:#666;color:#fff";
						});
					}	
				}	

				sibling(this,function(){
					this.style.color = "#DED6D6"
					this.style.background = "linear-gradient(188deg,#000,#584D51,#3C3838,#555,#808080,#000)";
					this.children[0].style.display = "none";
					divBox_contentDom[this.index].style.display = "none";
				})
			}
		}
		

	});




content_Nav_Onclick("divBox_nav01","divBox_content01");
content_Nav_Onclick("divBox_nav02","divBox_content02");
content_Nav_Onclick("divBox_nav03","divBox_content03");
content_Nav_Onclick("divBox_nav04","divBox_content04");
content_Nav_Onclick("divBox_nav05","divBox_content05");
content_Nav_Onclick("divBox_nav06","divBox_content06");				
content_Nav_Onclick("divBox_nav07","divBox_content07");
content_Nav_Onclick("divBox_nav08","divBox_content08");				


	}

