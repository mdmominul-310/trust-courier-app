import { createContext } from "react";
import React from 'react';
import UseFirebase from "../UseFirebase";

export const AuthContext=createContext('context');

const AuthProvider = ({children}) => {
    const auth=UseFirebase();
    // console.log(auth)
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;