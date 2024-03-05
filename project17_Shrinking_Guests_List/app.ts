let guests: string[] = ["Uncle Ben", "Aunt May", "Harry Osborn"];

guests.map((v: string) => {
  console.log(`Hello ${v} You are invited to a dinner at my place.`);
});

let guestWhoCantMakeIt: string = "Harry Osborn";

console.log(guestWhoCantMakeIt, "<-- Guest who can't make it");

let newGuest: string = "Mary Jane";

guests.splice(guests.indexOf(guestWhoCantMakeIt), 1, newGuest);

guests.map((v: string) => {
  console.log(`Hello ${v} You are invited to a dinner at my place.`);
});

console.log("Hey guys i found a bigger dinner table");

let newGuest1: string = "Gwen Stacy";

let newGuest2: string = "Otto Octavius";

let newGuest3: string = "Eddie Brock";

guests.push(newGuest1);

guests.splice(2, 0, newGuest2);

guests.unshift(newGuest3);

guests.map((v: string) => {
  console.log(`Hello ${v} You are invited to a dinner at my place.`);
});

console.log(
  "sorry guys my new dinner table won't arrive in time for the dinner so i have space for only two guests"
);

let totalGuest = guests.length;

for (let i = 0; i < totalGuest - 2; i++) {
  let shrinkGuest = guests.pop();
  console.log(`Sorry ${shrinkGuest} i can't invite you.`);
}

let remainGuests = guests.length;

guests.map((v) => {
    console.log(`Hello ${v} you are invited to a dinner at my place.`)
})

for (let i = 0; i < remainGuests; i++) {
    guests.pop();
}

console.log(guests, "<--   empty list");