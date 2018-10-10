console.log('js is running!');

class Person {
	constructor(name, age, school){
		this.name = name;
		this.age = age;
		this.school = school;
	}
	

	greeting(){
		console.log('Hi my name is ' + this.name + ', I  ' + this.age + ' years old' + 
			' and i go to ' + this.school);
	}

}

const jawad = new Person('jawad', 23, 'GA');
//console.log(jawad);

class Pet extends Person{
	super(name, age, school, color){
		this.name = name;
		this.age = age;
		this.school;
		this.color = color;
	}

	greeting(){}
}

const nugget = new Pet('Nugget', 1, 'pet school for kittens', 'Ginger');





































