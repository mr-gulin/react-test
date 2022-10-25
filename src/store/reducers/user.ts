import { PayloadAction, User } from '~/store/interfaces/user';
import { USER_EMAIL, USER_TOKEN } from '~/store/constants/actions';

const initialState: User = {
    email: '',
    token: '',
};

export const userReducer = function (state: User = initialState, action: PayloadAction) {
    switch (action.type) {
        case USER_TOKEN:
            return (state.token = action.payload);
        case USER_EMAIL:
            return (state.email = action.payload);
        default:
            return state;
    }
};
