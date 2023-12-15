// Purpose: To handle the login and sign up functionality

const container = document.getElementById("container"),
  registerBtn = document.getElementById("register"),
  loginBtn = document.getElementById("login");
registerBtn.addEventListener("click", () => container.classList.add("active")),
  loginBtn.addEventListener("click", () =>
    container.classList.remove("active")
  );
const firebaseConfig = {
  apiKey: "AIzaSyCaMl_ov5iyxNkYeacyC0GdfQXrJelTpX4",
  authDomain: "rotaryclub-ec506.firebaseapp.com",
  databaseURL:
    "https://rotaryclub-ec506-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rotaryclub-ec506",
  storageBucket: "rotaryclub-ec506.appspot.com",
  messagingSenderId: "866218366230",
  appId: "1:866218366230:web:211be1d8b454a8e5c6ac37",
};
// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
let database = firebase.database();

let form = document.querySelector("#registration-form");

// submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonepattern = /^[0-9]+$/;

  let fname = document.getElementById("fname").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let gender = document.getElementById("gender").value;
  let dob = document.getElementById("dob").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let postal = document.getElementById("postal").value;
  let country = document.getElementById("country").value;

  if (emailPattern.test(email) && phonepattern.test(phone)) {
    console.log("Valid email and phone number:");
    let formData = {
      fname: fname,
      phone: phone,
      email: email,
      gender: gender,
      dob: dob,
      city: city,
      state: state,
      postal: postal,
      country: country,
    };
    let userData = JSON.parse(localStorage.getItem("userData")) || [];
    userData.push(formData);

    localStorage.setItem("userData", JSON.stringify(userData));

    database
      .ref("form-data")
      .push(formData)
      .then(function () {
        document.getElementById("registration-form").reset();
        console.log("Form data saved successfully");
        alert("Form data saved successfully");
      })
      .catch(function (error) {
        console.error("Error saving form data:", error);
      });
  } else {
    alert("Invalid input");
  }
});
