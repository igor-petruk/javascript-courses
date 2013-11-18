"use strict";

var getObject = function(path, obj){
	if (obj === undefined){
		return undefined;
	}else if (path==''){
		return obj;
	}else {
		var pathElements = path.split(".");
		var current = obj;
		for (var i = 0; i < pathElements.length; i++){
			current = current[pathElements[i]];
			if (current === undefined){
				return undefined;
			}
		}
		return current;
	}
}

var o = {a: {b: 'c'}};

module("getObject")

test( "getObject('a.b', o)", function() {
	equal( getObject('a.b', o), 'c');
});

test( "getObject('a', o)", function() {
	equal( getObject('a', o), o.a);
});

test( "getObject('d', o)", function() {
	equal( getObject('d', o), undefined);
});

test( "getObject('', o)", function() { // my interpretation
	equal( getObject('', o), o);
});


