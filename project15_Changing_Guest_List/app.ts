let guests : string[] = ["Uncle Ben", "Aunt May", "Harry Osborn"];

guests.map((v : string) => {
    console.log(`Hello ${v} You are invited to a dinner at my place.`)
});

let guestWhoCantMakeIt : string = "Harry Osborn";


console.log(guestWhoCantMakeIt, "<-- Guest who can't make it");


let newGuest : string = "Mary Jane";


guests.splice(guests.indexOf(guestWhoCantMakeIt), 1, newGuest);


guests.map((v : string) => {
    console.log(`Hello ${v} You are invited to a dinner at my place.`)
})
