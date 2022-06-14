export const TOKEN_KEY = "@montreal-Token";
export const user = "user";


export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUsuario = () =>localStorage.getItem(user);

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(user);
};

export const Usuario = token => {
  localStorage.setItem(user, token);
};
