export interface InputOnChange {
    name: string;
    value: string;
}

export interface InputProps {
    onChange: (value: InputOnChange) => void;
    value: string;
    type: string;
    placeholder: string;
    labelText: string;
    name: string;
}
