import { useState } from 'react';
import { useAuthStore } from '../store/authStore';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
 const {clearError} = useAuthStore()

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
  };

  return { values, handleChange, resetForm };
};