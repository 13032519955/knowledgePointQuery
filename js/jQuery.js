function $(param){
	if(typeof param == "function"){
		window.onload = param;
	}else if(typeof param =="string"){
		return document.getElementById("param");
	}
}