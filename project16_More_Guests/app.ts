let guests : string[] = ["Uncle Ben", "Aunt May", "Harry Osborn"];

guests.map((v : string) => {
    console.log(`Hello ${v} You are invited to a dinner at my place.`);
});

let guestWhoCantMakeIt : string = "Harry Osborn";


console.log(guestWhoCantMakeIt, "<-- Guest who can't make it");


let newGuest : string = "Mary Jane";


guests.splice(guests.indexOf(guestWhoCantMakeIt), 1, newGuest);


guests.map((v : string) => {
    console.log(`Hello ${v} You are invited to a dinner at my place.`);
})


console.log("Hey guys i found a bigger dinner table");


let newGuest1 : string = "Gwen Stacy";

let newGuest2 : string = "Otto Octavius";

let newGuest3 : string = "Eddie Brock";


guests.push(newGuest1);

guests.splice(2, 0, newGuest2);

guests.unshift(newGuest3);


guests.map((v) => {
    console.log(`Hello ${v} You are invited to a dinner at my place.`);
})



export {guests};