import React, {ChangeEvent, useState} from 'react';
import {Redirect, useParams} from 'react-router-dom';
import styles from './PassChange.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changePassTC, PassChangeInitialStateType} from "../../store/passChange-reducer";
import {AppStateType} from "../../store/store";
import {confirmPassword, passwordValidator} from "../../utils/validators/password-validator";
import {emailValidator} from "../../utils/validators/email-validator";

type PropsType = {};

export const PassChange: React.FC<PropsType> = props => {

    const [newPassword, setNewPassword] = useState('')
    const [newPassword2, setConfirmPassword] = useState('')

    const statePassReducer = useSelector<AppStateType, PassChangeInitialStateType>(state => state.passChange)

    const dispatch = useDispatch()
    const {token} = useParams<{ token: string }>();
    const changePass = () => {
        dispatch(changePassTC(newPassword, token))
    }

    const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.currentTarget.value)
    }
    const changeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.currentTarget.value)
    }

    if (statePassReducer.isChangedPass) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={styles.passChange}>
            <div className={styles.passChangeContainer}>
                {!statePassReducer.loading ? <div className={styles.passChangeForm}>
                        <span>Смена пароля</span>
                        Введите новый пароль<input type="password" value={newPassword} onChange={changePassword}/>
                        Подтвердите новый пароль<input type="password" value={newPassword2}
                                                       onChange={changeConfirmPassword}/>
                        <button disabled={!passwordValidator(newPassword) || !confirmPassword(newPassword, newPassword2)}
                                onClick={changePass}>Отправить
                        </button>
                        {!passwordValidator(newPassword) &&
                        <span style={{color: "red"}}>Пароль должен содержать более 6 символов</span>}
                        {!confirmPassword(newPassword, newPassword2) &&
                        <span style={{color: "red"}}>Пароли не совпадают</span>}
                    </div>
                    :
                    <span>Ждите отстоя пива...</span>
                }
            </div>
        </div>
    );
};