function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function PizzaLocation(name) {
  this.name = name;
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

var ballard = new PizzaLocation('ballard');

ballard.pushSalesData(new SalesData('8:00 am', 0, 3, 1, 7));
ballard.pushSalesData(new SalesData('9:00 am', 0, 3, 1, 7));
ballard.pushSalesData(new SalesData('10:00 am', 0, 3, 1, 7));
ballard.pushSalesData(new SalesData('11:00 am', 5, 10, 2, 8));
ballard.pushSalesData(new SalesData('12:00 am', 5, 10, 2, 8));
ballard.pushSalesData(new SalesData('1:00 pm', 5, 10, 2, 8));
ballard.pushSalesData(new SalesData('2:00 pm', 2, 13, 1, 7));
ballard.pushSalesData(new SalesData('3:00 pm', 2, 13, 1, 7));
ballard.pushSalesData(new SalesData('4:00 pm', 2, 13, 1, 7));
ballard.pushSalesData(new SalesData('5:00 pm', 0, 15, 2, 9));
ballard.pushSalesData(new SalesData('6:00 pm', 0, 15, 2, 9));
ballard.pushSalesData(new SalesData('7:00 pm', 0, 15, 2, 9));
ballard.pushSalesData(new SalesData('8:00 pm', 1, 3, 4, 12));
ballard.pushSalesData(new SalesData('9:00 pm', 1, 3, 4, 12));
ballard.pushSalesData(new SalesData('10:00 pm', 1, 3, 4, 12));
ballard.pushSalesData(new SalesData('11:00 pm', 8, 15, 6, 16));
ballard.pushSalesData(new SalesData('12:00 pm', 8, 15, 6, 16));
ballard.pushSalesData(new SalesData('1:00 am', 8, 15, 6, 16));

var firstHill = new PizzaLocation('firstHill');

firstHill.pushSalesData(new SalesData('8:00 am', 1, 3, 1, 7));
firstHill.pushSalesData(new SalesData('9:00 am', 1, 3, 1, 7));
firstHill.pushSalesData(new SalesData('10:00 am', 1, 3, 1, 7));
firstHill.pushSalesData(new SalesData('11:00 am', 5, 9, 2, 8));
firstHill.pushSalesData(new SalesData('12:00 am', 5, 9, 2, 8));
firstHill.pushSalesData(new SalesData('1:00 pm', 5, 9, 2, 8));
firstHill.pushSalesData(new SalesData('2:00 pm', 2, 13, 1, 6));
firstHill.pushSalesData(new SalesData('3:00 pm', 2, 13, 1, 6));
firstHill.pushSalesData(new SalesData('4:00 pm', 2, 13, 1, 6));
firstHill.pushSalesData(new SalesData('5:00 pm', 18, 32, 3, 9));
firstHill.pushSalesData(new SalesData('6:00 pm', 18, 32, 3, 9));
firstHill.pushSalesData(new SalesData('7:00 pm', 18, 32, 3, 9));
firstHill.pushSalesData(new SalesData('8:00 pm', 1, 3, 5, 12));
firstHill.pushSalesData(new SalesData('9:00 pm', 1, 3, 5, 12));
firstHill.pushSalesData(new SalesData('10:00 pm', 1, 3, 5, 12));
firstHill.pushSalesData(new SalesData('11:00 pm', 8, 20, 6, 16));
firstHill.pushSalesData(new SalesData('12:00 pm', 8, 20, 6, 16));
firstHill.pushSalesData(new SalesData('1:00 am', 8, 20, 6, 16));

var theInternationalDistrict = new PizzaLocation('theInternationalDistrict');

theInternationalDistrict.pushSalesData(new SalesData('8:00 am', 0, 4, 0, 4));
theInternationalDistrict.pushSalesData(new SalesData('9:00 am', 0, 4, 0, 4));
theInternationalDistrict.pushSalesData(new SalesData('10:00 am', 0, 4, 0, 4));
theInternationalDistrict.pushSalesData(new SalesData('11:00 am', 0, 7, 0, 4));
theInternationalDistrict.pushSalesData(new SalesData('12:00 am', 0, 7, 0, 4));
theInternationalDistrict.pushSalesData(new SalesData('1:00 pm', 0, 7, 0, 4));
theInternationalDistrict.pushSalesData(new SalesData('2:00 pm', 2, 15, 1, 4));
theInternationalDistrict.pushSalesData(new SalesData('3:00 pm', 2, 15, 1, 4));
theInternationalDistrict.pushSalesData(new SalesData('4:00 pm', 2, 15, 1, 4));
theInternationalDistrict.pushSalesData(new SalesData('5:00 pm', 10, 26, 4, 6));
theInternationalDistrict.pushSalesData(new SalesData('6:00 pm', 10, 26, 4, 6));
theInternationalDistrict.pushSalesData(new SalesData('7:00 pm', 10, 26, 4, 6));
theInternationalDistrict.pushSalesData(new SalesData('8:00 pm', 8, 22, 7, 15));
theInternationalDistrict.pushSalesData(new SalesData('9:00 pm', 8, 22, 7, 15));
theInternationalDistrict.pushSalesData(new SalesData('10:00 pm', 8, 22, 7, 15));
theInternationalDistrict.pushSalesData(new SalesData('11:00 pm', 0, 2, 2, 8));
theInternationalDistrict.pushSalesData(new SalesData('12:00 pm', 0, 2, 2, 8));
theInternationalDistrict.pushSalesData(new SalesData('1:00 am', 0, 2, 2, 8));

var southLakeUnion = new PizzaLocation('southLakeUnion');

southLakeUnion.pushSalesData(new SalesData('8:00 am', 0, 4, 0, 4));
southLakeUnion.pushSalesData(new SalesData('9:00 am', 0, 4, 0, 4));
southLakeUnion.pushSalesData(new SalesData('10:00 am', 0, 4, 0, 4));
southLakeUnion.pushSalesData(new SalesData('11:00 am', 0, 7, 0, 4));
southLakeUnion.pushSalesData(new SalesData('12:00 am', 0, 7, 0, 4));
southLakeUnion.pushSalesData(new SalesData('1:00 pm', 0, 7, 0, 4));
southLakeUnion.pushSalesData(new SalesData('2:00 pm', 2, 15, 1, 4));
southLakeUnion.pushSalesData(new SalesData('3:00 pm', 2, 15, 1, 4));
southLakeUnion.pushSalesData(new SalesData('4:00 pm', 2, 15, 1, 4));
southLakeUnion.pushSalesData(new SalesData('5:00 pm', 10, 26, 4, 6));
southLakeUnion.pushSalesData(new SalesData('6:00 pm', 10, 26, 4, 6));
southLakeUnion.pushSalesData(new SalesData('7:00 pm', 10, 26, 4, 6));
southLakeUnion.pushSalesData(new SalesData('8:00 pm', 8, 22, 7, 15));
southLakeUnion.pushSalesData(new SalesData('9:00 pm', 8, 22, 7, 15));
southLakeUnion.pushSalesData(new SalesData('10:00 pm', 8, 22, 7, 15));
southLakeUnion.pushSalesData(new SalesData('11:00 pm', 0, 2, 2, 8));
southLakeUnion.pushSalesData(new SalesData('12:00 pm', 0, 2, 2, 8));
southLakeUnion.pushSalesData(new SalesData('1:00 am', 0, 2, 2, 8));

var georgetown = new PizzaLocation('georgetown');

georgetown.pushSalesData(new SalesData('8:00 am', 2, 7, 3, 5));
georgetown.pushSalesData(new SalesData('9:00 am', 2, 7, 3, 5));
georgetown.pushSalesData(new SalesData('10:00 am', 2, 7, 3, 5));
georgetown.pushSalesData(new SalesData('11:00 am', 3, 8, 3, 9));
georgetown.pushSalesData(new SalesData('12:00 am', 3, 8, 3, 9));
georgetown.pushSalesData(new SalesData('1:00 pm', 3, 8, 3, 9));
georgetown.pushSalesData(new SalesData('2:00 pm', 1, 5, 1, 4));
georgetown.pushSalesData(new SalesData('3:00 pm', 1, 5, 1, 4));
georgetown.pushSalesData(new SalesData('4:00 pm', 1, 5, 1, 4));
georgetown.pushSalesData(new SalesData('5:00 pm', 5, 13, 2, 4));
georgetown.pushSalesData(new SalesData('6:00 pm', 5, 13, 2, 4));
georgetown.pushSalesData(new SalesData('7:00 pm', 5, 13, 2, 4));
georgetown.pushSalesData(new SalesData('8:00 pm', 22, 41, 15, 42));
georgetown.pushSalesData(new SalesData('9:00 pm', 22, 41, 15, 42));
georgetown.pushSalesData(new SalesData('10:00 pm', 22, 41, 15, 42));
georgetown.pushSalesData(new SalesData('11:00 pm', 15, 20, 6, 21));
georgetown.pushSalesData(new SalesData('12:00 pm', 15, 20, 6, 21));
georgetown.pushSalesData(new SalesData('1:00 am', 15, 20, 6, 21));

var ravenna = new PizzaLocation('ravenna');

ravenna.pushSalesData(new SalesData('8:00 am', 2, 7, 3, 5));
ravenna.pushSalesData(new SalesData('9:00 am', 2, 7, 3, 5));
ravenna.pushSalesData(new SalesData('10:00 am', 2, 7, 3, 5));
ravenna.pushSalesData(new SalesData('11:00 am', 3, 8, 3, 9));
ravenna.pushSalesData(new SalesData('12:00 am', 3, 8, 3, 9));
ravenna.pushSalesData(new SalesData('1:00 pm', 3, 8, 3, 9));
ravenna.pushSalesData(new SalesData('2:00 pm', 1, 5, 1, 4));
ravenna.pushSalesData(new SalesData('3:00 pm', 1, 5, 1, 4));
ravenna.pushSalesData(new SalesData('4:00 pm', 1, 5, 1, 4));
ravenna.pushSalesData(new SalesData('5:00 pm', 5, 13, 2, 4));
ravenna.pushSalesData(new SalesData('6:00 pm', 5, 13, 2, 4));
ravenna.pushSalesData(new SalesData('7:00 pm', 5, 13, 2, 4));
ravenna.pushSalesData(new SalesData('8:00 pm', 22, 41, 15, 42));
ravenna.pushSalesData(new SalesData('9:00 pm', 22, 41, 15, 42));
ravenna.pushSalesData(new SalesData('10:00 pm', 22, 41, 15, 42));
ravenna.pushSalesData(new SalesData('11:00 pm', 15, 20, 6, 21));
ravenna.pushSalesData(new SalesData('12:00 pm', 15, 20, 6, 21));
ravenna.pushSalesData(new SalesData('1:00 am', 15, 20, 6, 21));

function genorateDataRow(rowArray) {
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < rowArray.length; i++) {
    col = document.createElement ('td');
    col.textContent = rowArray[i];
    row.appendChild(col);

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

  }
  return row;
}

