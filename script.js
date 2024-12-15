// const password = "vasaraLapaiZali";

// const symbol = "#";
// if (password.includes(symbol)) {
//   if (password.length < 16) {
//     console.log("Slaptažodis per trumpas.");
//   } else if (password.length >= 21) {
//     console.log("Slaptažodis tinkamas.");
//   } else {
//     console.log(
//       "Slaptažodis yra tinkamas. Tačiau rekomenduojama, jog jis būtų bent 21 simbolio ilgumo."
//     );
//   }
// } else {
//   console.log("Slaptažodis privalo turėti grotažymes (#).");
// }

function checkPassword(password) {
  const symbol = "#";
  if (password.includes(symbol)) {
    if (password.length < 16) {
      console.log("Slaptažodis per trumpas.");
    } else if (password.length >= 21) {
      console.log("Slaptažodis tinkamas.");
    } else {
      console.log(
        "Slaptažodis yra tinkamas. Tačiau rekomenduojama, jog jis būtų bent 21 simbolio ilgumo."
      );
    }
  } else {
    console.log("Slaptažodis privalo turėti grotažymes (#).");
  }
}

checkPassword("vasaraLapaiZali");

//Amžius

// let age = prompt("Įveskite savo amžių");

// if (age <= 6 && age >= 0) {
//   alert("Į mokyklą neina.");
//   if (age == 6) {
//     alert("Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.");
//   }
// } else if (age >= 7 && age <= 10) {
//   alert("Eina į pradinę klasę.");
//   if ([10]) {
//     alert("Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.");
//   }
// } else if (age >= 11 && age <= 14) {
//   alert("Eina į pagrindinę.");
//   if (age !== 14) {
//     alert("Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.");
//   }
// } else if (age >= 15 && age <= 18) {
//   alert("Eina į gimnaziją.");
//   if (age !== 18) {
//     alert(
//       "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."
//     );
//   }
// } else if (age >= 19 && age <= 120) {
//   alert("Mokyklą baigė");
// } else if (age < 0) {
//   alert("Įvestas amžius yra per mažas.");
// } else if (age >= 120) {
//   alert("Įvestas amžius yra per didelis.");
// } else {
//   alert("Netinkamai nurodytas amžius, amžius privalo būti skaičius");
// }

// function checkAge() {
//   let age = prompt("Įveskite savo amžių");

//   age = Number(age);

//   if (isNaN(age)) {
//     alert("Netinkamai nurodytas amžius, amžius privalo būti skaičius");
//     return;
//   }

//   if (age < 0) {
//     alert("Įvestas amžius yra per mažas.");
//   } else if (age <= 6) {
//     alert("Į mokyklą neina.");
//     if (age == 6) {
//       alert("Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.");
//     }
//   } else if (age >= 7 && age <= 10) {
//     alert("Eina į pradinę klasę.");
//     if (age === 10) {
//       alert("Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.");
//     }
//   } else if (age >= 11 && age <= 14) {
//     alert("Eina į pagrindinę.");
//     if (age !== 14) {
//       alert("Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.");
//     }
//   } else if (age >= 15 && age <= 18) {
//     alert("Eina į gimnaziją.");
//     if (age !== 18) {
//       alert(
//         "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."
//       );
//     }
//   } else if (age >= 19 && age <= 120) {
//     alert("Mokyklą baigė");
//   } else if (age > 120) {
//     alert("Įvestas amžius yra per didelis.");
//   }
// }
// checkAge();

//Pirmas lygis
// let playerAnswer11 = 1;
// let playerAnswer12 = 1;

// let correctAnswer11 = 1;
// let correctAnswer12 = 1;

// if (correctAnswer11 === 1 && correctAnswer12 === 1) {
//   console.log("Patekai i kita lygi: abu atsakymai teisingi.");
// } else if (correctAnswer11 < correctAnswer12) {
//   console.log(
//     " Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas."
//   );
// } else if (correctAnswer11 > correctAnswer12) {
//   console.log(
//     "Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas."
//   );
// } else if (correctAnswer11 === 0 && correctAnswer12 === 0) {
//   console.log("Nepatekai i kita lygi: abu atsakymai buvo neteisingi.");
// }

