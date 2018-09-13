// console.log('js is working');
// // scope is the restriction of where in you
// // code that you can access or use variable

// // Black scope local scope
// // global scope

// // let and const are only 
// //availivle in the block 
// {
// 	const item = 'book';
// 	console.log(item);
// }

// // console.log(item);


// //////////

// // Hoisting, leaks out of the block

// // In general,, we want to control our scope 
// // as tightly as possible, so thats why we want to use const and let

// // {
// // 	var taco = 'taco';

// // }

// // console.log(taco, 'This is taco');

// // //////////////

// // const book = 'dharma bums';
// // {
// // 	const item = 'wallet';
// // 	console.log(book);
// // 	console.log(item);

// // 	{
// // 		console.log(item)
// // 		if(){
// // 			if(){
// // 				// both of these would work
// // 				console.log(item);
// // 				console.log(book);
// // 			}
// // 		}
// // 	}
// // }
/////////////////////// FUNCTIONS CAN CALL OTHER FUNCTIONS


// write a function checkSquare and call checkToLimit
const checkSquare = (num) =>{
	if(Math.sqrt(num) % 1 === 0)
	{
		return true;
	}

	else{
		return false;
	}
}

console.log(checkSquare(2));
console.log(checkSquare(49));

//// *********************************

const checkToLimit = (limit) => {
	for(let i = 0; i <= limit; i++)
	{
		console.lot(i, '<-- This is i: the value--?'checkSquare(i));
	}
}

checkToLimit(50);

































