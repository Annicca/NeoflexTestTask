import { ChangeEvent, FC } from "react";
import { Input } from "../input/Input";
import LangIcon from 'icons/lang.svg?react'

import style from './Language.module.scss'

export const Language:FC = () => {
    const handleLanguage = (event: ChangeEvent<HTMLInputElement>) => {
        sessionStorage.setItem('language', event.target.value)
    }

    return(
        <div className={style.language}>
        <LangIcon />
            <form>
                <Input id = "ru" label = "Рус" value="ru" type = "radio" name = "language" checked={true} onChange={(event) => handleLanguage(event)} />
                <Input id = "eng" label = "Eng" value="eng" type = "radio" name = "language" onChange={(event) => handleLanguage(event)} />
            </form>
        </div>
    )
}