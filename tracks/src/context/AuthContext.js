import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import tracker from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({email, password}) => {
        // make api request to sign up with that email and password
        try {
            const response = await trackerAPI.post('/signup', {email, password});
            console.log(response.data)
        } catch (err) {
            console.log(err.response.data);
        }

        // if we sign up, modify our state and say taht we are authenticated


        // if signing up fails, reflect an error message somewhere


    };
};

const signin = (dispatch) => {
    return ({email, password}) => {
        // try to signin


        // handle success by updating state


        // handle failure by showing error message

    };
};


const signout = (dispatch) => {
    return () => {
        // try to signout


    };
};


export const { Provider, Context} = createDataContext(
    authReducer,
    {signin, signup, signout},
    { isSignedIn: false }
);




