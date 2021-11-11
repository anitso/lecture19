//task 1

const clock = document.querySelector(`.clock`);
let time = document.createElement(`div`);
time.className = `time`;
clock.appendChild(time);
const now = new Date();
let hours = now.getHours(),minutes = now.getMinutes(),seconds = now.getSeconds();
const tempTime = document.querySelector(`.time`);
tempTime.innerText = formatTime(hours,minutes,seconds);

setInterval(() => {
    const now = new Date();
    let hours = now.getHours(),minutes = now.getMinutes(),seconds = now.getSeconds();
    tempTime.innerText = formatTime(hours,minutes,seconds)  
}, 1000)

function formatTime(hours,minutes,seconds){
    let ampm = ``
    if(hours < 12 && hours > 0){ 
        ampm = `AM`
    }else{
        ampm = `PM`
    }
    if( hours >= 24) { 
        hours -= 24;
    }else if( hours > 12 ){ 
        hours -= 12;  }
    if(hours === 0){
        ampm = `AM`
     }
    return `${checkZeroes(hours)}:${checkZeroes(minutes)}:${checkZeroes(seconds)} ${ampm} `
}

function checkZeroes(unformatedTime){
    if (unformatedTime < 10) {
        unformatedTime = "0" + unformatedTime
    };
    return unformatedTime;
}

//task 2,3,4

// const slideArea = document.querySelector('.slide-area');
// const dots = document.querySelectorAll('.dots span');
// dots.forEach((dot) => {
//   dot.addEventListener('click', e => {
//     const index = e.target.getAttribute('data-index');
//     activeIndex = Number(index);
//     dots.forEach((dot) => {
//       dot.classList.remove('active');
//     });
//     e.target.classList.add('active');
//     renderSlider();
//   })
// });
//
// slideArea.addEventListener('mouseenter', e => {
//   // console.log('mouseenter')
//   stopAutoSliding()
// });
//
// slideArea.addEventListener('mouseleave', e => {
//   // console.log('mouseleave')
//   startAutoSliding();
// });


const formValidator = (form, fieldsConfig, onValidateSuccess, onValidationError) => {

    const validateField = (fieldElement, fieldConfig) => {
      const value = fieldElement.value;
      const rules = fieldConfig.rules;
      const formGroup = fieldElement.closest('.form-group');
      const errorElement = formGroup.querySelector('.form-error-message');
  
      const fieldValidationResult = {name: fieldConfig.name, value: value, errors: []};
      rules.forEach(rule => {
        if (rule.required && !value) {
          fieldValidationResult.errors.push(rule.message);
        }
        if (rule.maxLength && `${value}`.length > rule.maxLength) {
          fieldValidationResult.errors.push(rule.message);
        }
      });
  
      if(fieldValidationResult.errors.length > 0){
        errorElement.innerText = fieldValidationResult.errors.join('\n');
      } else {
        errorElement.innerText = '';
      }
      // console.log(fieldValidationResult);
  
      return fieldValidationResult;
    }
  
    const validateOnChange = () => {
      fieldsConfig.forEach((fieldConfig) => {
        const fieldElement = form.querySelector(`[name="${fieldConfig.name}"]`);
        fieldElement.addEventListener('input', e => {
          validateField(e.target, fieldConfig);
        });
      })
    }
  
    const validateOnSubmit = () => {
      const validatedFields = [];
      fieldsConfig.forEach((fieldConfig) => {
        const fieldElement = form.querySelector(`[name="${fieldConfig.name}"]`);
        validatedFields.push(validateField(fieldElement, fieldConfig));
      });
  
      return validatedFields;
    }
  
    const listenFormSubmit = () => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        console.log('submit');
        const errors = [];
        const validationResult = validateOnSubmit();
        validationResult.forEach(result => {
          errors.push(...result.errors);
        });
        if(errors.length === 0){
          onValidateSuccess(validationResult);
        }else {
          onValidationError(validationResult);
        }
        console.log(validationResult);
      });
    }
    listenFormSubmit();
    validateOnChange();
  }
  
  const fieldsConfig = [
    {
      name: 'first_name',
      rules: [
        {required: true, message: 'First name is required.'},
        {maxLength: 10, message: 'სიბოლოების რაოდენობა უნდა იყოს 10 ზე ნაკლები ან ტოლი'},
      ]
    },
    {
      name: 'last_name',
      rules: [
        {required: true, message: 'Last name is required.'},
      ]
    },
    {
      name: 'zip_code',
      rules: [
        {required: true, message: 'Zip Code name is required.'},
      ]
    }
  ];
  
  
  const form = document.querySelector('#user-registraion-form');
  
  const onFormSubmitSuccess = (fields) => {
    console.log('We can send data to server', fields);
  }
  const onFormSubmitError = (fields) => {
    console.log('Error', fields);
  }
  
  formValidator(form, fieldsConfig, onFormSubmitSuccess, onFormSubmitError);

  

function checkInputs() {
    const first_name= first_name.trim();
    const last_name= last_name.trim();

    if (first_name ==="") {
        setErrorfor(first_name, "last name");
    } else {
        setsuccesfor (first_name)
    }
    if (last_name="") {
        setErrorfpr(last_name, "last name");
    } else {
        setSuccessFor(last_name);
    }
    if (zipcode.value===""){
        setErrorFor(zipCode, "zip code");
    } else { 
        setSuccesFor(zipCode);
    }
    if (persnalNumber.value===11) {
        setSuccessFor (sersonalnumber, "Personal numeber");
    } else {
        setSuccessFor (personalnumber);
    }
    if (mobilenumber.value==""){
        setErrorFor(mobileNumber, "mobile number");
    } else {
        setSuccesFor (mobilenumber);
    }
    if (mobileNumber.value==9) {
        setSuccessFor (mobilenumber);
    } else (mobileNumber.value ==13) {
        let firstcharater = mobilenumber.value (1,9);
        if (character==="+"){
            setsuccessfor(mobilenumber);
        } else {
            seterrorfor (mobilenumber, "mobilenumber")
        }
    }