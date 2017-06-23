/** 我方灰机 */
var MyPlane = {
	frequency: 300, //频率
	ele: document.createElement("div"), //创建div
	controller: null, //控制器
	initPosition: function() {  //初始化位置
		this.ele.style.left = Engine.ele.offsetLeft + Engine.ele.offsetWidth / 2 - this.ele.offsetWidth / 2 + "px";  //引擎的left值 + 引擎宽度的一半 - 我方飞机宽度的一半
		this.ele.style.top = document.documentElement.offsetHeight - this.ele.offsetHeight + "px"; //页面高度 - 我方飞机的高度
	},
	/*listening: function() { //监听键盘控制
		this.contoller = setInterval(function() {}, 30);
	},*/
	offset: function() {
		return {
			x: this.ele.offsetLeft,
			y: this.ele.offsetTop
		};
	},
	show: function() {
		this.init();
		this.fire();
	},
	init: function() {
		this.ele.className = "my-warplain";
		document.body.appendChild(this.ele);
		this.initPosition();
		var leftSide = Engine.ele.offsetLeft;
		var rightSide = Engine.ele.offsetLeft + Engine.ele.offsetWidth - MyPlane.ele.offsetWidth;
		document.onmousemove = function(evt) {
			var _left = evt.clientX - MyPlane.ele.offsetWidth / 2;
			_left = _left < leftSide ? leftSide : _left;
			_left = _left > rightSide ? rightSide : _left;
			MyPlane.ele.style.left = _left + "px";
		};
		return this;
	},
	fire: function() {
		setInterval(function() {
			new Bullet().init().shoot();
		}, this.frequency);
	}
}