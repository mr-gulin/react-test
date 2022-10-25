import { FormEvent } from 'react';
import { InputProps } from '~/interfaces/forms';

const Input = ({ onChange, value, type, placeholder, labelText, name }: InputProps) => {
    const onInput = (event: FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        onChange({
            value: target.value,
            name: name,
        });
    };

    return (
        <>
            <label>
                <span>{labelText}</span>
                <input
                    value={value}
                    onInput={onInput}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                />
            </label>
        </>
    );
};

export default Input;
