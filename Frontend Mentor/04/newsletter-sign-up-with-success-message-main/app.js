let btn = document.querySelector('.submit-btn')
let emailField = document.querySelector('#email-field')
let errorMessage = document.getElementById("errorText")

function emailChack () {
  if(emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    btn.classList.add('active')
    emailField.classList.remove('invalid')
    errorMessage.innerHTML=""
  }
  else if (emailField.value !== "/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)")
  {
    emailField.classList.add('invalid')
    btn.classList.remove('active')
    errorMessage.innerHTML="Valid email required"
  }
  if(emailField == ""){
    emailField.classList.remove('invalid')
    errorMessage.innerHTML=""
  }
}