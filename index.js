const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("test").innerHTML = greeting;

const fruits = ["James","Edward","Jabari","Jesse"];
fruits.sort();
document.getElementById("names").innerHTML = fruits;

fruits.sort();
fruits.reverse();
document.getElementById("names2").innerHTML = fruits;


class Friend{
	constructor(name,year){
		this.name = name;
		this.year = year;
	}age(x){
		const date = new Date();
		return date.getFullYear() - this.year;
	}
}




const Friend1 = new Friend("Edward Johnson",1993);
const Friend2 = new Friend("Jabari Washington",1993);
document.getElementById("friend").innerHTML = Friend1.name + " and " + Friend2.name + " have been friends for years ";
document.getElementById("age").innerHTML = "My age is "  + Friend1.age();

const person = {
	fname: "James",
	lname: "Greene",
	age:31
};
let txt = " ";
for ( let x  in person){
	txt += person[x] + " ";
}
document.getElementById("text").innerHTML = txt;

const player = {
	fname:"Kobe",
	lname:"Bryant",
	team: "LA Lakers"
};
let bio = " ";
for(let x in player){
	bio += player[x]+ " ";
}
document.getElementById('player').innerHTML = bio;

