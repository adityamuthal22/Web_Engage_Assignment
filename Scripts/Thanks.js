let ThanksData = JSON.parse(localStorage.getItem("WebEngageData"));

console.log("data:-", ThanksData);

let Box1 = document.createElement("div");

let Email = document.createElement("h3");
Email.innerText = "Email Address :- " + ThanksData.Email;

let Box2 = document.createElement("div");
Box2.innerText = "Contact Number :- ";
Box2.setAttribute("class", "Box2");

let CountryCode = document.createElement("h4");
CountryCode.innerText = ThanksData.CountryCode;

let MobileNo = document.createElement("h4");
MobileNo.innerText = "- " + ThanksData.MobileNo;
Box2.append(CountryCode, MobileNo);
Box1.append(Email, Box2);

document.querySelector("#container2").append(Box1);
