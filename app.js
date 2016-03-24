function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function PizzaLocation(name) {
  this.name = name;
  this.allSalesData = [];
  this.salesData = [];
}

PizzaLocation.prototype.pushSalesData = function(data){
  this.salesData.push(data);
};

function SalesData(time, minPizzasSold, maxPizzasSold, minDeliveriesMade, maxDeliveriesMade) {
  this.time = time;
  this.pizzasSold = getRandomIntInclusive(minPizzasSold, maxPizzasSold);
  this.deliveriesMade = getRandomIntInclusive(minDeliveriesMade, maxDeliveriesMade);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
}

function AllSalesData(salesData) {
  this.allSalesData = [];
}

PizzaLocation.prototype.pushAllSalesData = function(totalData){
  this.allSalesData.push(totalData);
};

var ballard = new PizzaLocation('ballard');
ballard.pushSalesData(new SalesData('8:00 am', 0, 3, 1, 7));
ballard.pushSalesData(new SalesData('9:00 am', 0, 3, 1, 7));
ballard.pushSalesData(new SalesData('10:00 am', 0, 3, 1, 7));

function genorateDataRow(rowArray) {
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < rowArray.length; i++) {
    col = document.createElement ('td');
    col.textContent = rowArray[i];
    row.appendChild(col);
    document.getElementById('ballard').appendChild(row);
  }
  return row;
}

function genorateHeadingRow(headingArray) {
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < headingArray.length; i++) {
    col = document.createElement('th');
    col.textContent = headingArray[i];
    row.appendChild(col);
    document.getElementById('ballard').appendChild(row);
  }
  return row;
}
for(var i = 0; i < ballard.allSalesData.length; i++){
  eachData = ballard.allSalesData[i];

  for(var i = 0; i < ballard.salesData.length ; i++) {
    hourData = ballard.salesData[i];
    rowStringArray = [hourData.time, hourData.pizzasSold, hourData.deliveriesMade, hourData.driversNeeded];
  }
}

var ballardTable = document.createElement('table');

var firstRow = genorateHeadingRow(['Time', 'Pizzas Sold', 'Deliveries Made', 'Drivers Needed']);
var secondRow = genorateDataRow(rowStringArray);
var thirdRow = genorateDataRow(rowStringArray);
var fourthRow = genorateDataRow(rowStringArray);

// function driversNeeded(deliveryMade) {
//   return Math.ceil(deliveryMade / 3);
// }
//
// function generateDriversNeeded(storeLocation){
//   var storeData = storeLocation.salesData;
//   for (var i = 0; i < storeData.length; i++){
//     storeData[i].driversRecomend = driversNeeded(storeData[i].deliveryMade);
//   }
// }

// function displayTotalPizzaSold(storeLocation){
//   var totalPizzasSold = 0 ;
//   for(var i = 0; i < storeLocation.salesData.length; i++){
//     totalPizzasSold += storeLocation.salesData[i].pizzaSold;
//   }
//   var storeTotalHeading = document.getElementById(storeLocation.name + '-total');
//   if(storeTotalHeading){
//     storeTotalHeading.textContent = storeLocation.name + ' sold ' + totalPizzasSold + ' pizzas.';
//   }
// }

