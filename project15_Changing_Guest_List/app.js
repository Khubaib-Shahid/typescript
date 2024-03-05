"use strict";
let guests = ["Uncle Ben", "Aunt May", "Harry Osborn"];
guests.map((v) => {
    console.log(`Hello ${v} You are invited to a dinner at my place.`);
});
let guestWhoCantMakeIt = "Harry Osborn";
console.log(guestWhoCantMakeIt, "<-- Guest who can't make it");
let newGuest = "Mary Jane";
guests.splice(guests.indexOf(guestWhoCantMakeIt), 1, newGuest);
guests.map((v) => {
    console.log(`Hello ${v} You are invited to a dinner at my place.`);
});
