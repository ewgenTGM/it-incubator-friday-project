export const passwordValidator = (password: string) => {
    return password.length > 7
}

export const confirmPassword = (pwd1: string, pwd2: string) => {
    return pwd1 === pwd2
}