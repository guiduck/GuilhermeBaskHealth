export const emailValidator = (email: string) => {
  const rgx = /@/;

  if (email.toLowerCase() === "") {
    return { error: true, message: "O campo e-mail é obrigatório" };
  }

  if (!rgx.test(String(email).toLowerCase())) {
    return { error: true, message: "Preencha com um e-mail válido" };
  }

  return { error: false };
};
