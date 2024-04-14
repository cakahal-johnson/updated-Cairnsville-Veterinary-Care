///* This website template was created by Kingsley Ozioko */

// JavaScript function to toggle the mobile navbar
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navbar_mobile');
let bod = document.querySelector('.container');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');

});

// validation for Appointment form

function validateForm_btn() {
  var appointment = document.forms["myForm"]["appointment"].value;
  var pet = document.forms["myForm"]["pet"].value;
  var date = document.forms["myForm"]["date"].value;
  
  if (appointment == "") {
      alert("Please select an appointment type.");
      return false;
  }
  if (pet == "") {
      alert("Please select a pet type.");
      return false;
  }
  if (date == "") {
      alert("Please select a date for the appointment.");
      return false;
  }
  return true;
}

// validation for contact form
function validateForm() {
  var name = document.forms["myForm_contact"]["name"].value;
  var email = document.forms["myForm_contact"]["email"].value;
  var phoneNumber = document.forms["myForm_contact"]["phone"].value;
  var appointmentDate = document.forms["myForm_contact"]["Appointment request"].value;
  var schedule = document.querySelector('input[name="schedule"]:checked');
  var confirmationEmail = document.forms["myForm_contact"]["confirmation"].checked;
  var confirmationPhoneCall = document.forms["myForm_contact"]["confirmation2"].checked;
  var agreement = document.querySelector('input[type="checkbox"]:checked');
  
  if (name == "") {
      alert("Please enter your name.");
      return false;
  }
  if (phoneNumber == "") {
      alert("Please enter your phone number.");
      return false;
  }
  if (email == "") {
      alert("Please enter your email address.");
      return false;
  }
  if (appointmentDate == "") {
      alert("Please select a date for the appointment.");
      return false;
  }
  if (!schedule) {
      alert("Please select a schedule (Morning or Afternoon).");
      return false;
  }
  if (!confirmationEmail && !confirmationPhoneCall) {
      alert("Please select at least one confirmation method (Email or Phone Call).");
      return false;
  }
  if (!agreement) {
      alert("Please agree to the processing of your data.");
      return false;
  }
  return true;
}

