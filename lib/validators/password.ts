export const passwordValidator = (password: string) => {
  const regexNumber = /\d/;

  if (password === "") {
    return { error: true, message: "O campo senha é obrigatório" };
  }
  if (password.length < 8) {
    return {
      error: true,
      message: "Digite uma senha com o mínimo de 8 caracteres e 1 número",
    };
  }
  if (!regexNumber.test(password)) {
    return {
      error: true,
      message: "A senha precisa ter 1 número",
    };
  }

  return { error: false };
};
