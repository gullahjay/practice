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

