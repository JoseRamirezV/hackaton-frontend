export const saveLocalToLS = (token) => {
   window.localStorage.setItem('token', token);
};

export const getToken = () => {
   return window.localStorage.getItem('token');
};
