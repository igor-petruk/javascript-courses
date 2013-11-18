var people = [
	{id: 1, name: 'Brad', friends: [2,5,6]},
	{id: 2, name: 'John', friends: [1, 3]},
	{id: 3, name: 'Tom', friends: [2, 5]},
	{id: 4, name: 'Fil', friends: null},
	{id: 5, name: 'John', friends: [1, 3]},
	{id: 6, name: 'Jim', friends: [1]}
];

var friendsIndex = function(){
	var peopleIndex = {};
	var index = {};
	for (var personIndex in people){
		var person = people[personIndex];
		index[person.id] = [];
		peopleIndex[person.id] = person;
	}
	for (var personIndex in people){
		var person = people[personIndex];
		if (person.friends !== null){
			var friends = person.friends;
			var indexItem = index[person.id];
			for (var i in friends){
				var friendIndex = friends[i];
				indexItem.push(peopleIndex[friendIndex]);
			}
		}
	}
	return index;
}();

var getFriends = function(userId){
	var indexQueryResult = friendsIndex[userId];
	return (indexQueryResult === undefined) ? null : indexQueryResult;		
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