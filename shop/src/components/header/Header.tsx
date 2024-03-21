import { FC } from "react";
import { Link } from "react-router-dom";
import classNames from 'classnames';
import LikesIcon from 'icons/likes.svg?react'
import BagIcon from 'icons/bag.svg?react'
import { IconWithCount } from "../iconWithCount/IconWithCount";

import style from './Header.module.scss'

export const Header: FC = () => {
    return(
        <header className={classNames(style.header, 'container')}>
            <Link to={'/'} className={style.logo}>QPICK</Link>
            <div className={style.list}>
                <IconWithCount icon = {<LikesIcon />} count={0}/>
                <IconWithCount icon = {<BagIcon />} count={0}/>
            </div>
        </header>
    )
}