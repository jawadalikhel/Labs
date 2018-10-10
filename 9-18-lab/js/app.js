console.log('js is running');

const fun = {
    asdf: ["afd", "matt", 'sweet']
}

console.log(fun.asdf[2]);
//////////////////////////////

const body = {
    arm: {
        elbow: 'pointy'
    }
};

console.log(body.arm.elbow);

/////////////////////////////////

const person = {
    jump(){
        console.log('fly!');
    }
};

person.jump();
//////////////////////////////

const myList = [ 
	{eyeColor: 'blue'}
]
console.log(myList[0].eyeColor);

//////////////////////////////

const myArray = [
	{ color1: 'Red'},
	{color2: 'Green'},
	['blue', 'yellow', 'purple', 'shazad', 'buy supplies'],
	{color3: 'shazad'},
	{colo4: 'ew'},
	{color5: 'sde'},
	{color6: 'sd'},

]
console.log(myArray[2][4]);
////////////////////////////////////////////////////////////

const awesome = [
    {
        asdf:'true'
    },
    3456.245,
    ()=>{
        console.log('fun');
    },
    "buddy"
];

console.log(awesome[2]);

////////////////////////////////////////////////////////////

const refrigerator = {
    fruits: ['apple', 'pear', 'banana']
}
for(let i in refrigerator.fruits)
{
	console.log(refrigerator.fruits[i]);
}

////////////////////////////////////////////////////////////

// const container = [
//     [1,5,7],
//     ['bear', 'dog', 'cat'],
//     [true, false, true]
// ];

// for(let i = 0; i < container.length; i++)
// {
// 	for(let j=0; j < container[i].length; j++)
// 	{
// 		console.log(container[i][j]);
// 	}
// }
//////////////////OR THIS WAY

//  

////////////////////////////////////////////////////////////

const createCar = () => {
	return {tires : 4}

};
console.log(createCar().tires);
////////////////////////////////////////////////////////////

const frig = {
    fruits: ['apple', 'pear', 'banana']
}

console.log(frig.fruits)
////////////////////////////////////////////////////////////

const container = [
    [1,5,7],
    ['bear', 'dog', 'cat'],
    [true, false, true]
];

for(let )


























