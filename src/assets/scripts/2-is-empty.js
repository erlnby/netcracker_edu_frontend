function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false