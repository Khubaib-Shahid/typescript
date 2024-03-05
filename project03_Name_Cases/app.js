"use strict";
let str = "sohan khan";
console.log(str.toLowerCase());
console.log(str.toUpperCase());
let arr = str.split(" ");
let newStr = "";
for (let i = 0; i < arr.length; i++) {
    newStr += `${arr[i].slice(0, 1).toUpperCase()}${arr[i].slice(1).toLowerCase()} `;
}
console.log(newStr);
