var people = [
	{id: 1, name: 'Brad', friends: [2,5,6]},
	{id: 2, name: 'John', friends: [1, 3]},
	{id: 3, name: 'Tom', friends: [2, 5]},
	{id: 4, name: 'Fil', friends: null},
	{id: 5, name: 'John', friends: [1, 3]},
	{id: 6, name: 'Jim', friends: [1]}
];

var peopleHash = (function(people){
	var p = {};
	people.forEach(function(item){
		p[item.id] = item;
	})
	return p;
})(people);

var getFriends = function(userId){
	var person = peopleHash[userId];

	if (person !== undefined){
		return (person.friends || [])
			.map(function(item){
				return peopleHash[item];
			})
			.filter(function(item){ // ignore missing, my interpretation
				return item !== undefined;
			});
	}else{
		return null;
	}
}

module("getFriends")

test( "getFriends(2)", function() {
	deepEqual( getFriends(2), [people[0], people[2]]);
});

test( "getFriends(4)", function() {
	deepEqual( getFriends(4), []);
});

test( "getFriends(100500)", function() {
	deepEqual( getFriends(100500), null);
});