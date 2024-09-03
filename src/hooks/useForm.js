import { useState } from 'react';
import { useError } from './useError';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const {error, clearError } = useError();

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setValues(initialState);
  };

  return { values, handleChange, resetForm };
};