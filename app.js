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

renderTableForLocation(ballard);
renderTableForLocation(ravenna);
renderTableForLocation(firstHill);
renderTableForLocation(theInternationalDistrict);
renderTableForLocation(georgetown);
renderTableForLocation(southLakeUnion);

function renderTableForLocation(userLocation){
  var userTable = document.createElement('table');
  userTable.setAttribute('id', userLocation.name);
  var firstRow = genorateHeadingRow(['Time', 'Pizzas Sold', 'Deliveries Made', 'Drivers Needed']);

  userTable.appendChild(firstRow);

  for(var i = 0; i < userLocation.salesData.length ; i++) {
    var fnCoolRow = genorateDataRow([userLocation.salesData[i].time, userLocation.salesData[i].pizzasSold,userLocation.salesData[i].deliveriesMade,userLocation.salesData[i].driversNeeded]);

    userTable.appendChild(fnCoolRow);
  };

  var userLocationSection = document.getElementById('user-store-locations');

  var userTableHeading = document.createElement('h1');
  userTableHeading.textContent = userLocation.name;
  userLocationSection.appendChild(userTableHeading);

  userLocationSection.appendChild(userTable);
}

function collectLocationData(event){
  event.preventDefault();

  var locationName = event.target.getLocation.value;
  var time = event.target.time.value;
  var minDeliveriesMade = parseInt(event.target.minDeliveriesMade.value);
  var maxDeliveriesMade = parseInt(event.target.maxDeliveriesMade.value);
  var minPizzasSold = parseInt(event.target.minPizzasSold.value);
  var maxPizzasSold = parseInt(event.target.maxPizzasSold.value);

  console.log('locationName', locationName);
  console.log('time', time);
  console.log('minDeliveriesMade', minDeliveriesMade);
  console.log('maxDeliveriesMade', maxDeliveriesMade);
  console.log('minPizzasSold', minPizzasSold);
  console.log('maxPizzasSold', maxPizzasSold);

  var userLocation = new PizzaLocation(locationName);
  var salesData = new SalesData(time, minPizzasSold, maxPizzasSold, minDeliveriesMade, maxDeliveriesMade);

  userLocation.pushSalesData(salesData);

  if (document.getElementById(locationName)){
    var fnCoolRow = genorateDataRow([salesData.time, salesData.pizzasSold, salesData.deliveriesMade, salesData.driversNeeded]);
    document.getElementById(locationName).appendChild(fnCoolRow);
  }
    else {
    renderTableForLocation(userLocation);
  }
  console.log('the user location is ', userLocation);

}

var createStoreLocationDataForm = document.getElementById('get-location-data-form');

createStoreLocationDataForm.addEventListener('submit', collectLocationData);
