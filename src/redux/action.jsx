// Define actions
const SET_USERNAME = 'SET_USERNAME';
const SET_EMAIL = 'SET_EMAIL';
const SET_PASSWORD = 'SET_PASSWORD';


// Define action creators
export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});
export const setPassword = (Password) => {
  return {
    type: SET_PASSWORD,
    payload: Password,
  };
};

