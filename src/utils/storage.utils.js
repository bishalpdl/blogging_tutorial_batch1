export const setUserLogin = ({ token }) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const isUserLogin = () => {
  const token = getToken();
  if (token) {
    return true;
  }
  return false;
};

export const resetUserLogin = () => {
  localStorage.clear();
  return;
};
