//    Name : Stripping Names

//    Date : 2 / 17 / 2024 

//    Description : first variable str display the string that contains whitespace characters,
//                  and then the second variable stripped all the whitespaces in variable str
//                  with the help of trim method.

let str : string = "\t sohan \n";

console.log(str, "<---   string with whitespaces");

let stripStr : string = str.trim();

console.log(stripStr, "<---   string without whitespaces");