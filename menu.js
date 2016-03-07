var menu = document.getElementById('menu');
addEvent(document,'contextmenu',show);
addEvent(document,'click',hide);
function show(event){
	var event = event || window.event;
	prevent(event);
	var top = event.clientY - menu.offsetHeight;
	var left = event.clientX - menu.offsetWidth;
	menu.style.top = top + 'px';
	menu.style.left = left + 'px';
	menu.style.display = 'block';
}
function hide(event){
	var event = event || window.event;
	target = event.target || event.srcElement;
	var parent = target.parentNode.parentNode;
	if (parent == null) {
		menu.style.display = 'none';
	}
	if (parent != null && parent.id != 'menu') {
		menu.style.display = 'none';
	}	
}
function addEvent (obj,type,fn) {
	if(typeof obj.addEventListener != 'undefined'){
		obj.addEventListener(type,fn,false);
	}else{
		obj.attachEvent('on'+type,fn);
	}
}
function prevent(event){
	if (event && event.preventDefault) {
		event.preventDefault();
	}else{
		window.event.returnValue = false;
	}

}