const cities = { 
  vancouver: 603502, 
  burnaby: 223220, 
  langley: 104177 
}; 

function getPopulation(obj) {
  for (let city in obj) {
    if (obj[city] > 150000) {
      console.log(`${city} is a large city`)
    } else {
      console.log(`${city} is a small city`)
    }
  }
  
}

console.log(getPopulation(cities));

