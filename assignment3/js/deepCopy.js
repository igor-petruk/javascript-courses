"use strict";

var deepCopy = function(obj){
	if (obj === null || typeof obj != "object"){
		return obj;
	} else {
		if (obj instanceof Array){
			var newObject = new Array(obj.length);
			for (var i = 0; i < obj.length; i++){
				newObject[i] = deepCopy(obj[i]);
			}
			return newObject;
		}

		if (obj instanceof Object){
			var newObject = {};
			for (var attribute in obj){
				if (obj.hasOwnProperty(attribute)){
					newObject[attribute] = deepCopy(obj[attribute]);
				}
			}
			return newObject;
		}
	}
}

module("deepCopy")

test( "simple deep copy", function() {
	var a = {b: 'c', d: {e: 'f'}},
		f = {e: 'f'};

	var b = deepCopy(a);
	//a.d = 12;
	 // 
	deepEqual( b.d, f);
});

