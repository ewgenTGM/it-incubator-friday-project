export const passwordValidator = (password: string) => {
  return password.length > 6;
};

export const matchPasswordValidator = (pwd1: string, pwd2: string) => {
  return pwd1 === pwd2;
};