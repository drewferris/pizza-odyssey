function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var ballard = {
  name: 'ballard',
  salesData: [
      {time: '8:00 am',
       pizzaSold: getRandomIntInclusive(0,4),
       deliveryMade: getRandomIntInclusive(0,4)
    },
      {time: '9:00 am',
       pizzaSold: getRandomIntInclusive(0,4),
       deliveryMade: getRandomIntInclusive(0,4)
    },
      {time: '10:00 am',
       pizzaSold: getRandomIntInclusive(0,4),
       deliveryMade: getRandomIntInclusive(0,4)
    },
      {time: '11:00 am',
       pizzaSold: getRandomIntInclusive(0,7),
       deliveryMade: getRandomIntInclusive(0,4)
    },
  ]
};

function generateListForLocation(storeLocation) {
  var storeUL = document.getElementById(storeLocation.name);
  var hourLi;

  for(var i = 0; i < storeLocation.salesData.length; i++ ){
    hourLi = document.createElement('li');
    hourLi.textContent = storeLocation.salesData[i].time + ' ' + storeLocation.salesData[i].pizzaSold + ' pizzas, ' + storeLocation.salesData[i].deliveryMade + ' deliveries';
    storeUL.appendChild(hourLi);
  }
}
generateListForLocation(ballard);
