let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let top = {
        name: null,
        salary: Number.NEGATIVE_INFINITY
    }

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > top.salary) {
            top.salary = salary
            top.name = name;
        }
    }

    return top.name;
}

alert(topSalary(salaries));