import { FC } from "react";
import classNames from 'classnames';
import { Link } from "react-router-dom";
import { Language } from "../language/Language";
import { Logo } from "../logo/Logo";
import { footerList } from "src/utils/const";

import style from './Footer.module.scss'
import { Socials } from "../socials/Socials";





export const Footer: FC = () => {
    return(
        <footer className={classNames( style.footer, 'container')}>
            <Logo />
            <ul className={style.list}>
                {footerList.map((item) => 
                    <li key = {item.title}><Link to={item.link}>{item.title}</Link></li>
                )}
                <li>
                    <Language />
                </li>
            </ul>
            <Socials />
        </footer>
    )
}