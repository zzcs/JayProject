window.onload = function(){   //when the page load complete,start this function
	var imgList = document.getElementById("list");
	var container = document.getElementById("container");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
	var span = document.getElementById("pic-button").getElementsByTagName("span");
	var index = 1;
	
	function span_light(){
		for(var i = 0;i <= span.length;i++){
			if(span[i].className = "on"){
				span[i].className = '';
				break;
			}
		}
		span[index-1].className = "on";
	}
	
	function animate(offset){
		imgList.style.left = parseInt(imgList.style.left) + offset + "px";
	}
	prev.onclick = function(){
		if(parseInt(imgList.style.left)<0){
			index -= 1;
			animate(600);
			span_light();
		}else{
			index = 3;
		}
		return;
	}
	next.onclick = function(){
		if(parseInt(imgList.style.left)>-1200){
			index += 1;
			animate(-600);
			span_light();
		}else{
			index = 1;
		}
		return;
	}
}