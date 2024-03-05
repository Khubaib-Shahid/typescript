"use strict";
let arr = [["Honda cg 125", "motorcycle"], ["Toyota Supra mk4", "car"], ["Yamaha VX-C 1100 WaveRunner", "jet ski"]];
arr.map((v, i) => {
    console.log(`I would like to own a ${v.join(" ")}.`);
});
