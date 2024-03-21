import { FC } from "react";
import { Input } from "../input/Input";
import LangIcon from 'icons/lang.svg?react'

import style from './Language.module.scss'

export const Language:FC = () => {
    return(
        <div className={style.language}>
        <LangIcon />
            <form>
                <Input id = "ru" label = "Рус" value="ru" type = "radio" name = "language" checked={true} />
                <Input id = "eng" label = "Eng" value="eng" type = "radio" name = "language" />
            </form>
        </div>
    )
}