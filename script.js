"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data

// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: "Jessica Davis",
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: "Steven Thomas Williams",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: "Sarah Smith",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    // '2019-11-18T21:31:17.178Z',
    // '2019-12-23T07:42:02.383Z',
    // '2020-01-28T09:15:04.904Z',
    // '2020-04-01T10:17:24.185Z',
    // '2020-05-08T14:11:59.604Z',
    // '2023-10-22T17:01:17.194Z',
    // '2023-10-23T23:36:17.929Z',
    // '2023-10-25T10:51:36.790Z',

    "2023-11-09T02:08:01.923Z",
    "2023-11-09T20:26:52.995Z",
    "2023-11-13T16:47:06.218Z",
    "2023-11-13T03:53:06.322Z",
    "2023-11-11T10:22:35.553Z",
    "2023-11-10T02:42:01.734Z",
    "2023-11-10T00:55:54.519Z",
    "2023-11-12T14:35:29.303Z",
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    // '2019-11-01T13:15:33.035Z',
    // '2019-11-30T09:48:16.867Z',
    // '2019-12-25T06:04:23.907Z',
    // '2020-01-25T14:18:46.235Z',
    // '2020-02-05T16:33:06.386Z',
    // '2020-04-10T14:43:26.374Z',
    // '2020-06-25T18:49:59.371Z',
    // '2020-07-26T12:01:20.894Z',

    "2023-11-12T14:22:14.852Z",
    "2023-11-12T08:15:17.907Z",
    "2023-11-12T10:01:27.011Z",
    "2023-11-11T20:03:51.529Z",
    "2023-11-13T01:27:52.876Z",
    "2023-11-13T09:39:48.303Z",
    "2023-11-14T00:43:03.184Z",
    "2023-11-13T17:06:07.004Z",
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Emma Thompson',
  movements: [-500, 340, -125, -700, -3210, -1000, 850, -30],
  interestRate: 1.8,
  pin: 3333,

  movementsDates: [
    "2023-11-09T02:08:01.923Z",
    "2023-11-09T20:26:52.995Z",
    "2023-11-13T16:47:06.218Z",
    "2023-11-13T03:53:06.322Z",
    "2023-11-11T10:22:35.553Z",
    "2023-11-10T02:42:01.734Z",
    "2023-11-10T00:55:54.519Z",
    "2023-11-12T14:35:29.303Z",
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account4 = {
  owner: 'Sophie Wilson',
  movements: [4000, 750, -300, -450, -900, -1200, 800, -300],
  interestRate: 1.5,
  pin: 4444,

  movementsDates: [
    "2023-11-09T02:08:01.923Z",
    "2023-11-09T20:26:52.995Z",
    "2023-11-13T16:47:06.218Z",
    "2023-11-13T03:53:06.322Z",
    "2023-11-11T10:22:35.553Z",
    "2023-11-10T02:42:01.734Z",
    "2023-11-10T00:55:54.519Z",
    "2023-11-12T14:35:29.303Z",
  ],
  currency: 'GBP',
  locale: 'en-GB',
};

const account5 = {
  owner: 'Luis Hernandez',
  movements: [10000, 1200, -500, -300, -900, -2000, 1500, -700],
  interestRate: 2.0,
  pin: 5555,

  movementsDates: [
    "2023-11-09T02:08:01.923Z",
    "2023-11-09T20:26:52.995Z",
    "2023-11-13T16:47:06.218Z",
    "2023-11-13T03:53:06.322Z",
    "2023-11-11T10:22:35.553Z",
    "2023-11-10T02:42:01.734Z",
    "2023-11-10T00:55:54.519Z",
    "2023-11-12T14:35:29.303Z",
  ],
  currency: 'MXN',
  locale: 'es-MX',
};

// const accounts = [account1, account2, account3, account4];
const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const money of movements) {
//   if (money > 0) console.log(`${money} $ DEPOSITED!`);
//   else console.log(`${Math.abs(money)} $ WITHDRAWN!`);
// }

// movements.forEach(function (mov, i) {
//   if (mov > 0) console.log(`Mov ${i + 1} - ${mov} $ DEPOSITED!`);
//   else console.log(`Mov ${i + 1} - ${Math.abs(mov)} $ WITHDRAWN!`);
// });

// /////////////////////////////////////////////////

// currencies.forEach(function (val, key, map) {
//   console.log(`${key} - ${val}`);
// });

const formatMovementDate = (f_date, locale) => {
  const calDays = (date1, date2) => {
    return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  }

  const daysPassed = calDays(new Date(), f_date);
  // console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // return `${`${f_date.getDate()}`.padStart(2, '0')}/${`${f_date.getMonth() + 1}`.padStart(2, '0')}/${f_date.getFullYear()}`;
  // sdaadsadsadsadsadadsasdasd

  return new Intl.DateTimeFormat(locale).format(f_date);
  // sdaadsadsadsadsadadsasdasd

}

const formatCurrency = (locale, currency, value) => {

  const formattedMov = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);

  return formattedMov;
}

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? acc.movements.slice().sort((a, b) => { return a - b; }) : acc.movements;

  movs.forEach(function (mov, i) {
    const movType = mov > 0 ? "deposit" : "withdrawal";

    const displayMovDate = formatMovementDate(new Date(acc.movementsDates[i]), acc.locale);

    const formattedMov = formatCurrency(acc.locale, acc.currency, mov);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${movType}">${i + 1
      } ${movType}</div>
        <div class="movements__date">${displayMovDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => {
    return acc + mov;
  }, 0);

  const formattedBalance = formatCurrency(acc.locale, acc.currency, acc.balance);
  labelBalance.textContent = `${formattedBalance}`;
};

// calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter((mov) => {
      return mov > 0;
    })
    .reduce((acc, mov) => {
      return acc + mov;
    }, 0);

  const outgoing = acc.movements
    .filter((mov) => {
      return mov < 0;
    })
    .reduce((acc, mov) => {
      return acc + mov;
    });

  const interest = acc.movements
    .filter((mov) => {
      return mov > 0;
    })
    .map((deposit) => {
      return (deposit * acc.interestRate) / 100;
    })
    .filter((interest) => {
      return interest >= 1;
    })
    .reduce((acc, interest) => {
      return acc + interest;
    }, 0);

  labelSumIn.textContent = formatCurrency(acc.locale, acc.currency, income);
  labelSumOut.textContent = formatCurrency(acc.locale, acc.currency, Math.abs(outgoing));
  labelSumInterest.textContent = formatCurrency(acc.locale, acc.currency, interest);
};

// calcDisplaySummary(account1.movements);

const movMax = account1.movements.reduce((acc, mov) => {
  return mov > acc ? mov : acc;
}, account1.movements[0]);
// console.log(`Max transaction is ${movMax}`);

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => {
        return name[0];
      })
      .join("");
  });
};


createUsername(accounts);

const updateUI = function (acc) {
  displayMovements(acc);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};


const startLogoutTimer = function () {

  let time = 100;

  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }

    time--;
  }

  tick();
  const timer = setInterval(tick, 1000);

  return timer;
}


let currentAccount, timer;


// Loginnnn
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;


btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  // ? => optionalChaining
  if (currentAccount?.pin === (+inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]
      } `;

    containerApp.style.opacity = 100;

    // Creating current Date

    const now = new Date();

    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      // weekday: "numeric"
    }
    // const locale = navigator.language;
    // console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);
    // const now = new Date();
    // const currentDate = `${`${now.getDate()}`.padStart(2, '0')}/${`${now.getMonth() + 1}`.padStart(2, '0')}/${now.getFullYear()}, ${`${now.getHours()}`.padStart(2, '0')}:${`${now.getMinutes()}`.padStart(2, '0')} `;
    // labelDate.textContent = currentDate;

    inputLoginUsername.value = inputLoginPin.value = "";

    // helps to loose focus of the field(eg->cursor)
    inputLoginPin.blur();

    if (timer) { clearInterval(timer); }

    timer = startLogoutTimer();
    updateUI(currentAccount);
  }
});
// console.log(accounts);

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = (+inputTransferAmount.value);

  const reciverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  // console.log(amount, reciverAcc);
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    reciverAcc &&
    currentAccount.balance >= amount &&
    reciverAcc.username !== currentAccount.username
  ) {
    setTimeout(() => {
      // Transfer 
      currentAccount.movements.push(-amount);
      reciverAcc.movements.push(amount);

      // Adding Transfer Date
      currentAccount.movementsDates.push(new Date().toISOString());
      reciverAcc.movementsDates.push(new Date().toISOString());

      // console.log(amount);
      // console.log("Transfered To -- ", reciverAcc.owner);
      // console.log("By - ", currentAccount.owner);

      updateUI(currentAccount);
    }, 100)
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1) // account should atleast have 10% of the total loan amount
  ) {

    setTimeout(() => {
      currentAccount.movements.push(amount);
      // Adding Loan Date
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
    }, 100)
    clearInterval(timer);
    timer = startLogoutTimer();
  }
  inputLoanAmount.value = "";
});





btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  const deleteUsername = inputCloseUsername.value;
  const deleteUserPin = (+inputClosePin.value);

  inputCloseUsername.value = inputClosePin.value = "";

  if (
    currentAccount.username === deleteUsername &&
    currentAccount.pin === deleteUserPin
  ) {
    const accIndex = accounts.findIndex(
      (acc) => acc.username === deleteUsername
    );
    console.log("\n\n\n");
    console.log(accIndex);
    console.log(accounts[accIndex]);
    console.log("Account Deleted!");
    accounts.splice(accIndex, 1);

    containerApp.style.opacity = 0;
  }
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
  btnSort.blur();
});
const deposits = account1.movements.filter(function (mov) {
  return mov > 0;
});

const withdrawls = account1.movements.filter(function (mov) {
  return mov < 0;
});
// console.log(deposits);
// console.log(withdrawls);

const balance = account1.movements.reduce((acc, cur) => {
  return acc + cur;
}, 0);

// console.log(balance);

///////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const JuliaDogs = [3, 5, 2, 12, 7];
// const KateDogs = [4, 1, 15, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const julDogs = dogsJulia;

//   // julDogs.pop();
//   julDogs.splice(0, 1);
//   julDogs.splice(-2);
//   // julDogs.shift();

//   const onlyDogs = [...julDogs, ...dogsKate];

//   // "Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")

//   onlyDogs.forEach(function (age, i) {
//     if (age > 2)
//       console.log(`Dog number ${ i + 1 } is an adult, and is ${ age } years old.`);
//     else console.log(`Dog number ${ i + 1 } is still a puppy 🐶`);
//   });
// };

// checkDogs(JuliaDogs, KateDogs);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
/*
const eurToUsd = 1.1;

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsUSD = movements.map((mov) => {
  return mov * eurToUsd;
});

console.log(movementsUSD);

const movementsPrinter = movements.map((mov, i) => {
  return `Movement ${ i + 1 } : You ${
  mov > 0 ? "deposited" : "withdrew"
} ${ Math.abs(mov) } `;
});

console.log(movementsPrinter);

*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(function (age) {
    if (age <= 2) return age * 2;
    else return age * 4 + 16;
  });

  const adultDogs = humanAge.filter((age) => {
    return age >= 18;
  });

  // const average =
  //   adultDogs.reduce((acc, age) => {
  //     return acc + age;
  //   }, 0) / adultDogs.length;

  const average = adultDogs.reduce((acc, age, i, arr) => {
    return acc + age / arr.length;
  }, 0);

  // console.log(humanAge);
  // console.log(adultDogs);
  // console.log(average);

  return average;
};

console.log(`Average is ${ calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]) } `);
console.log(`Average is ${ calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]) } `);

const chainedCalcAverageHumanAge = function (ages) {
  const humanAge = ages
    .map(function (age) {
      return age <= 2 ? age * 2 : age * 4 + 16;
    })
    .filter((age) => {
      return age >= 18;
    })
    .reduce((acc, age, i, arr) => {
      return acc + age / arr.length;
    }, 0);

  // const average =
  //   adultDogs.reduce((acc, age) => {
  //     return acc + age;
  //   }, 0) / adultDogs.length;

  // console.log(humanAge);
  // console.log(adultDogs);
  // console.log(average);

  return humanAge;
};

console.log(`\nAfter chaining the all the functions.`);
console.log(`Average is ${ chainedCalcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]) } `);
console.log(
  `Average is ${ chainedCalcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]) } `
);



*/




const account11 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account22 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

// console.log(3 === 3.0);
// console.log(.1 + .2);

// (max - min) is used to find the range between min and max 
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;


// console.log(randomInt(55, 60));


labelBalance.addEventListener("click", function () {

  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {

    if (i % 2 === 0) row.style.backgroundColor = "orangered";

    if (i % 3 === 0) row.style.backgroundColor = "blue";

  });
});

const date = new Date();
// console.log(date);

// console.log(new Date(account1.movementsDates[0]));

const future = new Date(2025, 0, 12, 1, 22);
// console.log(future.getFullYear());

// console.log(5676586586567456456436475876867434n);
// console.log(BigInt(5676586586567456456436475876867434));



// const day1 = calDays(new Date("2003"), new Date());

// console.log(Math.round(day1));


