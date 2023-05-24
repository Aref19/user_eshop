import { useContext } from 'react';
import { userAuthContext } from '../context/AuthContext';
export const useContextHook = () => {
    return useContext(userAuthContext)  
}