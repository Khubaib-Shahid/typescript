let arr :string[] = ["Hunza valley", "Grand Canyon", "Antartica", "Iceland", "Deosai National Park"];


console.log(arr, "<--  orignal list");


console.log([...arr].sort(), "<-- alphabetical order");


console.log(arr, "<-- orignal list");


console.log([...arr].sort().reverse(), "reverse alphabetic order");


console.log(arr, "orignal list");


arr.reverse();


console.log(arr, "order has changed to reverse");


arr.reverse();


console.log(arr, "order has changed to orignal order");


arr.sort();


console.log(arr, "order has changed to alphabetic order");


arr.reverse();

console.log(arr, "order has changed to reverse alphabetic order");