var ballardTable = document.getElementById('ballard');

var firstRow = genorateHeadingRow(['Time', 'Pizzas Sold', 'Deliveries Made', 'Drivers Needed']);

ballardTable.appendChild(firstRow);

for(var i = 0; i < ballard.salesData.length ; i++) {
  var fnCoolRow = genorateDataRow([ballard.salesData[i].time, ballard.salesData[i].pizzasSold, ballard.salesData[i].deliveriesMade, ballard.salesData[i].driversNeeded]);

  ballardTable.appendChild(fnCoolRow);
};

var firstHillTable = document.getElementById('firstHill');

var firstRow = genorateHeadingRow(['Time', 'Pizzas Sold', 'Deliveries Made', 'Drivers Needed']);

firstHillTable.appendChild(firstRow);

for(var i = 0; i < firstHill.salesData.length ; i++) {
  var fnCoolRow = genorateDataRow([firstHill.salesData[i].time, firstHill.salesData[i].pizzasSold, firstHill.salesData[i].deliveriesMade, firstHill.salesData[i].driversNeeded]);

  firstHillTable.appendChild(fnCoolRow);
};

var theInternationalDistrictTable = document.getElementById('theInternationalDistrict');

var firstRow = genorateHeadingRow(['Time', 'Pizzas Sold', 'Deliveries Made', 'Drivers Needed']);

