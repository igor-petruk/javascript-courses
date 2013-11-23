var Person2 = function(args){
	var privateFields = {};
	for (arg in args){
		if (args.hasOwnProperty(arg)){
			if (typeof args[arg] != "function"){
				(function (obj, arg){
					var capitalized = arg[0].toUpperCase()+arg.substr(1);
					var getter = "get"+capitalized;
					var setter = "set"+capitalized;

					obj[getter] = function(){
						return privateFields[arg];
					};

					obj[setter] = function(newValue){
						privateFields[arg] = newValue;
					};

					privateFields[arg] = args[arg];
				})(this, arg);
			}else{
				this[arg] = args[arg].bind(privateFields);
			}
		}
	}
};

var p2 = new Person2({
	name: 'Jack',
	age: '10',
	jump: function(){ return "My name is " + this.name + " and I can jump.";}
});

module("Person2")

test( "p2.getName", function() {
	equal( p2.getName(), 'Jack');
});

test( "p2.name", function() {
	equal( p2.name, undefined);
});

test( "p2.getAge", function() {
	equal( p2.getAge(), 10);
});

test( "p2.age", function() {
	equal( p2.age, undefined);
});

test( "p2.jump()", function() {
	equal( p2.jump(), 'My name is Jack and I can jump.');
});

test( "p2.getJump()", function() {
	equal( p2.getJump, undefined);
});
