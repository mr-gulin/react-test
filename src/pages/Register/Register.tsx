import Input from '~/components/common/Input/Input';
import { useState } from 'react';
import { InputOnChange } from '~/interfaces/forms';

enum fieldNames {
    email = 'email',
    password = 'password',
    repeatPassword = 'repeatPassword',
}

const initialState = {
    [fieldNames.email]: '',
    [fieldNames.password]: '',
    [fieldNames.repeatPassword]: '',
};

const Register = () => {
    const [state, setState] = useState(initialState);

    const updateField = (event: InputOnChange) => {
        setState((prevState) => {
            return { ...prevState, [event.name]: event.value };
        });
    };

    const register = () => {
        console.log(state);
    };

    return (
        <>
            <Input
                onChange={updateField}
                value={state.email}
                type={'email'}
                name={fieldNames.email}
                placeholder={'Type email...'}
                labelText={'Email'}
            />
            <Input
                onChange={updateField}
                value={state.password}
                type={'password'}
                name={fieldNames.password}
                placeholder={'Type password...'}
                labelText={'Password'}
            />
            <Input
                onChange={updateField}
                value={state.repeatPassword}
                type={'password'}
                name={fieldNames.repeatPassword}
                placeholder={'Repeat password...'}
                labelText={'Repeat password'}
            />
            <button onClick={register}>Register</button>
        </>
    );
};

export default Register;