theInternationalDistrictTable.appendChild(firstRow);

for(var i = 0; i < theInternationalDistrict.salesData.length ; i++) {
  var fnCoolRow = genorateDataRow([theInternationalDistrict.salesData[i].time, theInternationalDistrict.salesData[i].pizzasSold, theInternationalDistrict.salesData[i].deliveriesMade, theInternationalDistrict.salesData[i].driversNeeded]);

  theInternationalDistrictTable.appendChild(fnCoolRow);
};

var southLakeUnionTable = document.getElementById('southLakeUnion');

var firstRow = genorateHeadingRow(['Time', 'Pizzas Sold', 'Deliveries Made', 'Drivers Needed']);

southLakeUnionTable.appendChild(firstRow);

for(var i = 0; i < southLakeUnion.salesData.length ; i++) {
  var fnCoolRow = genorateDataRow([southLakeUnion.salesData[i].time, southLakeUnion.salesData[i].pizzasSold,southLakeUnion.salesData[i].deliveriesMade,southLakeUnion.salesData[i].driversNeeded]);

  southLakeUnionTable.appendChild(fnCoolRow);
};

var georgetownTable = document.getElementById('georgetown');

var firstRow = genorateHeadingRow(['Time', 'Pizzas Sold', 'Deliveries Made', 'Drivers Needed']);