// //Antras lygis
// let playerAnswer21 = 1;
// let playerAnswer22 = 1;

// let correctAnswer21 = 1;
// let correctAnswer22 = 1;

// if (correctAnswer21 === 1 && correctAnswer22 === 1) {
//   console.log("Patekai i kita lygi: abu atsakymai teisingi.");
// } else if (correctAnswer21 < correctAnswer22) {
//   console.log(
//     " Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas."
//   );
// } else if (correctAnswer21 > correctAnswer22) {
//   console.log(
//     "Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas."
//   );
// } else if (correctAnswer21 === 0 && correctAnswer22 === 0) {
//   console.log("Nepatekai i kita lygi: abu atsakymai buvo neteisingi.");
// }

// //Trečias lygis
// let playerAnswer31 = 0;
// let playerAnswer32 = 1;
// let playerAnswer33 = 1;

// let correctAnswer31 = 1;
// let correctAnswer32 = 0;
// let correctAnswer33 = 0;

// if (correctAnswer31 === 1 && correctAnswer32 === 1 && correctAnswer33 === 1) {
//   console.log("Patekai į kitą lygį, visi atsakymai buvo teisingi.");
// } else if (
//   correctAnswer31 === 1 &&
//   correctAnswer32 === 1 &&
//   correctAnswer33 === 0
// ) {
//   console.log(
//     "Patekai į kitą lygį, tačiau į trečią klausimą atsakei neteisingai."
//   );
// } else if (
//   correctAnswer31 === 1 &&
//   correctAnswer32 === 0 &&
//   correctAnswer33 === 1
// ) {
//   console.log(
//     "Patekai į kitą lygį, tačiau į antrą klausimą atsakei neteisingai."
//   );
// } else if (
//   correctAnswer31 === 1 &&
//   correctAnswer32 === 0 &&
//   correctAnswer33 === 0
// ) {
//   console.log(
//     "Nepatekai į kitą lygį, nes atsakei tik į pirmą klausimą teisingai."
//   );
// } else if (
//   correctAnswer31 === 0 &&
//   correctAnswer32 === 1 &&
//   correctAnswer33 === 0
// ) {
//   console.log(
//     "Nepatekai į kitą lygį, nes atsakei tik į antrą klausimą teisingai."
//   );
// } else if (
//   correctAnswer31 === 0 &&
//   correctAnswer32 === 0 &&
//   correctAnswer33 === 1
// ) {
//   console.log(
//     "Nepatekai į kitą lygį, nes atsakei tik į trečią klausimą teisingai."
//   );
// } else if (
//   correctAnswer31 === 0 &&
//   correctAnswer32 === 0 &&
//   correctAnswer33 === 0
// ) {
//   console.log(
//     "Nepatekai į kitą lygį, nes neatsakei nei į vieną klausimą teisingai."
//   );
// }

// function checkLevelAnswers(playerAnswers, correctAnswers, level) {
//   let correctCount = 0;

//   for (let i = 0; i < playerAnswers.length; i++) {
//     if (playerAnswers[i] === correctAnswers[i]) {
//       correctCount++;
//     }
//   }

//   if (correctCount === playerAnswers.length) {
//     console.log(`Patekai į kitą lygį: visi atsakymai teisingi.`);
//   } else if (correctCount === playerAnswers.length - 1) {
//     let wrongAnswerIndex = playerAnswers.findIndex(
//       (answer, index) => answer !== correctAnswers[index]
//     );
//     console.log(
//       `Patekai į kitą lygį, tačiau į klausimą ${
//         wrongAnswerIndex + 1
//       } atsakei neteisingai.`
//     );
//   } else {
//     console.log(
//       `Nepatekai į kitą lygį, nes atsakei tik į ${correctCount} klausimus teisingai.`
//     );
//   }
// }

