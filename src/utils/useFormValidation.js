import React from 'react';

function useFormValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});

  function onChange(evt) {
    const value = evt.target.value;
    const name = evt.target.name;
    const error = evt.target.validationMessage;

    setValues((values) => ({ ...values, [name]: value }));
    setErrors((errors) => ({ ...errors, [name]: error }));
  }

  function resetForm(values = {}, errors = {}) {
    setValues(values);
    setErrors(errors);
  }
  return { values, errors, onChange, resetForm };
}

export default useFormValidation;
