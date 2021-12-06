import parsePhoneNumber from 'libphonenumber-js';

const phoneValidator = {
  errorMessage: 'Not a valid uk number',
  isValid: (val) =>{
    const phoneNumber = parsePhoneNumber(val, 'GB')
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
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(str);
  }
}

export {
  phoneValidator,
  postCodeValidator,
  emailValidator
};
