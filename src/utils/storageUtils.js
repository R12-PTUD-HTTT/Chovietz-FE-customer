export const getToken = () => {
  const token = localStorage.getItem("token_dichothuez");

  if (token) {
    return JSON.parse(token);
  }
  return null;
};
