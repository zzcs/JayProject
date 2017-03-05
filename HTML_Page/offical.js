window.onload = function(){   //when the page load complete,start this function
	var imgList = document.getElementById("list");
	var container = document.getElementById("container");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	var span = document.getElementById("pic-button").getElementsByTagName("span");
	var index = 1;
	
	function clear_span_className(){
		for(var i = 0;i < span.length;i++){
			if(span[i].className == "on"){
				span[i].className = "";
				break;
			}
		}
	}
	
	function span_light(){
		clear_span_className();
		span[index-1].className = "on";
	}
	
	function animate(offset){
		imgList.style.left = parseInt(imgList.style.left) + offset + "px";
	}
	prev.onclick = function(){
		if(parseInt(imgList.style.left)<0){
			if(index != 1){
				index -= 1;
				animate(600);
				span_light();
			}else{
				index = 3;
			}
		}
		return;
	}
	next.onclick = function(){
		if(parseInt(imgList.style.left)>-1200){
			if(index != 3){
				index += 1;
				animate(-600);
				span_light();
			}else{
				index = 1;
			}
		}
		return;
	}
	//spam onclick function
	for (var i = 1;i <= span.length;i++){
		span[i-1].onclick = function(){
			var span_index = parseInt(this.getAttribute("index"));
			clear_span_className();
			this.className = "on";
			switch(span_index){
				case 1 :
					imgList.style.left = 0+"px";
					break;
				case 2:
					imgList.style.left = -600+"px";
					break;
				case 3:
					imgList.style.left = -1200+"px";
					break;
			}
		}
	}
	
}