//// 1.
// for(let i = 50; i >= 20; i--){
// 	if (i % 3 === 0){
// 	console.log(i);
// 	}
// }

//// 2.

// for(let i = 50; i >= 20; i--)
// {
// 	if(i *= 3)
// 	{
// 		console.log(i);
// 	}
// }


//// 4.
// const menu = [{name: "pizza", glutenFree: false},
// 			{name: "salad", glutenFree: true},
// 			{name: "donut", glutenFree: false},
// 			{name: "steak", glutenFree: true},
// 			{name: "chicken", glutenFree: true},
// 			{name: "cheeseburger", glutenFree: false}];
// let array = [];

// for(let i = 0; i < menu.length; i++)
// {
// 	if(menu[i].glutenFree === true)
// 	{
// 		array.push(menu[i]);

// 	}

// }
// console.log(array);


// const mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 
// 				'Whats the deal with airplane peanuts', 
// 				3.14, {barry: "Mannilow",}, 6, 55, null, 
// 				"Old " + "Crow " + " Medicine Show", 3, 2, 
// 				"I want the calzone from pizanos", "Death blow", 
// 				"Firestorm", "48", 30];
// let num_array = [];

// for (let i=0; i < mixedArray.length; i++)
// {
	
// 	if(typeof mixedArray[i] === 'string' || typeof mixedArray[i] === 'object')
// 	{
// 		num_array.push(mixedArray[i]);
// 	}
// }
// console.log(num_array);


//// 3.
// const presidents = ["Donald", "Barack", "George Jr", "Bill", "George", "Ronald", "Jimmy", "Gerald", "Richard", "Lyndon", "John", "Dwight", "Harry", "Franklin", "Herbert", "Calvin", "Warren", "Woodrow", "William", "Theodore"];
// for(let i = 1; i < presidents.length; i+=2)
// {
// 	console.log(presidents[i]);
// }

///////////////////////////////////////////////////////////////////////////////////////


// for(let i = 50; i >= 20; i--)
// {
// 	if (i % 3 === 0)
// 	{
// 		console.log(i);
// 	}
// }


const league = [{name: "NFL", players: [{name: "Tom Brady", goat: false}, 
{name: "Walter Payton", goat: true}]}, 
{name: "NBA", players: [{name: "Michael Jordan", goat: true}, 
{name: "Lebron James", goat: false}]},{name: "MLB", players: 
[{name: "Babe Ruth", goat: true}, {name: "Alex Rodriguez", goat: false}]}];

let array = [];

for(let i = 0; i < league.length; i++)
{
  if(league[i].name === true)
  {
    array.push(league[i]);
  }
}
console.log(array);









