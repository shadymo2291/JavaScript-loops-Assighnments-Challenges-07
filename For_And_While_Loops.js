document.writeln(`<hr>`);

let myAdmins = ["Ahmed", "Osman", "Sayed", "Magdy", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Sameh",
  "Ameer",
  "Omar",
  "Othman",
  "Ayman",
  "Samia",
  "Shady",
  "Shrif",
  "Omany",
  "Alex",
  "Maher",
  "Mark",
];

document.writeln(`<h2>We Have ${myAdmins.indexOf("Stop")} Admins</h2>`);
document.writeln(`<hr>`);

for (let i = 0; i < myAdmins.indexOf("Stop"); i++) {
  document.writeln(`<h3>The Admin For Team ${i + 1} Is ${myAdmins[i]}</h3>`);
  document.writeln(`<h4>Team Members:</h4>`);
  let mainCount = 0;
  for (let y = 0; y < myEmployees.length; y++) {
    if (myAdmins[i][0] === myEmployees[y][0]) {
      mainCount++;
      document.writeln(`<p>- ${mainCount} ${myEmployees[y]} </p>`);
    }
  }
  document.writeln(`<hr>`);
}

// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------

console.log(
  "%cFor_And_While_Loops|Assighnments",
  "color: #ff3377; font-size: 20px"
);
console.log("<----------------->");

console.log("%cAssighnment_1", "color: #aa00ff; font-size: 15px");
console.log("<----------------->");

let start_1 = 10;
let end_1 = 100;
let exclude_1 = 40;

for (let i_1 = start_1; i_1 <= end_1; i_1 += start_1) {
  if (i_1 === 40) continue;
  console.log(i_1);
}

console.log("%cAssighnment_2", "color: #aa00ff; font-size: 15px");
console.log("<----------------->");

let start_2 = 10;
let end_2 = 0;
let stop_2 = 3;

for (i_2 = start_2; i_2 <= start_2; i_2--) {
  if (i_2 < start_2) {
    console.log(`${end_2}${i_2}`);
  } else {
    console.log(`${i_2}`);
  }
  if (i_2 === stop_2) break;
}

console.log("%cAssighnment_3", "color: #aa00ff; font-size: 15px");
console.log("<----------------->");

let start_3 = 1;
let end_3 = 6;
let breaker_3 = 2;

for (i_3 = start_3; i_3 <= end_3; i_3++) {
  console.log(i_3);
  for (j_3 = breaker_3; j_3 <= breaker_3 * breaker_3; j_3 += breaker_3) {
    console.log(`-- ${j_3}`);
  }
}

console.log("%cAssighnment_4", "color: #aa00ff; font-size: 15px");
console.log("<----------------->");

let index_4 = 10;
let jump_4 = 2;
let i_4 = index_4;

for (;;) {
  if (i_4 <= index_4) {
    console.log(i_4);
  }
  if (i_4 === jump_4 * jump_4) break;
  i_4 = i_4 - jump_4;
}

console.log("%cAssighnment_5", "color: #aa00ff; font-size: 15px");
console.log("<----------------->");

let friends_5 = [
  "Ahmed",
  "Sayed",
  "Eman",
  "Mahmoud",
  "Ameer",
  "Osama",
  "Sameh",
];
let letter_5 = "a";
let counter5 = --letter_5.length;

for (let i_5 = --letter_5.length; i_5 < friends_5.length; i_5++) {
  if (friends_5[i_5][--letter_5.length] !== "A") {
    counter5++;
    console.log(`"${counter5} => ${friends_5[i_5]}`);
  }
}

console.log("%cAssighnment_6", "color: #aa00ff; font-size: 15px");
console.log("<----------------->");

let start6 = 0;
let swappedName6 = "elZerO";
let news = [];

for (i6 = 0; i6 < swappedName6.length; i6++) {
  if (swappedName6[i6] === swappedName6[i6].toLocaleLowerCase()) {
    news[i6] = swappedName6[i6].toLocaleUpperCase();
  } else {
    news[i6] = swappedName6[i6].toLocaleLowerCase();
  }
}

console.log(news.join(""));

console.log("%cAssighnment_7", "color: #aa00ff; font-size: 15px");
console.log("<----------------->");

let start7 = 0;
let mix7 = [1, 2, 3, "A", "B", "C", 4];

for (let i7 = ++start7; i7 < mix7.length; i7++) {
  if (typeof mix7[i7] === "number") {
    console.log(mix7[i7]);
  }
}