// // Pirmas lygis
// let playerAnswers1 = [1, 1];
// let correctAnswers1 = [1, 1];
// checkLevelAnswers(playerAnswers1, correctAnswers1, 1);

// // Antras lygis
// let playerAnswers2 = [1, 1];
// let correctAnswers2 = [1, 1];
// checkLevelAnswers(playerAnswers2, correctAnswers2, 2);

// // Trečias lygis
// let playerAnswers3 = [0, 1, 1];
// let correctAnswers3 = [1, 0, 0];
// checkLevelAnswers(playerAnswers3, correctAnswers3, 3);

//Pasisveikinimas

// let isLoggedIn = true;
// let userName = "";
// let time = 18;
// let isBirthday = true;

// if (time >= 5 && time < 13) {
//   if (isLoggedIn) {
//     if (isBirthday) {
//       console.log(`Good Morning ${userName}, and have a great birthday!`);
//     } else {
//       console.log(`Good Morning ${userName}`);
//     }
//   } else {
//     console.log("Good Morning");
//   }
// } else if (time >= 13 && time < 19) {
//   if (isLoggedIn) {
//     if (isBirthday) {
//       console.log(`Good Afternoon ${userName}, and have a great birthday!`);
//     } else {
//       console.log(`Good Afternoon ${userName}`);
//     }
//   } else {
//     console.log("Good Afternoon");
//   }
// } else if (time >= 19 || time <= 4) {
//   if (isLoggedIn) {
//     if (isBirthday) {
//       console.log(`Good Evening ${userName}, and have a great birthday!`);
//     } else {
//       console.log(`Good Evening ${userName}`);
//     }
//   } else {
//     console.log("Good Evening");
//   }
// }

function greetUser(isLoggedIn, userName, time, isBirthday) {
  let greeting = "";

  if (time >= 5 && time < 13) {
    greeting = "Good Morning";
  } else if (time >= 13 && time < 19) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  if (isLoggedIn) {
    if (isBirthday) {
      console.log(`${greeting} ${userName}, and have a great birthday!`);
    } else {
      console.log(`${greeting} ${userName}`);
    }
  } else {
    console.log(greeting);
  }
}

let isLoggedIn = true;
let userName = "John";
let time = 18;
let isBirthday = true;

greetUser(isLoggedIn, "Jonas", 15);

//Ciklas:
// console.groupCollapsed("Padaugina iš 2");
// console.log("Padaugina skaičių iš 2:");
// for (let i = 1; i <= 100; i++) {
//   console.log(`${i} * 2 = ${i * 2}`);
// }
// console.groupEnd();

// console.groupCollapsed("Padaugina skaičių iš 5");
// console.log("Padaugina skaičių iš 5:");
// for (let i = 1; i <= 100; i++) {
//   console.log(`${i} * 5 = ${i * 5}`);
// }
// console.groupEnd();

// console.groupCollapsed("Prideda prie skaičiaus 5");
// console.log("Prideda prie skaičiaus 5:");
// for (let i = 1; i <= 100; i++) {
//   console.log(`${i} + 5 = ${i + 5}`);
// }
// console.groupEnd();

// console.groupCollapsed("Atima iš skaičiaus 2");
// console.log("Atima iš skaičiaus 2:");
// for (let i = 1; i <= 100; i++) {
//   console.log(`${i} - 2 = ${i - 2}`);
// }
// console.groupEnd();

// console.groupCollapsed("Pakelia skaičių kvadratu");
// console.log("Pakelia skaičių kvadratu:");
// for (let i = 1; i <= 100; i++) {
//   console.log(`${i}^2 = ${i * i}`);
// }
// console.groupEnd();

// console.groupCollapsed("Pakelia skaičių kūbu.");
// console.log("Pakelia skaičių kūbu:");
// for (let i = 1; i <= 100; i++) {
//   console.log(`${i}^3 = ${i * i * i}`);
// }
// console.groupEnd();
