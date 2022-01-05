import parsePhoneNumber from 'libphonenumber-js';

const phoneValidator = {
  errorMessage: 'Not a valid uk number',
  isValid: (val) =>{
    const phoneNumber = parsePhoneNumber(val, {
      defaultCountry: 'GB',
      extract: false
    })

    if (phoneNumber) {
      return phoneNumber.isValid()
    }
    return false
  }
}
const postCodeValidator = {
  errorMessage: 'Not a valid postcode',
  isValid: (postcode) =>{
    const str = postcode.toUpperCase();
    const regexp = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;
    return regexp.test(str);
  }
}
const emailValidator = {
  errorMessage: 'Not a valid email',
  isValid: (email) =>{
    const str = email.toLowerCase();
    const regexp = /^\w+([\.-]?\w+)*([\+\.-]?\w+)?@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regexp.test(str);
  }
}

const phoneOnKeyPress = (e) => {
  const charCode = e.which ? e.which : e.keyCode;

  if ((charCode < '0'.charCodeAt() || charCode > '9'.charCodeAt()) && charCode != '+'.charCodeAt()) {
    e.preventDefault();
  }
}

export {
  phoneValidator,
  postCodeValidator,
  emailValidator,
  phoneOnKeyPress
};
