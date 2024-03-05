"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guests = void 0;
let guests = ["Uncle Ben", "Aunt May", "Harry Osborn"];
exports.guests = guests;
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
console.log("Hey guys i found a bigger dinner table");
let newGuest1 = "Gwen Stacy";
let newGuest2 = "Otto Octavius";
let newGuest3 = "Eddie Brock";
guests.push(newGuest1);
guests.splice(2, 0, newGuest2);
guests.unshift(newGuest3);
guests.map((v) => {
    console.log(`Hello ${v} You are invited to a dinner at my place.`);
});
