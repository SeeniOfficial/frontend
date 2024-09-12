import { useState } from 'react';
import { useError } from './useError';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const {error, setError, clearError } = useError();

  const handleChange = (event) => {
    const { name, value } = event.target;
    clearError()
    console.log(name, value);
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setValues(initialState);
    clearError();
  };

  return { values, handleChange, resetForm, error, setError, clearError };
};