// var ballard = {
//   name: 'ballard',
//   salesData: [
//     {time: '8:00 am',
//      pizzaSold: getRandomIntInclusive(0,4),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '9:00 am',
//      pizzaSold: getRandomIntInclusive(0,4),
//      deliveryMade: getRandomIntInclusive(0,4),
//    },
//     {time: '10:00 am',
//      pizzaSold: getRandomIntInclusive(0,4),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '11:00 am',
//      pizzaSold: getRandomIntInclusive(0,7),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '12:00 pm',
//      pizzaSold: getRandomIntInclusive(0,7),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '1:00 pm',
//      pizzaSold: getRandomIntInclusive(0,7),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '2:00 pm',
//      pizzaSold: getRandomIntInclusive(2,15),
//      deliveryMade: getRandomIntInclusive(1,4),
//     },
//     {time: '3:00 pm',
//      pizzaSold: getRandomIntInclusive(2,15),
//      deliveryMade: getRandomIntInclusive(1,4),
//     },
//     {time: '4:00 pm',
//      pizzaSold: getRandomIntInclusive(2,15),
//      deliveryMade: getRandomIntInclusive(1,4),
//     },
//     {time: '5:00 pm',
//      pizzaSold: getRandomIntInclusive(15,35),
//      deliveryMade: getRandomIntInclusive(3,8),
//     },
//     {time: '6:00 pm',
//      pizzaSold: getRandomIntInclusive(15,35),
//      deliveryMade: getRandomIntInclusive(3,8),
//     },
//     {time: '7:00 pm',
//      pizzaSold: getRandomIntInclusive(15,35),
//      deliveryMade: getRandomIntInclusive(3,8),
//     },
//     {time: '8:00 pm',
//      pizzaSold: getRandomIntInclusive(12,31),
//      deliveryMade: getRandomIntInclusive(5,12),
//     },
//     {time: '9:00 pm',
//      pizzaSold: getRandomIntInclusive(12,31),
//      deliveryMade: getRandomIntInclusive(5,12),
//     },
//     {time: '10:00 pm',
//      pizzaSold: getRandomIntInclusive(12,31),
//      deliveryMade: getRandomIntInclusive(5,12),
//     },
//     {time: '11:00 pm',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     },
//     {time: '12:00 am',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     },
//     {time: '1:00 am',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     },
//     {time: '2:00 am',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     }
//   ]
// };
//
// var firstHill = {
//   name: 'firstHill',
//   salesData: [
//     {time: '8:00 am',
//      pizzaSold: getRandomIntInclusive(0,4),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '9:00 am',
//      pizzaSold: getRandomIntInclusive(0,4),
//      deliveryMade: getRandomIntInclusive(0,4),
//    },
//     {time: '10:00 am',
//      pizzaSold: getRandomIntInclusive(0,4),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '11:00 am',
//      pizzaSold: getRandomIntInclusive(0,7),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '12:00 pm',
//      pizzaSold: getRandomIntInclusive(0,7),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '1:00 pm',
//      pizzaSold: getRandomIntInclusive(0,7),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '2:00 pm',
//      pizzaSold: getRandomIntInclusive(2,15),
//      deliveryMade: getRandomIntInclusive(1,4),
//     },
//     {time: '3:00 pm',
//      pizzaSold: getRandomIntInclusive(2,15),
//      deliveryMade: getRandomIntInclusive(1,4),
//     },
//     {time: '4:00 pm',
//      pizzaSold: getRandomIntInclusive(2,15),
//      deliveryMade: getRandomIntInclusive(1,4),
//     },
//     {time: '5:00 pm',
//      pizzaSold: getRandomIntInclusive(15,35),
//      deliveryMade: getRandomIntInclusive(3,8),
//     },
//     {time: '6:00 pm',
//      pizzaSold: getRandomIntInclusive(15,35),
//      deliveryMade: getRandomIntInclusive(3,8),
//     },
//     {time: '7:00 pm',
//      pizzaSold: getRandomIntInclusive(15,35),
//      deliveryMade: getRandomIntInclusive(3,8),
//     },
//     {time: '8:00 pm',
//      pizzaSold: getRandomIntInclusive(12,31),
//      deliveryMade: getRandomIntInclusive(5,12),
//     },
//     {time: '9:00 pm',
//      pizzaSold: getRandomIntInclusive(12,31),
//      deliveryMade: getRandomIntInclusive(5,12),
//     },
//     {time: '10:00 pm',
//      pizzaSold: getRandomIntInclusive(12,31),
//      deliveryMade: getRandomIntInclusive(5,12),
//     },
//     {time: '11:00 pm',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     },
//     {time: '12:00 am',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     },
//     {time: '1:00 am',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     },
//     {time: '2:00 am',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     }
//   ]
// };
//
// var theInternationalDistrict = {
//   name: 'theInternationalDistrict',
//   salesData: [
//     {time: '8:00 am',
//      pizzaSold: getRandomIntInclusive(0,4),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '9:00 am',
//      pizzaSold: getRandomIntInclusive(0,4),
//      deliveryMade: getRandomIntInclusive(0,4),
//    },
//     {time: '10:00 am',
//      pizzaSold: getRandomIntInclusive(0,4),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '11:00 am',
//      pizzaSold: getRandomIntInclusive(0,7),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '12:00 pm',
//      pizzaSold: getRandomIntInclusive(0,7),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '1:00 pm',
//      pizzaSold: getRandomIntInclusive(0,7),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '2:00 pm',
//      pizzaSold: getRandomIntInclusive(2,15),
//      deliveryMade: getRandomIntInclusive(1,4),
//     },
//     {time: '3:00 pm',
//      pizzaSold: getRandomIntInclusive(2,15),
//      deliveryMade: getRandomIntInclusive(1,4),
//     },
//     {time: '4:00 pm',
//      pizzaSold: getRandomIntInclusive(2,15),
//      deliveryMade: getRandomIntInclusive(1,4),
//     },
//     {time: '5:00 pm',
//      pizzaSold: getRandomIntInclusive(15,35),
//      deliveryMade: getRandomIntInclusive(3,8),
//     },
//     {time: '6:00 pm',
//      pizzaSold: getRandomIntInclusive(15,35),
//      deliveryMade: getRandomIntInclusive(3,8),
//     },
//     {time: '7:00 pm',
//      pizzaSold: getRandomIntInclusive(15,35),
//      deliveryMade: getRandomIntInclusive(3,8),
//     },
//     {time: '8:00 pm',
//      pizzaSold: getRandomIntInclusive(12,31),
//      deliveryMade: getRandomIntInclusive(5,12),
//     },
//     {time: '9:00 pm',
//      pizzaSold: getRandomIntInclusive(12,31),
//      deliveryMade: getRandomIntInclusive(5,12),
//     },
//     {time: '10:00 pm',
//      pizzaSold: getRandomIntInclusive(12,31),
//      deliveryMade: getRandomIntInclusive(5,12),
//     },
//     {time: '11:00 pm',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     },
//     {time: '12:00 am',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     },
//     {time: '1:00 am',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     },
//     {time: '2:00 am',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     }
//   ]
// };
//
// var southLakeUnion = {
//   name: 'southLakeUnion',
//   salesData: [
//     {time: '8:00 am',
//      pizzaSold: getRandomIntInclusive(0,4),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '9:00 am',
//      pizzaSold: getRandomIntInclusive(0,4),
//      deliveryMade: getRandomIntInclusive(0,4),
//    },
//     {time: '10:00 am',
//      pizzaSold: getRandomIntInclusive(0,4),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '11:00 am',
//      pizzaSold: getRandomIntInclusive(0,7),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '12:00 pm',
//      pizzaSold: getRandomIntInclusive(0,7),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '1:00 pm',
//      pizzaSold: getRandomIntInclusive(0,7),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '2:00 pm',
//      pizzaSold: getRandomIntInclusive(2,15),
//      deliveryMade: getRandomIntInclusive(1,4),
//     },
//     {time: '3:00 pm',
//      pizzaSold: getRandomIntInclusive(2,15),
//      deliveryMade: getRandomIntInclusive(1,4),
//     },
//     {time: '4:00 pm',
//      pizzaSold: getRandomIntInclusive(2,15),
//      deliveryMade: getRandomIntInclusive(1,4),
//     },
//     {time: '5:00 pm',
//      pizzaSold: getRandomIntInclusive(15,35),
//      deliveryMade: getRandomIntInclusive(3,8),
//     },
//     {time: '6:00 pm',
//      pizzaSold: getRandomIntInclusive(15,35),
//      deliveryMade: getRandomIntInclusive(3,8),
//     },
//     {time: '7:00 pm',
//      pizzaSold: getRandomIntInclusive(15,35),
//      deliveryMade: getRandomIntInclusive(3,8),
//     },
//     {time: '8:00 pm',
//      pizzaSold: getRandomIntInclusive(12,31),
//      deliveryMade: getRandomIntInclusive(5,12),
//     },
//     {time: '9:00 pm',
//      pizzaSold: getRandomIntInclusive(12,31),
//      deliveryMade: getRandomIntInclusive(5,12),
//     },
//     {time: '10:00 pm',
//      pizzaSold: getRandomIntInclusive(12,31),
//      deliveryMade: getRandomIntInclusive(5,12),
//     },
//     {time: '11:00 pm',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     },
//     {time: '12:00 am',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     },
//     {time: '1:00 am',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     },
//     {time: '2:00 am',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     }
//   ]
// };
//
// var georgetown = {
//   name: 'georgetown',
//   salesData: [
//     {time: '8:00 am',
//      pizzaSold: getRandomIntInclusive(0,4),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '9:00 am',
//      pizzaSold: getRandomIntInclusive(0,4),
//      deliveryMade: getRandomIntInclusive(0,4),
//    },
//     {time: '10:00 am',
//      pizzaSold: getRandomIntInclusive(0,4),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '11:00 am',
//      pizzaSold: getRandomIntInclusive(0,7),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '12:00 pm',
//      pizzaSold: getRandomIntInclusive(0,7),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '1:00 pm',
//      pizzaSold: getRandomIntInclusive(0,7),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '2:00 pm',
//      pizzaSold: getRandomIntInclusive(2,15),
//      deliveryMade: getRandomIntInclusive(1,4),
//     },
//     {time: '3:00 pm',
//      pizzaSold: getRandomIntInclusive(2,15),
//      deliveryMade: getRandomIntInclusive(1,4),
//     },
//     {time: '4:00 pm',
//      pizzaSold: getRandomIntInclusive(2,15),
//      deliveryMade: getRandomIntInclusive(1,4),
//     },
//     {time: '5:00 pm',
//      pizzaSold: getRandomIntInclusive(15,35),
//      deliveryMade: getRandomIntInclusive(3,8),
//     },
//     {time: '6:00 pm',
//      pizzaSold: getRandomIntInclusive(15,35),
//      deliveryMade: getRandomIntInclusive(3,8),
//     },
//     {time: '7:00 pm',
//      pizzaSold: getRandomIntInclusive(15,35),
//      deliveryMade: getRandomIntInclusive(3,8),
//     },
//     {time: '8:00 pm',
//      pizzaSold: getRandomIntInclusive(12,31),
//      deliveryMade: getRandomIntInclusive(5,12),
//     },
//     {time: '9:00 pm',
//      pizzaSold: getRandomIntInclusive(12,31),
//      deliveryMade: getRandomIntInclusive(5,12),
//     },
//     {time: '10:00 pm',
//      pizzaSold: getRandomIntInclusive(12,31),
//      deliveryMade: getRandomIntInclusive(5,12),
//     },
//     {time: '11:00 pm',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     },
//     {time: '12:00 am',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     },
//     {time: '1:00 am',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     },
//     {time: '2:00 am',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     }
//   ]
// };
//
// var ravenna = {
//   name: 'ravenna',
//   salesData: [
//     {time: '8:00 am',
//      pizzaSold: getRandomIntInclusive(0,4),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '9:00 am',
//      pizzaSold: getRandomIntInclusive(0,4),
//      deliveryMade: getRandomIntInclusive(0,4),
//    },
//     {time: '10:00 am',
//      pizzaSold: getRandomIntInclusive(0,4),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '11:00 am',
//      pizzaSold: getRandomIntInclusive(0,7),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '12:00 pm',
//      pizzaSold: getRandomIntInclusive(0,7),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '1:00 pm',
//      pizzaSold: getRandomIntInclusive(0,7),
//      deliveryMade: getRandomIntInclusive(0,4),
//     },
//     {time: '2:00 pm',
//      pizzaSold: getRandomIntInclusive(2,15),
//      deliveryMade: getRandomIntInclusive(1,4),
//     },
//     {time: '3:00 pm',
//      pizzaSold: getRandomIntInclusive(2,15),
//      deliveryMade: getRandomIntInclusive(1,4),
//     },
//     {time: '4:00 pm',
//      pizzaSold: getRandomIntInclusive(2,15),
//      deliveryMade: getRandomIntInclusive(1,4),
//     },
//     {time: '5:00 pm',
//      pizzaSold: getRandomIntInclusive(15,35),
//      deliveryMade: getRandomIntInclusive(3,8),
//     },
//     {time: '6:00 pm',
//      pizzaSold: getRandomIntInclusive(15,35),
//      deliveryMade: getRandomIntInclusive(3,8),
//     },
//     {time: '7:00 pm',
//      pizzaSold: getRandomIntInclusive(15,35),
//      deliveryMade: getRandomIntInclusive(3,8),
//     },
//     {time: '8:00 pm',
//      pizzaSold: getRandomIntInclusive(12,31),
//      deliveryMade: getRandomIntInclusive(5,12),
//     },
//     {time: '9:00 pm',
//      pizzaSold: getRandomIntInclusive(12,31),
//      deliveryMade: getRandomIntInclusive(5,12),
//     },
//     {time: '10:00 pm',
//      pizzaSold: getRandomIntInclusive(12,31),
//      deliveryMade: getRandomIntInclusive(5,12),
//     },
//     {time: '11:00 pm',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     },
//     {time: '12:00 am',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     },
//     {time: '1:00 am',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     },
//     {time: '2:00 am',
//      pizzaSold: getRandomIntInclusive(5,20),
//      deliveryMade: getRandomIntInclusive(6,11),
//     }
//   ]
// };
//
// function generateListForLocation(storeLocation) {
//   var storeUL = document.getElementById(storeLocation.name);
//   var hourLi;
//
//   for(var i = 0; i < storeLocation.salesData.length; i++ ){
//     hourLi = document.createElement('li');
//     hourLi.textContent = storeLocation.salesData[i].time + ' ' + storeLocation.salesData[i].pizzaSold + ' pizzas, ' + storeLocation.salesData[i].deliveryMade + ' deliveries ' + '-- [ drivers recommended: ' + storeLocation.salesData[i].driversRecomend + ' ]';
//     storeUL.appendChild(hourLi);
//   }
// }

// generateDriversNeeded(ballard);
// generateListForLocation(ballard);

// generateDriversNeeded(firstHill);
// generateListForLocation(firstHill);
//
// generateDriversNeeded(theInternationalDistrict);
// generateListForLocation(theInternationalDistrict);
//
// generateDriversNeeded(southLakeUnion);
// generateListForLocation(southLakeUnion);
//
// generateDriversNeeded(georgetown);
// generateListForLocation(georgetown);
//
// generateDriversNeeded(ravenna);
// generateListForLocation(ravenna);