georgetownTable.appendChild(firstRow);

for(var i = 0; i < georgetown.salesData.length ; i++) {
  var fnCoolRow = genorateDataRow([georgetown.salesData[i].time, georgetown.salesData[i].pizzasSold,georgetown.salesData[i].deliveriesMade,georgetown.salesData[i].driversNeeded]);

  georgetownTable.appendChild(fnCoolRow);
};

var ravennaTable = document.getElementById('ravenna');

var firstRow = genorateHeadingRow(['Time', 'Pizzas Sold', 'Deliveries Made', 'Drivers Needed']);

ravennaTable.appendChild(firstRow);

for(var i = 0; i < ravenna.salesData.length ; i++) {
  var fnCoolRow = genorateDataRow([ravenna.salesData[i].time, ravenna.salesData[i].pizzasSold,ravenna.salesData[i].deliveriesMade,ravenna.salesData[i].driversNeeded]);

  ravennaTable.appendChild(fnCoolRow);
};

function collectLocationData(event){
  event.preventDefault();

  var userStoreLocations = document.getElementById('user-store-locations');
  var getLocationData = document.createElement('table');

  var getLocationTitle = document.createElement('h1');
  var getLocation = event.target.getLocation.value;
  getLocationTitle.textContent = getLocation;

  var dataTime = event.target.dataTime.value;
  console.log('dataTime', dataTime);

  var minnPizzasSold = parseInt(event.target.minnPizzasSold.value);
  console.log('minnPizzasSold', minnPizzasSold);

  var maxxPizzasSold = parseInt(event.target.maxxPizzasSold.value);

  var hourlyPizzaSales = getRandomIntInclusive(minnPizzasSold, maxxPizzasSold);

  var minnDeliveriesMade = parseInt(event.target.minnDeliveriesMade.value);

  var maxxDeliveriesMade = parseInt(event.target.maxxDeliveriesMade.value);

  var hourlyDeliveriesMade = getRandomIntInclusive(minnDeliveriesMade, maxxDeliveriesMade);

  var hourlyDriversNeeded = Math.ceil(hourlyDeliveriesMade / 3);

  var dataTimeRow = document.createElement('tr');

  var dataTimeColumn = document.createElement('td');
  dataTimeColumn.textContent = dataTime;
  dataTimeRow.appendChild(dataTimeColumn);

  var hourlyPizzaSalesColumn = document.createElement('td');
  hourlyPizzaSalesColumn.textContent = hourlyPizzaSales;
  dataTimeRow.appendChild(hourlyPizzaSalesColumn);

  var hourlyDeliveriesMadeColumn = document.createElement('td');
  hourlyDeliveriesMadeColumn.textContent = hourlyDeliveriesMade;
  dataTimeRow.appendChild(hourlyDeliveriesMadeColumn);

  var hourlyDriversNeededColumn = document.createElement('td');
  hourlyDriversNeededColumn.textContent = hourlyDriversNeeded;
  dataTimeRow.appendChild(hourlyDriversNeededColumn);

  getLocationData.appendChild(dataTimeRow);

  userStoreLocations.appendChild(getLocationTitle);
  userStoreLocations.appendChild(getLocationData);
}

var createStoreLocationDataForm = document.getElementById('get-location-data-form');

createStoreLocationDataForm.addEventListener('submit', collectLocationData);
