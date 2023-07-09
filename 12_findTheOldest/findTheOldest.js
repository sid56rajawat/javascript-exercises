const findTheOldest = function(people) {
    // people is an array of object
    // we can sort this based on their age then return people[0]
    people.sort((a,b) => {
        let aAge = (a.yearOfDeath || (new Date).getFullYear()) - a.yearOfBirth;
        let bAge = (b.yearOfDeath || (new Date).getFullYear()) - b.yearOfBirth;
        return bAge - aAge;
    });
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
