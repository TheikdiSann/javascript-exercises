const findTheOldest = function(people) {

    let oldestPerson =  people.reduce((oldest, currentPerson) => {
       let oldAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
       let currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

       return oldAge > currentAge? oldest : currentPerson; // compare with first element [0] of the array with others
      })

      return oldestPerson;
      

};


const getAge = function (birth, death){
  if(!death){
    return new Date().getFullYear() - birth;
  }else{
    return death - birth;
  }
}

console.log(findTheOldest([
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970, // 28
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011, // 49
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941, // 29
  },
]))


// Do not edit below this line
module.exports = findTheOldest;
