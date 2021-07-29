/* 
   Gateway Brewery style sheet 
   Filename: form.js

   Author:   Emiley Weese & Daniel Ritter
   Date:     July 27, 2021
   Supporting Files: none
 */

/* create variables */
var fromValue = document.querySelector(".feedback-from");
var feedbackValue = document.querySelector(".feedback-content");
var nameField = document.querySelector("#fnameinput");
var nameField = document.querySelector("#lnameinput");
var feedbackField = document.querySelector("#other-info");
var form = document.querySelector(".contact-form");
var feedbackPreview = document.querySelector(".feedback-preview");
var submitButton = document.querySelector(".submitbutton");

/* add text to preview section */
function completePreview() {
   fromValue.textContent = nameField.value;
   feedbackValue.textContent = feedbackField.value;
   feedbackPreview.className = "feedback-preview show";
   if (form.checkValidity() === true) {
      submitButton.className = "submitbutton show";
   }
}
/*
completePreview();
*/

/* create event listner for changes to form */
form.addEventListener("change", completePreview, false);