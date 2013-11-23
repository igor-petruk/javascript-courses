var Person = function(args){
	for (arg in args){
		if (args.hasOwnProperty(arg)){
			this[arg] = args[arg];
		}
	}
};

var p = new Person({
	name: 'Jack',
	age: '10',
	jump: function(){ return "My name is " + this.name + " and I can jump.";}
});

module("Person")

test( "p.name", function() {
	equal( p.name, 'Jack');
});

test( "p.age", function() {
	equal( p.age, 10);
});

test( "p.jump()", function() {
	equal( p.jump(), 'My name is Jack and I can jump.');
});
