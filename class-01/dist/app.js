"use strict";
class other {
    constructor(school) {
        this.school = school;
    }
}
;
class student extends other {
    constructor(name, cls, school = "White Rose") {
        super(school);
        this.name = name;
        this.cls = cls;
        this.school = school;
    }
}
;
console.log(new student("hasnain", 8));
