import React, {useState} from 'react';
import {signup} from '../actions'
/* eslint-disable */


const useSignUpForm = (queryEmail, accountType) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState('');

  const handleSubmit = (event) => {
    if (event) {
      let formData = Object.assign(inputs, {account_type : accountType})
      event.preventDefault();
      signup(formData)
      setErrors(signup(formData))
    }
  }
  const handleInputChange = (event) => {
    event.persist();
      
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
      handleSubmit,
      handleInputChange,
      inputs,
      errors
    };
  }

  export default useSignUpForm;