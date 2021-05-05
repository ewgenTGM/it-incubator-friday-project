import React, {ChangeEvent, useState} from 'react';
import styles from "./Register.module.css"
import {useDispatch} from "react-redux";
import {registerTC} from "../../store/registration-reducer";

export const Register:React.VFC = () => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const onSubmit = () => {
       dispatch(registerTC(email, password))
    }
    return (
        <div className={styles.registerPage}>
            <div className={styles.registerContainer}>
                <div className={styles.registerForm}>
                    <input value={email} type="email" name="email" onChange={changeEmail}/>
                    <input value={password} type="password" onChange={changePassword}/>
                    <button onClick={onSubmit}>Register</button>
                </div>
            </div>
        </div>
    );
};
