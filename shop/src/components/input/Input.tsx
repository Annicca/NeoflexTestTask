import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string,
    label: string
}

export const Input: FC<InputProps> = ({id, label, ...inputprops}) => {
    return(
        <div>
            <input id={id} {...inputprops}  />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}