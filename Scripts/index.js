document.querySelector("#UserForm").addEventListener("submit", handleForm);

const inputs = document.querySelectorAll("input");

function handleForm(e) {
  e.preventDefault();
  // console.log(e)

  let Email = document.getElementById("emailID").value;
  let CountryCode = document.getElementById("CountryCode").value;
  let MobileNo = document.getElementById("mobileNO").value;
  console.log(Email, CountryCode, MobileNo);

  const payload = {
    Email: Email,
    CountryCode: CountryCode,
    MobileNo: Number(MobileNo),
  };

  let isValid = true;

  // check if all input fields are filled
  inputs.forEach((input) => {
    if (!input.value) {
      alert("All input fields are mandatory to complete the survey.");
      isValid = false;
    }
  });

  // check email input field
  const email = document.querySelector("#emailID");
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    alert("You have entered an invalid email address.");
    isValid = false;
  }

  // return isValid;

  // check mobile number input field
  const mobileNumber = document.querySelector("#mobileNO");
  if (mobileNumber.value.length !== 10) {
    alert("You have entered an invalid mobile number.");
    isValid = false;
  } else if (isNaN(mobileNumber.value)) {
    alert("You have entered an invalid mobile number.");
    isValid = false;
  } else {
    localStorage.setItem("WebEngageData", JSON.stringify(payload));
    alert("Login Successfully");
    window.location.href = "./ThanksPage.html";
  }
}
