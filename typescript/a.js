"use strict";
function sumOfAges(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAges({
    name: "ambesh",
    age: 10,
}, {
    name: "ambesh2",
    age: 8,
});
console.log(age);
