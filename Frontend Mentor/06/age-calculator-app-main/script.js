//Input
const dayInp = document.getElementById('day')
const monthInp = document.getElementById('month')
const yearInp = document.getElementById('year')

//Output
const dayOtp = document.getElementById('DD')
const monthOtp = document.getElementById('MM')
const yearOtp = document.getElementById('YY')

//Form Element
const form = document.querySelector('form')

//Adding the submit eventlistener to form

form.addEventListener('submit', handleSubmit)

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31,28,31,30,31,30,31,31,30,31,30,31]

function validate () {
  const inputs = document.querySelectorAll('input')
  let validator = true

  inputs.forEach((i) => {
    const parent = i.parentElement
    if(!i.value){
      i.style.boderColor = "red";
      parent.querySelector('small').innerText = "This field is required.";
      validator = false;
    }
    else if (monthInp.value>12) {
      monthInp.style.borderColor = 'red'
      monthInp.parentElement.querySelector('small').innerText = "Must be a valid month."
      validator = false;
    } 
    else if (dayInp > 31) {
      dayInp.style.borderColor = 'red'
      dayInp.parentElement.querySelector('small').innerText = "Must be a valid day."
      validator = false;
    }
    else {
      i.style.borderColor = "black"
      parent.querySelector('small').innerText = ""
      validator = true;
    }
  })
  return validator
}

function handleSubmit(e) {
  e.preventDefault();
  if(validate()){
    if(dayInp.value > day){
      day=day+months[month-1]
      month = month-1;
    }
    if(monthInp.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day-dayInp.value
    const m = month-monthInp.value
    const y = year-yearInp.value

    dayOtp.innerHTML = d;
    monthOtp.innerHTML = m
    yearOtp.innerHTML = y
  }
}