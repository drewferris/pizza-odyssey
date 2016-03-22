function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function driversNeeded(deliveryMade) {
  return deliveryMade / 3;
}

// pass in a store location
function generateDriversNeeded(storeLocation){
  var storeData = storeLocation.salesData;
  // make variable that is a refence to salesData
  // loop across all time objects in the salesData Array and compute
  // driversNeeded
  for (var i = 0; i < storeData.length; i++) {
    storeData[i].driversRecomend = driversNeeded(storeData[i].deliveryMade);
  }
  // add that value to a key called driversRecomend on each time object
}

var ballard = {
  name: 'ballard',
  salesData: [
      {time: '8:00 am',
       pizzaSold: getRandomIntInclusive(0,4),
       deliveryMade: getRandomIntInclusive(0,4),
       driversRecomend: generateDriversNeeded()
    },
      {time: '9:00 am',
       pizzaSold: getRandomIntInclusive(0,4),
       deliveryMade: getRandomIntInclusive(0,4),
       driversRecomend: generateDriversNeeded()
    },
      {time: '10:00 am',
       pizzaSold: getRandomIntInclusive(0,4),
       deliveryMade: getRandomIntInclusive(0,4),
       driversRecomend: generateDriversNeeded()
    },
      {time: '11:00 am',
       pizzaSold: getRandomIntInclusive(0,7),
       deliveryMade: getRandomIntInclusive(0,4),
       driversRecomend: generateDriversNeeded()
    },
      {time: '12:00 pm',
       pizzaSold: getRandomIntInclusive(0,7),
       deliveryMade: getRandomIntInclusive(0,4),
       driversRecomend: generateDriversNeeded()
    },
      {time: '1:00 pm',
       pizzaSold: getRandomIntInclusive(0,7),
       deliveryMade: getRandomIntInclusive(0,4),
       driversRecomend: generateDriversNeeded()
    },
      {time: '2:00 pm',
       pizzaSold: getRandomIntInclusive(2,15),
       deliveryMade: getRandomIntInclusive(1,4),
       driversRecomend: generateDriversNeeded()
    },
      {time: '3:00 pm',
       pizzaSold: getRandomIntInclusive(2,15),
       deliveryMade: getRandomIntInclusive(1,4),
       driversRecomend: generateDriversNeeded()
    },
      {time: '4:00 pm',
       pizzaSold: getRandomIntInclusive(2,15),
       deliveryMade: getRandomIntInclusive(1,4),
       driversRecomend: generateDriversNeeded()
    },
      {time: '5:00 pm',
       pizzaSold: getRandomIntInclusive(15,35),
       deliveryMade: getRandomIntInclusive(3,8),
       driversRecomend: generateDriversNeeded()
    },
      {time: '6:00 pm',
       pizzaSold: getRandomIntInclusive(15,35),
       deliveryMade: getRandomIntInclusive(3,8),
       driversRecomend: generateDriversNeeded()
    },
      {time: '7:00 pm',
       pizzaSold: getRandomIntInclusive(15,35),
       deliveryMade: getRandomIntInclusive(3,8),
       driversRecomend: generateDriversNeeded()
    },
      {time: '8:00 pm',
       pizzaSold: getRandomIntInclusive(12,31),
       deliveryMade: getRandomIntInclusive(5,12),
       driversRecomend: generateDriversNeeded()
    },
      {time: '9:00 pm',
       pizzaSold: getRandomIntInclusive(12,31),
       deliveryMade: getRandomIntInclusive(5,12),
       driversRecomend: generateDriversNeeded()
    },
      {time: '10:00 pm',
       pizzaSold: getRandomIntInclusive(12,31),
       deliveryMade: getRandomIntInclusive(5,12),
       driversRecomend: generateDriversNeeded()
    },
      {time: '11:00 pm',
       pizzaSold: getRandomIntInclusive(5,20),
       deliveryMade: getRandomIntInclusive(6,11),
       driversRecomend: generateDriversNeeded()
    },
      {time: '12:00 am',
       pizzaSold: getRandomIntInclusive(5,20),
       deliveryMade: getRandomIntInclusive(6,11),
       driversRecomend: generateDriversNeeded()
    },
      {time: '1:00 am',
       pizzaSold: getRandomIntInclusive(5,20),
       deliveryMade: getRandomIntInclusive(6,11),
       driversRecomend: generateDriversNeeded()
    },
      {time: '2:00 am',
       pizzaSold: getRandomIntInclusive(5,20),
       deliveryMade: getRandomIntInclusive(6,11),
       driversRecomend: generateDriversNeeded()
    },
  ]
};

function generateListForLocation(storeLocation) {
  var storeUL = document.getElementById(storeLocation.name);
  var hourLi;

  for(var i = 0; i < storeLocation.salesData.length; i++ ){
    hourLi = document.createElement('li');
    hourLi.textContent = storeLocation.salesData[i].time + ' ' + storeLocation.salesData[i].pizzaSold + ' pizzas, ' + storeLocation.salesData[i].deliveryMade + ' deliveries ' + '-- [ drivers recommended: ' + storeLocation.salesData[i].numDrivers + ' ]';
    storeUL.appendChild(hourLi);
  }
}

generateDriversNeeded(ballard);
generateListForLocation(ballard);
