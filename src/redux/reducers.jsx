// Define initial state
const initialState = {
  username: '',
  email: '',
  Password: ''
};

// Define actions
const SET_USERNAME = 'SET_USERNAME';
const SET_EMAIL = 'SET_EMAIL';
const SET_PASSWORD = 'SET_PASSWORD';
;

// Define the reducer
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_PASSWORD:
      return { ...state, Password: action.payload };

    default:
      return state;
  }
};

export default formReducer;