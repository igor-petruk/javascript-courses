"use strict";

var App = function App(){
	return {
		init: function() {
			this.nodes = document.querySelectorAll('.node');
			this.setListeners();
		},
		setListeners: function() {
			[].slice.call(this.nodes).forEach(function(n){
				n.onclick = this.onClick.myBind(this);
			}, this);
		},
		onClick: function(e) {
			e = e || window.event;
			var node = e.target || e.srcElement;
			var message = "this contains init="+(this.init!==undefined)+
			", node="+node+":'"+node.innerHTML+"'";
			console.log(message);
			document.querySelector('#myBindMessage').innerHTML = message;
		}
	};
};

if (typeof Function.prototype.myBind === 'undefined') {
	Function.prototype.myBind = function(context){
		var f = this;
		return function(){
			f.apply(context, arguments);
		}	
	};
}

(new App()).init();
