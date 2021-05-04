import React from 'react';
import {Register} from "../components/register/Register";


type PropsType = {};

export const RegisterPage: React.FC<PropsType> = props => {
    return (
        <div>
            <h2>Register Page</h2>
            <Register/>
        </div>
    );
};