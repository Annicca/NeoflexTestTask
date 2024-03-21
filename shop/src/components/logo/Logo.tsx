import { FC } from "react";
import { Link } from "react-router-dom";

import style from './Logo.module.scss'

export const Logo:FC = () =>{
    return (
        <Link to={'/'} className={style.logo}>QPICK</Link>
    )
}