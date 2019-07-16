// 0
function getNumbers(str) {
  let numbersFromString = [];

  for (let letter = 0; letter < str.length; letter++) {
    if (!isNaN(str[letter])) {
      numbersFromString.push(parseInt(str[letter]));
    }
  }
  return numbersFromString;
}

console.log(getNumbers("sj2hjk"));

// 1

function findTypes() {
  let result = {};
  for (let i = 0; i < arguments.length; i++) {
    let currentType = typeof arguments[i];
    if (result[currentType]) {
      result[currentType] = result[currentType] + 1;
    } else {
      result[currentType] = 1;
    }
  }
  return result;
}
console.log(findTypes("number"));

// 2
function executeForEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

// 3
function mapArray(array, funcall) {
  let arr = [];
  executeForEach(array, function(some) {
    let tempsome = funcall(some);
    arr.push(tempsome);
  });
  return arr;
}

// 4
function filterArray(array, funcall) {
  let arr = [];
  executeForEach(array, function(some) {
    if (funcall(some)) {
      arr.push(some);
    }
  });
  return arr;
}

// 5
function showFormattedDate(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  return `Date: ${
    months[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;
}
console.log(showFormattedDate(new Date("2019-01-27T01:10:00")));

//6
function canConvertToDate(checkDate) {
  let date = new Date(checkDate);
  return !isNaN(Date.parse(date));
}

// 7
function daysBetween(dateFirst, dateSecond) {
  const sec = 1000,
    min = 60,
    day = 1440;
  let result = Math.abs(dateFirst - dateSecond);
  result = result / (min * sec * day);
  return Math.round(result);
}
console.log(
  daysBetween(new Date("2016-03-18T00:00:00"), new Date("2016-04-19T00:00:00"))
);

// 8
function getAmountOfAdultPeople(array) {
  const DaysInYear = 365;
  const age = 18;
  let ageFunc = function(el) {
    return daysBetween(new Date(el.birthday), new Date()) / DaysInYear >= age;
  };
  return filterArray(array, ageFunc).length;
}

let data = [
  {
    _id: "5b5e3168c6bf40f2c1235cd6",
    index: 0,
    birthday: "2016-03-18T00:00:00",
    eyeColor: "green",
    name: "Stein",
    favoriteFruit: "apple"
  },
  {
    _id: "5b5e3168e328c0d72e4f27d8",
    index: 1,
    birthday: "1991-02-11T00:00:00",
    eyeColor: "blue",
    name: "Cortez",
    favoriteFruit: "strawberry"
  },
  {
    _id: "5b5e3168cc79132b631c666a",
    index: 2,
    birthday: "1984-04-17T00:00:00",
    eyeColor: "blue",
    name: "Suzette",
    favoriteFruit: "apple"
  },
  {
    _id: "5b5e31682093adcc6cd0dde5",
    index: 3,
    birthday: "1994-04-17T00:00:00",
    eyeColor: "green",
    name: "George",
    favoriteFruit: "banana"
  }
];

// 9
function keys(object) {
  const result = [];
  for (let obj in object) {
    if (object.hasOwnProperty(obj)) {
      result.push(obj);
    }
  }
  return result;
}

// 10
function values(object) {
  let arrValues = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      arrValues.push(object[key]);
    }
  }
  return arrValues;
}
