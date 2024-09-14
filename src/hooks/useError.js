import { useState } from 'react';

export const useError = () => {
    const [error, setError] = useState('');

    const clearError = () => {
        setError('');
    };

    return {error, setError, clearError};
};