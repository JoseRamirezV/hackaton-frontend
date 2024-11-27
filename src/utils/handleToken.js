export const saveLocalToLS = (token, user) => {
  window.localStorage.setItem("token", token);
  window.localStorage.setItem("user", JSON.stringify(user));
};

export const getToken = () => {
  return window.localStorage.getItem("token");
};

export const getUser = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  return user
};
