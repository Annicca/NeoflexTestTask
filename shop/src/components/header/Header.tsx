import { FC } from "react";
import classNames from 'classnames';
import LikesIcon from 'icons/likes.svg?react'
import BagIcon from 'icons/bag.svg?react'
import { IconWithCount } from "../iconWithCount/IconWithCount";
import { Logo } from "../logo/Logo";
import { Link } from "react-router-dom";

import style from './Header.module.scss'
import { useBagContext } from "src/context/context";

export const Header: FC = () => {

    const {count} = useBagContext()

    return (
        <header className={classNames(style.header, 'container')}>
            <Logo />
            <div className={style.list}>
                <Link to = '/'><IconWithCount icon = {<LikesIcon />} count={0}/></Link>
                <Link to = '/bag'><IconWithCount icon = {<BagIcon />} count={count}/></Link>
            </div>
        </header>
    )
}